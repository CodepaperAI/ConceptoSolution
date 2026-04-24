// scripts/ingest-site-photos.mjs
// Ingests site-chrome photos per the client DOCX mapping:
//   - Home Hero carousel → Website/Home_herosection/*
//   - Service-tile carousels (Electrical / Smart Home / Security / Data & Networks / IT Support)
//     → specific files in Website/Core service/  (plus Website/IT/ for IT Support)
//   - About hero → IMG_0140.jpeg
//
// Usage:
//   node scripts/ingest-site-photos.mjs            # skip already-converted
//   node scripts/ingest-site-photos.mjs --force    # re-convert all

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const OUT_IMG_ROOT = path.join(ROOT, 'public', 'assets', 'images', 'site')
const OUT_TS = path.join(ROOT, 'data', 'siteImages.generated.ts')

const TARGET_WIDTH = 1920
const QUALITY = 78
const FORCE = process.argv.includes('--force')

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp'])

// Mapping: slot-slug → { sourceDir, files: 'all' | string[], alt }
const MAPPING = {
  hero: {
    sourceDir: 'Website/Home_herosection',
    files: 'all',
    alt: 'Completed Concepto Solutions installation showcasing high-end interior lighting and electrical work.',
  },
  electrical: {
    sourceDir: 'Website/Core service',
    files: ['IMG_0140.jpeg', 'IMG_0344.JPG', 'IMG_001.jpg', 'IMG_9195.jpeg', 'IMG_5222.jpeg'],
    alt: 'Decorative lighting feature showing precision electrical installation detail.',
  },
  smartHome: {
    sourceDir: 'Website/Core service',
    files: ['IMG_0118.jpeg', 'IMG_2893.JPG', 'IMG_4192.jpeg', 'IMG_0101.jpg', 'IMG_1018.jpeg', 'IMG_2509.jpeg'],
    alt: 'Smart home living area with integrated lighting, audio, and control systems.',
  },
  security: {
    sourceDir: 'Website/Core service',
    files: ['IMG_0095.jpeg', 'IMG_3672.jpeg', 'IMG_7182.jpg', 'IMG_7600.jpg', 'IMG_0992.jpeg'],
    alt: 'Integrated building security and monitoring installation by Concepto Solutions.',
  },
  dataFibre: {
    sourceDir: 'Website/Core service',
    files: ['IMG_5299.jpeg', 'IMG_5335.jpeg', 'IMG_2513.jpeg'],
    alt: 'Structured data and network infrastructure install for a commercial space.',
  },
  itSupport: {
    sourceDir: 'Website/IT',
    files: 'all',
    alt: 'Concepto IT support and managed-services workspace installation.',
  },
  aboutHero: {
    sourceDir: 'Website/Core service',
    files: ['IMG_0140.jpeg'],
    alt: 'Interior feature lighting — Concepto Solutions About page hero.',
  },
}

// ----------------------------------------------------------------------------

function listPhotos(dir) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs)
    .filter((f) => PHOTO_EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}

function resolveFiles(entry) {
  if (entry.files === 'all') {
    return listPhotos(entry.sourceDir)
  }
  const abs = path.join(ROOT, entry.sourceDir)
  const resolved = []
  const missing = []
  for (const name of entry.files) {
    const full = path.join(abs, name)
    if (fs.existsSync(full)) {
      resolved.push(name)
    } else {
      missing.push(name)
    }
  }
  return { resolved, missing }
}

async function optimize(inputPath, outputPath) {
  if (fs.existsSync(outputPath) && !FORCE) return
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  await sharp(inputPath)
    .rotate()
    .resize(TARGET_WIDTH, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath)
}

async function blurDataURL(inputPath) {
  const buf = await sharp(inputPath)
    .rotate()
    .resize(24, null, { fit: 'inside' })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer()
  return `data:image/webp;base64,${buf.toString('base64')}`
}

function jsonStr(s) {
  return JSON.stringify(s)
}

// ----------------------------------------------------------------------------

async function main() {
  fs.mkdirSync(OUT_IMG_ROOT, { recursive: true })
  const slotsEmit = {}
  const warnings = []

  for (const [slot, entry] of Object.entries(MAPPING)) {
    const slotDir = path.join(OUT_IMG_ROOT, slot)
    fs.mkdirSync(slotDir, { recursive: true })

    let files
    let missing = []
    if (entry.files === 'all') {
      files = listPhotos(entry.sourceDir)
    } else {
      const r = resolveFiles(entry)
      files = r.resolved
      missing = r.missing
    }
    if (missing.length > 0) {
      warnings.push(`[${slot}] missing source files: ${missing.join(', ')}`)
    }
    if (files.length === 0) {
      warnings.push(`[${slot}] no source photos found in ${entry.sourceDir}`)
      slotsEmit[slot] = []
      continue
    }

    const emitted = []
    for (let i = 0; i < files.length; i++) {
      const src = path.join(ROOT, entry.sourceDir, files[i])
      const idx = String(i + 1).padStart(2, '0')
      const dst = path.join(slotDir, `${idx}.webp`)
      try {
        await optimize(src, dst)
        const blur = await blurDataURL(src)
        emitted.push({
          src: `/assets/images/site/${slot}/${idx}.webp`,
          alt: entry.alt,
          blurDataURL: blur,
        })
      } catch (err) {
        warnings.push(`[${slot}] ${files[i]}: ${err.message}`)
      }
    }
    slotsEmit[slot] = emitted
    console.log(`  ✓ ${slot}: ${emitted.length} photo(s)`)
  }

  // Emit generated TS
  const header = `// DO NOT EDIT — generated by scripts/ingest-site-photos.mjs
// Re-run \`pnpm ingest:site-photos\` after changing the photo mapping in that file.

import type { SiteImage } from './siteImages'

`
  let body = ''
  for (const [slot, arr] of Object.entries(slotsEmit)) {
    body += `export const ${slot}Slides: SiteImage[] = [\n`
    for (const img of arr) {
      body += `  { src: ${jsonStr(img.src)}, alt: ${jsonStr(img.alt)}, blurDataURL: ${jsonStr(img.blurDataURL)} },\n`
    }
    body += `]\n\n`
  }

  fs.writeFileSync(OUT_TS, header + body, 'utf8')
  console.log(`\nWrote ${OUT_TS}`)
  const totalCount = Object.values(slotsEmit).reduce((n, arr) => n + arr.length, 0)
  console.log(`${totalCount} photos across ${Object.keys(slotsEmit).length} slots`)

  if (warnings.length > 0) {
    console.log(`\n${warnings.length} warnings:`)
    for (const w of warnings) console.log(`  ! ${w}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
