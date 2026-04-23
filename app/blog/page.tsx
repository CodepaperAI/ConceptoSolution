import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import { blogPageImages } from '@/data/siteImages'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'What our clients say about Concepto Solutions — feedback from homeowners, developers, architects and businesses across London and beyond.',
}

const testimonials = [
  {
    name: 'Nat Reynolds',
    role: 'Chief Accountant',
    initials: 'NR',
    quote:
      'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.',
  },
  {
    name: 'Celia Almeda',
    role: 'Secretary',
    initials: 'CA',
    quote:
      'Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.',
  },
  {
    name: 'Bob Roberts',
    role: 'Sales Manager',
    initials: 'BR',
    quote:
      'Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.',
  },
] as const

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        priority
        showCta={false}
        image={blogPageImages.hero}
        eyebrow="Testimonials"
        title="What Our Clients Say"
        description="We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right."
      />

      <TestimonialsSection />
    </>
  )
}

function TestimonialsSection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            heading="What Clients Say"
            subheading="We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right."
            alignment="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.08 + index * 0.08} direction="scale">
              <article className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-bg-secondary/70 p-8 shadow-panel backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-sans font-semibold text-lg text-primary">
                  {item.initials}
                </div>
                <p className="mt-7 flex-1 text-base leading-8 text-text-secondary">
                  <span className="mr-1 font-sans text-2xl leading-none text-primary">&ldquo;</span>
                  {item.quote}
                  <span className="ml-1 font-sans text-2xl leading-none text-primary">&rdquo;</span>
                </p>
                <div className="mt-8 border-t border-border/60 pt-6">
                  <p className="font-sans font-semibold text-base text-text-primary">{item.name}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                    {item.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <p className="mt-14 text-center text-sm text-text-muted">
            Real client testimonials coming soon. The entries above are placeholders.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
