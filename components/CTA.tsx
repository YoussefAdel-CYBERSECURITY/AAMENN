'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      // Animate content - lighter and faster
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Subtle breathing animation for button
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.02,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="early-access" className="relative py-20 sm:py-24 lg:py-32 overflow-visible bg-gray-50 dark:bg-black/80" style={{ zIndex: 100, position: 'relative' }}>
      <div ref={contentRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 101, position: 'relative' }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Ready to reclaim your digital privacy?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          We are launching soon to a limited number of users. Reserve your username and get early bird pricing.
        </p>
        <button 
          ref={buttonRef} 
          className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all font-bold text-base sm:text-lg shadow-xl hover:scale-105 transform duration-300 hover:shadow-blue-500/50 cursor-pointer" 
          style={{ zIndex: 102, position: 'relative', pointerEvents: 'auto' }}
        >
          Let's Get Started
        </button>
      </div>
    </section>
  )
}
