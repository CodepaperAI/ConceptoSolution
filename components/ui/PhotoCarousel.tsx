'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { SiteImage } from '@/data/siteImages'

interface PhotoCarouselProps {
  slides: SiteImage[]
  intervalMs?: number
  sizes?: string
  quality?: number
  priority?: boolean
  className?: string
  objectPosition?: string
  transitionSec?: number
}

const DEFAULT_INTERVAL = 6000

export default function PhotoCarousel({
  slides,
  intervalMs = DEFAULT_INTERVAL,
  sizes = '100vw',
  quality = 72,
  priority = false,
  className = 'object-cover',
  objectPosition,
  transitionSec = 1.4,
}: PhotoCarouselProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    if (slides.length <= 1) return
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion, slides.length, intervalMs])

  if (slides.length === 0) return null

  if (slides.length === 1) {
    const s = slides[0]
    return (
      <Image
        src={s.src}
        alt={s.alt}
        fill
        priority={priority}
        placeholder={s.blurDataURL ? 'blur' : 'empty'}
        blurDataURL={s.blurDataURL}
        sizes={sizes}
        quality={quality}
        className={className}
        style={{ objectPosition: objectPosition ?? s.objectPosition }}
      />
    )
  }

  const active = slides[activeIndex]

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: transitionSec, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority={priority && activeIndex === 0}
          placeholder={active.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={active.blurDataURL}
          sizes={sizes}
          quality={quality}
          className={className}
          style={{ objectPosition: objectPosition ?? active.objectPosition }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
