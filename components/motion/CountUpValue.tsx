'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CountUpValueProps {
  value: number
  suffix?: string
  delay?: number
  className?: string
}

export default function CountUpValue({
  value,
  suffix = '',
  delay = 0,
  className,
}: CountUpValueProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const prefersReducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setCount(value)
      return
    }

    const duration = 1600
    const startAt = performance.now() + delay * 1000

    const tick = (now: number) => {
      if (now < startAt) {
        requestAnimationFrame(tick)
        return
      }

      const elapsed = now - startAt
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [delay, isInView, prefersReducedMotion, value])

  return (
    <span ref={ref} className={cn(className)}>
      {count}
      {suffix}
    </span>
  )
}
