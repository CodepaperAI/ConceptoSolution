import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
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
import PhotoCarousel from '@/components/ui/PhotoCarousel'
import { carouselImages, homeImages, type SiteImage } from '@/data/siteImages'
import { homeFeaturedProjects } from '@/data/projects'

// Service tile carousel slides come from carouselImages (generated from
// Website/Core service/ + Website/IT/ per the client DOCX). Fallback to the
// legacy single image if a slot's slide set is empty.
const cardSlides = (
  slot: keyof typeof carouselImages.serviceCards,
  fallback: SiteImage
): SiteImage[] =>
  carouselImages.serviceCards[slot].length > 0
    ? carouselImages.serviceCards[slot]
    : [fallback]

const serviceCards: {
  id: string
  title: string
  description: string
  slides: SiteImage[]
  icon: LucideIcon
}[] = [
  {
    id: 'electrical',
    title: 'Electrical',
    description:
      'NICEIC-approved installation, testing, maintenance and upgrades for homes, workplaces and managed buildings.',
    slides: cardSlides('electrical', homeImages.serviceCards.electrical),
    icon: Zap,
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    description:
      'Smart home control, climate control, lighting and blind automation, security integration, multi-room audio, home cinema and entertainment systems.',
    slides: cardSlides('smartHome', homeImages.serviceCards.smartHome),
    icon: HomeIcon,
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'CCTV, door entry, video entry and fire systems designed to protect homes, developments and business premises.',
    slides: cardSlides('security', homeImages.serviceCards.security),
    icon: Shield,
  },
  {
    id: 'data-fibre',
    title: 'Data & Networks',
    description:
      'Data wiring, structured cabling and IT networking design that create reliable connectivity across the building.',
    slides: cardSlides('dataFibre', homeImages.serviceCards.dataFibre),
    icon: Database,
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      '24/7 UK-based IT support, Microsoft platform solutions, managed services and cloud migration for businesses.',
    slides: cardSlides('itSupport', homeImages.serviceCards.itSupport),
    icon: Server,
  },
] as const

const bentoLayout = [
  // Card 0 — Electrical (feature, wide)
  {
    span: 'md:col-span-2 xl:col-span-8',
    aspect: 'aspect-[16/9]',
    titleSize: 'text-[1.95rem] md:text-[2.8rem]',
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

const accreditations = [
  'Control4 Advanced Technician',
  'Lutron Certified Direct Dealer',
  'Savant',
  'KNX',
  '2N',
  'Comlit',
  'AMX Certified Programmer and Installer',
  'BPT Certified Installer',
  'Paxton Installer and Programmer',
  'Texecom Installer',
] as const

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedProjectsSection />
      <ServicesSection />
      <EditorialSection />
    </>
  )
}

function FeaturedProjectsSection() {
  return (
    <section className="section-defer py-16 md:py-24 lg:py-32 xl:py-36">
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.18)_0%,rgba(14,11,10,0.06)_28%,rgba(14,11,10,0.32)_60%,rgba(14,11,10,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                      <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {project.location}
                        {project.year ? ` / ${project.year}` : ''}
                      </span>
                    </div>
                    <h3 className="mt-3 font-sans font-semibold text-[1.55rem] leading-[1] tracking-[-0.04em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.4)] md:text-[1.85rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:mt-4 md:line-clamp-none md:text-base md:leading-7">
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
                <div className="relative overflow-hidden aspect-[16/11] md:aspect-[16/7] xl:aspect-[16/6]">
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.18)_0%,rgba(14,11,10,0.06)_28%,rgba(14,11,10,0.32)_60%,rgba(14,11,10,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {homeFeaturedProjects[2].category}
                      </span>
                      <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {homeFeaturedProjects[2].location}
                        {homeFeaturedProjects[2].year ? ` / ${homeFeaturedProjects[2].year}` : ''}
                      </span>
                    </div>
                    <h3 className="mt-3 font-sans font-semibold text-[1.55rem] leading-[1] tracking-[-0.04em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.4)] md:text-[1.85rem]">
                      {homeFeaturedProjects[2].title}
                    </h3>
                    <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:mt-4 md:line-clamp-none md:text-base md:leading-7">
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
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.18)_0%,rgba(14,11,10,0.06)_28%,rgba(14,11,10,0.32)_60%,rgba(14,11,10,0.78)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                        <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                          {project.location}
                        {project.year ? ` / ${project.year}` : ''}
                        </span>
                      </div>
                      <h3 className="mt-3 font-sans font-semibold text-[1.55rem] leading-[1] tracking-[-0.04em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.4)] md:text-[1.85rem]">
                        {project.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-white/90 [text-shadow:0_6px_20px_rgba(0,0,0,0.5)] md:mt-4 md:line-clamp-none md:text-base md:leading-7">
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
    <section className="section-defer relative overflow-hidden bg-[#120f0d] py-16 md:py-24 lg:py-32 xl:py-36">
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
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]">
                      <PhotoCarousel
                        slides={service.slides}
                        sizes={bento.imageSizes}
                        quality={70}
                        intervalMs={6500 + index * 400}
                      />
                    </div>
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
                    <h3 className={`mt-7 font-sans font-semibold leading-[0.96] tracking-[-0.045em] text-white ${bento.titleSize}`}>
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


function EditorialSection() {
  return (
    <section className="section-defer relative overflow-hidden bg-[#0d0a09] py-16 md:py-24 lg:py-32 xl:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,38,51,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(200,171,141,0.1),transparent_32%)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-16">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-luxury">
              <div className="relative aspect-[4/5] md:aspect-[5/4]">
                <Image
                  src={homeImages.about.src}
                  alt={homeImages.about.alt}
                  fill
                  placeholder={homeImages.about.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={homeImages.about.blurDataURL}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  quality={72}
                  className="object-cover"
                  style={{ objectPosition: homeImages.about.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.08)_0%,rgba(14,11,10,0.42)_100%)]" />
              </div>
              <div className="overlay-panel absolute bottom-5 left-5 max-w-[17rem] rounded-[1.4rem] px-5 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-eyebrow">
                  Company Note
                </span>
                <p className="mt-3 text-sm leading-7 text-white">
                  Every project begins with a clear understanding of the client&apos;s needs, allowing
                  us to deliver solutions that are both practical and precisely suited to the space.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About Concepto"
                heading="Established in 2003. Delivering fully integrated electrical and smart home solutions."
                subheading="Our services cover smart home automation, audio-visual installation and electrical systems."
                tone="light"
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {accreditations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="text-sm leading-7 text-white">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary"
                >
                  Read about us <ArrowRight size={15} />
                </Link>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
                  NICEIC Approved · London Based
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
