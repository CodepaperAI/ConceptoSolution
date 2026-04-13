import { cn } from '@/lib/utils'

type Alignment = 'left' | 'center'
type Tone = 'dark' | 'light'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  alignment?: Alignment
  tone?: Tone
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  alignment = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        alignment === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'lux-eyebrow',
            tone === 'light' ? 'text-white/78' : 'text-primary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-7 font-display text-[2.75rem] leading-[0.94] tracking-[-0.055em] md:text-[3.5rem] lg:text-[4.3rem]',
          tone === 'light' ? 'text-white' : 'text-text-primary'
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            'mt-6 max-w-2xl text-base leading-8 md:text-xl md:leading-9',
            tone === 'light' ? 'text-white/82' : 'text-text-secondary'
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
