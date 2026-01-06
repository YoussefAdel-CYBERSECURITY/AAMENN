'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Content animation
      gsap.fromTo(contentRef.current?.children,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Cards animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black/80 relative overflow-hidden" 
      style={{ zIndex: 10 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-500">AAMENN</span>
          </h2>
          
          <div ref={contentRef} className="space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              At AAMENN, we believe your memories are yours alone. In a world where tech companies profit from your data, 
              we're building something different—a privacy-first storage solution that puts you in control.
            </p>
            
            <p>
              Founded on the principle that privacy is a fundamental right, not a luxury, AAMENN provides 
              end-to-end encrypted storage for your photos, videos, and documents. We don't track you, 
              we don't sell your data, and we don't show you ads.
            </p>
            
            <p>
              Our mission is simple: give you a safe, secure place to store your life's most precious moments 
              without compromising your privacy. Because your memories deserve better than being used as a product.
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900/90 border-2 border-gray-300 dark:border-blue-500/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Privacy First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                End-to-end encryption ensures only you can access your data
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900/90 border-2 border-gray-300 dark:border-blue-500/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">User Focused</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built for people, not advertisers. Your experience matters most
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900/90 border-2 border-gray-300 dark:border-blue-500/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Transparent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No hidden fees, no data mining, no surprises. Just honest service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
