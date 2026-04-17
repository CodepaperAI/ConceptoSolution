import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  Database,
  Home as HomeIcon,
  Server,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import HomeHero from '@/components/home/HomeHero'
import { homeImages } from '@/data/siteImages'
import { homeFeaturedProjects } from '@/data/projects'

const serviceCards: {
  id: string
  title: string
  description: string
  image: (typeof homeImages.serviceCards)[keyof typeof homeImages.serviceCards]
  icon: LucideIcon
}[] = [
  {
    id: 'electrical',
    title: 'Electrical',
    description:
      'NICEIC-approved installation, testing, maintenance and upgrades for homes, workplaces and managed buildings.',
    image: homeImages.serviceCards.electrical,
    icon: Zap,
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    description:
      'Smart home control, climate control, lighting and blind automation, security integration, multi-room audio, home cinema and entertainment systems.',
    image: homeImages.serviceCards.smartHome,
    icon: HomeIcon,
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'CCTV, door entry, video entry and fire systems designed to protect homes, developments and business premises.',
    image: homeImages.serviceCards.security,
    icon: Shield,
  },
  {
    id: 'data-fibre',
    title: 'Data & Networks',
    description:
      'Data wiring, structured cabling and IT networking design that create reliable connectivity across the building.',
    image: homeImages.serviceCards.dataFibre,
    icon: Database,
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      '24/7 UK-based IT support, Microsoft platform solutions, managed services and cloud migration for businesses.',
    image: homeImages.serviceCards.itSupport,
    icon: Server,
  },
] as const

const bentoLayout = [
  // Card 0 — Electrical (feature, wide)
  {
    span: 'md:col-span-2 xl:col-span-8',
    aspect: 'aspect-[16/9]',
    titleSize: 'text-[2.4rem] md:text-[2.8rem]',
    tag: 'Featured',
    imageSizes: '(min-width: 1280px) 65vw, (min-width: 768px) 100vw, 100vw',
  },
  // Card 1 — Smart Home (narrow, grows to match feature height on desktop)
  {
    span: 'md:col-span-1 xl:col-span-4',
    aspect: 'aspect-[4/3] xl:aspect-auto xl:flex-1 xl:min-h-[420px]',
    titleSize: 'text-[1.85rem]',
    tag: 'Service',
    imageSizes: '(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw',
  },
  // Card 2 — Security (middle row, 1 of 3)
  {
    span: 'md:col-span-1 xl:col-span-4',
    aspect: 'aspect-[4/3]',
    titleSize: 'text-[1.85rem]',
    tag: 'Service',
    imageSizes: '(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw',
  },
  // Card 3 — Data & Networks
  {
    span: 'md:col-span-1 xl:col-span-4',
    aspect: 'aspect-[4/3]',
    titleSize: 'text-[1.85rem]',
    tag: 'Service',
    imageSizes: '(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw',
  },
  // Card 4 — IT Support
  {
    span: 'md:col-span-1 xl:col-span-4',
    aspect: 'aspect-[4/3]',
    titleSize: 'text-[1.85rem]',
    tag: '24/7',
    imageSizes: '(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw',
  },
] as const

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedProjectsSection />
      <ServicesSection />
    </>
  )
}

function FeaturedProjectsSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where We Work"
            heading="Residential and commercial projects, supported end-to-end."
          />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal delay={0.06}>
            <p className="max-w-xl text-base leading-8 text-text-secondary md:text-lg md:leading-9">
              From private homes to business environments, the common thread is practical integration,
              dependable installation and support that lasts beyond handover.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="lg:justify-self-end">
            <div className="max-w-xl lg:ml-auto">
              <p className="text-base leading-8 text-text-secondary md:text-lg md:leading-9">
                Concepto Solutions works with homeowners, developers, architects and businesses that
                want one team to understand the wider technical picture. That joined-up approach
                helps us recommend the most suitable and cost-effective solution for each project.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary transition-transform duration-300 hover:translate-x-1"
              >
                Explore the portfolio <ChevronRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Row 1: featured card (wider) + second card */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {homeFeaturedProjects.slice(0, 2).map((project, index) => (
            <Reveal key={project.slug} delay={0.08 + index * 0.12} direction="scale">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-bg-secondary shadow-panel"
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/11] xl:aspect-auto xl:flex-1 xl:min-h-[420px]'}`}>
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    placeholder={project.heroImage.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={project.heroImage.blurDataURL}
                    sizes={
                      index === 0
                        ? '(min-width: 1280px) 54vw, (min-width: 768px) 48vw, 100vw'
                        : '(min-width: 1280px) 38vw, (min-width: 768px) 48vw, 100vw'
                    }
                    quality={72}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: project.heroImage.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.5)_0%,rgba(14,11,10,0.3)_28%,rgba(14,11,10,0.46)_56%,rgba(14,11,10,0.92)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                      <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {project.location} / {project.year}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[2rem] leading-[0.94] tracking-[-0.05em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.36)] md:text-[2.35rem]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:text-base">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Row 2: third card full width panoramic */}
        {homeFeaturedProjects[2] && (
          <div className="mt-6">
            <Reveal delay={0.2} direction="left" distance={60}>
              <Link
                href={`/projects/${homeFeaturedProjects[2].slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-border/70 bg-bg-secondary shadow-panel"
              >
                <div className="relative overflow-hidden aspect-[16/7] md:aspect-[16/6]">
                  <Image
                    src={homeFeaturedProjects[2].heroImage.src}
                    alt={homeFeaturedProjects[2].heroImage.alt}
                    fill
                    placeholder={homeFeaturedProjects[2].heroImage.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={homeFeaturedProjects[2].heroImage.blurDataURL}
                    sizes="(min-width: 768px) 100vw, 100vw"
                    quality={72}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: homeFeaturedProjects[2].heroImage.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.5)_0%,rgba(14,11,10,0.3)_28%,rgba(14,11,10,0.46)_56%,rgba(14,11,10,0.92)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {homeFeaturedProjects[2].category}
                      </span>
                      <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {homeFeaturedProjects[2].location} / {homeFeaturedProjects[2].year}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[2rem] leading-[0.94] tracking-[-0.05em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.36)] md:text-[2.35rem]">
                      {homeFeaturedProjects[2].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:text-base">
                      {homeFeaturedProjects[2].shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        )}

        {/* Row 3: fourth (Retail) + fifth (Hospitality) — equal columns */}
        {homeFeaturedProjects[3] && homeFeaturedProjects[4] && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[homeFeaturedProjects[3], homeFeaturedProjects[4]].map((project, index) => (
              <Reveal key={project.slug} delay={0.1 + index * 0.1} direction="scale">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-bg-secondary shadow-panel"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      placeholder={project.heroImage.blurDataURL ? 'blur' : 'empty'}
                      blurDataURL={project.heroImage.blurDataURL}
                      sizes="(min-width: 1280px) 46vw, (min-width: 768px) 48vw, 100vw"
                      quality={72}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: project.heroImage.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.5)_0%,rgba(14,11,10,0.3)_28%,rgba(14,11,10,0.46)_56%,rgba(14,11,10,0.92)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                        <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                          {project.location} / {project.year}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-[2rem] leading-[0.94] tracking-[-0.05em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.36)] md:text-[2.35rem]">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:text-base">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section-defer relative overflow-hidden bg-[#120f0d] py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,174,145,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(124,38,51,0.26),transparent_30%)]" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Core Services"
            heading="Everything connected. One team to deliver it."
            subheading="Electrical and smart home solutions, with AV, security and data infrastructure designed to work as one."
            alignment="center"
            tone="light"
            className="mx-auto"
          />
        </Reveal>

        {/* Bento layout: 3 rows — feature + narrow | 3 equal | panoramic */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {serviceCards.map((service, index) => {
            const bento = bentoLayout[index]
            return (
              <Reveal
                key={service.id}
                delay={0.06 + index * 0.08}
                direction={index === 0 || index === 5 ? 'scale' : index === 1 ? 'right' : index === 4 ? 'left' : 'up'}
                distance={32}
                className={bento.span}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group overlay-card flex h-full flex-col overflow-hidden rounded-[1.8rem] shadow-[0_22px_58px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1 hover:border-white/22 hover:bg-white/[0.08]"
                >
                  <div className={`relative ${bento.aspect} overflow-hidden`}>
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      placeholder={service.image.blurDataURL ? 'blur' : 'empty'}
                      blurDataURL={service.image.blurDataURL}
                      sizes={bento.imageSizes}
                      quality={70}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{ objectPosition: service.image.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.12)_0%,rgba(12,10,9,0.34)_42%,rgba(12,10,9,0.84)_100%)]" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="overlay-card flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[-8deg]">
                        <service.icon className="h-5 w-5 text-secondary" strokeWidth={1.7} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-meta">
                        {bento.tag}
                      </span>
                    </div>
                    <h3 className={`mt-7 font-display leading-[0.96] tracking-[-0.045em] text-white ${bento.titleSize}`}>
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 overlay-copy-soft">{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

