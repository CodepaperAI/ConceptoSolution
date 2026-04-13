import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import CountUpValue from '@/components/motion/CountUpValue'
import PageHero from '@/components/ui/PageHero'
import { aboutPageImages } from '@/data/siteImages'

const values = [
  {
    title: 'Premium confidence',
    description:
      'Clients come to us for technical certainty delivered with calm, finish-led judgement rather than noise.',
  },
  {
    title: 'Architectural clarity',
    description:
      'We coordinate the hidden systems so the visible environment can stay composed and intentional.',
  },
  {
    title: 'Restrained theatrical motion',
    description:
      'Movement and automation should elevate the experience without making the building feel over-designed.',
  },
  {
    title: 'Smooth-first delivery',
    description:
      'Our best work reduces friction on site, during handover, and in how the finished space is actually used.',
  },
] as const

const approachSteps = [
  {
    number: '01',
    title: 'Brief with context',
    description:
      'We listen for the operational needs behind the specification, not just the product list in front of it.',
  },
  {
    number: '02',
    title: 'Compose the system',
    description:
      'Electrical, data, automation, AV, and security are resolved together so the project behaves like one design decision.',
  },
  {
    number: '03',
    title: 'Protect the finish',
    description:
      'Delivery stays disciplined on site, with sequencing and detailing set up to protect the quality of the completed environment.',
  },
  {
    number: '04',
    title: 'Support after handover',
    description:
      'We stay close through testing, client orientation, and any adjustments needed once the building is in use.',
  },
] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={aboutPageImages.hero}
        eyebrow="About Concepto"
        title="Precision, accountability, and quietly ambitious technical delivery."
        description="We serve residential and commercial clients who need the underlying systems to feel coherent, dependable, and well judged from the earliest design conversations through final handover."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/56">
              Built Around
            </p>
            <div className="mt-6 grid gap-5">
              {[
                'Electrical expertise at the core',
                'Integrated systems as standard',
                'Careful coordination across trades',
              ].map((item) => (
                <div key={item} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm leading-7 text-white/84">{item}</p>
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
                heading="We expanded from electrical delivery into integrated systems because clients kept needing a more joined-up answer."
                subheading="The demand was consistent: fewer fragmented conversations, fewer coordination gaps on site, and a final result that felt technically complete without sacrificing the architectural finish."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: 20, suffix: '+', label: 'Years of experience' },
                  { value: 500, suffix: '+', label: 'Project environments' },
                  { value: 5, suffix: '', label: 'Core disciplines delivered' },
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
                We are at our best when the client wants rigor without friction and technical depth
                without the process becoming theatrical.
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
                  className="object-cover"
                  style={{ objectPosition: aboutPageImages.story.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.04)_0%,rgba(16,12,10,0.3)_48%,rgba(16,12,10,0.68)_100%)]" />
              </div>
              <div className="overlay-panel absolute bottom-5 right-5 max-w-[15rem] rounded-[1.4rem] px-5 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] overlay-eyebrow">
                  Experience-led
                </span>
                <p className="mt-3 text-sm leading-7 overlay-copy">
                  Our growth has come from solving adjacent technical problems for the same clients
                  and teams.
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
            eyebrow="What Shapes The Work"
            heading="A more premium result usually comes from discipline, not excess."
            subheading="These principles guide how we specify, coordinate, install, and support the spaces clients trust us with."
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
                heading="Every phase is designed to make the next phase cleaner."
                subheading="That applies to briefing, coordination, on-site delivery, and the experience of using the finished systems afterwards."
              />
            </Reveal>

            <div className="mt-10 space-y-5">
              {approachSteps.map((step, index) => (
                <Reveal key={step.number} delay={0.08 + index * 0.05}>
                  <div className="flex gap-5 rounded-[1.5rem] border border-border/70 bg-white/82 p-5 shadow-panel md:p-6">
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
                  Start a conversation <ArrowRight size={15} />
                </Link>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  <Check className="h-4 w-4 text-primary" />
                  Finish-led delivery mindset
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
