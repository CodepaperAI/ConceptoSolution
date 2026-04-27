import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import { aboutPageImages, carouselImages } from '@/data/siteImages'

// DOCX: the About Us hero should be IMG_0140 (same interior-lighting shot that
// leads the Electrical carousel). Fall back to the legacy About hero if the
// site-photo ingest hasn't run yet.
const aboutHeroImage = carouselImages.aboutHero[0] ?? aboutPageImages.hero

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Established in 2003, Concepto Solutions delivers smart home automation, electrical services and IT support across London for homeowners, developers and businesses.',
}

const londonLocations = ['Mayfair', 'Oxford Street', 'Regent Street', 'Soho', 'Battersea'] as const

const clientBrands = [
  'Longchamp',
  'Rimowa',
  'Goldwin',
  'Diptyque',
  'Rolex',
  'Miller Knoll',
  'Herman Miller',
  'Holly Hunt',
  'Osprey',
  'Ritu Seasons of India',
  'The OWO Residences',
] as const

const internationalReach = ['Oman', 'Dubai', 'China', 'India'] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        priority
        showCta={false}
        image={aboutHeroImage}
        eyebrow="About Us"
        title="About Concepto Solutions Ltd"
        description="Established in 2003, Concepto Solutions is a London-based team delivering smart home automation, audio visual, electrical and IT services. We work with homeowners, developers and businesses across London and the wider UK."
      />

      <ChapterOneBuiltOnBelief />
      <StatsStrip />
      <ChapterTwoNewChapter />
      <ChapterThreeOurReach />
      <PhilosophySection />
      <ClosingTagline />
      <OurFounderSection />
    </>
  )
}

function ChapterOneBuiltOnBelief() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
          <Reveal direction="left">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">
                Chapter 01
              </span>
              <p className="mt-6 font-sans text-[10rem] font-semibold leading-[0.85] tracking-[-0.06em] text-primary/75 md:text-[12rem] lg:text-[14rem]">
                2003
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
                Built on Belief
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <p className="font-sans text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.02em] text-text-primary md:text-[1.8rem]">
                An idea took shape. Not in a boardroom. Not backed by investors. But built on belief.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6 text-base leading-8 text-text-secondary md:text-lg md:leading-9">
              <Reveal delay={0.12}>
                <p>
                  Two technically driven professionals chose to step away from certainty and create
                  something of their own. What began in 2003 laid the foundation for what would
                  become Concepto Solutions Ltd, a company defined not by scale, but by standards.
                  From day one, it was about craftsmanship, precision and independence. About doing
                  the work properly, or not at all.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  The early years were disciplined. Long days. Relentless refinement. A growing team
                  united by a shared expectation of excellence. As trust deepened and projects became
                  more ambitious, the vision expanded beyond installation into integration, beyond
                  hardware into experience.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function StatsStrip() {
  return (
    <section className="border-y border-border/70 bg-bg-secondary/40 py-10">
      <Container>
        <Reveal direction="scale">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-10">
            <StatItem value="23" label="Years" />
            <StatDivider />
            <StatItem value="4" label="Countries" />
            <StatDivider />
            <StatItem value="1" label="Standard" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-sans text-3xl font-semibold text-primary md:text-4xl">{value}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-text-secondary">
        {label}
      </span>
    </div>
  )
}

function StatDivider() {
  return <span className="hidden font-mono text-2xl text-text-muted md:inline">·</span>
}

function ChapterTwoNewChapter() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-luxury">
              <div className="relative aspect-[4/5] md:aspect-[5/4]">
                <Image
                  src={aboutPageImages.approach.src}
                  alt={aboutPageImages.approach.alt}
                  fill
                  placeholder={aboutPageImages.approach.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={aboutPageImages.approach.blurDataURL}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  quality={72}
                  className="object-cover"
                  style={{ objectPosition: aboutPageImages.approach.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.06)_0%,rgba(14,11,10,0.4)_100%)]" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">
                Chapter 02
              </span>
              <h2 className="mt-6 font-sans font-semibold text-[2.25rem] leading-[1.05] tracking-[-0.035em] text-text-primary md:text-[2.75rem] lg:text-[3.25rem]">
                A New Chapter
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-8 text-text-secondary md:text-lg md:leading-9">
                In 2009, the company entered its next chapter as Concepto Solutions Ltd. With Arvin
                Halai taking full leadership, the direction became even clearer, more focused and
                more intentional. The foundation remained the same, the same team, the same clients,
                the same commitment to quality, but the ambition grew stronger.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 rounded-[1.5rem] border-l-2 border-primary bg-bg-secondary/40 px-6 py-6 md:px-8">
                <p className="font-sans text-[1.1rem] leading-9 text-text-primary md:text-[1.2rem]">
                  Electrical systems became the backbone of intelligent spaces.
                  <br />
                  Networks became the invisible architecture of modern living.
                  <br />
                  Audio-visual environments became immersive, intuitive and effortless.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ChapterThreeOurReach() {
  return (
    <section className="section-defer bg-bg-secondary/30 py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">
            Chapter 03
          </span>
          <h2 className="mt-6 max-w-4xl font-sans font-semibold text-[2.25rem] leading-[1.05] tracking-[-0.035em] text-text-primary md:text-[2.75rem] lg:text-[3.25rem]">
            Our Reach
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-6 text-base leading-8 text-text-secondary md:text-lg md:leading-9">
            <Reveal delay={0.08}>
              <p>
                Over more than two decades of continuous evolution, Concepto Solutions has delivered
                projects ranging from refined private residences to large multi-dwelling developments,
                from commercial environments to flagship retail destinations.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p>
                Our work can be found across London&apos;s most distinguished addresses. Within these
                iconic locations, we have delivered environments for some of the world&apos;s most
                respected brands.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                From the refined dining experience of Ritu Seasons of India to private residences such
                as the prestigious The OWO Residences, each project reflects the same uncompromising
                standard.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p>
                From London, we expanded internationally, delivering projects in Oman, Dubai, China
                and India, integrating world-class technology into architecturally exceptional spaces
                across continents.
              </p>
            </Reveal>
          </div>

          <div className="space-y-10">
            <Reveal delay={0.12}>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-muted">
                  London Addresses
                </span>
                <div className="mt-5 flex flex-wrap gap-2">
                  {londonLocations.map((loc) => (
                    <span
                      key={loc}
                      className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-muted">
                  Selected Clients
                </span>
                <div className="mt-5 flex flex-wrap gap-2">
                  {clientBrands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-border bg-bg-secondary/70 px-4 py-2.5 font-sans text-sm text-text-primary"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-[1.5rem] border border-border/70 bg-bg-secondary/50 px-6 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-muted">
                  International Work
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {internationalReach.map((country, idx) => (
                    <span key={country} className="flex items-center gap-6">
                      <span className="font-sans font-semibold text-lg text-text-primary md:text-xl">
                        {country}
                      </span>
                      {idx < internationalReach.length - 1 && (
                        <span className="font-mono text-text-muted">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a09] py-28 md:py-36 lg:py-44">
      <div className="absolute inset-0">
        <Image
          src={aboutPageImages.hero.src}
          alt=""
          fill
          placeholder={aboutPageImages.hero.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={aboutPageImages.hero.blurDataURL}
          sizes="100vw"
          quality={72}
          className="object-cover opacity-30"
          style={{ objectPosition: aboutPageImages.hero.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,10,9,0.88)_0%,rgba(13,10,9,0.72)_50%,rgba(13,10,9,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,10,9,0.6)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.36em] text-secondary">
              The Philosophy
            </span>
          </Reveal>
          <div className="mt-12 space-y-5 font-sans font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            <Reveal delay={0.1}>
              <p className="text-[clamp(1.6rem,3.2vw,2.4rem)] text-white/75">
                The philosophy has never changed.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[clamp(2.2rem,4.8vw,3.6rem)]">
                Technology should not dominate a space.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-[clamp(2.2rem,4.8vw,3.6rem)] text-secondary">
                It should define it quietly.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-[clamp(2.2rem,4.8vw,3.6rem)]">It should not complicate.</p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="text-[clamp(2.2rem,4.8vw,3.6rem)] text-secondary">It should empower.</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ClosingTagline() {
  return (
    <section className="section-defer py-24 md:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl border-y border-border/70 py-16 text-center md:py-20">
          <Reveal direction="scale">
            <span className="font-mono text-[11px] uppercase tracking-[0.36em] text-primary">
              The Belief
            </span>
            <p className="mt-8 font-sans font-semibold text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-text-primary">
              We were not built for short-term growth.
              <br />
              We were built to last.
            </p>
            <p className="mt-10 text-sm leading-7 text-text-muted md:text-base">
              After 23 years, Concepto Solutions Ltd remains driven by the same belief that started
              it all — build with integrity, engineer with precision, and create environments where
              technology and design exist in perfect balance.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function OurFounderSection() {
  return (
    <section className="section-defer bg-[#0d0a09] py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-16">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-[300px] lg:mx-0">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(200,171,141,0.22),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(124,38,51,0.28),transparent_60%)] blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/8 shadow-luxury ring-1 ring-white/5">
                <Image
                  src={aboutPageImages.founder.src}
                  alt={aboutPageImages.founder.alt}
                  fill
                  placeholder={aboutPageImages.founder.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={aboutPageImages.founder.blurDataURL}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 300px, 80vw"
                  quality={88}
                  className="object-cover"
                  style={{ objectPosition: aboutPageImages.founder.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0)_60%,rgba(14,11,10,0.38)_100%)]" />
              </div>
              <figcaption className="mt-6 text-center lg:text-left">
                <span className="block font-sans font-semibold text-[1.15rem] leading-tight tracking-[-0.015em] text-white">
                  Arvin Halai
                </span>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-secondary">
                  Founder · Concepto Solutions Ltd
                </span>
              </figcaption>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our Founder"
                heading="Arvin Halai"
                subheading="Founder, Concepto Solutions Ltd"
                tone="light"
              />
            </Reveal>

            <div className="mt-10 space-y-5 text-base leading-8 overlay-copy md:text-lg md:leading-9">
              <Reveal delay={0.08}>
                <p className="text-white">Before there was a company, there was a standard.</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Arvin Halai began his career in IT, working as a technician servicing systems and
                  supporting clients. It was in those early years he saw the gap, solutions were being
                  delivered, but rarely with long-term thinking or true integration. There was an
                  opportunity to do things differently.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  In 2003, he chose to act on it. Stepping away from certainty, he set out to build a
                  company defined by quality, discipline and accountability. Every project would be
                  approached with intent, where electrical, AV and network systems work seamlessly as
                  one.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <blockquote className="my-10 border-l-2 border-primary pl-6 md:pl-8">
                  <p className="font-sans font-semibold text-[1.6rem] leading-[1.2] tracking-[-0.02em] text-white md:text-[2rem]">
                    &ldquo;Good enough is never enough.&rdquo;
                  </p>
                  <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-secondary">
                    Arvin Halai · Founder
                  </footer>
                </blockquote>
              </Reveal>

              <Reveal delay={0.24}>
                <p>
                  By 2009, under his full leadership, that vision became sharper and more focused.
                  The goal was clear, deliver intelligent environments where technology integrates
                  effortlessly into the space.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <p>
                  His approach remains consistent. Detail matters. Standards are non-negotiable. More
                  than two decades on, that same mindset continues to define Concepto Solutions Ltd,
                  built not for rapid growth, but to last.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
