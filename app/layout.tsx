import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Concepto Solutions | Smart Home, Electrical & IT',
    template: '%s | Concepto Solutions',
  },
  description:
    'London-based specialists in smart home automation, electrical services and IT support for homeowners, developers and businesses.',
  keywords: ['smart home solutions', 'electrical solutions', 'IT support', 'home automation', 'London', 'NICEIC approved', 'TrustMark registered'],
  authors: [{ name: 'Concepto Solutions Ltd' }],
  creator: 'Concepto Solutions Ltd',
  metadataBase: new URL('https://www.conceptosolutions.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.conceptosolutions.co.uk',
    siteName: 'Concepto Solutions',
    title: 'Concepto Solutions | Smart Home, Electrical & IT',
    description:
      'London-based specialists in smart home automation, electrical services and IT support for homeowners, developers and businesses.',
    images: [
      {
        url: '/assets/images/logo-200x42.png',
        width: 200,
        height: 42,
        alt: 'Concepto Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concepto Solutions | Smart Home, Electrical & IT',
    description:
      'London-based specialists in smart home automation, electrical services and IT support for homeowners, developers and businesses.',
    images: ['/assets/images/logo-200x42.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: { google: 'ADD_REAL_CODE_HERE' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-secondary font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-luxury">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
