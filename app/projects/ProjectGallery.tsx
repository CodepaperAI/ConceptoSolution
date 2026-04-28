'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { cn } from '@/lib/utils'
import type { ProjectEntry } from '@/data/projects'

const categoryFilters = [
  'All',
  'Residential',
  'Multi Dwelling Unit',
  'Commercial',
  'Retail',
  'Hospitality',
] as const

const serviceFilters = [
  'Smart Home',
  'Electrical',
  'Security',
  'Data & Network',
  'IT Support',
] as const

type Filter = (typeof categoryFilters)[number] | (typeof serviceFilters)[number]

export default function ProjectGallery({ projects }: { projects: ProjectEntry[] }) {
  const [active, setActive] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter(
      (p) => p.category === active || p.services.some((s) => s === active)
    )
  }, [active, projects])

  const renderFilterButton = (item: Filter) => (
    <button
      key={item}
      type="button"
      onClick={() => setActive(item)}
      aria-current={active === item ? 'true' : undefined}
      className={cn(
        'rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300',
        active === item
          ? 'border border-primary bg-primary text-white shadow-[0_16px_30px_rgba(124,38,51,0.16)]'
          : 'border border-border bg-white/[0.04] text-text-secondary hover:border-primary/45 hover:text-text-primary'
      )}
    >
      {item}
    </button>
  )

  return (
    <>
      <div className="flex flex-col gap-4 lg:items-end">
        <Reveal delay={0.08}>
          <div
            className="flex flex-wrap gap-2 lg:justify-end"
            role="group"
            aria-label="Filter projects by category"
          >
            {categoryFilters.map(renderFilterButton)}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div
            className="flex flex-wrap gap-2 lg:justify-end"
            role="group"
            aria-label="Filter projects by service"
          >
            {serviceFilters.map(renderFilterButton)}
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 + index * 0.04} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-lg text-text-muted">
          No projects match this filter. Try selecting a different category.
        </p>
      )}
    </>
  )
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  const isComingSoon = project.status === 'coming-soon'
  const hasImage = Boolean(project.heroImage.src)

  const inner = (
    <div className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-border/70 bg-bg-secondary shadow-panel">
      {/* Photo — clean, no heavy text overlay so the property reads as a property. */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        {hasImage ? (
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            placeholder={project.heroImage.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={project.heroImage.blurDataURL}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
            quality={70}
            className={cn(
              'object-cover transition-transform duration-700',
              isComingSoon
                ? 'scale-[1.02] saturate-[0.55]'
                : 'group-hover:scale-[1.03]'
            )}
            style={{ objectPosition: project.heroImage.objectPosition }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(124,38,51,0.26),transparent_40%),linear-gradient(135deg,#1a1512_0%,#0f0c0b_100%)]" />
        )}

        {/* Small category badge — top-left corner, doesn't crowd the photo. */}
        <span className="absolute left-4 top-4 overlay-chip rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em]">
          {project.category}
        </span>
        {isComingSoon && (
          <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white shadow-[0_4px_12px_rgba(124,38,51,0.4)]">
            Coming Soon
          </span>
        )}
      </div>

      {/* Body — title, meta, description, service tags, CTA all in their own clean space. */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-sans font-semibold text-[1.4rem] leading-[1.05] tracking-[-0.035em] text-text-primary md:text-[1.6rem]">
            {project.title}
          </h2>
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
            {project.location}
            {project.year ? ` · ${project.year}` : ''}
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-text-secondary">
          {project.shortDescription}
        </p>

        {project.services.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border/60 bg-white/[0.03] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-text-muted"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        <span
          className={cn(
            'mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]',
            isComingSoon ? 'text-text-muted' : 'text-primary'
          )}
        >
          {isComingSoon ? 'View photography' : 'View portfolio page'}
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  )

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      {inner}
    </Link>
  )
}
