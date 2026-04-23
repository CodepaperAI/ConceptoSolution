import type { SiteImage } from '@/data/siteImages'
import { generatedProjects } from './projects.generated'

export type ProjectStatus = 'live' | 'coming-soon'

export interface ProjectEntry {
  slug: string
  status: ProjectStatus
  legacySlugs?: string[]
  title: string
  shortTitle?: string
  summary: string
  shortDescription: string
  supportDescription: string
  location: string
  category: string
  year: string
  services: string[]
  heroImage: SiteImage
  galleryImages: SiteImage[]
  ctaCopy: string
  scopeOfWork?: string[]
  systemsInstalled?: string[]
  keyFeatures?: string[]
  video?: { src: string }
  homeFeature?: {
    span: string
    aspect: string
  }
}

export const projectEntries: ProjectEntry[] = generatedProjects

// Homepage features 5 live projects spanning Residential / MDU / Commercial / Retail / Hospitality.
// Picked one per category from the 18 live projects. Swap slugs here to retune the homepage.
const FEATURED_SLUGS = [
  'littleton',        // Residential — full smart-home + Control4 + Lutron
  'chester-square',   // Multi Dwelling Unit — 5 luxury apartments, SW1W
  'miller-knoll',     // Commercial — showroom/office fit-out
  'goldwin-london',   // Retail — Soho flagship, smart lighting + AV
  'seasons-of-india', // Hospitality
] as const

export const homeFeaturedProjects: ProjectEntry[] = FEATURED_SLUGS.map((slug) => {
  const found = projectEntries.find((p) => p.slug === slug)
  if (!found) {
    throw new Error(`homeFeaturedProjects: project with slug "${slug}" not found in projectEntries`)
  }
  return found
})

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectEntries.find(
    (project) => project.slug === slug || (project.legacySlugs?.includes(slug) ?? false)
  )
}

export function getLiveProjects(): ProjectEntry[] {
  return projectEntries.filter((p) => p.status === 'live')
}
