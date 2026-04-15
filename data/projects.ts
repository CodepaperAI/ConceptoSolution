import type { SiteImage } from '@/data/siteImages'
import {
  aboutPageImages,
  homeImages,
  projectsPageImages,
  servicesPageImages,
} from '@/data/siteImages'

export interface ProjectEntry {
  slug: string
  legacySlugs: string[]
  title: string
  shortTitle?: string
  summary: string
  shortDescription: string
  supportDescription: string
  location: string
  category: string
  year: string
  services: string[]
  heroImage: SiteImage
  galleryImages: SiteImage[]
  ctaCopy: string
  homeFeature: {
    span: string
    aspect: string
  }
}

export const projectEntries: ProjectEntry[] = [
  {
    slug: 'signia-court',
    legacySlugs: ['private-home-automation'],
    title: 'SIGNIA COURT',
    summary:
      'A residential portfolio project where electrical, lighting and integrated living systems were coordinated to support a clean, contemporary finish.',
    shortDescription:
      'Residential scheme combining core electrical work with smart living infrastructure.',
    supportDescription:
      'Projects like this rely on careful early coordination so lighting, power and control systems support the apartment environment without interrupting the calm of the finished rooms.',
    location: 'Wembley, HA9',
    category: 'Residential',
    year: '2024',
    services: ['Smart Home', 'Lighting', 'Electrical'],
    heroImage: projectsPageImages.cards.signiaCourt,
    galleryImages: [
      homeImages.serviceCards.smartHome,
      servicesPageImages.details.electrical,
      aboutPageImages.story,
    ],
    ctaCopy: 'Book a Home Survey',
    homeFeature: {
      span: 'xl:col-span-7',
      aspect: 'aspect-[16/10]',
    },
  },
  {
    slug: 'mayfair-residence',
    legacySlugs: ['integrated-security-systems'],
    title: 'MAYFAIR RESIDENCE',
    summary:
      'A private residential portfolio project focused on discreet smart home, audio visual and lighting integration.',
    shortDescription:
      'Private client environment shaped around comfort, control and finish-sensitive installation.',
    supportDescription:
      'The emphasis is on integrating technology in a way that feels composed and intuitive, allowing the visual quality of the home to stay front and center.',
    location: 'Mayfair, W1',
    category: 'Private Client',
    year: '2024',
    services: ['Smart Home', 'AV', 'Lighting'],
    heroImage: projectsPageImages.cards.mayfairResidence,
    galleryImages: [
      homeImages.serviceCards.av,
      homeImages.serviceCards.smartHome,
      aboutPageImages.hero,
    ],
    ctaCopy: 'Discuss a Private Client Project',
    homeFeature: {
      span: 'xl:col-span-5',
      aspect: 'aspect-[16/11]',
    },
  },
  {
    slug: 'city-of-london-office',
    legacySlugs: ['commercial-electrical-services'],
    title: 'CITY OF LONDON OFFICE',
    summary:
      'A commercial office portfolio project delivered with coordinated electrical, data and display infrastructure.',
    shortDescription:
      'Commercial environment where services were aligned to support daily operation and presentation.',
    supportDescription:
      'Workplace projects of this kind benefit from joined-up planning across power, connectivity and display requirements so the finished space performs as clearly as it looks.',
    location: 'City of London, EC2',
    category: 'Commercial',
    year: '2024',
    services: ['Electrical', 'Data', 'Display'],
    heroImage: projectsPageImages.cards.cityOffice,
    galleryImages: [
      homeImages.serviceCards.dataFibre,
      servicesPageImages.details.electrical,
      aboutPageImages.approach,
    ],
    ctaCopy: 'Request Commercial Quote',
    homeFeature: {
      span: 'xl:col-span-5',
      aspect: 'aspect-[16/11]',
    },
  },
  {
    slug: 'kingsland-office',
    legacySlugs: ['business-it-support'],
    title: 'KINGSLAND OFFICE',
    summary:
      'A workplace-focused portfolio entry centered on IT support, network infrastructure and business-ready display systems.',
    shortDescription:
      'Commercial project where IT and communications infrastructure support everyday team use.',
    supportDescription:
      'Portfolio work in this category is shaped around dependable connectivity, practical support access and a setup that helps teams stay productive from day one.',
    location: 'Kingsland, E2',
    category: 'Commercial',
    year: '2024',
    services: ['IT Support', 'Network', 'Display'],
    heroImage: projectsPageImages.cards.kingslandOffice,
    galleryImages: [
      projectsPageImages.cards.cityOffice,
      homeImages.serviceCards.dataFibre,
      homeImages.serviceCards.itSupport,
    ],
    ctaCopy: 'Request IT Support',
    homeFeature: {
      span: 'xl:col-span-4',
      aspect: 'aspect-[16/11]',
    },
  },
  {
    slug: 'notting-hill-home',
    legacySlugs: ['audio-visual-installation'],
    title: 'NOTTING HILL HOME',
    summary:
      'A residential portfolio project bringing smart home, audio visual and security elements into one connected domestic environment.',
    shortDescription:
      'Home-focused installation designed around ease of use, comfort and discreet technical delivery.',
    supportDescription:
      'The goal on projects like this is to keep controls straightforward and the technology well integrated, so the experience of living in the home stays effortless.',
    location: 'Notting Hill, W11',
    category: 'Residential',
    year: '2023',
    services: ['Smart Home', 'Security', 'Audio Visual'],
    heroImage: projectsPageImages.cards.nottingHillHome,
    galleryImages: [
      homeImages.serviceCards.smartHome,
      homeImages.serviceCards.av,
      aboutPageImages.hero,
    ],
    ctaCopy: 'Plan Your Home Project',
    homeFeature: {
      span: 'xl:col-span-4',
      aspect: 'aspect-[16/11]',
    },
  },
  {
    slug: 'west-end-retail',
    legacySlugs: ['data-network-cabling'],
    title: 'WEST END RETAIL',
    summary:
      'A retail portfolio project where lighting, electrical and data infrastructure were aligned with the operation of the space.',
    shortDescription:
      'Retail environment supported by coordinated power, lighting and connectivity.',
    supportDescription:
      'Retail projects benefit from infrastructure that is robust behind the scenes while remaining visually controlled across customer-facing areas.',
    location: 'West End, W1',
    category: 'Commercial',
    year: '2023',
    services: ['Lighting', 'Electrical', 'Data'],
    heroImage: projectsPageImages.cards.westEndRetail,
    galleryImages: [
      servicesPageImages.details.electrical,
      projectsPageImages.cards.cityOffice,
      aboutPageImages.approach,
    ],
    ctaCopy: 'Discuss a Retail Project',
    homeFeature: {
      span: 'xl:col-span-4',
      aspect: 'aspect-[16/11]',
    },
  },
]

export const homeFeaturedProjects = projectEntries.slice(0, 3)

export function getProjectBySlug(slug: string) {
  return projectEntries.find(
    (project) => project.slug === slug || project.legacySlugs.includes(slug)
  )
}
