import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
  style: ['normal', 'italic'],
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
  title: 'KIZUNA Journey — Japan Travel B2B Partner for Middle East Agencies',
  description: 'Dubai-based Japan travel specialist for travel agencies in the UAE and Middle East. Halal-friendly, B2B only, UAE timezone response.',
  openGraph: {
    title: 'KIZUNA Journey — Japan Travel B2B Partner',
    description: 'Dubai-based. UAE time zone. Japan-only B2B partner for travel agencies across the Middle East.',
    type: 'website',
    images: ['/images/hero_sakura.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
