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
        {/* Top Section: Brand + Social */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-12 sm:flex-row sm:items-center sm:justify-between">
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
            <p className="max-w-sm text-sm leading-6 text-white/68">
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
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/[0.06] text-white/60 transition-all duration-300 hover:border-secondary hover:bg-secondary/20 hover:text-secondary"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Middle Section: 4-Column Grid */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Services */}
          <FooterColumn title={footerNavigation.services.title} links={footerNavigation.services.links} />

          {/* Company */}
          <FooterColumn title={footerNavigation.company.title} links={footerNavigation.company.links} />

          {/* Opening Hours */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-white/68">
              Opening Hours
            </h3>
            <ul className="space-y-5">
              {footerWorkingHours.map((item) => (
                <li key={item.days} className="flex justify-between gap-8 text-sm">
                  <span className="text-white/60">{item.days}</span>
                  <span className="shrink-0 text-white/90">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-white/68">
              Contact Us
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
                        className="min-w-0 text-sm leading-6 text-white/68 transition-colors duration-200 hover:text-white focus-visible:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="min-w-0 text-sm leading-6 text-white/68">
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
            <p className="text-sm text-white/60">
              &copy; {footerCopyright.year} {footerCopyright.companyName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link
                href="/privacy"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:text-white"
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
      <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-white/68">
        {title}
      </h3>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.href} className="min-w-0">
            <Link
              href={link.href}
              className="block min-w-0 text-sm text-white/68 transition-colors duration-200 hover:text-white focus-visible:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
