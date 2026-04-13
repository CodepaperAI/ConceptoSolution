'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { motionDurations, motionEasing } from '@/lib/motion'

type Direction = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  distance?: number
  once?: boolean
  amount?: number
  id?: string
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 28,
  once = true,
  amount = 0.2,
  id,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  const initial =
    prefersReducedMotion || direction === 'none'
      ? { opacity: 0 }
      : direction === 'left'
        ? { opacity: 0, x: -distance }
        : direction === 'right'
          ? { opacity: 0, x: distance }
          : { opacity: 0, y: distance }

  const animate =
    prefersReducedMotion || direction === 'none'
      ? { opacity: 1 }
      : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration: motionDurations.medium,
        delay,
        ease: motionEasing.standard,
      }}
    >
      {children}
    </motion.div>
  )
}
