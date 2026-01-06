# Animation Components

## AnimatedSection

A reusable component for scroll-triggered animations.

### Props

- `children`: ReactNode - Content to animate
- `className`: string - CSS classes
- `animation`: 'fadeUp' | 'fadeIn' | 'scale' | 'none' - Animation type
- `delay`: number - Delay before animation starts (seconds)
- `stagger`: boolean - Enable staggered animation for children
- `staggerDelay`: number - Delay between staggered items (seconds)

### Usage Examples

#### Basic Fade Up
```tsx
<AnimatedSection animation="fadeUp">
  <h2>This will fade up on scroll</h2>
</AnimatedSection>
```

#### Staggered Children
```tsx
<AnimatedSection animation="fadeUp" stagger staggerDelay={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedSection>
```

#### With Delay
```tsx
<AnimatedSection animation="scale" delay={0.3}>
  <div>Delayed scale animation</div>
</AnimatedSection>
```

## AnimatedText

A component specifically for animating text elements.

### Props

- `children`: ReactNode - Text content
- `className`: string - CSS classes
- `delay`: number - Delay before animation
- `as`: 'h1' | 'h2' | 'h3' | 'p' | 'span' - HTML element type

### Usage Examples

```tsx
<AnimatedText as="h1" className="text-4xl font-bold">
  Animated Heading
</AnimatedText>

<AnimatedText as="p" delay={0.2}>
  Animated paragraph with delay
</AnimatedText>
```

## Best Practices

1. **Use AnimatedSection for containers**: Wrap sections that should animate on scroll
2. **Use AnimatedText for headlines**: Better semantic HTML
3. **Don't nest AnimatedSections**: Can cause performance issues
4. **Test with reduced motion**: Components respect accessibility preferences
5. **Keep stagger delays reasonable**: 0.1-0.2s is usually enough

## Performance

- Components automatically check for reduced motion preferences
- Animations are disabled on SSR
- GSAP contexts are properly cleaned up on unmount
- ScrollTrigger is optimized for performance
