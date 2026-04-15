import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import { projectsPageImages } from '@/data/siteImages'
import { projectEntries } from '@/data/projects'
import ProjectGallery from './ProjectGallery'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A portfolio of residential, commercial and private client projects featuring smart home, electrical, security and IT services by Concepto Solutions.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        priority
        image={projectsPageImages.hero}
        eyebrow="Portfolio"
        title="Selected Portfolio Projects"
        description="A portfolio of residential, private client and commercial environments supported by smart home, electrical, security and IT services."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              Typical Clients
            </p>
            <div className="mt-6 grid gap-3">
              {['Homeowners', 'Developers', 'Architects', 'Businesses'].map((item) => (
                <div
                  key={item}
                  className="overlay-card rounded-full px-4 py-3 text-[11px] uppercase tracking-[0.18em] overlay-copy"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-defer py-24 md:py-32 lg:py-36">
        <Container>
          <ProjectGallery projects={projectEntries} />
        </Container>
      </section>

      <ProjectsCtaSection />
    </>
  )
}

function ProjectsCtaSection() {
  return (
    <section className="section-defer pb-24 md:pb-32 lg:pb-36">
      <Container>
        <Reveal>
          <div className="lux-panel px-8 py-10 md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <span className="lux-eyebrow text-primary">Project Enquiries</span>
              <h2 className="mt-7 font-display text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-text-primary md:text-[3.25rem]">
                Planning a project for the portfolio stage?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                We can review the service mix, the technical scope and the best next step for a residential or commercial brief.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover lg:mt-0"
            >
              Book a Survey <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
