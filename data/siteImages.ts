export interface SiteImage {
  src: string
  alt: string
  objectPosition?: string
  blurDataURL?: string
}

const createPlaceholder = (base: string, accent: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${base}" offset="0%"/>
          <stop stop-color="${accent}" offset="100%"/>
        </linearGradient>
      </defs>
      <rect width="40" height="24" fill="url(#g)"/>
      <rect width="40" height="24" fill="rgba(255,255,255,0.08)"/>
    </svg>`
  )}`

const placeholders = {
  warmInterior: createPlaceholder('#8f7760', '#d4c2ad'),
  charcoalInterior: createPlaceholder('#2a2422', '#8f8379'),
  softStone: createPlaceholder('#b9b2a7', '#e8e2d8'),
  bronzeGlow: createPlaceholder('#6a4728', '#d5a25b'),
  cleanRetail: createPlaceholder('#c8c2b6', '#f2efe8'),
  slateScreen: createPlaceholder('#3b4456', '#8ca0d2'),
} as const

const images = {
  homeHero: {
    src: '/assets/images/site/home-hero.jpeg',
    alt: 'Completed luxury living room installation with modern lighting and integrated finishes.',
    objectPosition: 'center 58%',
    blurDataURL: placeholders.warmInterior,
  },
  featuredSigniaCourt: {
    src: '/assets/images/site/project-signia-court.jpg',
    alt: 'High-end residential interior completed by Concepto.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  featuredMayfairResidence: {
    src: '/assets/images/site/project-mayfair-residence.jpg',
    alt: 'Elegant residential lounge with bespoke joinery and lighting.',
    objectPosition: 'center center',
    blurDataURL: placeholders.charcoalInterior,
  },
  featuredCityOffice: {
    src: '/assets/images/site/project-city-office.jpeg',
    alt: 'Commercial installation with integrated display and media systems.',
    objectPosition: 'center center',
    blurDataURL: placeholders.cleanRetail,
  },
  serviceElectrical: {
    src: '/assets/images/site/service-electrical.jpeg',
    alt: 'Decorative lighting feature showing electrical installation detail.',
    objectPosition: 'center center',
    blurDataURL: placeholders.bronzeGlow,
  },
  serviceSmartHome: {
    src: '/assets/images/site/service-smart-home.jpeg',
    alt: 'Smart home living area with integrated lighting and modern controls.',
    objectPosition: 'center center',
    blurDataURL: placeholders.warmInterior,
  },
  serviceSecurity: {
    src: '/assets/images/site/service-security.jpeg',
    alt: 'Integrated building display and monitoring installation.',
    objectPosition: 'center center',
    blurDataURL: placeholders.slateScreen,
  },
  serviceDataFibre: {
    src: '/assets/images/site/service-data-fibre.jpeg',
    alt: 'Commercial floorplate with structured systems and coordinated services.',
    objectPosition: 'center center',
    blurDataURL: placeholders.cleanRetail,
  },
  serviceAv: {
    src: '/assets/images/site/service-av.jpg',
    alt: 'Integrated bathroom display installation and audio-visual fitout.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  serviceItSupport: {
    src: '/assets/images/site/service-it-support.jpeg',
    alt: 'Large format digital display installation in a commercial environment.',
    objectPosition: 'center center',
    blurDataURL: placeholders.slateScreen,
  },
  aboutHero: {
    src: '/assets/images/site/about-hero.jpg',
    alt: 'Refined interior fitout used for the Concepto about page hero.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  aboutStory: {
    src: '/assets/images/site/about-story.jpg',
    alt: 'Completed interior space highlighting finishes and detailing.',
    objectPosition: 'center center',
    blurDataURL: placeholders.charcoalInterior,
  },
  aboutApproach: {
    src: '/assets/images/site/about-approach.jpg',
    alt: 'Completed luxury retail environment with architectural detailing.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  contactHero: {
    src: '/assets/images/site/contact-hero.jpeg',
    alt: 'Residential project image for the contact page hero.',
    objectPosition: 'center 52%',
    blurDataURL: placeholders.warmInterior,
  },
  blogHero: {
    src: '/assets/images/site/blog-hero.jpg',
    alt: 'Architectural interior image for the blog page hero.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  blogRegulations: {
    src: '/assets/images/site/blog-regulations.jpg',
    alt: 'Interior project detail supporting an article about regulations.',
    objectPosition: 'center center',
    blurDataURL: placeholders.charcoalInterior,
  },
  blogTechnology: {
    src: '/assets/images/site/blog-technology.jpg',
    alt: 'Interior project detail supporting an article about technology.',
    objectPosition: 'center center',
    blurDataURL: placeholders.warmInterior,
  },
  blogSafety: {
    src: '/assets/images/site/blog-safety.jpg',
    alt: 'Interior project detail supporting an article about safety standards.',
    objectPosition: 'center center',
    blurDataURL: placeholders.softStone,
  },
  blogInfrastructure: {
    src: '/assets/images/site/blog-infrastructure.jpg',
    alt: 'Interior project detail supporting an article about infrastructure.',
    objectPosition: 'center center',
    blurDataURL: placeholders.charcoalInterior,
  },
  servicesHero: {
    src: '/assets/images/site/services-hero.jpeg',
    alt: 'Completed residential interior for the services page hero.',
    objectPosition: 'center 54%',
    blurDataURL: placeholders.warmInterior,
  },
  projectsHero: {
    src: '/assets/images/site/projects-hero.jpg',
    alt: 'Completed project interior for the projects page hero.',
    objectPosition: 'center center',
    blurDataURL: placeholders.charcoalInterior,
  },
} satisfies Record<string, SiteImage>

export const homeImages = {
  hero: images.homeHero,
  about: images.aboutStory,
  featuredProjects: {
    signiaCourt: images.featuredSigniaCourt,
    mayfairResidence: images.featuredMayfairResidence,
    cityOffice: images.featuredCityOffice,
  },
  serviceCards: {
    electrical: images.serviceElectrical,
    smartHome: images.serviceSmartHome,
    security: images.serviceSecurity,
    dataFibre: images.serviceDataFibre,
    av: images.serviceAv,
    itSupport: images.serviceItSupport,
  },
} as const

export const servicesPageImages = {
  hero: images.servicesHero,
  details: {
    electrical: images.serviceElectrical,
    smartHome: images.serviceSmartHome,
    security: images.serviceSecurity,
    dataFibre: images.serviceDataFibre,
    itSupport: images.serviceItSupport,
  },
} as const

export const projectsPageImages = {
  hero: images.projectsHero,
  cards: {
    signiaCourt: images.featuredSigniaCourt,
    cityOffice: images.featuredCityOffice,
    mayfairResidence: images.featuredMayfairResidence,
    kingslandOffice: images.serviceItSupport,
    nottingHillHome: images.homeHero,
    westEndRetail: images.serviceDataFibre,
  },
} as const

export const aboutPageImages = {
  hero: images.aboutHero,
  story: images.aboutStory,
  approach: images.aboutApproach,
} as const

export const contactPageImages = {
  hero: images.contactHero,
} as const

export const blogPageImages = {
  hero: images.blogHero,
  posts: {
    regulations: images.blogRegulations,
    technology: images.blogTechnology,
    safety: images.blogSafety,
    infrastructure: images.blogInfrastructure,
  },
} as const
