const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-500 uppercase tracking-wider">Visit Us</h3>
            <a href="https://maps.google.com/?q=815+Hogan+Lane+Conway+AR+72034" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors group">
              <p className="group-hover:translate-x-1 transition-transform">815 Hogan Lane #1</p>
              <p className="group-hover:translate-x-1 transition-transform">Conway, AR, 72034</p>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-500 uppercase tracking-wider">Contact & Social</h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300">
                <a href="tel:+15013586103" className="hover:text-white transition-colors">+1 501-358-6103</a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+15013586133" className="hover:text-white transition-colors">+1 501-358-6133</a>
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/PortofinoItalianRestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#1877F2] hover:scale-110 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/portofino.cw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#E4405F] hover:scale-110 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@portofino.cw" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.49 1.5-.32.65-.43 1.39-.34 2.09.21 1.52 1.38 2.8 2.91 3.03 1.11.23 2.29.07 3.32-.49 1.12-.59 1.83-1.74 1.83-2.99V.02h-1.45z"/></svg>
              </a>
              <a href="https://www.linktr.ee/portofino.cw" target="_blank" rel="noopener noreferrer" aria-label="Linktree" className="text-gray-400 hover:text-[#43E660] hover:scale-110 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.736 5.853L13.26 0h-2.552l-.476 5.853L5.4 1.886l-1.928 1.71 6.136 5.253-7.514 3.298.87 2.428 7.398-2.273v7.352H6.553v2.36h3.809V24h3.244v-1.986h3.81v-2.36h-3.81v-7.352l7.397 2.273.87-2.428-7.513-3.298 6.136-5.253-1.928-1.71-4.832 3.967z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-500 uppercase tracking-wider">Hours</h3>
            <div className="text-gray-300 space-y-1">
              <p>Sun - Thu: 11:00 AM - 9:00 PM</p>
              <p>Fri - Sat: 11:00 AM - 9:30 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Portofino Italian Restaurant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;