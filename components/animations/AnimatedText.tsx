'use client'

import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { shouldAnimate } from '@/lib/animations/utils'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !textRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
      })
    }, textRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <Component ref={textRef as any} className={className}>
      {children}
    </Component>
  )
}
