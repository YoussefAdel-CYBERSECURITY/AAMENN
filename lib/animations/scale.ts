import gsap from 'gsap'

export const scaleIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    delay,
    ease: 'back.out(1.5)',
  })
}

export const scaleInBounce = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'elastic.out(1, 0.5)',
  })
}

export const breathe = (element: gsap.TweenTarget) => {
  return gsap.to(element, {
    scale: 1.02,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}
