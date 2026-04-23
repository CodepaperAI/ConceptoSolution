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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,10,9,0.52)_0%,rgba(13,10,9,0.28)_26%,rgba(13,10,9,0.42)_52%,rgba(13,10,9,0.92)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
              {project.category}
            </span>
            <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em]">
              {project.location}
              {project.year ? ` / ${project.year}` : ''}
            </span>
            {isComingSoon && (
              <span className="rounded-full bg-primary/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                Coming Soon
              </span>
            )}
          </div>
          <h2 className="mt-5 font-sans font-semibold text-[2rem] leading-[0.95] tracking-[-0.045em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.36)] md:text-[2.3rem]">
            {project.title}
          </h2>
          {project.services.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="overlay-chip-soft rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.16em]"
                >
                  {service}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-text-secondary">
          {project.shortDescription}
        </p>
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
