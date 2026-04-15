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
      {
        source: '/projects/private-home-automation',
        destination: '/projects/signia-court',
        permanent: true,
      },
      {
        source: '/projects/commercial-electrical-services',
        destination: '/projects/city-of-london-office',
        permanent: true,
      },
      {
        source: '/projects/integrated-security-systems',
        destination: '/projects/mayfair-residence',
        permanent: true,
      },
      {
        source: '/projects/business-it-support',
        destination: '/projects/kingsland-office',
        permanent: true,
      },
      {
        source: '/projects/audio-visual-installation',
        destination: '/projects/notting-hill-home',
        permanent: true,
      },
      {
        source: '/projects/data-network-cabling',
        destination: '/projects/west-end-retail',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
