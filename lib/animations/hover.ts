import gsap from 'gsap'

export const hoverScale = (element: HTMLElement, scale = 1.05) => {
  const onEnter = () => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const onLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  element.addEventListener('mouseenter', onEnter)
  element.addEventListener('mouseleave', onLeave)

  return () => {
    element.removeEventListener('mouseenter', onEnter)
    element.removeEventListener('mouseleave', onLeave)
  }
}

export const hoverLift = (element: HTMLElement) => {
  const onEnter = () => {
    gsap.to(element, {
      y: -5,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const onLeave = () => {
    gsap.to(element, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  element.addEventListener('mouseenter', onEnter)
  element.addEventListener('mouseleave', onLeave)

  return () => {
    element.removeEventListener('mouseenter', onEnter)
    element.removeEventListener('mouseleave', onLeave)
  }
}
