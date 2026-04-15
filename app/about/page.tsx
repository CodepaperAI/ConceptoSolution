import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import CountUpValue from '@/components/motion/CountUpValue'
import PageHero from '@/components/ui/PageHero'
import { aboutPageImages } from '@/data/siteImages'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Established in 2003, Concepto Solutions delivers smart home automation, electrical services and IT support across London for homeowners, developers and businesses.',
}

const values = [
  {
    title: 'Founded in 2003',
    description:
      'Concepto Solutions was established in 2003 and has grown from electrical contracting into smart home, audio visual and IT services.',
  },
  {
    title: 'NICEIC Approved Contractor',
    description:
      'Our electrical work is backed by NICEIC approval, giving clients added confidence in safety, compliance and workmanship.',
  },
  {
    title: 'TrustMark Registered',
    description:
      'TrustMark registration reflects a government-endorsed standard for reputable contractors working in homes and businesses.',
  },
  {
    title: 'London-based team',
    description:
      'We support homeowners, developers, architects and commercial businesses across London and the wider UK.',
  },
] as const

const approachSteps = [
  {
    number: '01',
    title: 'Understand the brief',
    description:
      'We take time to understand the property, the people using it and whether the project is domestic or commercial.',
  },
  {
    number: '02',
    title: 'Recommend the solution',
    description:
      'Our team discusses the options and recommends the most suitable and cost-effective mix of electrical, smart home or IT services.',
  },
  {
    number: '03',
    title: 'Install and integrate',
    description:
      'We deliver the agreed systems with close attention to safety, coordination and the quality of the finished environment.',
  },
  {
    number: '04',
    title: 'Maintain and support',
    description:
      'Testing, handover and ongoing support help keep home technology, electrical systems and business IT reliable after completion.',
  },
] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        priority
        image={aboutPageImages.hero}
        eyebrow="About Us"
        title="About Concepto Solutions Ltd"
        description="Established in 2003, Concepto Solutions is a London-based team delivering smart home automation, audio visual, electrical and IT services. We work with homeowners, developers and businesses across London and the wider UK."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              At A Glance
            </p>
            <div className="mt-6 grid gap-5">
              {[
                'Founded in 2003',
                'NICEIC Approved Contractor',
                'TrustMark Registered',
              ].map((item) => (
                <div key={item} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm leading-7 overlay-copy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <StorySection />
      <ValuesSection />
      <ApproachSection />
    </>
  )
}

function StorySection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our Story"
                heading="Built on electrical. Expanded to smart home, AV and IT."
                subheading="Concepto Solutions started in electrical contracting and grew to meet the wider technical needs of residential and commercial clients across London and the UK."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: 2003, suffix: '', label: 'Founded' },
                  { value: 2008, suffix: '', label: 'NICEIC member since' },
                  { value: 24, suffix: '/7', label: 'UK IT support' },
                ].map((item, index) => (
                  <div key={item.label} className="lux-panel p-5">
                    <CountUpValue
                      value={item.value}
                      suffix={item.suffix}
                      delay={index * 0.08}
                      className="font-display text-[2.3rem] leading-none tracking-[-0.04em] text-primary"
                    />
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <blockquote className="mt-10 border-l border-primary/35 pl-6 text-base leading-8 text-text-secondary md:text-lg">
                We take time to understand the brief, explain the options and recommend the most
                suitable and cost-effective solution.
              </blockquote>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-luxury">
              <div className="relative aspect-[4/5] md:aspect-[5/4]">
                <Image
                  src={aboutPageImages.story.src}
                  alt={aboutPageImages.story.alt}
                  fill
                  placeholder={aboutPageImages.story.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={aboutPageImages.story.blurDataURL}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  quality={72}
                  className="object-cover"
                  style={{ objectPosition: aboutPageImages.story.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.04)_0%,rgba(16,12,10,0.3)_48%,rgba(16,12,10,0.68)_100%)]" />
              </div>
              <div className="overlay-panel absolute bottom-5 right-5 max-w-[15rem] rounded-[1.4rem] px-5 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-eyebrow">
                  London Based
                </span>
                <p className="mt-3 text-sm leading-7 overlay-copy">
                  Our clients include homeowners, developers, architects and commercial businesses.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="section-defer bg-[#120f0d] py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            heading="Accredited electrical. Smart home, AV and business IT."
            subheading="That mix helps clients brief once, coordinate less and keep their project moving with one dependable team."
            tone="light"
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.06 + index * 0.06}>
              <div className="overlay-card h-full rounded-[1.8rem] p-7 text-white shadow-[0_18px_46px_rgba(0,0,0,0.14)] md:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] overlay-meta">
                  0{index + 1}
                </span>
                <h3 className="mt-7 font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 overlay-copy-soft">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start lg:gap-16">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[2.1rem] shadow-luxury">
              <div className="relative aspect-[4/5] md:aspect-[6/5]">
                <Image
                  src={aboutPageImages.approach.src}
                  alt={aboutPageImages.approach.alt}
                  fill
                  placeholder={aboutPageImages.approach.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={aboutPageImages.approach.blurDataURL}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  quality={72}
                  className="object-cover"
                  style={{ objectPosition: aboutPageImages.approach.objectPosition }}
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                heading="Listen. Design. Install. Stay."
                subheading="That same approach supports smart home projects, electrical packages, security systems and managed IT services."
              />
            </Reveal>

            <div className="mt-10 space-y-5">
              {approachSteps.map((step, index) => (
                <Reveal key={step.number} delay={0.08 + index * 0.05}>
                  <div className="flex gap-5 rounded-[1.5rem] border border-border/70 bg-bg-secondary/80 p-5 shadow-panel md:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/6 text-primary">
                      <span className="font-mono text-sm font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-[1.55rem] leading-[0.96] tracking-[-0.035em] text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Get a Free Quote <ArrowRight size={15} />
                </Link>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  <Check className="h-4 w-4 text-primary" />
                  London-based since 2003
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
