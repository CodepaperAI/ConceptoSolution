import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/ui/PageHero'
import { projectsPageImages } from '@/data/siteImages'

const projects = [
  {
    id: 1,
    title: 'SIGNIA COURT',
    location: 'Wembley, HA9',
    category: 'Residential',
    services: ['Electrical', 'Lighting', 'Smart Living'],
    year: '2024',
    image: projectsPageImages.cards.signiaCourt,
    span: 'xl:col-span-5 xl:row-span-2',
    aspect: 'aspect-[4/5] xl:aspect-auto xl:min-h-[44rem]',
  },
  {
    id: 2,
    title: 'CITY OF LONDON OFFICE',
    location: 'City of London, EC2',
    category: 'Commercial',
    services: ['Electrical', 'Data', 'Display'],
    year: '2024',
    image: projectsPageImages.cards.cityOffice,
    span: 'xl:col-span-7',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 3,
    title: 'MAYFAIR RESIDENCE',
    location: 'Mayfair, W1',
    category: 'Private Client',
    services: ['Smart Home', 'AV', 'Lighting'],
    year: '2024',
    image: projectsPageImages.cards.mayfairResidence,
    span: 'xl:col-span-4',
    aspect: 'aspect-[16/11]',
  },
  {
    id: 4,
    title: 'KINGSLAND OFFICE',
    location: 'Kingsland, E2',
    category: 'Commercial',
    services: ['IT Support', 'Network', 'Display'],
    year: '2024',
    image: projectsPageImages.cards.kingslandOffice,
    span: 'xl:col-span-3',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 5,
    title: 'NOTTING HILL HOME',
    location: 'Notting Hill, W11',
    category: 'Residential',
    services: ['Smart Home', 'Security'],
    year: '2023',
    image: projectsPageImages.cards.nottingHillHome,
    span: 'xl:col-span-5',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 6,
    title: 'WEST END RETAIL',
    location: 'West End, W1',
    category: 'Commercial',
    services: ['Lighting', 'Electrical', 'Data'],
    year: '2023',
    image: projectsPageImages.cards.westEndRetail,
    span: 'xl:col-span-4',
    aspect: 'aspect-[16/11]',
  },
] as const

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image={projectsPageImages.hero}
        eyebrow="Portfolio"
        title="Project environments where the technical layers support the atmosphere rather than compete with it."
        description="Our work spans residential, private client, and commercial settings, with each project shaped around coordination, finish quality, and long-term usability."
        aside={
          <div className="p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/56">
              Typical Sectors
            </p>
            <div className="mt-6 grid gap-3">
              {['Residential', 'Private Client', 'Commercial', 'Workplace'].map((item) => (
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

      <GallerySection />
      <ProjectsCtaSection />
    </>
  )
}

function GallerySection() {
  return (
    <section className="section-defer py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Environments"
              heading="A gallery of spaces where coordinated technical work protects the final atmosphere."
              subheading="The common thread is not a single aesthetic. It is the way the systems are resolved with enough discipline that the finished project feels calm."
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:justify-self-end">
            <div className="max-w-xl lg:ml-auto">
              <div className="flex flex-wrap gap-2">
                {['All', 'Residential', 'Commercial', 'Smart Living', 'Infrastructure'].map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] ${
                      item === 'All'
                        ? 'border border-primary bg-primary text-white'
                        : 'border border-border bg-white/78 text-text-secondary'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.06 + index * 0.04} className={project.span}>
              <article className="group h-full overflow-hidden rounded-[1.9rem] border border-border/70 bg-[#fbf8f2] shadow-panel">
                <div className={`relative overflow-hidden ${project.aspect}`}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    placeholder={project.image.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={project.image.blurDataURL}
                    sizes={
                      project.span.includes('col-span-7')
                        ? '(min-width: 1280px) 54vw, 100vw'
                        : project.span.includes('col-span-5')
                          ? '(min-width: 1280px) 40vw, 100vw'
                          : '(min-width: 1280px) 28vw, 100vw'
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: project.image.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,10,9,0.52)_0%,rgba(13,10,9,0.28)_26%,rgba(13,10,9,0.42)_52%,rgba(13,10,9,0.92)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overlay-chip rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                      <span className="overlay-chip-soft rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em]">
                        {project.location} / {project.year}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-[2rem] leading-[0.95] tracking-[-0.045em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.36)] md:text-[2.3rem]">
                      {project.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="overlay-chip-soft rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.16em]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
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
                Planning something technically layered or finish-sensitive?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                We are often most useful early, when coordination choices still have room to
                improve the final outcome.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover lg:mt-0"
            >
              Discuss your project <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
