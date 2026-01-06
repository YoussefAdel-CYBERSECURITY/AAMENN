'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !stepsRef.current) return

    const ctx = gsap.context(() => {
      const steps = stepsRef.current?.children

      if (steps) {
        gsap.from(steps, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: '1',
      title: 'Upload Securely',
      description: 'Drag and drop your photos. We encrypt them on your device before they ever touch our servers.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-3m0 0V9m0 3h3m-3 0H9" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Zero-Knowledge Storage',
      description: 'Only you hold the keys. We cannot see, scan, or sell your photos. Your vault is truly yours.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Share Privately',
      description: 'Generate time-limited links with password protection to share albums with loved ones safely.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black/80 relative overflow-hidden" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-blue-400 tracking-wider mb-2">
            SIMPLICITY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            How AAMENN works
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto px-4">
            We made security simple. You don&apos;t need to be a tech expert to protect your memories.
          </p>
        </div>

        <div className="relative">
          <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center px-4 relative">
                <div className="relative inline-block mb-4 sm:mb-6">
                  {/* Border with electric particle */}
                  <svg className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                    <defs>
                      <filter id={`glow-${index}`}>
                        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <radialGradient id={`particle-gradient-${index}`}>
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                        <stop offset="40%" stopColor="#e0f2fe" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                      </radialGradient>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="50%" stopColor="rgba(96, 165, 250, 0.5)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
                      </linearGradient>
                    </defs>
                    {/* Rounded rectangle border */}
                    <rect
                      x="1"
                      y="1"
                      width="62"
                      height="62"
                      rx="15"
                      ry="15"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      className="sm:hidden"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="78"
                      height="78"
                      rx="15"
                      ry="15"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      className="hidden sm:block"
                    />
                    {/* Electric particle moving along the border - mobile */}
                    <circle
                      r="5"
                      fill={`url(#particle-gradient-${index})`}
                      filter={`url(#glow-${index})`}
                      className="sm:hidden"
                    >
                      <animateMotion
                        dur={`${3 + index * 0.5}s`}
                        repeatCount="indefinite"
                        path="M 16,1 
                              L 47,1 
                              Q 62,1 62,16 
                              L 62,47 
                              Q 62,62 47,62 
                              L 16,62 
                              Q 1,62 1,47 
                              L 1,16 
                              Q 1,1 16,1 Z"
                      />
                    </circle>
                    {/* Electric particle moving along the border - desktop */}
                    <circle
                      r="6"
                      fill={`url(#particle-gradient-${index})`}
                      filter={`url(#glow-${index})`}
                      className="hidden sm:block"
                    >
                      <animateMotion
                        dur={`${3 + index * 0.5}s`}
                        repeatCount="indefinite"
                        path="M 16,1 
                              L 63,1 
                              Q 78,1 78,16 
                              L 78,63 
                              Q 78,78 63,78 
                              L 16,78 
                              Q 1,78 1,63 
                              L 1,16 
                              Q 1,1 16,1 Z"
                      />
                    </circle>
                  </svg>
                  {/* Icon container */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-800/50 text-blue-400 border border-blue-500/30">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
