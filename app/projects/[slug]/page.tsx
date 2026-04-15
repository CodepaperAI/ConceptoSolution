import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft } from 'lucide-react'
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

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Concepto Solutions`,
      description: project.summary,
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt,
        },
      ],
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

  const [primaryGalleryImage, ...secondaryGalleryImages] = project.galleryImages

  return (
    <>
      <PageHero
        priority
        image={project.heroImage}
        eyebrow="Project"
        title={project.shortTitle ?? project.title}
        description={project.summary}
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              Project Facts
            </p>
            <div className="mt-6 grid gap-5">
              <div className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] overlay-meta">
                  Category
                </span>
                <p className="mt-2 text-sm leading-7 overlay-copy">{project.category}</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] overlay-meta">
                  Location
                </span>
                <p className="mt-2 text-sm leading-7 overlay-copy">{project.location}</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] overlay-meta">
                  Year
                </span>
                <p className="mt-2 text-sm leading-7 overlay-copy">{project.year}</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="section-defer py-24 md:py-32 lg:py-36">
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
            </div>

            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-[2.2rem] shadow-luxury">
                <div className="relative aspect-[4/5] md:aspect-[5/4]">
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.04)_0%,rgba(16,12,10,0.28)_48%,rgba(16,12,10,0.62)_100%)]" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="Selected Views"
                heading={project.title}
                subheading="A compact gallery drawn from the existing portfolio image library to give each project page a stronger showcase feel."
                className="max-w-4xl"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
                  <div className="relative aspect-[16/11]">
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
          </div>
        </Container>
      </section>

      <section className="section-defer pb-24 md:pb-32 lg:pb-36">
        <Container>
          <Reveal>
            <div className="lux-panel px-8 py-10 md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <span className="lux-eyebrow text-primary">Next Step</span>
                <h2 className="mt-7 font-display text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-text-primary md:text-[3.25rem]">
                  Need support on a similar project?
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
