import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterContact {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}

export const footerNavigation = {
  services: {
    title: 'Services',
    links: [
      { label: 'Electrical', href: '/services#electrical' },
      { label: 'Smart Home & AV', href: '/services#smart-home' },
      { label: 'Security Systems', href: '/services#security' },
      { label: 'Data & Fibre', href: '/services#data-fibre' },
      { label: 'IT Infrastructure', href: '/services#it-support' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

export const footerSocial = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaXTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' },
]

export const footerContact: FooterContact[] = [
  {
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+44 (0)845 388 8348',
    href: 'tel:+448453888348',
  },
  {
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@conceptosolutions.co.uk',
    href: 'mailto:info@conceptosolutions.co.uk',
  },
  {
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: 'Unit 23, Westmoreland Road, NW9 9BW',
  },
]

export const footerWorkingHours = [
  { days: 'Monday - Friday', hours: '8:00am - 6:00pm' },
  { days: 'Saturday', hours: '9:00am - 1:00pm' },
  { days: 'Sunday', hours: 'Closed' },
]

export const footerCopyright = {
  year: new Date().getFullYear(),
  companyName: 'Concepto Solutions Ltd',
  tagline: 'Integrated Electrical Contractor',
  description: 'We spec and install electrical, smart home, AV, security, data, and IT infrastructure systems.',
}
