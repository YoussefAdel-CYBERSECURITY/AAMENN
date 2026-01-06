import gsap from 'gsap'

export const fadeUp = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power2.out',
  })
}

export const fadeIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 0.6,
    delay,
    ease: 'power1.out',
  })
}

export const fadeInUp = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  })
}

export const fadeInDown = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power2.out',
  })
}
