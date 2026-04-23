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
        alignment === 'center' && 'mx-auto max-w-3xl text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'lux-eyebrow',
            tone === 'light' ? 'overlay-eyebrow' : 'text-primary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-7 font-sans font-semibold text-[2.25rem] leading-[1.05] tracking-[-0.035em] md:text-[2.75rem] lg:text-[3.25rem]',
          tone === 'light' ? 'text-white' : 'text-text-primary'
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            'mt-6 max-w-2xl text-base leading-8 md:text-xl md:leading-9',
            tone === 'light' ? 'overlay-copy' : 'text-text-secondary'
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
