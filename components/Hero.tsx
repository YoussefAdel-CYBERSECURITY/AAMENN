'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { shouldAnimate } from '@/lib/animations/utils'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const devicesRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    
    // Show success message
    setShowSuccess(true)
    setEmail('')
    
    // Animate success message
    if (successRef.current) {
      gsap.fromTo(successRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      )
    }
    
    // Hide after 5 seconds
    setTimeout(() => {
      if (successRef.current) {
        gsap.to(successRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          onComplete: () => setShowSuccess(false)
        })
      }
    }, 5000)
  }

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          formRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          devicesRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          '-=0.6'
        )

      // Floating animation for devices
      if (devicesRef.current) {
        gsap.to(devicesRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const photos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
  ]

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-40">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black/80"></div>

      <div className="relative z-10 w-full">
        {/* Badge in Center */}
        <div className="flex justify-center pt-24 sm:pt-32 mb-8 sm:mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg border border-gray-300 dark:border-white/20">
            <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white tracking-wider">
              PRIVACY FIRST STORAGE
            </p>
          </div>
        </div>

        {/* Content Layout - Text Left, Devices Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Content on Left */}
            <div className="flex-1 max-w-xl">
              <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-blue-500">AAMENN.</span>
                <br />
                <span className="text-gray-900 dark:text-white">Your memories.</span>
                <br />
                <span className="text-gray-800 dark:text-white/90">deserve privacy.</span>
              </h1>

              <p ref={subtitleRef} className="text-base sm:text-lg text-gray-700 dark:text-white/70 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                Store, organize, and share your life&apos;s memories without trading away your data. Zero tracking. Zero ads. 100% encrypted.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 text-sm rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition-all font-semibold whitespace-nowrap shadow-lg hover:scale-105 transform duration-300 hover:shadow-blue-500/50"
                >
                  Request Access
                </button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div 
                  ref={successRef}
                  className="mt-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg border-2 border-green-400 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Success! 🎉</h3>
                      <p className="text-white/90 text-xs mt-0.5">Your request has been submitted successfully. We'll be in touch soon!</p>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-600 dark:text-white/60 mt-3">
                100% spam-free. We won&apos;t share your email. Ever.
              </p>
            </div>

            {/* Devices on Right - With Animation in Middle */}
            <div ref={devicesRef} className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 lg:gap-8">
              {/* Mobile Phone */}
              <div className="relative scale-75 sm:scale-90 lg:scale-100">
                <div className="w-[180px] sm:w-[220px] h-[360px] sm:h-[440px] bg-gray-900 dark:bg-gray-800 rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-700 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                    <div className="bg-gray-100 dark:bg-gray-900 h-6 sm:h-7 flex items-center justify-center">
                      <div className="w-16 sm:w-20 h-4 sm:h-5 bg-gray-900 dark:bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Photos</h3>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {photos.slice(0, 4).map((photo, i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-lg sm:rounded-xl overflow-hidden blur-[2px]"
                            style={{
                              backgroundImage: `url(${photo})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sync Animation - Data Transfer */}
              <div className="flex flex-col items-center scale-75 sm:scale-90 lg:scale-100">
                <svg className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36" viewBox="0 0 120 120">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <path id="dataPath" d="M 20 60 Q 60 30, 100 60" />
                  </defs>
                  
                  {/* Connection line */}
                  <use href="#dataPath" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                  
                  {/* Moving data packets along the exact path */}
                  <circle r="4" fill="#10b981">
                    <animateMotion dur="2.5s" repeatCount="indefinite">
                      <mpath href="#dataPath" />
                    </animateMotion>
                  </circle>
                  
                  <circle r="4" fill="#059669">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
                      <mpath href="#dataPath" />
                    </animateMotion>
                  </circle>
                  
                  <circle r="4" fill="#10b981">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s">
                      <mpath href="#dataPath" />
                    </animateMotion>
                  </circle>
                  
                  <circle r="4" fill="#059669">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#dataPath" />
                    </animateMotion>
                  </circle>
                  
                  <circle r="4" fill="#10b981">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="2s">
                      <mpath href="#dataPath" />
                    </animateMotion>
                  </circle>
                  
                  {/* Center icon with lock */}
                  <circle cx="60" cy="60" r="20" fill="white" stroke="#10b981" strokeWidth="2.5" className="animate-pulse" />
                  
                  {/* Lock icon */}
                  <rect x="53" y="59" width="14" height="12" rx="1.5" fill="#10b981" />
                  <path
                    d="M 55 59 L 55 55 Q 55 51 60 51 Q 65 51 65 55 L 65 59"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-xs sm:text-sm font-semibold text-green-500 mt-1 sm:mt-2">Encrypted Sync</p>
              </div>

              {/* Laptop */}
              <div className="relative scale-75 sm:scale-90 lg:scale-100">
                <div className="w-[280px] sm:w-[320px] lg:w-[400px] bg-gray-800 rounded-t-xl p-2 sm:p-2.5 shadow-2xl border-4 border-gray-800">
                  <div className="w-full h-[160px] sm:h-[190px] lg:h-[230px] bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {photos.slice(0, 6).map((photo, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-md sm:rounded-lg overflow-hidden blur-[2px]"
                          style={{
                            backgroundImage: `url(${photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[310px] sm:w-[350px] lg:w-[440px] -ml-[15px] sm:-ml-[15px] lg:-ml-[20px] h-2 sm:h-2.5 bg-gray-800"></div>
                <div className="w-[330px] sm:w-[370px] lg:w-[460px] -ml-[25px] sm:-ml-[25px] lg:-ml-[30px] h-4 sm:h-5 bg-gray-900 rounded-b-xl shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
