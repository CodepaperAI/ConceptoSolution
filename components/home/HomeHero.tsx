'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import { homeImages } from '@/data/siteImages'
import { motionDurations, motionEasing, staggerContainer, fadeUp } from '@/lib/motion'

const heroMetrics = [
  { value: '20+', label: 'Years delivering integrated systems' },
  { value: '5', label: 'Core technical disciplines under one lead' },
  { value: 'End-to-end', label: 'From brief to aftercare' },
]

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '12%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.04])
  const badgeY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '6%'])

  return (
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden pt-16 lg:-mt-20 lg:min-h-[calc(100svh+5rem)] lg:pt-20">
      <motion.div className="absolute inset-0" style={{ y: mediaY, scale: mediaScale }}>
        <Image
          src={homeImages.hero.src}
          alt={homeImages.hero.alt}
          fill
          priority
          placeholder={homeImages.hero.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={homeImages.hero.blurDataURL}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: homeImages.hero.objectPosition }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,10,0.94)_0%,rgba(14,11,10,0.84)_30%,rgba(14,11,10,0.52)_58%,rgba(14,11,10,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.3)_0%,rgba(14,11,10,0.08)_30%,rgba(14,11,10,0.5)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,169,142,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(122,35,48,0.24),transparent_30%)]" />

      <Container className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-20 lg:min-h-[calc(100svh-5rem)] lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.08)}
          className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.48fr)] lg:items-end xl:gap-16"
        >
          <div className="max-w-4xl min-w-0">
            <motion.div variants={fadeUp(22)} transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}>
              <span className="lux-eyebrow overlay-eyebrow">Concepto Solutions</span>
            </motion.div>
            <motion.h1
              variants={fadeUp(30)}
              transition={{ duration: motionDurations.hero, ease: motionEasing.standard }}
              className="mt-8 text-balance font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.86] tracking-[-0.07em] text-white [text-shadow:0_14px_42px_rgba(0,0,0,0.34)]"
            >
              Quiet confidence,
              <span className="mt-2 block text-white/82">architected into every finish.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp(24)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/82 [text-shadow:0_10px_30px_rgba(0,0,0,0.24)] md:text-xl md:leading-9"
            >
              Integrated electrical, smart home, security, data, and IT delivery for residential and commercial projects that need a single accountable partner.
            </motion.p>
            <motion.div
              variants={fadeUp(20)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/projects" className="lux-button-primary inline-flex items-center justify-center gap-3">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="lux-button-secondary inline-flex items-center justify-center gap-3 text-white">
                Request a Consultation
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp(22)}
            transition={{ duration: motionDurations.medium, ease: motionEasing.standard, delay: 0.16 }}
            className="justify-self-start max-w-sm min-w-0 lg:justify-self-end"
            style={{ y: badgeY }}
          >
            <div className="lux-panel-dark overlay-panel p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] overlay-eyebrow">Integrated Delivery</p>
              <div className="mt-6 grid gap-5">
                {heroMetrics.map((item) => (
                  <div key={item.label} className="border-t border-white/12 pt-5 first:border-t-0 first:pt-0">
                    <p className="font-display text-[2.2rem] leading-none tracking-[-0.04em] text-white">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 overlay-copy">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
