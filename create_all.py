#!/usr/bin/env python3
import os
os.chdir(r'C:\Work\conceptosites\conceptonextjs')

services = '''"use client"

import { Zap, Database, Home as HomeIcon, Shield, Server, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const serviceIcons: Record<string, typeof Zap> = {
  electrical: Zap,
  'data-fibre': Database,
  'smart-home': HomeIcon,
  security: Shield,
  'it-support': Server,
}

const services = [
  { id: 'electrical', title: 'Electrical Solutions', description: 'Complete electrical installations for residential and commercial projects.', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80', capabilities: ['New construction wiring', 'Full rewires', 'LED lighting', 'Panel upgrades'] },
  { id: 'smart-home', title: 'Smart Home Solutions', description: 'Integrated automation and audio-visual systems for modern living.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', capabilities: ['Home automation', 'Audio-visual systems', 'Lighting control', 'Climate control'] },
  { id: 'security', title: 'Security Systems', description: 'Professional surveillance and access control.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', capabilities: ['CCTV systems', 'Access control', 'Intruder alarms', 'Video doorbells'] },
  { id: 'data-fibre', title: 'Data & Fibre', description: 'High-performance network infrastructure.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', capabilities: ['Structured cabling', 'Fibre installations', 'Network racks', 'Commercial WiFi'] },
  { id: 'it-support', title: 'IT Support', description: '24/7 UK-based IT support for businesses.', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', capabilities: ['Server room setup', 'Network infrastructure', 'Workstation deployment', 'Managed IT support'] },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServicesList />
      <ServiceCapabilities />
      <CTASection />
    </>
  )
}

function PageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/65 to-transparent" />
      </div>
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 inline-block font-mono text-sm uppercase tracking-[0.2em] text-white/80">Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-8 text-[2.5rem] font-bold tracking-tight leading-[1.1] text-white md:text-[3.5rem] lg:text-[4.5rem]">Integrated Solutions for Complex Projects</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="max-w-2xl text-xl leading-relaxed text-white/80">Five core disciplines. One provider.</motion.p>
        </div>
      </Container>
    </section>
  )
}

function ServicesList() {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-32 lg:py-40">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Zap
            return <ServiceDetailSection key={service.id} service={service} Icon={Icon} isReversed={index % 2 === 1} />
          })}
        </div>
      </Container>
    </section>
  )
}

function ServiceDetailSection({ service, Icon, isReversed }: { service: typeof services[0]; Icon: typeof Zap; isReversed: boolean }) {
  return (
    <motion.div id={service.id} initial={{ opacity: 0, x: isReversed ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
        <Icon className="mb-8 h-12 w-12 text-primary" strokeWidth={1.5} />
        <h2 className="mb-6 text-[2.5rem] font-bold tracking-tight text-white">{service.title}</h2>
        <p className="mb-10 text-xl leading-relaxed text-gray-400">{service.description}</p>
        <ul className="space-y-4">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-4">
              <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
              <span className="text-base text-gray-400">{cap}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
        <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  )
}

function ServiceCapabilities() {
  return (
    <section className="bg-[#252525] py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading eyebrow="Why Concepto" heading="The Integrated Advantage" subheading="Working with a single provider delivers measurable benefits." alignment="center" className="mb-20" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {['Single Point of Contact', 'Coordinated Scheduling', 'Technical Consistency', 'Streamlined Documentation', 'Future-Proofing', 'Competitive Pricing'].map((title) => (
            <div key={title} className="rounded-sm border border-gray-700 bg-[#1a1a1a] p-10">
              <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
              <p className="text-base leading-relaxed text-gray-400">Description for {title}.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-32 lg:py-40">
      <Container>
        <div className="rounded-sm bg-primary p-16 md:p-20 lg:p-24 text-center">
          <h2 className="mb-6 text-[2.5rem] font-bold tracking-tight text-white">Ready to Discuss Your Project?</h2>
          <p className="mb-12 text-xl text-white/80">Contact us for a detailed assessment and transparent quote.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-primary hover:bg-secondary">Get in Touch <ArrowRight size={20} /></Link>
        </div>
      </Container>
    </section>
  )
}
'''

with open('app/services/page.tsx', 'w', encoding='utf-8') as f:
    f.write(services)

projects = '''"use client"

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const projects = [
  { id: 1, title: 'SIGNIA COURT', location: 'Wembley, HA9', category: 'Residential', services: ['Smart Home', 'Electrical'], year: '2024', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 2, title: 'CITY OF LONDON OFFICE', location: 'City of London, EC2', category: 'Commercial', services: ['Electrical', 'Data'], year: '2024', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { id: 3, title: 'MAYFAIR RESIDENCE', location: 'Mayfair, W1', category: 'Residential', services: ['Smart Home', 'AV'], year: '2024', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 4, title: 'KINGSLAND OFFICE', location: 'Kingsland, E2', category: 'Commercial', services: ['Data', 'IT'], year: '2024', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { id: 5, title: 'NOTTING HILL HOME', location: 'Notting Hill, W11', category: 'Residential', services: ['Smart Home', 'Security'], year: '2023', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 6, title: 'WEST END RETAIL', location: 'West End, W1', category: 'Commercial', services: ['Electrical', 'Lighting'], year: '2023', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero />
      <ProjectGrid />
    </>
  )
}

function PageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/65 to-transparent" />
      </div>
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-block font-mono text-sm uppercase tracking-[0.2em] text-white/80">Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 text-[2.5rem] font-bold tracking-tight text-white md:text-[3.5rem] lg:text-[4.5rem]">Our Projects Make Us Proud</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-2xl text-xl text-white/80">Each project represents our commitment to precision and quality.</motion.p>
        </div>
      </Container>
    </section>
  )
}

function ProjectGrid() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mb-12 flex flex-wrap gap-4">
          {['All', 'Residential', 'Commercial'].map((cat) => (
            <button key={cat} className={cat === 'All' ? 'px-5 py-3 text-base font-medium rounded-full bg-primary text-white' : 'px-5 py-3 text-base font-medium rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary'}>{cat}</button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Container>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.article className="group cursor-pointer" whileTap={{ scale: 0.98 }}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">{project.location}</span>
          <span className="font-mono text-xs text-text-muted">{project.year}</span>
        </div>
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="rounded-sm bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary">{service}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
'''

with open('app/projects/page.tsx', 'w', encoding='utf-8') as f:
    f.write(projects)

blog = '''"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

const posts: BlogPost[] = [
  { id: '1', title: 'Understanding Part P Building Regulations', excerpt: 'A guide to electrical safety standards in residential properties.', category: 'Regulations', date: '2026-03-15', readTime: '5 min read' },
  { id: '2', title: 'The Future of Smart Home Integration', excerpt: 'How modern automation systems are transforming living spaces.', category: 'Technology', date: '2026-03-10', readTime: '7 min read' },
  { id: '3', title: 'Commercial Electrical Safety Standards', excerpt: 'Essential requirements for commercial buildings.', category: 'Safety', date: '2026-03-05', readTime: '6 min read' },
  { id: '4', title: 'Data Cabling Infrastructure for Modern Offices', excerpt: 'Best practices for robust network infrastructure.', category: 'Infrastructure', date: '2026-02-28', readTime: '8 min read' },
]

export default function BlogPage() {
  return (
    <>
      <PageHero />
      <BlogList />
      <CTASection />
    </>
  )
}

function PageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/65 to-transparent" />
      </div>
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-block font-mono text-sm uppercase tracking-[0.2em] text-white/80">Insights</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 text-[2.5rem] font-bold tracking-tight text-white md:text-[3.5rem] lg:text-[4.5rem]">Industry News & Updates</motion.h1>
        </div>
      </Container>
    </section>
  )
}

function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Regulations', 'Technology', 'Safety', 'Infrastructure']
  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mb-16 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? 'rounded-full px-5 py-2.5 text-sm font-medium bg-primary text-white' : 'rounded-full px-5 py-2.5 text-sm font-medium border border-border text-text-secondary hover:border-primary hover:text-primary'}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </Container>
    </section>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article className="group cursor-pointer flex flex-col rounded-sm border border-border bg-white shadow-sm transition-colors hover:border-primary/50">
      <div className="aspect-[16/9] bg-bg-secondary" />
      <div className="flex flex-1 flex-col p-8">
        <span className="mb-4 inline-block rounded-sm bg-bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-secondary">{post.category}</span>
        <h2 className="mb-4 text-xl font-semibold text-text-primary">{post.title}</h2>
        <p className="mb-6 flex-1 text-base text-text-secondary">{post.excerpt}</p>
        <div className="flex items-center gap-5 text-sm text-text-muted">
          <span className="flex items-center gap-2"><Calendar size={14} />{post.date}</span>
          <span className="flex items-center gap-2"><Clock size={14} />{post.readTime}</span>
        </div>
      </div>
    </motion.article>
  )
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="rounded-sm bg-primary p-16 md:p-20 lg:p-24 text-center">
          <h2 className="mb-6 text-[2.5rem] font-bold tracking-tight text-white">Need Expert Advice?</h2>
          <p className="mb-12 text-xl text-white/80">Speak with our team about your project requirements.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-primary hover:bg-secondary">Get in Touch <ArrowRight size={20} /></Link>
        </div>
      </Container>
    </section>
  )
}
'''

with open('app/blog/page.tsx', 'w', encoding='utf-8') as f:
    f.write(blog)

contact = '''"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactSection />
    </>
  )
}

function PageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/65 to-transparent" />
      </div>
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-block font-mono text-sm uppercase tracking-[0.2em] text-white/80">Contact</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 text-[2.5rem] font-bold tracking-tight text-white md:text-[3.5rem] lg:text-[4.5rem]">Get in Touch</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-2xl text-xl text-white/80">Ready to discuss your project? Reach out for a consultation.</motion.p>
        </div>
      </Container>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div>
      <SectionHeading eyebrow="Send a Message" heading="Request a Consultation" subheading="Fill out the form below. We will respond within one business day." className="mb-12" />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div><label className="mb-3 block text-base font-medium text-text-secondary">Name *</label><input type="text" required className="w-full rounded-sm border border-border bg-white px-5 py-4 text-base focus:border-primary focus:outline-none" placeholder="Your full name" /></div>
          <div><label className="mb-3 block text-base font-medium text-text-secondary">Email *</label><input type="email" required className="w-full rounded-sm border border-border bg-white px-5 py-4 text-base focus:border-primary focus:outline-none" placeholder="you@example.com" /></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div><label className="mb-3 block text-base font-medium text-text-secondary">Phone</label><input type="tel" className="w-full rounded-sm border border-border bg-white px-5 py-4 text-base focus:border-primary focus:outline-none" placeholder="+44 (0)XXX XXX XXXX" /></div>
          <div><label className="mb-3 block text-base font-medium text-text-secondary">Project Type</label><select className="w-full rounded-sm border border-border bg-white px-5 py-4 text-base focus:border-primary focus:outline-none"><option value="">Select a service</option><option value="electrical">Electrical</option><option value="smart-home">Smart Home</option><option value="security">Security</option><option value="data-fibre">Data & Fibre</option><option value="it-support">IT Support</option></select></div>
        </div>
        <div><label className="mb-3 block text-base font-medium text-text-secondary">Project Details</label><textarea rows={8} className="w-full resize-none rounded-sm border border-border bg-white px-5 py-4 text-base focus:border-primary focus:outline-none" placeholder="Tell us about your project..."></textarea></div>
        <Button type="submit" size="lg" isLoading={isSubmitting}>Send Message</Button>
      </form>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="lg:pl-8">
      <SectionHeading eyebrow="Contact Information" heading="Let us Talk" className="mb-12" />
      <ul className="space-y-8">
        {[{ icon: MapPin, label: 'Address', value: 'Unit 23, Westmoreland Road, NW9 9BW' }, { icon: Phone, label: 'Phone', value: '+44 (0)845 388 8348', href: 'tel:+448453888348' }, { icon: Mail, label: 'Email', value: 'info@conceptosolutions.co.uk', href: 'mailto:info@conceptosolutions.co.uk' }, { icon: Clock, label: 'Hours', value: 'Monday - Friday: 8am - 6pm' }].map((item) => (
          <li key={item.label} className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border"><item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} /></div>
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-text-muted">{item.label}</span>
              {item.href ? <a href={item.href} className="text-lg text-text-primary hover:text-primary">{item.value}</a> : <span className="text-lg text-text-primary">{item.value}</span>}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-sm bg-bg-secondary p-10">
        <h3 className="mb-4 text-xl font-semibold text-text-primary">What Happens Next</h3>
        <ul className="space-y-4 text-base text-text-secondary">
          <li className="flex gap-3"><span className="font-mono text-primary">01</span><span>We review your enquiry.</span></li>
          <li className="flex gap-3"><span className="font-mono text-primary">02</span><span>Initial conversation.</span></li>
          <li className="flex gap-3"><span className="font-mono text-primary">03</span><span>Detailed specification and quote.</span></li>
          <li className="flex gap-3"><span className="font-mono text-primary">04</span><span>Project delivery.</span></li>
        </ul>
      </div>
    </div>
  )
}
'''

with open('app/contact/page.tsx', 'w', encoding='utf-8') as f:
    f.write(contact)

print('All pages created!')
