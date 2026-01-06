# GSAP Animations Documentation

## Overview
This directory contains reusable GSAP animation utilities for the AAMENN landing page.

## Philosophy
- **Subtle & Premium**: Animations feel calm and secure
- **Performance First**: Respects reduced motion preferences
- **Accessible**: Works for all users
- **Scalable**: Easy to modify and extend

## Structure

```
lib/animations/
├── fade.ts          # Fade animations (fadeUp, fadeIn, fadeInDown)
├── scale.ts         # Scale animations (scaleIn, breathe)
├── stagger.ts       # Staggered animations for lists
├── hover.ts         # Hover interactions
├── utils.ts         # Accessibility & performance utilities
└── index.ts         # Main export file
```

## Usage Examples

### Basic Fade Animation
```tsx
import { fadeUp } from '@/lib/animations'

useEffect(() => {
  fadeUp('.my-element', 0.2)
}, [])
```

### Staggered Animation
```tsx
import { staggerFadeUp } from '@/lib/animations'

useEffect(() => {
  staggerFadeUp('.list-item', 0.1)
}, [])
```

### Hover Animation
```tsx
import { hoverScale } from '@/lib/animations'

useEffect(() => {
  const cleanup = hoverScale(buttonRef.current, 1.05)
  return cleanup
}, [])
```

### Using AnimatedSection Component
```tsx
import AnimatedSection from '@/components/animations/AnimatedSection'

<AnimatedSection animation="fadeUp" stagger staggerDelay={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedSection>
```

## Accessibility

All animations automatically respect `prefers-reduced-motion`. When a user has this preference enabled:
- Animations are disabled
- Duration is set to 0
- Elements appear instantly

## Performance Tips

1. **Use refs instead of querySelector**: Better performance in React
2. **Clean up timelines**: Always return cleanup functions in useEffect
3. **Use ScrollTrigger wisely**: Set `toggleActions: 'play none none none'` for one-time animations
4. **Avoid animating on mobile**: Heavy animations are disabled on small screens

## Animation Tokens

### Duration
- Fast: 0.3s - 0.4s (hover, micro-interactions)
- Medium: 0.6s - 0.8s (standard animations)
- Slow: 1s - 2s (hero, major sections)

### Easing
- `power2.out`: Standard easing for most animations
- `back.out(1.5)`: Slight overshoot for scale animations
- `sine.inOut`: Smooth continuous animations (breathing, floating)

### Stagger
- Tight: 0.05s - 0.1s (small lists)
- Medium: 0.1s - 0.15s (standard lists)
- Loose: 0.2s+ (large sections)

## Customization

To modify animation behavior globally, edit the values in `utils.ts`:

```typescript
export const getAnimationConfig = () => {
  return {
    duration: 0.8,    // Change default duration
    stagger: 0.1,     // Change default stagger
    enabled: true,    // Enable/disable all animations
  }
}
```

## Components with GSAP

### Navbar
- Fade in on load
- Logo scale on hover
- Smooth entrance

### Hero
- Timeline-based sequence
- Floating device animation
- Form elements stagger

### HowItWorks
- Scroll-triggered stagger
- Icon → Title → Description sequence

### Trust
- Features slide from left
- CTA box scales in

### Comparison
- Rows animate from left
- Staggered entrance

### CTA
- Content stagger
- Button breathing animation

### Footer
- Fade in on scroll
- Social icons lift on hover

## Best Practices

1. **Always check shouldAnimate()** before creating animations
2. **Use gsap.context()** for automatic cleanup
3. **Set ScrollTrigger once** with `toggleActions: 'play none none none'`
4. **Avoid animating layout properties** (width, height) - use transform instead
5. **Test with reduced motion** enabled in browser settings

## Troubleshooting

### Animation not playing
- Check if `shouldAnimate()` returns true
- Verify element ref is not null
- Check ScrollTrigger start position

### Animation plays twice
- Make sure useEffect dependencies are correct
- Check if component is mounting multiple times

### Performance issues
- Reduce stagger count on mobile
- Use `will-change` sparingly
- Simplify animations for low-end devices
