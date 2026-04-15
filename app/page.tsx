import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cpu,
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
import CountUpValue from '@/components/motion/CountUpValue'
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
      'Smart home control, climate control, lighting and blind automation, security integration and multi-room audio.',
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
  {
    id: 'av',
    title: 'Audio Visual',
    description:
      'Audio-visual installation that supports home cinema, entertainment spaces and simple day-to-day control.',
    image: homeImages.serviceCards.av,
    icon: Cpu,
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
  // Card 4 — Audio Visual
  {
    span: 'md:col-span-1 xl:col-span-4',
    aspect: 'aspect-[4/3]',
    titleSize: 'text-[1.85rem]',
    tag: 'Service',
    imageSizes: '(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw',
  },
  // Card 5 — Audio Visual (panoramic, full-width)
  {
    span: 'md:col-span-2 xl:col-span-12',
    aspect: 'aspect-[16/6] md:aspect-[16/5]',
    titleSize: 'text-[2.4rem] md:text-[2.8rem]',
    tag: 'Signature',
    imageSizes: '(min-width: 768px) 100vw, 100vw',
  },
] as const

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We discuss the site, the brief and whether the requirement is residential or commercial before recommending the right route forward.',
  },
  {
    number: '02',
    title: 'Specification',
    description:
      'Electrical, smart home, security, data and IT requirements are reviewed together so the solution fits the project and budget.',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Our team installs and integrates the agreed systems with close attention to compliance, coordination and finish quality.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Testing, handover, maintenance and ongoing IT support help keep the completed systems reliable over time.',
  },
] as const

const credibilityStats = [
  { value: 2003, suffix: '', label: 'Founded' },
  { value: 24, suffix: '/7', label: 'UK-based IT support' },
  { value: 2, suffix: '', label: 'Key accreditations' },
] as const

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedProjectsSection />
      <ServicesSection />
      <EditorialSection />
      <ProcessSection />
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
                    <p className="mt-4 max-w-xl text-sm leading-7 overlay-copy [text-shadow:0_6px_20px_rgba(0,0,0,0.3)] md:text-base">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Row 2: third card full width */}
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
                    <p className="mt-4 max-w-xl text-sm leading-7 overlay-copy [text-shadow:0_6px_20px_rgba(0,0,0,0.3)] md:text-base">
                      {homeFeaturedProjects[2].shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
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
            heading="One London team. Smart home, electrical and IT."
            subheading="The wider scope can include audio visual, CCTV, fire systems, data wiring and Microsoft-based support, depending on what the project needs."
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

function EditorialSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02)_0%,rgba(16,12,10,0.38)_100%)]" />
              </div>
              <div className="overlay-panel absolute bottom-5 left-5 max-w-[15rem] rounded-[1.5rem] px-5 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-eyebrow">
                  Company Note
                </span>
                <p className="mt-3 text-sm leading-7 overlay-copy">
                  We work closely with clients from the outset to understand the brief and recommend the right solution.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About Concepto"
                heading="Since 2003. Joined-up electrical, smart home and IT expertise."
                subheading="Our services include smart home automation, audio-visual installation, electrical solutions and 24/7 UK-based IT support."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {credibilityStats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.1 + index * 0.1} direction="scale">
                  <div className="lux-panel p-5">
                    <CountUpValue
                      value={stat.value}
                      suffix={stat.suffix}
                      delay={index * 0.08}
                      className="font-display text-[2.35rem] leading-none tracking-[-0.04em] text-primary"
                    />
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.22}>
              <blockquote className="mt-10 border-l border-primary/38 pl-6 text-base leading-8 text-text-secondary md:text-lg">
                We work closely with each client from the outset so the recommended solution fits
                the brief, the budget and the way the building will be used.
              </blockquote>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-white/[0.06] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-primary shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-white/[0.1]"
                >
                  Read about us <ArrowRight size={15} />
                </Link>
                <div className="flex flex-wrap gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                  <span>NICEIC Approved Contractor</span>
                  <span>TrustMark Registered</span>
                  <span>London Based</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section-defer relative overflow-hidden bg-[#0d0a09] py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,38,51,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(202,174,145,0.14),transparent_26%)]" />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <Reveal>
            <div className="lux-panel-dark p-8 md:p-10">
              <SectionHeading
                eyebrow="How We Work"
                heading="A clear route from first call to ongoing support."
                subheading="Every stage is designed to keep the project practical, efficient and well coordinated."
                tone="light"
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {['Residential and commercial projects', 'Smart home, electrical and IT', 'Tailored recommendations', 'Maintenance and support'].map((item) => (
                  <div
                    key={item}
                    className="overlay-card rounded-[1.3rem] px-5 py-5"
                  >
                    <p className="text-sm leading-7 overlay-copy">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0e8dc]"
              >
                Get a Free Quote <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={0.08 + index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
                distance={32}
              >
                <div className="overlay-card h-full rounded-[1.6rem] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/28 bg-primary/10 text-primary">
                      <span className="font-mono text-sm font-bold">{step.number}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-meta">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-[1.9rem] leading-[0.98] tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 overlay-copy-soft">{step.description}</p>
                  <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] overlay-meta">
                    <Check className="h-4 w-4 text-secondary" />
                    Joined-up delivery
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
