import gsap from 'gsap'

export const staggerFadeUp = (
  elements: gsap.TweenTarget,
  staggerDelay = 0.1,
  baseDelay = 0
) => {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: staggerDelay,
    delay: baseDelay,
    ease: 'power2.out',
  })
}

export const staggerScale = (
  elements: gsap.TweenTarget,
  staggerDelay = 0.1,
  baseDelay = 0
) => {
  return gsap.from(elements, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: staggerDelay,
    delay: baseDelay,
    ease: 'back.out(1.2)',
  })
}

export const staggerContainer = (
  container: gsap.TweenTarget,
  children: string,
  staggerDelay = 0.15
) => {
  return gsap.from(`${container} ${children}`, {
    y: 20,
    opacity: 0,
    duration: 0.7,
    stagger: staggerDelay,
    ease: 'power2.out',
  })
}
