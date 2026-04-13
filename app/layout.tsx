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
    default: 'Concepto Solutions | Integrated Electrical Contractor',
    template: '%s | Concepto Solutions',
  },
  description: 'Concepto Solutions is an integrated electrical contractor serving clients across London and the South East. We spec and install electrical, smart home, security, data, and IT infrastructure systems.',
  keywords: ['electrical contractor', 'smart home', 'security systems', 'data fibre', 'IT support', 'London', 'South East'],
  authors: [{ name: 'Concepto Solutions Ltd' }],
  creator: 'Concepto Solutions Ltd',
  metadataBase: new URL('https://conceptosolutions.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://conceptosolutions.co.uk',
    siteName: 'Concepto Solutions',
    title: 'Concepto Solutions | Integrated Electrical Contractor',
    description: 'Concepto Solutions is an integrated electrical contractor serving clients across London and the South East.',
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
    title: 'Concepto Solutions | Integrated Electrical Contractor',
    description: 'Concepto Solutions is an integrated electrical contractor serving clients across London and the South East.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-secondary font-sans antialiased">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
