import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import PageTransition from '@/components/PageTransition'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
  style: ['normal', 'italic'],
  axes: ['WONK'],
  variable: '--font-fraunces-var',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kizuna-next.vercel.app'),
  title: 'KIZUNA Journey — Japan Travel Specialist for UAE Travel Agents',
  description: 'Dubai-based Japan travel specialist for B2B. Halal-certified itineraries, 24-hour quotes, UAE timezone support. The only Japan-only operator in the UAE.',
  keywords: ['Japan travel agent UAE', 'halal Japan tour', 'B2B Japan travel', 'Dubai Japan specialist', 'Middle East Japan travel', 'halal Japan itinerary'],
  openGraph: {
    title: 'KIZUNA Journey — Your Private Gateway to Japan',
    description: 'B2B Japan travel specialist based in Dubai. Halal expertise. 24-hour turnaround. UAE timezone.',
    url: 'https://kizuna-next.vercel.app',
    siteName: 'KIZUNA Journey',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero_sakura.jpg', width: 1200, height: 630, alt: 'KIZUNA Journey — Japan Travel' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'KIZUNA Journey FZCO',
  description: 'Dubai-based Japan travel specialist for travel agencies in the UAE and Middle East. B2B only.',
  url: 'https://kizuna-next.vercel.app',
  telephone: '+971509509781',
  email: 'ryoma@kizuna-journey.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 38, Wasl Vita Mall, Jumeirah 1',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: ['AE', 'SA', 'KW', 'QA', 'BH', 'OM'],
  knowsLanguage: ['en', 'ar'],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
