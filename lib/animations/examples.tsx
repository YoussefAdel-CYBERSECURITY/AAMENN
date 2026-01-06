/**
 * GSAP Animation Examples for AAMENN
 * 
 * This file contains practical examples of how to use GSAP animations
 * in different scenarios throughout the application.
 */

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from './utils'

gsap.registerPlugin(ScrollTrigger)

// ============================================
// Example 1: Simple Fade In on Mount
// ============================================
export function ExampleFadeIn() {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !elementRef.current) return

    gsap.from(elementRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, [])

  return <div ref={elementRef}>Fades in on mount</div>
}

// ============================================
// Example 2: Staggered List Animation
// ============================================
export function ExampleStaggeredList() {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !listRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('li', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <ul ref={listRef}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  )
}

// ============================================
// Example 3: Scroll-Triggered Animation
// ============================================
export function ExampleScrollTrigger() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return <div ref={sectionRef}>Animates when scrolled into view</div>
}

// ============================================
// Example 4: Timeline Animation
// ============================================
export function ExampleTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8 })
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(buttonRef.current, { scale: 0.8, opacity: 0, duration: 0.5 }, '-=0.2')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <h2 ref={titleRef}>Title</h2>
      <p ref={subtitleRef}>Subtitle</p>
      <button ref={buttonRef}>CTA Button</button>
    </div>
  )
}

// ============================================
// Example 5: Hover Animation
// ============================================
export function ExampleHover() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current

    const onEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const onLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    button.addEventListener('mouseenter', onEnter)
    button.addEventListener('mouseleave', onLeave)

    return () => {
      button.removeEventListener('mouseenter', onEnter)
      button.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <button ref={buttonRef}>Hover me</button>
}

// ============================================
// Example 6: Continuous Animation (Loop)
// ============================================
export function ExampleContinuous() {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, elementRef)

    return () => ctx.revert()
  }, [])

  return <div ref={elementRef}>Floating animation</div>
}

// ============================================
// Example 7: Parallax Effect
// ============================================
export function ExampleParallax() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !imageRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, imageRef)

    return () => ctx.revert()
  }, [])

  return <div ref={imageRef}>Parallax background</div>
}

// ============================================
// Example 8: Scale In with Bounce
// ============================================
export function ExampleScaleBounce() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate() || !cardRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return <div ref={cardRef}>Card with bounce effect</div>
}
