'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { shouldAnimate } from '@/lib/animations/utils'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !navRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        }
      )
    }, navRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!logoRef.current) return

    const logo = logoRef.current
    const onEnter = () => gsap.to(logo, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
    const onLeave = () => gsap.to(logo, { scale: 1, duration: 0.3, ease: 'power2.out' })

    logo.addEventListener('mouseenter', onEnter)
    logo.addEventListener('mouseleave', onLeave)

    return () => {
      logo.removeEventListener('mouseenter', onEnter)
      logo.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Add blur effect when sidebar opens
  useEffect(() => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      if (isMobileMenuOpen) {
        mainContent.style.filter = 'blur(8px)'
        mainContent.style.transition = 'filter 0.3s ease'
      } else {
        mainContent.style.filter = 'none'
      }
    }
  }, [isMobileMenuOpen])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm" style={{ zIndex: 99999, position: 'fixed' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between gap-4">
        {/* Logo - Separate on Left */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0" ref={logoRef}>
          <div className="relative h-9 sm:h-10 lg:h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center shadow-lg transition-all duration-300 w-9 sm:w-10 lg:w-11 group-hover:w-28 sm:group-hover:w-32 lg:group-hover:w-36 group-hover:px-2 sm:group-hover:px-3 group-hover:gap-2">
            {/* Lock Icon - stays on left */}
            <div className="flex items-center justify-center w-9 sm:w-10 lg:w-11 flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white transition-all duration-300 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Text that appears on hover */}
            <span className="text-white font-bold text-xs sm:text-sm whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300">
              AAMENN
            </span>
          </div>
        </Link>

        {/* Navigation Links in Glass Container - Hidden on mobile */}
        <div ref={linksRef} className="hidden lg:flex items-center gap-6 xl:gap-10 bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-full px-6 xl:px-10 py-3 lg:py-3.5 border-2 border-gray-300 dark:border-blue-500/20 shadow-lg">
          <Link href="#about" className="relative text-sm xl:text-lg text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 font-medium group">
            About us
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </Link>
          <Link href="#product" className="relative text-sm xl:text-lg text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 font-medium group">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </Link>
          <Link href="#features" className="relative text-sm xl:text-lg text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 font-medium group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </Link>
          <Link href="#pricing" className="relative text-sm xl:text-lg text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 font-medium group">
            Subscription
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </Link>
          <Link href="#signin" className="relative text-sm xl:text-lg text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 font-medium group">
            Sign In
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </Link>
        </div>

        {/* Marquee - Welcome Message - Hidden on mobile and tablet */}
        <div className="hidden xl:block flex-1 overflow-hidden mx-4">
          <div className="animate-marquee whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
            🎉 Welcome to AAMENN - Your Privacy First Storage Solution • Secure • Encrypted • Private • Zero Tracking • Zero Ads • 100% Encrypted • 
          </div>
        </div>

        {/* Right Side - Contact Button and Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 lg:p-3 rounded-full bg-white/10 hover:bg-blue-500 backdrop-blur-sm border-2 border-gray-300 dark:border-white/20 hover:border-blue-500 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <Link
            href="#contact"
            className="hidden sm:block px-4 sm:px-6 lg:px-9 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base bg-white/10 hover:bg-blue-500 text-gray-900 dark:text-white rounded-full transition-all duration-300 font-medium backdrop-blur-sm border-2 border-gray-300 dark:border-white/20 hover:border-blue-500 whitespace-nowrap uppercase tracking-wider"
          >
            CONTACT US
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 border-2 border-gray-300 dark:border-white/20"
            aria-label="Menu"
          >
            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar - Conditional Rendering */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-[280px] shadow-2xl lg:hidden animate-slide-in"
          style={{ 
            zIndex: 999999,
            backgroundColor: '#1a1625'
          }}
        >
          <div className="flex flex-col h-full p-6" style={{ backgroundColor: '#1a1625' }}>
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="self-end p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 mb-8"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links with Icons */}
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About us</span>
            </Link>
            
            <Link
              href="#product"
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Product</span>
            </Link>
            
            <Link
              href="#features"
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Features</span>
            </Link>
            
            <Link
              href="#pricing"
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Subscription</span>
            </Link>
            
            <Link
              href="#signin"
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Sign In</span>
            </Link>
          </nav>

          {/* Contact Button at Bottom */}
          <div className="mt-auto">
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all font-semibold shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </div>
      )}
    </nav>
  )
}
