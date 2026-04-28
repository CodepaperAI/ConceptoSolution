import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/motion/Reveal'
import type { SiteImage } from '@/data/siteImages'

interface PageHeroProps {
  image: SiteImage
  eyebrow: string
  title: string
  description: string
  aside?: ReactNode
  priority?: boolean
  ctaLabel?: string
  ctaHref?: string
  showCta?: boolean
  /**
   * `default` keeps the heavy dark wash used on about/blog/services hero pages.
   * `subtle` keeps the project photo visible — used on individual project detail pages.
   */
  overlay?: 'default' | 'subtle'
}

export default function PageHero({
  image,
  eyebrow,
  title,
  description,
  aside,
  priority = false,
  ctaLabel = 'Get a Free Quote',
  ctaHref = '/contact',
  showCta = true,
  overlay = 'default',
}: PageHeroProps) {
  const subtle = overlay === 'subtle'
  return (
    <section className="relative -mt-16 min-h-[calc(88svh+4rem)] overflow-hidden border-b border-border/70 bg-[#120f0d] pt-16 md:min-h-[calc(96svh+4rem)] lg:-mt-20 lg:min-h-[calc(100svh+5rem)] lg:pt-20">
      <div className="absolute inset-0">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            placeholder={image.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={image.blurDataURL}
            sizes="100vw"
            quality={72}
            className="object-cover"
            style={{ objectPosition: image.objectPosition }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.22),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(124,38,51,0.32),transparent_42%),linear-gradient(135deg,#1a1512_0%,#0f0c0b_100%)]" />
        )}
        {subtle ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,12,10,0.70)_0%,rgba(16,12,10,0.48)_28%,rgba(16,12,10,0.22)_58%,rgba(16,12,10,0.08)_88%,rgba(16,12,10,0.04)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.18)_0%,rgba(16,12,10,0.06)_40%,rgba(16,12,10,0.46)_100%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,12,10,0.94)_0%,rgba(16,12,10,0.82)_34%,rgba(16,12,10,0.48)_68%,rgba(16,12,10,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.42)_0%,rgba(16,12,10,0.14)_38%,rgba(16,12,10,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(124,38,51,0.18),transparent_28%)]" />
          </>
        )}
      </div>
      <Container className="relative z-10 flex min-h-[calc(88svh-4rem)] items-center py-14 md:min-h-[calc(96svh-4rem)] md:py-20 lg:min-h-[calc(100svh-5rem)] lg:py-24">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end xl:gap-16">
          <div className="max-w-4xl min-w-0">
            <Reveal>
              <span className="lux-eyebrow overlay-eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-5xl text-balance font-sans font-semibold text-[clamp(2.1rem,8vw,5.75rem)] leading-[1.02] tracking-[-0.045em] text-white [text-shadow:0_10px_34px_rgba(0,0,0,0.3)] md:mt-7 md:leading-[0.9] md:tracking-[-0.055em]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-sm leading-7 overlay-copy [text-shadow:0_8px_26px_rgba(0,0,0,0.24)] md:mt-8 md:text-xl md:leading-9">
                {description}
              </p>
            </Reveal>
            {showCta && (
              <Reveal delay={0.24}>
                <Link
                  href={ctaHref}
                  className="lux-button-primary mt-8 inline-flex items-center gap-3 md:mt-10"
                >
                  {ctaLabel} <ArrowRight size={16} />
                </Link>
              </Reveal>
            )}
          </div>
          {aside ? (
            <Reveal delay={0.24} className="lux-panel-dark overlay-panel max-w-sm min-w-0 lg:justify-self-end">
              {aside}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
