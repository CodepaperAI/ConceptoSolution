import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import BlogBoard, { type BlogPostCard } from '@/components/blog/BlogBoard'
import { blogPageImages } from '@/data/siteImages'

const posts: BlogPostCard[] = [
  {
    id: '1',
    title: 'Understanding Part P Building Regulations',
    excerpt:
      'A practical guide to how residential electrical compliance shapes specification, sequencing, and final sign-off.',
    category: 'Regulations',
    date: '15 Mar 2026',
    readTime: '5 min read',
    image: blogPageImages.posts.regulations,
  },
  {
    id: '2',
    title: 'The Future of Smart Home Integration',
    excerpt:
      'Why the best automation systems are becoming calmer, more intuitive, and less visually intrusive.',
    category: 'Technology',
    date: '10 Mar 2026',
    readTime: '7 min read',
    image: blogPageImages.posts.technology,
  },
  {
    id: '3',
    title: 'Commercial Electrical Safety Standards',
    excerpt:
      'What building operators and fit-out teams should prioritise to keep commercial environments compliant and dependable.',
    category: 'Safety',
    date: '05 Mar 2026',
    readTime: '6 min read',
    image: blogPageImages.posts.safety,
  },
  {
    id: '4',
    title: 'Data Cabling Infrastructure for Modern Offices',
    excerpt:
      'A clear look at how thoughtful network planning improves both current usability and future adaptability.',
    category: 'Infrastructure',
    date: '28 Feb 2026',
    readTime: '8 min read',
    image: blogPageImages.posts.infrastructure,
  },
] as const

export default function BlogPage() {
  return (
    <>
      <PageHero
        image={blogPageImages.hero}
        eyebrow="Insights"
        title="Notes on regulations, systems thinking, and better technical environments."
        description="Our blog focuses on the practical decisions that shape coordinated delivery, compliance, long-term performance, and the everyday experience of using well-designed systems."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              Editorial Themes
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Regulations', 'Technology', 'Safety', 'Infrastructure'].map((item) => (
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

      <section className="section-defer py-24 md:py-32 lg:py-36">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Latest Writing"
              heading="Useful updates for clients, design teams, and project stakeholders."
              subheading="The focus is practical: what changes compliance, usability, project coordination, and long-term system performance in the real world."
              className="max-w-4xl"
            />
          </Reveal>

          <div className="mt-16">
            <BlogBoard posts={posts} />
          </div>
        </Container>
      </section>

      <BlogCtaSection />
    </>
  )
}

function BlogCtaSection() {
  return (
    <section className="pb-24 md:pb-32 lg:pb-36">
      <Container>
        <Reveal>
          <div className="lux-panel px-8 py-10 md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <span className="lux-eyebrow text-primary">Need project advice</span>
              <h2 className="mt-7 font-display text-[2.45rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[3.15rem]">
                If your project has questions behind the specification, we can help answer those too.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                The best conversations usually start before technical decisions have hardened into
                avoidable constraints.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover lg:mt-0"
            >
              Contact the team <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
