// scripts/ingest-portfolio.mjs
// Walks Website/Portfolio/*, parses each project's .txt info file, optimizes
// photos to WebP, and emits data/projects.generated.ts.
//
// Usage:
//   node scripts/ingest-portfolio.mjs            # skip unchanged images
//   node scripts/ingest-portfolio.mjs --force    # rebuild all images
//
// Re-runnable: editing a .txt from blank to filled flips a project from
// "coming-soon" to "live" on the next run.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const SOURCE_DIR = path.join(ROOT, 'Website', 'Portfolio')
const OUT_IMAGES_ROOT = path.join(ROOT, 'public', 'assets', 'images', 'projects')
const OUT_VIDEOS_ROOT = path.join(ROOT, 'public', 'assets', 'videos', 'projects')
const OUT_TS = path.join(ROOT, 'data', 'projects.generated.ts')

const MAX_GALLERY = 30
const TARGET_WIDTH = 1920
const THUMB_WIDTH = 800
const MAIN_QUALITY = 78
const THUMB_QUALITY = 72

const FORCE = process.argv.includes('--force')

const FOLDER_OVERRIDES = {
  'Chesterfield Hill': { title: 'Chesterfield Hill', slug: 'chesterfield-hill' },
  '30 Littleton': { title: 'Littleton', slug: 'littleton' },
  'Hareford House': { title: 'Hareford House', slug: 'hareford-house' },
  'Naught one London': { title: 'Naught One London', slug: 'naught-one-london' },
  'Miller knoll': { title: 'Miller Knoll', slug: 'miller-knoll' },
  'Seasons Of India': { title: 'Seasons of India', slug: 'seasons-of-india' },
  'Burlington - Comming Soon': { title: 'Burlington', slug: 'burlington' },
  'Corinthian Court': { title: 'Corinthian Court', slug: 'corinthian-court' },
  'Oak Lodge': { title: 'Oak Lodge', slug: 'oak-lodge' },
  'Goldwin': { title: 'Goldwin London', slug: 'goldwin-london' },
}

const CATEGORY_CANONICAL = {
  residential: 'Residential',
  'mdu (multi-dwelling unit)': 'Multi Dwelling Unit',
  mdu: 'Multi Dwelling Unit',
  'multi-dwelling unit': 'Multi Dwelling Unit',
  'multi dwelling unit': 'Multi Dwelling Unit',
  commercial: 'Commercial',
  retail: 'Retail',
  hospitality: 'Hospitality',
}

const TAG_CANONICAL = {
  'smart home': 'Smart Home',
  electrical: 'Electrical',
  security: 'Security',
  'data & network infrastructure': 'Data & Network',
  'data & network': 'Data & Network',
  it: 'IT Support',
  'it support': 'IT Support',
}

const CTA_BY_CATEGORY = {
  Residential: 'Book a Home Survey',
  'Multi Dwelling Unit': 'Discuss a Multi-Dwelling Project',
  Commercial: 'Request Commercial Quote',
  Retail: 'Discuss a Retail Project',
  Hospitality: 'Discuss a Hospitality Project',
}

const DEFAULT_CTA = 'Start a Conversation'

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.avif', '.webp'])
const VIDEO_EXT = new Set(['.mp4', '.mov'])
const SKIP_FILES = new Set(['logo_trans.png'])

// ----------------------------------------------------------------------------
// helpers

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-')
}

function normCategory(raw) {
  return CATEGORY_CANONICAL[raw.trim().toLowerCase()] || null
}

function normTag(raw) {
  return TAG_CANONICAL[raw.trim().toLowerCase()] || null
}

// Parse a template .txt — returns { title, location, category, tags, frontPage, scope, systems, keyFeatures, isBlank }
function parseTxt(content) {
  const blank = !content || content.length < 300
  const out = {
    title: '',
    location: '',
    category: null,
    tags: [],
    frontPage: '',
    scope: [],
    systems: [],
    keyFeatures: [],
    isBlank: false,
  }
  if (blank) {
    out.isBlank = true
    return out
  }

  const sections = splitSections(content)
  out.title = (sections['job name'] || '').trim()
  out.location = (sections['location'] || '').trim()
  out.category = parseCategory(sections['project type'] || '')
  out.tags = parseTags(sections['tags'] || '')
  out.frontPage = (sections['front page writing'] || '').trim()
  out.scope = parseBullets(sections['scope of work'] || '')
  out.systems = parseBullets(sections['systems installed'] || '')
  out.keyFeatures = parseBullets(sections['key features'] || '')
  if (!out.frontPage) {
    out.isBlank = true
  }
  return out
}

// Split content by labeled section headings.
function splitSections(content) {
  const headings = [
    'job name',
    'location',
    'project type',
    'front page writing',
    'tags',
    'overview',
    'scope of work',
    'systems installed',
    'key features',
  ]
  const lines = content.split(/\r?\n/)
  const sections = {}
  let current = null
  let buf = []
  const flush = () => {
    if (current) sections[current] = buf.join('\n').trim()
    buf = []
  }
  for (const line of lines) {
    const lower = line.trim().toLowerCase().replace(/[:\t]+$/, '').replace(/^[:\t]+/, '')
    const match = headings.find((h) => lower === h || lower === `${h}:`)
    if (match) {
      flush()
      current = match
      continue
    }
    buf.push(line)
  }
  flush()
  return sections
}

function parseCategory(section) {
  for (const line of section.split(/\r?\n/)) {
    if (line.includes('☑')) {
      const raw = line.replace(/☑/g, '').trim()
      const c = normCategory(raw)
      if (c) return c
    }
  }
  return null
}

function parseTags(section) {
  const tags = []
  for (const line of section.split(/\r?\n/)) {
    if (line.includes('☑')) {
      const raw = line.replace(/☑/g, '').trim()
      const t = normTag(raw)
      if (t && !tags.includes(t)) tags.push(t)
    }
  }
  return tags
}

function parseBullets(section) {
  const bullets = []
  for (const line of section.split(/\r?\n/)) {
    const clean = line.replace(/^[\s\-•–*·\t]+/, '').trim()
    if (!clean) continue
    if (clean.length < 3) continue
    if (clean.endsWith(':')) continue
    bullets.push(clean)
  }
  return bullets
}

function pickTxtFile(folder) {
  const entries = fs.readdirSync(folder)
  const txts = entries.filter((e) => e.toLowerCase().endsWith('.txt'))
  if (txts.length === 0) return null
  const preferred =
    txts.find((t) => t.toLowerCase() === 'sample template.txt') ||
    txts.find((t) => t.toLowerCase().endsWith('.txt'))
  return path.join(folder, preferred)
}

function pickPhotos(folder) {
  const entries = fs.readdirSync(folder, { withFileTypes: true })
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => PHOTO_EXT.has(path.extname(n).toLowerCase()))
    .filter((n) => !SKIP_FILES.has(n.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  // Dedupe .jpg/.jpeg pairs with same basename (prefer .jpeg)
  const byBase = new Map()
  for (const f of files) {
    const base = path.basename(f, path.extname(f))
    const existing = byBase.get(base)
    if (!existing) {
      byBase.set(base, f)
      continue
    }
    const existingExt = path.extname(existing).toLowerCase()
    const currentExt = path.extname(f).toLowerCase()
    const pair = new Set([existingExt, currentExt])
    if (pair.has('.jpg') && pair.has('.jpeg')) {
      byBase.set(base, currentExt === '.jpeg' ? f : existing)
    }
  }
  return Array.from(byBase.values()).slice(0, MAX_GALLERY)
}

function pickVideos(folder) {
  const entries = fs.readdirSync(folder, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => VIDEO_EXT.has(path.extname(n).toLowerCase()))
    .sort()
}

async function optimizePhoto(inputPath, outputPath, width, quality) {
  if (fs.existsSync(outputPath) && !FORCE) return
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  await sharp(inputPath)
    .rotate()
    .resize(width, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath)
}

async function generateBlurDataURL(inputPath) {
  const buffer = await sharp(inputPath)
    .rotate()
    .resize(24, null, { fit: 'inside' })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer()
  return `data:image/webp;base64,${buffer.toString('base64')}`
}

function deriveTitle(folderName, parsedTitle, override) {
  if (override?.title) return override.title
  if (parsedTitle) {
    // Strip postal code / address tail after hyphen for the display title
    const clean = parsedTitle.split(/\s+[-–—]\s+/)[0].trim()
    return clean || parsedTitle.trim()
  }
  return folderName.split(/\s+[-–—]\s+/)[0].trim()
}

function deriveSlug(title, override) {
  if (override?.slug) return override.slug
  return slugify(title)
}

function sanitiseLocation(raw) {
  return raw.replace(/\s+/g, ' ').trim()
}

function asJsString(s) {
  return JSON.stringify(s)
}

function serialiseEntry(entry) {
  const lines = []
  lines.push('  {')
  lines.push(`    slug: ${asJsString(entry.slug)},`)
  lines.push(`    status: ${asJsString(entry.status)},`)
  lines.push(`    title: ${asJsString(entry.title)},`)
  lines.push(`    shortTitle: ${asJsString(entry.shortTitle)},`)
  lines.push(`    summary: ${asJsString(entry.summary)},`)
  lines.push(`    shortDescription: ${asJsString(entry.shortDescription)},`)
  lines.push(`    supportDescription: ${asJsString(entry.supportDescription)},`)
  lines.push(`    location: ${asJsString(entry.location)},`)
  lines.push(`    category: ${asJsString(entry.category)},`)
  lines.push(`    year: ${asJsString(entry.year)},`)
  lines.push(`    services: [${entry.services.map(asJsString).join(', ')}],`)
  lines.push(`    ctaCopy: ${asJsString(entry.ctaCopy)},`)
  lines.push(`    scopeOfWork: [${entry.scopeOfWork.map(asJsString).join(', ')}],`)
  lines.push(`    systemsInstalled: [${entry.systemsInstalled.map(asJsString).join(', ')}],`)
  lines.push(`    keyFeatures: [${entry.keyFeatures.map(asJsString).join(', ')}],`)
  lines.push(`    heroImage: ${serialiseImage(entry.heroImage)},`)
  lines.push(`    galleryImages: [`)
  for (const img of entry.galleryImages) {
    lines.push(`      ${serialiseImage(img)},`)
  }
  lines.push(`    ],`)
  if (entry.video) {
    lines.push(`    video: { src: ${asJsString(entry.video.src)} },`)
  }
  lines.push(`  },`)
  return lines.join('\n')
}

function serialiseImage(img) {
  const parts = [
    `src: ${asJsString(img.src)}`,
    `alt: ${asJsString(img.alt)}`,
  ]
  if (img.blurDataURL) parts.push(`blurDataURL: ${asJsString(img.blurDataURL)}`)
  return `{ ${parts.join(', ')} }`
}

// ----------------------------------------------------------------------------
// main

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source folder not found: ${SOURCE_DIR}`)
    process.exit(1)
  }

  fs.mkdirSync(OUT_IMAGES_ROOT, { recursive: true })
  fs.mkdirSync(OUT_VIDEOS_ROOT, { recursive: true })

  const folders = fs
    .readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()

  console.log(`Found ${folders.length} project folders in Website/Portfolio`)

  const warnings = []
  const entries = []

  for (const folder of folders) {
    const folderPath = path.join(SOURCE_DIR, folder)
    const override = FOLDER_OVERRIDES[folder]

    const txtPath = pickTxtFile(folderPath)
    const txtRaw = txtPath ? fs.readFileSync(txtPath, 'utf8') : ''
    const parsed = parseTxt(txtRaw)

    const title = deriveTitle(folder, parsed.title, override)
    const slug = deriveSlug(title, override)
    const category = parsed.category
    const location = sanitiseLocation(parsed.location || '')
    const services = parsed.tags
    const photos = pickPhotos(folderPath)
    const videos = pickVideos(folderPath)

    const isComingSoon = parsed.isBlank || !category || !parsed.frontPage
    const status = isComingSoon ? 'coming-soon' : 'live'

    // ------ Warn on known source-text issues ------
    if (folder === 'Chesterfield Hill' && parsed.title.toLowerCase().startsWith('chester square')) {
      warnings.push(`[${folder}] .txt has JOB NAME "Chester Square" — using folder name as ground truth.`)
    }
    if (folder === 'Aura Court - Hendon, NW9 7BN' && /wembley/i.test(parsed.frontPage)) {
      warnings.push(`[${folder}] front page copy says "Wembley" but location is Hendon — please review.`)
    }
    if (isComingSoon) {
      warnings.push(`[${folder}] → coming-soon (no filled info${!parsed.category ? '; no category' : ''})`)
    }

    // ------ Optimise photos & build SiteImage entries ------
    const slugImageDir = path.join(OUT_IMAGES_ROOT, slug)
    const galleryImages = []
    let heroImage = null

    for (let i = 0; i < photos.length; i++) {
      const src = path.join(folderPath, photos[i])
      const index = String(i + 1).padStart(2, '0')
      const outMain = path.join(slugImageDir, `${index}.webp`)
      const outThumb = path.join(slugImageDir, `${index}-thumb.webp`)
      try {
        await optimizePhoto(src, outMain, TARGET_WIDTH, MAIN_QUALITY)
        if (i === 0) {
          await optimizePhoto(src, outThumb, THUMB_WIDTH, THUMB_QUALITY)
        }
        const blur = i < 6 ? await generateBlurDataURL(src) : undefined
        const img = {
          src: `/assets/images/projects/${slug}/${index}.webp`,
          alt: `${title} — ${category || 'Concepto project'} photography`,
          blurDataURL: blur,
        }
        if (i === 0) heroImage = img
        else galleryImages.push(img)
      } catch (err) {
        warnings.push(`[${folder}] image ${photos[i]} failed: ${err.message}`)
      }
    }

    // Coming-soon projects keep all their photos so the detail page can still
    // show the gallery. Only the info-text sections are replaced with a
    // "Case Study Coming Soon" block.

    // ------ Videos ------
    let videoMeta = null
    if (videos.length > 0) {
      const slugVideoDir = path.join(OUT_VIDEOS_ROOT, slug)
      fs.mkdirSync(slugVideoDir, { recursive: true })
      const src = path.join(folderPath, videos[0])
      const outName = videos[0].replace(/\s+/g, '-').toLowerCase()
      const out = path.join(slugVideoDir, outName)
      if (!fs.existsSync(out) || FORCE) {
        fs.copyFileSync(src, out)
      }
      videoMeta = { src: `/assets/videos/projects/${slug}/${outName}` }
    }

    if (!heroImage) {
      // No photos at all — emit entry with a placeholder blurDataURL reference; the app
      // will render a solid-brand fallback via the coming-soon styling.
      heroImage = {
        src: '',
        alt: `${title} — photography coming soon`,
      }
    }

    // ------ Copy writing ------
    const frontPage = parsed.frontPage
    const shortDescription = isComingSoon
      ? `Coming soon — ${category || 'project'} installation in ${location || 'London'}.`
      : firstSentence(frontPage)
    const supportDescription = isComingSoon
      ? `Full case study for ${title} is coming soon. Photography and scope detail will be added here.`
      : frontPage
    const summary = isComingSoon
      ? `${title} — ${category || 'Concepto project'}${location ? `, ${location}` : ''}. Case study coming soon.`
      : frontPage

    const entry = {
      slug,
      status,
      title: title.toUpperCase(),
      shortTitle: title,
      summary,
      shortDescription,
      supportDescription,
      location: location || 'London',
      category: category || 'Residential',
      year: '',
      services,
      ctaCopy: CTA_BY_CATEGORY[category] || DEFAULT_CTA,
      scopeOfWork: parsed.scope,
      systemsInstalled: parsed.systems,
      keyFeatures: parsed.keyFeatures,
      heroImage,
      galleryImages,
      video: videoMeta,
    }

    entries.push(entry)
    console.log(`  ✓ ${folder} → ${slug} (${status}, ${photos.length} photos, ${videos.length} videos)`)
  }

  // ------ Emit generated TS ------
  const header = `// DO NOT EDIT — generated by scripts/ingest-portfolio.mjs
// Edit the source .txt files under Website/Portfolio/<project>/ and rerun
// \`npm run ingest:portfolio\` to regenerate.

import type { ProjectEntry } from './projects'

export const generatedProjects: ProjectEntry[] = [
`

  const body = entries.map(serialiseEntry).join('\n')
  const footer = '\n]\n'
  fs.writeFileSync(OUT_TS, header + body + footer, 'utf8')

  console.log(`\nWrote ${OUT_TS} (${entries.length} entries: ${entries.filter((e) => e.status === 'live').length} live, ${entries.filter((e) => e.status === 'coming-soon').length} coming-soon)`)

  if (warnings.length > 0) {
    console.log(`\n${warnings.length} warnings:`)
    for (const w of warnings) console.log(`  ! ${w}`)
  }
}

function firstSentence(text) {
  const m = text.match(/^(.+?[.!?])\s/)
  if (m) return m[1].trim()
  return text.trim()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
