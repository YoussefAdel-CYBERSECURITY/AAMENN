export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const shouldAnimate = (): boolean => {
  return !prefersReducedMotion()
}

export const getAnimationConfig = () => {
  const reduced = prefersReducedMotion()
  const mobile = isMobile()

  return {
    duration: reduced ? 0 : mobile ? 0.4 : 0.8,
    stagger: reduced ? 0 : mobile ? 0.05 : 0.1,
    enabled: !reduced,
  }
}
