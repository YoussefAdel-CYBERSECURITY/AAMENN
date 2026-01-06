import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Global GSAP configuration
export const initGSAP = () => {
  // Set default ease
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  })

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
    start: 'top 80%',
  })

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0)
    ScrollTrigger.config({ autoRefreshEvents: 'none' })
  }
}

// Animation presets
export const animationPresets = {
  fadeUp: {
    y: 30,
    opacity: 0,
    duration: 0.8,
  },
  fadeIn: {
    opacity: 0,
    duration: 0.6,
  },
  scaleIn: {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
  },
  slideLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
  },
  slideRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
  },
}

// Stagger presets
export const staggerPresets = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.2,
  relaxed: 0.3,
}

// Easing presets
export const easingPresets = {
  smooth: 'power2.out',
  bounce: 'back.out(1.5)',
  elastic: 'elastic.out(1, 0.5)',
  continuous: 'sine.inOut',
}
