import Link from 'next/link'
import Image from 'next/image'
import { footerContact, footerCopyright, footerNavigation, footerSocial, footerWorkingHours } from '@/data/footer'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-bg-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,171,141,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(124,38,51,0.14),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,17,15,0.97)_0%,rgba(21,17,15,0.94)_100%)]" />

      <Container className="relative z-10">
        {/* Top Section: Brand + Social (tile outlined) */}
        <div className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
              <Link href="/" className="shrink-0">
                <Image
                  src="/assets/images/logo-200x42.png"
                  alt="Concepto Solutions Ltd"
                  width={200}
                  height={42}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="max-w-sm text-sm leading-6 overlay-copy-soft">
                {footerCopyright.description}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {footerSocial.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{ '--brand-color': social.hoverColor } as React.CSSProperties}
                    className="overlay-card group flex h-10 w-10 items-center justify-center rounded-full overlay-meta transition-all duration-300 hover:border-[var(--brand-color)] hover:bg-[color-mix(in_srgb,var(--brand-color)_18%,transparent)] hover:text-[var(--brand-color)]"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Middle Section: 4-Column Grid */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Services */}
          <FooterColumn title={footerNavigation.services.title} links={footerNavigation.services.links} />

          {/* Company */}
          <FooterColumn title={footerNavigation.company.title} links={footerNavigation.company.links} />

          {/* Credentials */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] overlay-meta">
              Credentials
            </h3>
            <ul className="space-y-5">
              {footerWorkingHours.map((item) => (
                <li key={item.days} className="flex justify-between gap-8 text-sm">
                  <span className="overlay-meta">{item.days}</span>
                  <span className="shrink-0 overlay-copy">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] overlay-meta">
              Contact
            </h3>
            <ul className="space-y-6">
              {footerContact.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="min-w-0 text-sm leading-6 overlay-copy-soft transition-colors duration-200 hover:text-white focus-visible:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="min-w-0 text-sm leading-6 overlay-copy-soft">
                        {item.value}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">
            <p className="text-sm overlay-meta">
              &copy; {footerCopyright.year} {footerCopyright.companyName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link
                href="/privacy"
                className="text-sm overlay-meta transition-colors duration-200 hover:text-white focus-visible:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm overlay-meta transition-colors duration-200 hover:text-white focus-visible:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: { label: string; href: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="min-w-0">
      <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] overlay-meta">
        {title}
      </h3>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.href} className="min-w-0">
            <Link
              href={link.href}
              className="block min-w-0 text-sm overlay-copy-soft transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4 focus-visible:text-white focus-visible:underline focus-visible:underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
