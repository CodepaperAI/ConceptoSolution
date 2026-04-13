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

const featuredProjects = [
  {
    title: 'SIGNIA COURT',
    location: 'Wembley, HA9',
    category: 'Residential',
    year: '2024',
    description:
      'A coordinated apartment scheme where lighting, power, and integrated living systems needed to feel seamless room to room.',
    image: homeImages.featuredProjects.signiaCourt,
    span: 'xl:col-span-7',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'MAYFAIR RESIDENCE',
    location: 'Mayfair, W1',
    category: 'Private Client',
    year: '2024',
    description:
      'Discreet technical infrastructure hidden behind a calm, hospitality-led residential finish.',
    image: homeImages.featuredProjects.mayfairResidence,
    span: 'xl:col-span-5',
    aspect: 'aspect-[16/11]',
  },
  {
    title: 'CITY OF LONDON OFFICE',
    location: 'EC2A, London',
    category: 'Commercial',
    year: '2024',
    description:
      'An office environment delivered with joined-up electrical, data, display, and operational support.',
    image: homeImages.featuredProjects.cityOffice,
    span: 'xl:col-span-5',
    aspect: 'aspect-[16/11]',
  },
] as const

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
    description: 'Clean core infrastructure and lighting that supports the wider technical brief.',
    image: homeImages.serviceCards.electrical,
    icon: Zap,
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    description: 'Lighting, comfort, control, and everyday convenience composed into one system.',
    image: homeImages.serviceCards.smartHome,
    icon: HomeIcon,
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Discreet protection, monitoring, and access that never fights the architecture.',
    image: homeImages.serviceCards.security,
    icon: Shield,
  },
  {
    id: 'data-fibre',
    title: 'Data & Fibre',
    description: 'Reliable structured cabling and network foundations designed for long-term resilience.',
    image: homeImages.serviceCards.dataFibre,
    icon: Database,
  },
  {
    id: 'av',
    title: 'AV Integration',
    description: 'Display, media, and control systems delivered with a finish-led installation standard.',
    image: homeImages.serviceCards.av,
    icon: Cpu,
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Operational continuity, handover confidence, and support after practical completion.',
    image: homeImages.serviceCards.itSupport,
    icon: Server,
  },
] as const

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We review the site, the brief, the programme, and how the space needs to operate before specification begins.',
  },
  {
    number: '02',
    title: 'Specification',
    description:
      'Electrical, lighting, AV, data, and security scopes are resolved together so the installation works as a system.',
  },
  {
    number: '03',
    title: 'Delivery',
    description:
      'Trades are coordinated, sequencing is clear, and finishes are protected throughout the build.',
  },
  {
    number: '04',
    title: 'Aftercare',
    description:
      'Testing, handover, and post-completion support keep the result practical long after installation.',
  },
] as const

const credibilityStats = [
  { value: 20, suffix: '+', label: 'Years of delivery' },
  { value: 500, suffix: '+', label: 'Projects completed' },
  { value: 100, suffix: '%', label: 'Attention to finish' },
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              heading="Integrated delivery that disappears into the quality of the finish."
              subheading="Our strongest projects feel calm on the surface because the infrastructure behind them has already been resolved properly."
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:justify-self-end">
            <div className="max-w-xl lg:ml-auto">
              <p className="text-base leading-8 text-text-secondary md:text-lg md:leading-9">
                Concepto is typically brought in when the brief needs more than a single trade.
                We coordinate the technical layers early so the final spaces feel precise, quiet,
                and fully considered.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary transition-transform duration-300 hover:translate-x-1"
              >
                View all projects <ChevronRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-12">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.08 + index * 0.06}
              className={project.span}
            >
              <Link
                href="/projects"
                className="group block overflow-hidden rounded-[2rem] border border-border/70 bg-[#f8f3eb] shadow-panel"
              >
                <div className={`relative overflow-hidden ${project.aspect}`}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    placeholder={project.image.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={project.image.blurDataURL}
                    sizes={
                      project.span === 'xl:col-span-7'
                        ? '(min-width: 1280px) 54vw, 100vw'
                        : '(min-width: 1280px) 38vw, 100vw'
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: project.image.objectPosition }}
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
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/88 [text-shadow:0_6px_20px_rgba(0,0,0,0.3)] md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
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
            eyebrow="Integrated Disciplines"
            heading="One technical partner across the systems clients notice and the ones they never should."
            subheading="The structure is simple: fewer handoffs, cleaner communication, and a result that behaves like one joined-up project."
            alignment="center"
            tone="light"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => (
            <Reveal key={service.id} delay={0.06 + index * 0.05}>
              <Link
                href={`/services#${service.id}`}
                className="group overlay-card block overflow-hidden rounded-[1.8rem] shadow-[0_22px_58px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1 hover:border-white/22 hover:bg-white/[0.08]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    placeholder={service.image.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={service.image.blurDataURL}
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: service.image.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.12)_0%,rgba(12,10,9,0.34)_42%,rgba(12,10,9,0.84)_100%)]" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]">
                      <service.icon className="h-5 w-5 text-secondary" strokeWidth={1.7} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-meta">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[2rem] leading-[0.96] tracking-[-0.045em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 overlay-copy-soft">{service.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
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
                  className="object-cover"
                  style={{ objectPosition: homeImages.about.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02)_0%,rgba(16,12,10,0.38)_100%)]" />
              </div>
              <div className="overlay-panel absolute bottom-5 left-5 max-w-[15rem] rounded-[1.5rem] px-5 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-eyebrow">
                  Studio Note
                </span>
                <p className="mt-3 text-sm leading-7 overlay-copy">
                  The strongest technical work usually reads as effortless in the room itself.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why Clients Stay"
                heading="We started in electrical delivery and expanded so clients could brief once and coordinate less."
                subheading="That means clearer decisions earlier, a more coherent scope on site, and a handover that feels resolved rather than pieced together."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {credibilityStats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.1 + index * 0.06}>
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
                "Our role is to make the technical side feel calm. When the client sees fewer
                compromises at the finish stage, the earlier coordination has done its job."
              </blockquote>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-white/82 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-primary shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  Read our story <ArrowRight size={15} />
                </Link>
                <div className="flex flex-wrap gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                  <span>NICEIC</span>
                  <span>Part P</span>
                  <span>18th Edition</span>
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
                eyebrow="Working Method"
                heading="A process structured for clarity before, during, and after site delivery."
                subheading="The aim is not complexity. It is controlled sequencing, technical consistency, and fewer surprises once the project is moving."
                tone="light"
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {['Single point of accountability', 'Coordinated technical scope', 'Finish-led installation mindset', 'Post-handover support'].map((item) => (
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
                Request a consultation <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={0.08 + index * 0.06}>
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
