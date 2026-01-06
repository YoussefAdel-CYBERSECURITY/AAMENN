'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children

      if (cards) {
        gsap.fromTo(cards, 
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/ month',
      description: 'Ideal for individual users',
      features: [
        'Access to simple features',
        '1 user',
        '1GB data',
        'Basic chat and support',
      ],
      buttonText: 'Get it now',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/ month',
      description: 'Ideal for small teams',
      features: [
        'Access to all features',
        'Up to 10 users',
        '50GB data per user',
        'Priority support',
      ],
      buttonText: 'Get it now',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$49',
      period: '/ month',
      description: 'Best Choice for Enterprises, Agencies, and Studios',
      features: [
        'Access to all features',
        'Up to 50 users',
        '150GB data per user',
        'Priority support',
      ],
      buttonText: 'Get it now',
      popular: false,
    },
  ]

  return (
    <section ref={sectionRef} id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black/80 relative overflow-hidden" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Choose your Plan
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the perfect plan tailored just for you.
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)] opacity-100 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl shadow-blue-500/50'
                  : 'bg-gray-100 dark:bg-gray-800/95 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-blue-400/50 backdrop-blur-sm shadow-lg dark:shadow-blue-500/20'
              }`}
              style={{ minHeight: '450px', visibility: 'visible' }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-cyan-400' : 'text-blue-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300'
                    : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
