'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      // Animate features
      if (featuresRef.current) {
        const features = featuresRef.current.children
        gsap.from(features, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Animate CTA box
      if (ctaBoxRef.current) {
        gsap.from(ctaBoxRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaBoxRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption ensures your data is unreadable to anyone but you.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'text-blue-400 bg-gray-800/30',
    },
    {
      title: 'No Tracking, No Ads',
      description: 'Our business model is simple: you pay for storage. We don&apos;t profit from your behavior.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      color: 'text-red-400 bg-gray-800/30',
    },
    {
      title: 'Data Ownership',
      description: 'Export your data anytime in standard formats. No vendor lock-in.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: 'text-blue-400 bg-gray-800/30',
    },
  ]

  return (
    <section ref={sectionRef} id="security" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-black/80 relative overflow-hidden" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Built on a foundation of trust.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-8 sm:mb-12">
              In a world where data is the new currency, AAMENN stands apart. We charge a fair price for storage so we never have to sell your privacy.
            </p>

            <div ref={featuresRef} className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                    {/* Electric orbit animation */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 48 48">
                        {/* Orbit path */}
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.2)"
                          strokeWidth="1"
                        />
                        {/* Electric particle */}
                        <circle
                          cx="24"
                          cy="4"
                          r="2"
                          fill="#60a5fa"
                          className="drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                        >
                          <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 24 24"
                            to="360 24 24"
                            dur={`${2.5 + index * 0.3}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </svg>
                    </div>
                    {/* Icon container */}
                    <div className={`absolute inset-0 rounded-xl ${feature.color} flex items-center justify-center backdrop-blur-sm`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

            <div ref={ctaBoxRef} className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-300 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Join the Movement
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-200 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-700/50 transition-all duration-300 hover:scale-105 transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">Most Cloud Storage</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Store photos for ads, train AI on your images, sells usage data.</p>
                </div>
              </div>

              <div className="flex items-center justify-center py-1 sm:py-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50 dark:bg-gray-800/30 rounded-xl border-2 border-blue-200 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:scale-105 transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">AAMENN Storage</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Private, encrypted, peace of mind included.</p>
                </div>
              </div>
            </div>

            <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all font-semibold text-base sm:text-lg hover:scale-105 transform duration-300 shadow-lg hover:shadow-blue-500/50">
              Secure My Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
