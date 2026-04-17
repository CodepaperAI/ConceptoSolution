export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Explore Our Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Testimonials', href: '/blog' },
]

export const ctaLink: NavLink = {
  label: 'Contact Us',
  href: '/contact',
}
