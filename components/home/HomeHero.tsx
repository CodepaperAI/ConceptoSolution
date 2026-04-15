'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import { homeImages } from '@/data/siteImages'
import { motionDurations, motionEasing, staggerContainer, fadeUp } from '@/lib/motion'

const heroSlides = [
  homeImages.hero,
  homeImages.featuredProjects.signiaCourt,
  homeImages.featuredProjects.mayfairResidence,
  homeImages.serviceCards.electrical,
] as const

const SLIDE_INTERVAL_MS = 6000

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '12%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.04])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  const activeSlide = heroSlides[activeIndex]

  return (
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden pt-16 lg:-mt-20 lg:min-h-[calc(100svh+5rem)] lg:pt-20">
      <motion.div className="absolute inset-0" style={{ y: mediaY, scale: mediaScale }}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: motionEasing.standard }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority={activeIndex === 0}
              placeholder={activeSlide.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={activeSlide.blurDataURL}
              sizes="100vw"
              quality={72}
              className="object-cover"
              style={{ objectPosition: activeSlide.objectPosition }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,10,0.94)_0%,rgba(14,11,10,0.84)_30%,rgba(14,11,10,0.56)_58%,rgba(14,11,10,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.32)_0%,rgba(14,11,10,0.12)_30%,rgba(14,11,10,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,169,142,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(122,35,48,0.24),transparent_30%)]" />

      <Container className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-20 lg:min-h-[calc(100svh-5rem)] lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.08)}
          className="w-full"
        >
          <div className="max-w-4xl min-w-0">
            <motion.div variants={fadeUp(22)} transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}>
              <span className="lux-eyebrow overlay-eyebrow">Concepto Solutions Ltd</span>
            </motion.div>
            <motion.h1
              variants={fadeUp(30)}
              transition={{ duration: motionDurations.hero, ease: motionEasing.standard }}
              className="mt-8 text-balance font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.86] tracking-[-0.07em] text-white [text-shadow:0_14px_42px_rgba(0,0,0,0.34)]"
            >
              Smart Home, Electrical
              <span className="mt-2 block overlay-copy">&amp; IT solutions.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp(24)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-8 max-w-2xl text-base leading-8 overlay-copy [text-shadow:0_10px_30px_rgba(0,0,0,0.24)] md:text-xl md:leading-9"
            >
              London-based specialists in smart home automation, electrical services and IT support for homeowners, developers and businesses.
            </motion.p>
            <motion.div
              variants={fadeUp(20)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact" className="lux-button-primary inline-flex items-center justify-center gap-3">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="lux-button-secondary inline-flex items-center justify-center gap-3 text-white">
                Discover More
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp(16)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard, delay: 0.2 }}
              className="mt-14 flex items-center gap-3"
              role="group"
              aria-label="Hero slideshow controls"
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className="group relative h-1 w-12 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30"
                >
                  <span
                    className={`absolute inset-y-0 left-0 bg-white transition-[width] duration-500 ${
                      index === activeIndex ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
