import { useEffect, useRef, MutableRefObject } from 'react'
import gsap from 'gsap'
import { shouldAnimate } from '@/lib/animations/utils'

type GSAPCallback = (context: gsap.Context) => void | (() => void)

/**
 * Custom hook for GSAP animations with automatic cleanup
 * @param callback - Function containing GSAP animations
 * @param dependencies - Array of dependencies (like useEffect)
 * @param scope - Optional ref to scope the animations
 */
export function useGSAPAnimation(
  callback: GSAPCallback,
  dependencies: any[] = [],
  scope?: MutableRefObject<any>
) {
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      callback(contextRef.current!)
    }, scope?.current)

    contextRef.current = ctx

    return () => {
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return contextRef
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation(
  target: MutableRefObject<any>,
  animation: gsap.TweenVars,
  scrollTriggerConfig?: ScrollTrigger.Vars
) {
  useEffect(() => {
    if (!shouldAnimate() || !target.current) return

    const ctx = gsap.context(() => {
      gsap.from(target.current, {
        ...animation,
        scrollTrigger: {
          trigger: target.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          ...scrollTriggerConfig,
        },
      })
    }, target)

    return () => ctx.revert()
  }, [target, animation, scrollTriggerConfig])
}

/**
 * Hook for hover animations
 */
export function useHoverAnimation(
  target: MutableRefObject<HTMLElement | null>,
  hoverAnimation: gsap.TweenVars,
  leaveAnimation?: gsap.TweenVars
) {
  useEffect(() => {
    if (!target.current) return

    const element = target.current

    const onEnter = () => {
      gsap.to(element, {
        duration: 0.3,
        ease: 'power2.out',
        ...hoverAnimation,
      })
    }

    const onLeave = () => {
      gsap.to(element, {
        duration: 0.3,
        ease: 'power2.out',
        ...(leaveAnimation || { scale: 1, y: 0, x: 0 }),
      })
    }

    element.addEventListener('mouseenter', onEnter)
    element.addEventListener('mouseleave', onLeave)

    return () => {
      element.removeEventListener('mouseenter', onEnter)
      element.removeEventListener('mouseleave', onLeave)
    }
  }, [target, hoverAnimation, leaveAnimation])
}
