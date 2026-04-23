import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactFormCard from '@/components/contact/ContactFormCard'
import { contactPageImages } from '@/data/siteImages'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Concepto Solutions for a free survey and quote on smart home, electrical or IT support services in London.',
}

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Unit 23, Westmoreland Road, NW9 9BW',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0845 388 8348',
    href: 'tel:+448453888348',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@conceptosolutions.co.uk',
    href: 'mailto:info@conceptosolutions.co.uk',
  },
  {
    icon: Clock,
    label: 'Support',
    value: '24/7 UK-based IT support',
  },
] as const

const nextSteps = [
  'Tell us whether you need smart home automation, electrical work or business IT support.',
  'We review the brief and recommend the most suitable next step for the project stage.',
  'If needed, we arrange a site visit or prepare a competitive quotation.',
] as const

export default function ContactPage() {
  return (
    <>
      <PageHero
        priority
        showCta={false}
        image={contactPageImages.hero}
        eyebrow="Contact"
        title="Contact Concepto Solutions London"
        description="Speak to our team about smart home automation, electrical work, CCTV, data wiring or business IT support. We are based at Unit 23, Westmoreland Road, NW9 9BW."
      />

      <section className="section-defer py-24 md:py-32 lg:py-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-12">
            <Reveal>
              <ContactFormCard />
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.08}>
                <div className="lux-panel p-8 md:p-9">
                  <SectionHeading
                    eyebrow="Contact Information"
                    heading="A direct route to the team."
                    subheading="We work with homeowners, developers and businesses, and we are happy to discuss new enquiries, site visits and quotations."
                  />
                  <ul className="mt-10 space-y-5">
                    {contactItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.label} className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/18 bg-primary/7 text-primary">
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                              {item.label}
                            </span>
                            <div className="mt-2 text-base leading-7 text-text-primary">
                              {'href' in item && item.href ? (
                                <a href={item.href} className="transition-colors duration-200 hover:text-primary">
                                  {item.value}
                                </a>
                              ) : (
                                item.value
                              )}
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="overlay-panel rounded-[1.8rem] p-8 text-white shadow-[0_20px_48px_rgba(0,0,0,0.12)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] overlay-eyebrow">
                    What Happens Next
                  </span>
                  <div className="mt-8 space-y-5">
                    {nextSteps.map((step, index) => (
                      <div key={step} className="flex gap-4">
                        <div className="overlay-card flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <span className="font-mono text-xs text-secondary">0{index + 1}</span>
                        </div>
                        <p className="text-sm leading-7 overlay-copy">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
