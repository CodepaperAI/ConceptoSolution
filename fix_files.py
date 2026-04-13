#!/usr/bin/env python3
import os
os.chdir(r'C:\Work\conceptosites\conceptonextjs')

# About page
about = '''"use client"

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <Values />
      <Approach />
    </>
  )
}

function PageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/65 to-transparent" />
      </div>
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-block font-mono text-sm uppercase tracking-[0.2em] text-white/80 lg:text-base"
          >
            About Concepto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 text-[2.5rem] font-bold tracking-tight leading-[1.1] text-white md:text-[3.5rem] lg:text-[4.5rem]"
          >
            Precision. Expertise. Accountability.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl"
          >
            Concepto Solutions is an integrated electrical contractor serving clients across London and the South East.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}

function CompanyStory() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="relative aspect-[4/3] rounded-sm overflow-hidden lg:order-2"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80" alt="Team" className="h-full w-full object-cover" />
          </motion.div>
          <div className="lg:order-1">
            <SectionHeading eyebrow="Our Story" heading="Built From Experience" subheading="We are electrical specialists who expanded into integrated systems." />
          </div>
        </div>
      </Container>
    </section>
  )
}

function Values() {
  const values = [
    { title: 'Specification Over Guesswork', description: 'We read plans carefully.' },
    { title: 'Integration as Standard', description: 'We coordinate our own trades.' },
    { title: 'Clean Execution', description: 'Our teams leave sites tidy.' },
    { title: 'Aftercare', description: 'Post-installation support is available.' },
  ]
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading eyebrow="What We Stand For" heading="Our Values" className="mb-20" />
        <div className="grid gap-10 md:grid-cols-2">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ValueCard({ value, index }: { value: { title: string; description: string }; index: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="border-l-2 border-primary pl-8">
      <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-text-muted">0{index + 1}</span>
      <h3 className="mb-4 text-2xl font-semibold text-text-primary">{value.title}</h3>
      <p className="text-base leading-relaxed text-text-secondary">{value.description}</p>
    </motion.div>
  )
}

function Approach() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="How We Work" heading="Our Approach" subheading="Every phase is managed with precision." />
            <div className="mt-12 space-y-8">
              <ApproachStep number={1} title="Consultation" description="We understand your vision." />
              <ApproachStep number={2} title="Specification" description="Detailed plans for your project." />
              <ApproachStep number={3} title="Delivery" description="Precision installation." />
              <ApproachStep number={4} title="Aftercare" description="Ongoing support available." />
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80" alt="Approach" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}

function ApproachStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-primary">{number}</span>
      <div>
        <h4 className="mb-2 text-lg font-semibold text-text-primary">{title}</h4>
        <p className="text-base text-text-secondary">{description}</p>
      </div>
    </div>
  )
}
'''

with open('app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about)
print('About created')

home = '''"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Zap, Database, Home as HomeIcon, Shield, Server, ChevronRight, Cpu } from 'lucide-react'
import Container from '@/components/ui/Container'

const fadeUpVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }
const smoothTransition = { duration: 0.7, ease: 'easeOut' as const }

const featuredProjects = [
  { title: 'SIGNIA COURT', location: 'Wembley, HA9', category: 'Residential', year: '2024', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85' },
  { title: 'MAYFAIR RESIDENCE', location: 'Mayfair, W1', category: 'Residential', year: '2024', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85' },
  { title: 'CITY OF LONDON OFFICE', location: 'EC2A, London', category: 'Commercial', year: '2024', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85' }
]

const serviceCards = [
  { id: 'electrical', title: 'Electrical', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=85', icon: Zap },
  { id: 'smart-home', title: 'Smart Home', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85', icon: HomeIcon },
  { id: 'security', title: 'Security', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=85', icon: Shield },
  { id: 'data-fibre', title: 'Data & Fibre', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=85', icon: Database },
  { id: 'av', title: 'AV Integration', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=85', icon: Cpu },
  { id: 'it-support', title: 'IT Support', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=85', icon: Server }
]

const processSteps = [
  { number: '01', title: 'Consultation', description: 'We understand your vision.' },
  { number: '02', title: 'Specification', description: 'Detailed plans for every discipline.' },
  { number: '03', title: 'Delivery', description: 'Precision installation.' },
  { number: '04', title: 'Aftercare', description: 'Ongoing support.' }
]

const stats = [
  { number: '20+', label: 'Years' },
  { number: '500+', label: 'Projects' },
  { number: '100%', label: 'Satisfaction' }
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesStrip />
      <AboutSection />
      <ProcessCTA />
    </>
  )
}

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={heroRef} className="relative h-screen min-h-[650px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=90" alt="Luxury smart home" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <Container className="relative z-10 flex h-full items-end pb-20 lg:pb-28">
        <motion.div className="max-w-3xl" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUpVariants} transition={smoothTransition} className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Concepto Solutions</motion.span>
          <motion.h1 variants={fadeUpVariants} transition={smoothTransition} className="mb-8 text-[2.25rem] font-bold tracking-tight leading-[1.05] text-white md:text-[3.25rem] lg:text-[4.5rem] xl:text-[5.5rem]">Where Technology<br /><span className="text-white/70">Meets Craft.</span></motion.h1>
          <motion.p variants={fadeUpVariants} transition={smoothTransition} className="mb-10 max-w-lg text-base text-white/50 md:text-lg">Integrated electrical, smart home, security, data & IT.</motion.p>
          <motion.div variants={fadeUpVariants} transition={smoothTransition} className="flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5">View Our Work <ArrowRight size={16} /></Link>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">Get a Quote</Link>
          </motion.div>
        </motion.div>
      </Container>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ opacity }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function FeaturedProjects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div className="mb-12 flex items-end justify-between gap-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div>
            <span className="mb-3 block font-mono text-[9px] uppercase tracking-[0.25em] text-text-muted">Selected Work</span>
            <h2 className="text-[1.75rem] font-bold tracking-tight text-text-primary md:text-2xl lg:text-3xl">Featured Projects</h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3">View all <ChevronRight size={14} /></Link>
        </motion.div>
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <ProjectCard project={featuredProjects[0]} variant="large" />
          </motion.div>
          <div className="flex flex-col gap-5 lg:col-span-5">
            {featuredProjects.slice(1).map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}>
                <ProjectCard project={project} variant="small" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ProjectCard({ project, variant }: { project: typeof featuredProjects[0]; variant: 'large' | 'small' }) {
  return (
    <motion.article className="relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <Link href="/projects" className="project-card-link group block h-full overflow-hidden">
        <div className={"project-card-inner relative " + (variant === 'large' ? 'aspect-[16/9]' : 'aspect-[16/7]')}>
          <img src={project.image} alt={project.title} className="project-card-image absolute inset-0 h-full w-full object-cover transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="project-card-overlay absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/30 transition-opacity duration-500" />
          <div className="absolute top-6 right-6"><span className="inline-block border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/80">{project.category}</span></div>
          <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
            <div>
              <div className="project-card-title-block">
                <h3 className={"font-bold text-white " + (variant === 'large' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-lg lg:text-xl')}>{project.title}</h3>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 mt-2">{project.location} / {project.year}</p>
              </div>
              <p className="project-card-description text-sm leading-relaxed text-white/70 max-w-md mt-3">Complete integrated installation.</p>
              <div className="project-card-cta mt-3">
                <div className="flex items-center gap-3 rounded-full border border-primary/60 bg-primary/20 backdrop-blur-sm px-5 py-2.5 w-fit"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white">View Project</span><ArrowRight size={12} className="text-white" /></div>
              </div>
            </div>
          </div>
          <div className="project-card-corner absolute left-0 top-0 h-12 w-12 opacity-0 transition-opacity duration-500"><div className="absolute left-5 top-5 h-px w-6 bg-primary/60" /><div className="absolute left-5 top-5 h-6 w-px bg-primary/60" /></div>
        </div>
      </Link>
    </motion.article>
  )
}

function ServicesStrip() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">What We Do</span>
          <h2 className="text-[1.75rem] font-bold tracking-tight text-white md:text-2xl lg:text-3xl">Integrated Services</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/40">Six disciplines. One provider.</p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
        </div>
      </Container>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof serviceCards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = service.icon

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isCardInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.08 }}>
      <Link href={"/services#" + service.id} className="service-card-link group relative block aspect-[4/3] overflow-hidden">
        <img src={service.image} alt={service.title} className="service-card-image absolute inset-0 h-full w-full object-cover transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="service-card-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50 opacity-0 transition-opacity duration-500" />
        <div className="absolute left-5 top-5 transition-transform duration-300 group-hover:scale-110"><div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm"><Icon className="h-4 w-4 text-white/70" strokeWidth={1.5} /></div></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="service-card-title"><h3 className="text-base font-medium text-white">{service.title}</h3></div>
          <div className="service-card-reveal"><p className="text-[11px] leading-relaxed text-white mt-5">Expert solutions.</p></div>
        </div>
      </Link>
    </motion.div>
  )
}

function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="relative aspect-[4/3] overflow-hidden"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=90" alt="Concepto" className="h-full w-full object-cover" /><div className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-primary" /><div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-primary/30" /></div>
            <motion.div className="absolute -bottom-6 -left-6 rounded-sm bg-white p-6 shadow-xl" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}><span className="text-4xl font-bold text-primary">20+</span><p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-text-muted">Years Experience</p></motion.div>
          </motion.div>
          <motion.div className="flex flex-col justify-center lg:pt-8" initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.25em] text-text-muted">About Concepto</span>
            <h2 className="mb-6 text-[1.75rem] font-bold tracking-tight leading-[1.1] text-text-primary md:text-2xl lg:text-3xl">Not Just Contractors.<br /><span className="text-primary">Integration Partners.</span></h2>
            <p className="mb-8 text-base leading-relaxed text-text-secondary">We are electrical specialists who expanded into integrated systems.</p>
            <div className="mb-8 grid grid-cols-3 gap-6 border-t border-b border-black/10 py-6">
              {stats.map((stat) => (<div key={stat.label} className="text-center"><span className="text-2xl font-bold text-primary md:text-3xl">{stat.number}</span><p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-text-muted">{stat.label}</p></div>))}
            </div>
            <blockquote className="border-l-2 border-primary pl-5"><p className="text-sm italic text-text-secondary">"We spec systems that match your brief."</p></blockquote>
            <div className="mt-8"><Link href="/about" className="group inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3">Our story <ArrowRight size={14} /></Link></div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function ProcessCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="mb-3 block text-center font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">How We Work</span>
          <h2 className="mb-12 text-center text-[1.75rem] font-bold tracking-tight text-white md:text-2xl lg:text-3xl">The Process</h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div key={step.number} className="group relative text-center" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}>
                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-black/60 backdrop-blur-sm"><span className="font-mono text-sm font-bold text-primary">{step.number}</span></div>
                <h3 className="mb-2 text-sm font-semibold text-white">{step.title}</h3>
                <p className="mx-auto max-w-[140px] text-[11px] leading-relaxed text-white/40">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
          <h3 className="mb-4 text-[1.5rem] font-bold tracking-tight text-white md:text-xl lg:text-2xl">Ready to Begin?</h3>
          <p className="mb-8 text-sm text-white/50">Let us discuss your project.</p>
          <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-xl">Request a Consultation <ArrowRight size={16} /></Link>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            {['NICEIC', 'Part P', '18th Edition'].map((cert) => <span key={cert} className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">{cert}</span>)}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(home)
print('Home created')
