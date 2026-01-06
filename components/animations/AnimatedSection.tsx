'use client'

import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/lib/animations/utils'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'scale' | 'none'
  delay?: number
  stagger?: boolean
  staggerDelay?: number
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  stagger = false,
  staggerDelay = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !sectionRef.current) return

    const element = sectionRef.current
    const childElements = stagger ? element.children : [element]

    let animationProps: gsap.TweenVars = { opacity: 0 }

    switch (animation) {
      case 'fadeUp':
        animationProps = { y: 50, opacity: 0 }
        break
      case 'fadeIn':
        animationProps = { opacity: 0 }
        break
      case 'scale':
        animationProps = { scale: 0.9, opacity: 0 }
        break
      case 'none':
        return
    }

    const ctx = gsap.context(() => {
      gsap.from(childElements, {
        ...animationProps,
        duration: 0.8,
        delay,
        stagger: stagger ? staggerDelay : 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, element)

    return () => ctx.revert()
  }, [animation, delay, stagger, staggerDelay])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
