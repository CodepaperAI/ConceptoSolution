'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import { carouselImages, homeImages } from '@/data/siteImages'
import { motionDurations, motionEasing, staggerContainer, fadeUp } from '@/lib/motion'

// Per client DOCX: "Home Hero Section — All Files in this Folder Home_Herosection".
// Slides are ingested by scripts/ingest-site-photos.mjs.
// Fallback to the legacy single-image hero if the generated set is empty.
const heroSlides =
  carouselImages.homeHero.length > 0 ? carouselImages.homeHero : [homeImages.hero]

const heroTaglines = [
  'At Concepto Solutions, we deliver high-quality electrical and audio-visual installations for homes and businesses. From design to completion, we create seamless, reliable systems tailored to your space.',
  "Whether you're upgrading your home, fitting out a commercial property, or integrating smart technology, our team combines technical expertise with practical experience to deliver results you can depend on.",
  'From lighting and power to multi-room audio, home cinemas, and integrated smart systems, we handle every detail with precision and care.',
  'Concepto Solutions delivers bespoke electrical and audio-visual installations built around performance, reliability, and design.',
  "We don't just install systems — we create environments that are intuitive, efficient, and built to last.",
] as const

// 9 s between slides (was 6 s). Lets each photo settle as a backdrop instead
// of feeling like a rolling slideshow — particularly important on mobile
// where the photo crops aggressively to portrait.
const SLIDE_INTERVAL_MS = 9000
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
    <section className="relative -mt-16 min-h-[calc(88svh+4rem)] overflow-hidden pt-16 md:min-h-[calc(96svh+4rem)] lg:-mt-20 lg:min-h-[calc(100svh+5rem)] lg:pt-20">
      <motion.div className="absolute inset-0" style={{ y: mediaY, scale: mediaScale }}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: motionEasing.standard }}
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
              // Slight desaturation + lift — landscape interior shots keep their
              // best framing in the upper-middle, so we anchor the crop there.
              // The result reads as atmosphere on mobile rather than a hard
              // photo competing with the text.
              className="object-cover saturate-[0.92] brightness-[0.96]"
              style={{ objectPosition: activeSlide.objectPosition ?? 'center 38%' }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* Subtle overlays — keep photos visible while preserving text legibility.
          Earlier version had a 94%-black left wash that made every slide look
          nearly opaque. See PageHero.tsx `overlay="subtle"` for the matching
          pattern used on project detail pages. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,10,0.70)_0%,rgba(14,11,10,0.48)_28%,rgba(14,11,10,0.22)_58%,rgba(14,11,10,0.08)_88%,rgba(14,11,10,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.18)_0%,rgba(14,11,10,0.06)_40%,rgba(14,11,10,0.46)_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(88svh-4rem)] items-center py-14 md:min-h-[calc(96svh-4rem)] md:py-20 lg:min-h-[calc(100svh-5rem)] lg:py-24">
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
              className="text-balance font-sans text-[clamp(2rem,8vw,6rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white [text-shadow:0_14px_42px_rgba(0,0,0,0.34)] md:leading-[1]"
            >
              Electrical &amp; Smart Home
            </motion.h1>

            <motion.div
              variants={fadeUp(24)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
              className="mt-6 min-h-[9rem] max-w-2xl md:mt-8 md:min-h-[10rem]"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: motionEasing.standard }}
                  className="text-sm leading-7 overlay-copy [text-shadow:0_10px_30px_rgba(0,0,0,0.24)] md:text-xl md:leading-9"
                >
                  {activeTagline}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={fadeUp(16)}
              transition={{ duration: motionDurations.medium, ease: motionEasing.standard, delay: 0.2 }}
              className="mt-8 flex items-center gap-4 md:mt-10"
              role="group"
              aria-label="Hero slideshow controls"
            >
              {/* Prev/Next arrows — compact on mobile, clear affordance for the carousel */}
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                }
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/15 md:h-10 md:w-10"
              >
                <span aria-hidden="true" className="text-sm leading-none md:text-base">←</span>
              </button>

              {/* Auto-advance progress bar — scales to any number of slides */}
              <div
                className="relative h-[3px] w-28 overflow-hidden rounded-full bg-white/20 md:w-40"
                aria-hidden="true"
              >
                <span
                  key={activeIndex}
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{
                    animation: prefersReducedMotion
                      ? 'none'
                      : `hero-progress ${SLIDE_INTERVAL_MS}ms linear forwards`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % heroSlides.length)}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/15 md:h-10 md:w-10"
              >
                <span aria-hidden="true" className="text-sm leading-none md:text-base">→</span>
              </button>
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
