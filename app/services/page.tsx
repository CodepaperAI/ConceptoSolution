import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
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
import PageHero from '@/components/ui/PageHero'
import { servicesPageImages } from '@/data/siteImages'

const services: {
  id: string
  title: string
  description: string
  detail: string
  image: (typeof servicesPageImages.details)[keyof typeof servicesPageImages.details]
  icon: LucideIcon
  capabilities: string[]
  deliverables: string[]
}[] = [
  {
    id: 'electrical',
    title: 'Electrical Solutions',
    description:
      'The core infrastructure that gives the rest of the building permission to work beautifully.',
    detail:
      'From new-build packages to upgrades within occupied properties, we deliver electrical scopes with the same finish-led care as the visible design layers around them.',
    image: servicesPageImages.details.electrical,
    icon: Zap,
    capabilities: ['Power and lighting design support', 'New installations and rewires', 'Distribution upgrades', 'Testing and certification'],
    deliverables: ['Residential schemes', 'Commercial fit-outs'],
  },
  {
    id: 'smart-home',
    title: 'Smart Home Solutions',
    description:
      'Comfort, control, and automation that feel intuitive rather than over-complicated.',
    detail:
      'We integrate controls into the rhythm of the home so lighting, scenes, audio, and key behaviours are easy to understand from day one.',
    image: servicesPageImages.details.smartHome,
    icon: HomeIcon,
    capabilities: ['Lighting control', 'Climate and blind integration', 'Scene programming', 'Whole-home user journeys'],
    deliverables: ['Private residences', 'Multi-room refurbishments'],
  },
  {
    id: 'security',
    title: 'Security Systems',
    description:
      'Protection, monitoring, and access layers designed to support the property without dominating it.',
    detail:
      'Security works best when it is dependable, discreet, and aligned with how the building is actually used. We design for that balance.',
    image: servicesPageImages.details.security,
    icon: Shield,
    capabilities: ['CCTV and remote viewing', 'Access control', 'Intruder alarms', 'Video entry and perimeter logic'],
    deliverables: ['Residential security', 'Business premises'],
  },
  {
    id: 'data-fibre',
    title: 'Data & Fibre',
    description:
      'Structured infrastructure that gives modern offices and connected homes a durable technical backbone.',
    detail:
      'We plan data routes and cabinet strategy with future use in mind so networks stay reliable as the building evolves.',
    image: servicesPageImages.details.dataFibre,
    icon: Database,
    capabilities: ['Structured cabling', 'Fibre backbone design', 'Comms cabinets', 'Wireless coverage planning'],
    deliverables: ['Office environments', 'High-connectivity homes'],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      'Operational stability after installation, with pragmatic support when systems need attention.',
    detail:
      'For commercial clients especially, support is part of the deliverable. We help bridge the gap between installation, handover, and ongoing use.',
    image: servicesPageImages.details.itSupport,
    icon: Server,
    capabilities: ['Workstation deployment', 'Network support', 'Server room setup', 'Managed support responses'],
    deliverables: ['SME operations', 'Post-handover support'],
  },
] as const

const advantageCards = [
  {
    title: 'Single point of accountability',
    description:
      'Clients get one coordinated lead rather than chasing multiple technical packages across the same programme.',
  },
  {
    title: 'Better sequencing on site',
    description:
      'Joined-up scopes reduce clashes between trades and help protect finished surfaces during delivery.',
  },
  {
    title: 'Consistent technical judgement',
    description:
      'Decisions about power, data, automation, and security are made with the whole building in mind.',
  },
  {
    title: 'Cleaner handover',
    description:
      'Testing, documentation, and user orientation are easier when the installation has been coordinated from the start.',
  },
  {
    title: 'Future-ready infrastructure',
    description:
      'We design for growth, adaptation, and sensible service access rather than only the immediate brief.',
  },
  {
    title: 'A calmer client experience',
    description:
      'The real benefit is less friction: fewer surprises, fewer fragmented conversations, and more confidence at each stage.',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={servicesPageImages.hero}
        eyebrow="Our Services"
        title="Integrated technical disciplines for projects that need more than a single trade."
        description="We deliver core electrical work, smart systems, security, data, and operational support in a way that reduces coordination noise and strengthens the finished environment."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/56">
              Core Disciplines
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Electrical', 'Smart Home', 'Security', 'Data & Fibre', 'IT Support'].map((item) => (
                <span
                  key={item}
                  className="overlay-card rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] overlay-copy"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <ServicesDetailSection />
      <AdvantagesSection />
      <ServicesCtaSection />
    </>
  )
}

function ServicesDetailSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="space-y-14 md:space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id} id={service.id}>
              <div
                className={`grid gap-8 rounded-[2rem] border border-border/70 bg-white/82 p-6 shadow-panel md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/7 text-primary">
                      <service.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-muted">
                      Integrated Service
                    </span>
                  </div>
                  <h2 className="mt-7 font-display text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-text-primary md:text-[3rem]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-text-secondary">
                    {service.description}
                  </p>
                  <p className="mt-6 max-w-2xl text-sm leading-8 text-text-secondary">
                    {service.detail}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.72fr)]">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-muted">
                        Typical Scope
                      </span>
                      <ul className="mt-4 space-y-3">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex gap-3 text-sm leading-7 text-text-secondary">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[1.5rem] border border-border/60 bg-[#f7f1e8] p-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-muted">
                        Often Used In
                      </span>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary/14 bg-primary/6 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-primary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.8rem] shadow-[0_22px_54px_rgba(34,22,18,0.12)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      placeholder={service.image.blurDataURL ? 'blur' : 'empty'}
                      blurDataURL={service.image.blurDataURL}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: service.image.objectPosition }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function AdvantagesSection() {
  return (
    <section className="section-defer bg-[#120f0d] py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Concepto"
            heading="The advantage is less fragmentation, not more complexity."
            subheading="A joined-up technical partner creates benefits that show up in programme control, site calm, finish quality, and handover confidence."
            tone="light"
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantageCards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 + index * 0.05}>
              <div className="overlay-card h-full rounded-[1.75rem] p-7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                <h3 className="font-display text-[1.8rem] leading-[0.98] tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 overlay-copy-soft">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ServicesCtaSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2.2rem] border border-primary/20 bg-[linear-gradient(135deg,#7c2633_0%,#4e1821_100%)] px-8 py-12 text-white shadow-[0_28px_70px_rgba(124,38,51,0.26)] md:px-12 md:py-14 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] overlay-eyebrow">
                Next Step
              </span>
              <h2 className="mt-7 font-display text-[2.6rem] leading-[0.94] tracking-[-0.05em] text-white md:text-[3.4rem]">
                Ready to discuss the technical scope behind your project?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 overlay-copy md:text-lg">
                We can review the brief, identify the right disciplines, and help shape a clearer
                route into delivery.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f1e9df] lg:mt-0"
            >
              Get in touch <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
