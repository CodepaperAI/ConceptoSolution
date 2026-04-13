export const motionEasing = {
  standard: [0.22, 1, 0.36, 1] as const,
  soft: [0.25, 1, 0.5, 1] as const,
} as const

export const motionDurations = {
  instant: 0.18,
  fast: 0.35,
  medium: 0.65,
  slow: 0.9,
  hero: 1.1,
} as const

export const fadeUp = (distance = 28) => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0 },
})

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeFrom = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: { opacity: 1, x: 0, y: 0 },
})

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.06) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: motionDurations.fast,
      ease: motionEasing.standard,
    },
  },
}
