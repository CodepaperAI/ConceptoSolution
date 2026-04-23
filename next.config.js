/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Legacy service-page slugs → real projects that best represent that service
      {
        source: '/projects/private-home-automation',
        destination: '/projects/littleton',
        permanent: true,
      },
      {
        source: '/projects/commercial-electrical-services',
        destination: '/projects/miller-knoll',
        permanent: true,
      },
      {
        source: '/projects/integrated-security-systems',
        destination: '/projects/alvyn-court',
        permanent: true,
      },
      {
        source: '/projects/business-it-support',
        destination: '/projects/naught-one-london',
        permanent: true,
      },
      {
        source: '/projects/audio-visual-installation',
        destination: '/projects/goldwin-london',
        permanent: true,
      },
      {
        source: '/projects/data-network-cabling',
        destination: '/projects/chester-square',
        permanent: true,
      },
      // Replaced demo-portfolio slugs → their real equivalents
      {
        source: '/projects/mayfair-residence',
        destination: '/projects/chester-square',
        permanent: true,
      },
      {
        source: '/projects/city-of-london-office',
        destination: '/projects/miller-knoll',
        permanent: true,
      },
      {
        source: '/projects/kingsland-office',
        destination: '/projects/naught-one-london',
        permanent: true,
      },
      {
        source: '/projects/notting-hill-home',
        destination: '/projects/chesterfield-hill',
        permanent: true,
      },
      {
        source: '/projects/west-end-retail',
        destination: '/projects/goldwin-london',
        permanent: true,
      },
      {
        source: '/projects/boutique-hotel',
        destination: '/projects/seasons-of-india',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
