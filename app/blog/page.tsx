import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import BlogBoard, { type BlogPostCard } from '@/components/blog/BlogBoard'
import { blogPageImages } from '@/data/siteImages'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'IT, Microsoft and automation insights from Concepto Solutions — articles on Teams, Power Automate, PowerApps and low-code tools.',
}

const posts: BlogPostCard[] = [
  {
    id: '1',
    title: 'Staying productive while working remotely with Microsoft Teams',
    excerpt:
      'A practical look at how Microsoft Teams can support collaboration, communication and day-to-day productivity for remote teams.',
    category: 'Microsoft Teams',
    date: '28 Feb 2019',
    readTime: '4 min read',
    image: blogPageImages.posts.regulations,
  },
  {
    id: '2',
    title: 'Prolific app maker ignites low code revolution at Schlumberger',
    excerpt:
      'An example of how low-code tools can speed up process improvement and help large organisations move faster.',
    category: 'Low Code',
    date: '28 Feb 2019',
    readTime: '4 min read',
    image: blogPageImages.posts.technology,
  },
  {
    id: '3',
    title: 'Digitally Transform Your Enterprise with Power Automate: Our Journey to Enable Your Digital Transformation, Part 1',
    excerpt:
      'A Power Automate-focused article on business automation and the practical steps involved in digital transformation.',
    category: 'Power Automate',
    date: '28 Feb 2019',
    readTime: '4 min read',
    image: blogPageImages.posts.safety,
  },
  {
    id: '4',
    title: 'Kelly Roofing uses PowerApps to capture photos at work sites',
    excerpt:
      'A PowerApps case study showing how mobile tools can improve site reporting and field data capture.',
    category: 'PowerApps',
    date: '18 Feb 2019',
    readTime: '4 min read',
    image: blogPageImages.posts.infrastructure,
  },
] as const

export default function BlogPage() {
  return (
    <>
      <PageHero
        priority
        image={blogPageImages.hero}
        eyebrow="Insights"
        title="IT, Microsoft & Automation Insights"
        description="This page reflects the themes on Concepto's official blog, including Microsoft Teams, low-code tools, Power Automate and PowerApps for business users."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] overlay-eyebrow">
              Editorial Themes
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Microsoft Teams', 'Low Code', 'Power Automate', 'PowerApps'].map((item) => (
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
              eyebrow="Blog Archive"
              heading="Articles from the official archive."
              subheading="These posts focus on collaboration, automation and practical digital workplace improvements for business users."
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
              <span className="lux-eyebrow text-primary">Need business IT support</span>
              <h2 className="mt-7 font-display text-[2.45rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[3.15rem]">
                Concepto Solutions can help with Microsoft platforms, managed services and day-to-day IT support.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                We provide 24/7 UK-based IT support, cloud migration and Microsoft platform
                solutions for businesses.
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
