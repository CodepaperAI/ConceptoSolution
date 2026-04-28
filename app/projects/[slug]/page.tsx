import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ChevronLeft, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import { getProjectBySlug, projectEntries } from '@/data/projects'

export function generateStaticParams() {
  return projectEntries.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {}
  }

  const title =
    project.status === 'coming-soon'
      ? `${project.title} — Coming Soon`
      : project.title

  return {
    title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Concepto Solutions`,
      description: project.summary,
      images: project.heroImage.src
        ? [
            {
              url: project.heroImage.src,
              alt: project.heroImage.alt,
            },
          ]
        : undefined,
    },
  }
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const isComingSoon = project.status === 'coming-soon'
  const gallery = project.galleryImages
  const primaryGalleryImage = gallery[0] ?? project.heroImage
  const secondaryGalleryImages = gallery.slice(1, 5)
  const extraGalleryImages = gallery.slice(5)

  const hasOverviewLists =
    !isComingSoon &&
    ((project.scopeOfWork && project.scopeOfWork.length > 0) ||
      (project.systemsInstalled && project.systemsInstalled.length > 0) ||
      (project.keyFeatures && project.keyFeatures.length > 0))

  return (
    <>
      <PageHero
        priority
        overlay="subtle"
        image={project.heroImage}
        eyebrow={isComingSoon ? 'Coming Soon' : 'Project'}
        title={project.shortTitle ?? project.title}
        description={
          isComingSoon
            ? `A ${project.category.toLowerCase()} project in ${project.location}. Full case study is being prepared — photography is available below.`
            : project.summary
        }
        showCta={false}
      />

      <section className="section-defer py-16 md:py-24 lg:py-32 xl:py-36">
        <Container>
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary transition-transform duration-300 hover:-translate-x-1"
            >
              <ChevronLeft size={15} />
              Back to projects
            </Link>
          </Reveal>

          {isComingSoon ? (
            <div className="mt-10">
              <Reveal>
                <div className="lux-panel flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:px-10 md:py-12">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="lux-eyebrow text-primary">Case Study Coming Soon</span>
                    <h2 className="mt-4 font-sans font-semibold text-[1.9rem] leading-[0.98] tracking-[-0.04em] text-text-primary md:text-[2.25rem]">
                      Full project write-up in progress
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary md:text-lg md:leading-9">
                      Scope of work, systems installed, and key features for this project will be
                      published here shortly. In the meantime, a selection of project photography
                      is available below.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
              <div>
                <Reveal>
                  <SectionHeading
                    eyebrow="Overview"
                    heading="Portfolio Overview"
                    subheading={project.shortDescription}
                  />
                </Reveal>

                <Reveal delay={0.08}>
                  <p className="mt-8 max-w-2xl text-base leading-8 text-text-secondary md:text-lg md:leading-9">
                    {project.supportDescription}
                  </p>
                </Reveal>

                {project.services.length > 0 && (
                  <Reveal delay={0.16}>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-primary/14 bg-primary/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-primary"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                )}
              </div>

              <Reveal direction="left">
                <div className="relative overflow-hidden rounded-[2.2rem] shadow-luxury">
                  <div className="relative aspect-[4/5] md:aspect-[5/4]">
                    {primaryGalleryImage.src ? (
                      <Image
                        src={primaryGalleryImage.src}
                        alt={primaryGalleryImage.alt}
                        fill
                        placeholder={primaryGalleryImage.blurDataURL ? 'blur' : 'empty'}
                        blurDataURL={primaryGalleryImage.blurDataURL}
                        sizes="(min-width: 1024px) 44vw, 100vw"
                        quality={74}
                        className="object-cover"
                        style={{ objectPosition: primaryGalleryImage.objectPosition }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.18),transparent_45%),linear-gradient(135deg,#1a1512_0%,#0f0c0b_100%)]" />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.04)_0%,rgba(16,12,10,0.28)_48%,rgba(16,12,10,0.62)_100%)]" />
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {project.video && (
            <div className="mt-16">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-black shadow-luxury">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full"
                  >
                    <source src={project.video.src} type="video/mp4" />
                  </video>
                </div>
              </Reveal>
            </div>
          )}

          {hasOverviewLists && (
            <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-16">
              {project.scopeOfWork && project.scopeOfWork.length > 0 && (
                <OverviewList
                  eyebrow="Scope of Work"
                  items={project.scopeOfWork}
                  delay={0}
                />
              )}
              {project.systemsInstalled && project.systemsInstalled.length > 0 && (
                <OverviewList
                  eyebrow="Systems Installed"
                  items={project.systemsInstalled}
                  delay={0.08}
                />
              )}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <OverviewList
                  eyebrow="Key Features"
                  items={project.keyFeatures}
                  delay={0.16}
                />
              )}
            </div>
          )}

          {gallery.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <SectionHeading
                  eyebrow="Selected Views"
                  heading={project.title}
                  subheading={
                    isComingSoon
                      ? 'Project photography — full case study coming soon.'
                      : "A compact gallery drawn from this project's photography."
                  }
                  className="max-w-4xl"
                />
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <Reveal>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
                    <div className="relative aspect-[16/11]">
                      {project.heroImage.src ? (
                        <Image
                          src={project.heroImage.src}
                          alt={project.heroImage.alt}
                          fill
                          placeholder={project.heroImage.blurDataURL ? 'blur' : 'empty'}
                          blurDataURL={project.heroImage.blurDataURL}
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          quality={72}
                          className="object-cover"
                          style={{ objectPosition: project.heroImage.objectPosition }}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.18),transparent_45%),linear-gradient(135deg,#1a1512_0%,#0f0c0b_100%)]" />
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02)_0%,rgba(16,12,10,0.18)_46%,rgba(16,12,10,0.48)_100%)]" />
                    </div>
                  </div>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  {secondaryGalleryImages.map((image, index) => (
                    <Reveal key={`${project.slug}-gallery-${index}`} delay={0.06 + index * 0.05}>
                      <div className="relative overflow-hidden rounded-[1.8rem] shadow-panel">
                        <div className="relative aspect-[16/11]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            placeholder={image.blurDataURL ? 'blur' : 'empty'}
                            blurDataURL={image.blurDataURL}
                            sizes="(min-width: 1024px) 32vw, 100vw"
                            quality={68}
                            className="object-cover"
                            style={{ objectPosition: image.objectPosition }}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02)_0%,rgba(16,12,10,0.14)_44%,rgba(16,12,10,0.42)_100%)]" />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {extraGalleryImages.length > 0 && (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {extraGalleryImages.map((image, index) => (
                    <Reveal key={`${project.slug}-gallery-extra-${index}`} delay={0.04 + index * 0.03}>
                      <div className="relative overflow-hidden rounded-[1.6rem] shadow-panel">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            placeholder={image.blurDataURL ? 'blur' : 'empty'}
                            blurDataURL={image.blurDataURL}
                            sizes="(min-width: 1024px) 32vw, 50vw"
                            quality={66}
                            className="object-cover"
                            style={{ objectPosition: image.objectPosition }}
                          />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      <section className="section-defer pb-16 md:pb-24 lg:pb-32 xl:pb-36">
        <Container>
          <Reveal>
            <div className="lux-panel px-8 py-10 md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <span className="lux-eyebrow text-primary">Next Step</span>
                <h2 className="mt-5 font-sans font-semibold text-[2rem] leading-[1] tracking-[-0.04em] text-text-primary md:mt-7 md:text-[3.25rem] md:leading-[0.94] md:tracking-[-0.05em]">
                  {isComingSoon
                    ? 'Interested in a similar project?'
                    : 'Need support on a similar project?'}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                  Concepto Solutions can help shape the right mix of smart home, electrical,
                  security and IT services for your brief.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover lg:mt-0"
              >
                {project.ctaCopy} <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

function OverviewList({
  eyebrow,
  items,
  delay,
}: {
  eyebrow: string
  items: string[]
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <span className="lux-eyebrow text-primary">{eyebrow}</span>
        <ul className="mt-6 space-y-4">
          {items.map((item, idx) => (
            <li
              key={`${eyebrow}-${idx}`}
              className="flex gap-3 text-sm leading-7 text-text-secondary md:text-base"
            >
              <Check
                size={18}
                className="mt-1 flex-shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
