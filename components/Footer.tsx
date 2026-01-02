import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-300">AAMENN</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Your photos. Your privacy.</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              Secure cloud storage for the modern web.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">PRODUCT</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#features" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#about" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">LEGAL</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#privacy" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 text-center md:text-left">
            © 2023 AAMENN Inc. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-white transition"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-white transition"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
