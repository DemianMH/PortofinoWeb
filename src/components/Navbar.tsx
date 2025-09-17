'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logonegro.png" alt="Portofino Logo" width={120} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-6 flex items-center gap-4">
                 <Link href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 text-sm">
                    Order on DoorDash
                </Link>
                 <Link href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded-md hover:bg-green-600 transition-transform duration-300 hover:scale-105 text-sm">
                    Order on Uber Eats
                </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
               <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
                 <Link href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-400">
                    Order on DoorDash
                </Link>
                 <Link href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-500 text-white font-bold px-4 py-2 rounded-md hover:bg-green-600">
                    Order on Uber Eats
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar