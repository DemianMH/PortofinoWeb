// src/components/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-400">815 Hogan Lane #1</p>
            <p className="text-gray-400">Conway, AR, 72034</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Phone: <a href="tel:+15013586103" className="hover:text-yellow-400">+1 501-358-6103</a>
            </p>
            {/* Si tienes un email, puedes añadirlo aquí */}
            {/* <p className="text-gray-400">Email: info@portofino.com</p> */}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Hours</h3>
            <p className="text-gray-400">Sun - Thu: 11:00 AM - 9:00 PM</p>
            <p className="text-gray-400">Fri - Sat: 11:00 AM - 9:30 PM</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Portofino Italian Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer