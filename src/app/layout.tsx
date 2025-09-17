import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portofino Italian Restaurant - Conway, AR',
  description: 'The best authentic Italian food in Conway, Arkansas. Enjoy our fresh handmade pasta, pizza, seafood, and chef specials. Visit us for a unique dining experience.',
  keywords: ['italian restaurant', 'pizza', 'pasta', 'conway ar', 'food', 'dinner', 'portofino'],
  openGraph: {
    title: 'Portofino Italian Restaurant - Conway, AR',
    description: 'Authentic Italian Pizza & Pasta in Conway, Arkansas.',
    url: 'https://portofinoconway.com',
    siteName: 'Portofino Italian Restaurant',
    images: [
      {
        url: 'https://portofinoconway.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}