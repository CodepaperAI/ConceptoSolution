import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import { projectsPageImages } from '@/data/siteImages'
import { projectEntries } from '@/data/projects'
import ProjectGallery from './ProjectGallery'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A curated selection of our recent work, showcasing precision-led installations across residential, retail, and commercial spaces.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        priority
        showCta={false}
        image={projectsPageImages.hero}
        eyebrow="Portfolio"
        title="Our Projects"
        description="A curated selection of our recent work, showcasing precision-led installations across residential, retail, and commercial spaces."
      />

      <section className="section-defer py-16 md:py-24 lg:py-32 xl:py-36">
        <Container>
          <ProjectGallery projects={projectEntries} />
        </Container>
      </section>
    </>
  )
}
