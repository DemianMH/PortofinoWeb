// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar' // Importamos Navbar
import Footer from '@/components/Footer' // Importamos Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portofino Italian Restaurant - Conway, AR',
  description: 'Authentic Italian Pizza & Pasta in Conway, Arkansas.',
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