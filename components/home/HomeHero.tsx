'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import { homeImages } from '@/data/siteImages'
import { motionDurations, motionEasing, staggerContainer, fadeUp } from '@/lib/motion'

const heroSlides = [
  homeImages.hero,
  homeImages.featuredProjects.signiaCourt,
  homeImages.featuredProjects.mayfairResidence,
  homeImages.featuredProjects.cityOffice,
  homeImages.serviceCards.electrical,
  homeImages.serviceCards.smartHome,
  homeImages.serviceCards.security,
  homeImages.serviceCards.dataFibre,
  homeImages.serviceCards.av,
  homeImages.serviceCards.itSupport,
] as const

const heroTaglines = [
  'At Concepto Solutions, we deliver high-quality electrical and audio-visual installations for homes and businesses. From design to completion, we create seamless, reliable systems tailored to your space.',
  "Whether you're upgrading your home, fitting out a commercial property, or integrating smart technology, our team combines technical expertise with practical experience to deliver results you can depend on.",
  'From lighting and power to multi-room audio, home cinemas, and integrated smart systems, we handle every detail with precision and care.',
  'Concepto Solutions delivers bespoke electrical and audio-visual installations built around performance, reliability, and design.',
  "We don't just install systems — we create environments that are intuitive, efficient, and built to last.",
] as const

const SLIDE_INTERVAL_MS = 6000
const IMAGES_PER_TAGLINE = 2

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
  const taglineIndex = Math.floor(activeIndex / IMAGES_PER_TAGLINE) % heroTaglines.length
  const activeTagline = heroTaglines[taglineIndex]

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
            <motion.h1
              variants={fadeUp(30)}
              transition={{ duration: motionDurations.hero, ease: motionEasing.standard }}
              className="text-balance font-sans text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.04em] text-white [text-shadow:0_14px_42px_rgba(0,0,0,0.34)]"
            >
              Electrical &amp; Smart Home
            </motion.h1>

            <motion.div
              variants={fadeUp(24)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-8 min-h-[12rem] max-w-2xl md:min-h-[10rem]"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: motionEasing.standard }}
                  className="text-base leading-8 overlay-copy [text-shadow:0_10px_30px_rgba(0,0,0,0.24)] md:text-xl md:leading-9"
                >
                  {activeTagline}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={fadeUp(16)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard, delay: 0.2 }}
              className="mt-10 flex items-center gap-3"
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
                  className="group relative h-1 w-8 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30"
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
