import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactFormCard from '@/components/contact/ContactFormCard'
import { contactPageImages } from '@/data/siteImages'

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Unit 23, Westmoreland Road, NW9 9BW',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 (0)845 388 8348',
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
    label: 'Hours',
    value: 'Monday to Friday, 8am to 6pm',
  },
] as const

const nextSteps = [
  'We review the brief and identify the likely technical disciplines involved.',
  'An initial conversation helps us understand the site, programme, and key priorities.',
  'We advise on the next sensible step, whether that is a visit, scope review, or formal quotation.',
] as const

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={contactPageImages.hero}
        eyebrow="Contact"
        title="Start the conversation early enough to make the technical side easier."
        description="Whether you are planning a residential project, a commercial fit-out, or an integrated upgrade, we can help shape a cleaner path into specification and delivery."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/56">
              Response Standard
            </p>
            <div className="mt-6 grid gap-5">
              {[
                'Initial reply within one business day',
                'Clear next-step guidance',
                'Technical input matched to project stage',
              ].map((item) => (
                <div key={item} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm leading-7 text-white/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        }
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
                    heading="A direct route into the team."
                    subheading="If the brief is still forming, that is fine. Early conversations are often the most useful."
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
                <div className="rounded-[1.8rem] border border-border/70 bg-[#120f0d] p-8 text-white shadow-[0_20px_48px_rgba(0,0,0,0.12)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] overlay-eyebrow">
                    What Happens Next
                  </span>
                  <div className="mt-8 space-y-5">
                    {nextSteps.map((step, index) => (
                      <div key={step} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
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
