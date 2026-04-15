import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical, smart home automation, security, data networking and IT support services for residential and commercial projects across London.',
}

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
      'NICEIC-approved electrical installation, maintenance and testing for homes, commercial premises and managed buildings.',
    detail:
      'Our electricians and engineers work to BS 7671 standards on new installations, rewires, consumer units, lighting, inspections and ongoing maintenance.',
    image: servicesPageImages.details.electrical,
    icon: Zap,
    capabilities: [
      'Electrical installations',
      'House rewiring and consumer units',
      'Lighting and power',
      'Electrical testing and inspection',
      'PAT testing and maintenance',
      'Emergency lighting and smoke alarms',
    ],
    deliverables: ['Homeowners', 'Building managers'],
  },
  {
    id: 'smart-home',
    title: 'Smart Home Solutions',
    description:
      'Smart home control, climate control, lighting and blind automation, security and multi-room audio for London homes.',
    detail:
      'We work with Control4, Crestron and Lutron to create systems that are simple to use today and flexible enough for future upgrades.',
    image: servicesPageImages.details.smartHome,
    icon: HomeIcon,
    capabilities: [
      'Smart home control',
      'Climate control',
      'Lighting and blind automation',
      'Multi-room audio',
      'Integrated security',
      'Audio visual installation',
    ],
    deliverables: ['Homeowners', 'Developers'],
  },
  {
    id: 'security',
    title: 'Security Systems',
    description:
      'CCTV, door entry, video entry and fire systems that protect homes, developments and commercial premises.',
    detail:
      'Security sits alongside our wider electrical and smart home offer, helping clients combine safety, access and monitoring in one coordinated installation.',
    image: servicesPageImages.details.security,
    icon: Shield,
    capabilities: [
      'CCTV systems',
      'Door entry systems',
      'Video entry systems',
      'Fire systems',
      'Smoke alarms',
      'Integrated security solutions',
    ],
    deliverables: ['Residential properties', 'Commercial buildings'],
  },
  {
    id: 'data-fibre',
    title: 'Data & Networking',
    description:
      'Data wiring and IT networking design that support reliable connectivity across offices, developments and connected homes.',
    detail:
      'From structured cabling to network design and installation, we create the backbone that supports digital workspaces, smart systems and daily operations.',
    image: servicesPageImages.details.dataFibre,
    icon: Database,
    capabilities: [
      'Data wiring',
      'IT networking design',
      'Structured cabling',
      'Network installation',
      'Connected workspace infrastructure',
      'Reliable wired and wireless coverage',
    ],
    deliverables: ['Businesses', 'Developers'],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      '24/7 UK-based IT support, managed services, cloud migration and Microsoft platform solutions for businesses.',
    detail:
      'We assess your IT needs, recommend the right solution and provide ongoing support so teams can keep working without unnecessary disruption.',
    image: servicesPageImages.details.itSupport,
    icon: Server,
    capabilities: [
      'Collaboration and communication',
      'Business process automation',
      'Information management and compliance',
      'Microsoft platform solutions',
      'Managed services and support',
      'Cloud migration',
    ],
    deliverables: ['Businesses', 'Modern workplaces'],
  },
] as const

const advantageCards = [
  {
    title: 'Established in 2003',
    description:
      'More than two decades of delivery gives clients confidence across residential and commercial projects.',
  },
  {
    title: 'NICEIC Approved Contractor',
    description:
      'Electrical work is delivered to recognised UK standards with safety and compliance built into the process.',
  },
  {
    title: 'TrustMark Registered',
    description:
      'Clients benefit from an additional layer of assurance through a government-endorsed quality scheme.',
  },
  {
    title: 'Smart home and AV expertise',
    description:
      'Automation, lighting control, audio visual and integrated security can be planned together instead of in isolation.',
  },
  {
    title: '24/7 IT support',
    description:
      'Business clients can rely on managed support, Microsoft solutions and practical day-to-day technical help.',
  },
  {
    title: 'London-based delivery',
    description:
      'We support homeowners, developers and businesses across London and the wider UK with one dependable team.',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <PageHero
        priority
        image={servicesPageImages.hero}
        eyebrow="Our Services"
        title="Electrical, Smart Home & IT"
        description="Concepto Solutions delivers smart home automation, electrical services and business IT support, with related audio visual, CCTV, fire and networking work handled by one team."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              Core Disciplines
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Electrical Solutions', 'Smart Home Solutions', 'Security Systems', 'Data Wiring', 'IT Support'].map((item) => (
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
                className={`grid gap-8 rounded-[2rem] border border-border/70 bg-bg-secondary/80 p-6 shadow-panel md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 ${
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
                    <div className="rounded-[1.5rem] border border-border/60 bg-bg-secondary p-5">
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
                      quality={72}
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
            heading="Accredited work. Integrated systems. Long-term support."
            subheading="The benefit is a single team that can advise clearly, install properly and stay available after handover."
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
                Need the right service mix for your project?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 overlay-copy md:text-lg">
                We can review the brief, identify the appropriate disciplines and recommend the
                most suitable next step.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f1e9df] lg:mt-0"
            >
              Get a Free Quote <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
