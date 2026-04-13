'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ctaLink, navLinks } from '@/data/navigation'
import type { NavLink } from '@/data/navigation'
import { motionDurations, motionEasing } from '@/lib/motion'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const nextScrolled = currentScrollY > 18
      const nextVisible =
        isMobileMenuOpen || currentScrollY < 96 || currentScrollY < lastScrollY.current

      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled))
      setIsHeaderVisible((prev) => (prev === nextVisible ? prev : nextVisible))
      lastScrollY.current = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-6',
          isHeaderVisible ? 'translate-y-0' : '-translate-y-[120%]'
        )}
      >
        <nav
          className={cn(
            'mx-auto flex h-16 max-w-[1480px] items-center justify-between rounded-full border px-5 shadow-[0_18px_40px_rgba(24,18,15,0.08)] backdrop-blur-xl lg:h-[4.8rem] lg:px-7',
            isScrolled ? 'border-border/90 bg-[rgba(252,248,243,0.9)]' : 'border-white/12 bg-[rgba(17,13,12,0.28)]'
          )}
        >
          <Logo isScrolled={isScrolled} />
          <DesktopNav currentPath={pathname} isScrolled={isScrolled} />
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            isScrolled={isScrolled}
          />
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <MobileMenu
            links={navLinks}
            cta={ctaLink}
            currentPath={pathname}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-full">
      <Image
        src="/assets/images/logo-200x42.png"
        alt="Concepto Solutions Ltd"
        width={200}
        height={42}
        className={cn('h-8 w-auto transition-opacity duration-300 lg:h-9', isScrolled ? 'opacity-100' : 'opacity-92')}
      />
    </Link>
  )
}

function DesktopNav({
  currentPath,
  isScrolled,
}: {
  currentPath: string
  isScrolled: boolean
}) {
  return (
    <div className="hidden items-center gap-10 lg:flex xl:gap-12">
      <ul className="flex items-center gap-7 xl:gap-9">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLinkComponent
              link={link}
              isActive={currentPath === link.href}
              isScrolled={isScrolled}
            />
          </li>
        ))}
      </ul>
      <Link
        href={ctaLink.href}
        className={cn(
          'rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300',
          isScrolled
            ? 'border border-primary bg-primary text-white hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_18px_40px_rgba(124,38,51,0.24)]'
            : 'border border-white/16 bg-white/10 text-white hover:border-white/26 hover:bg-white/18'
        )}
      >
        {ctaLink.label}
      </Link>
    </div>
  )
}

function NavLinkComponent({
  link,
  isActive,
  isScrolled,
}: {
  link: NavLink
  isActive: boolean
  isScrolled: boolean
}) {
  return (
    <Link
      href={link.href}
      className={cn(
        'group relative cursor-pointer text-[12px] font-semibold uppercase tracking-[0.24em] transition-colors duration-200',
        isScrolled
          ? isActive
            ? 'text-primary'
            : 'text-text-secondary hover:text-primary'
          : isActive
            ? 'text-white'
            : 'text-white/80 hover:text-white'
      )}
    >
      {link.label}
      <span
        className={cn(
          'absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ease-out',
          'w-0 group-hover:w-full',
          isActive && 'w-full'
        )}
      />
    </Link>
  )
}

function MobileMenuButton({
  isOpen,
  onClick,
  isScrolled,
}: {
  isOpen: boolean
  onClick: () => void
  isScrolled: boolean
}) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden',
        isScrolled ? 'border-border/70 text-text-primary hover:text-primary' : 'border-white/12 text-white hover:text-white/80'
      )}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  )
}

function MobileMenu({
  links,
  cta,
  currentPath,
  onClose,
}: {
  links: NavLink[]
  cta: NavLink
  currentPath: string
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: motionDurations.fast }}
      className="fixed inset-0 z-[100] bg-[rgba(20,15,13,0.98)] pt-24 text-white backdrop-blur-2xl lg:hidden"
    >
      <nav className="flex h-full flex-col px-8 pb-12">
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: motionDurations.fast,
                ease: motionEasing.standard,
              }}
            >
              <Link
                href={link.href}
                className={cn(
                  'block border-b border-white/8 py-4 font-display text-[2.4rem] leading-none tracking-[-0.04em] transition-colors',
                  currentPath === link.href ? 'text-primary' : 'text-white/82 hover:text-white'
                )}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="overlay-card mt-auto rounded-[1.75rem] p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] overlay-meta">
            Start a Project
          </p>
          <Link
            href={cta.href}
            className="mt-5 block w-full rounded-full border border-primary bg-primary py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_18px_40px_rgba(124,38,51,0.24)]"
            onClick={onClose}
          >
            {cta.label}
          </Link>
        </div>
      </nav>
    </motion.div>
  )
}
