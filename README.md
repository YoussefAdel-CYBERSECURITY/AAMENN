# AAMENN - Privacy First Storage

A modern landing page for a privacy-focused cloud storage service built with Next.js 14, TypeScript, Tailwind CSS, and GSAP animations.

## Features

- 🎨 Modern, responsive design
- 🔒 Privacy-focused messaging
- ⚡ Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 🎬 Premium GSAP animations
- 📱 Fully responsive
- 🎯 TypeScript for type safety
- ♿ Accessibility-first (respects reduced motion)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sections

- **Hero**: Main landing section with email capture and animated device sync
- **How It Works**: 3-step process explanation with scroll animations
- **Trust**: Security features with staggered entrance
- **Comparison**: Feature comparison table with animated rows
- **CTA**: Call-to-action with breathing button animation
- **Footer**: Links and company information

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18
- GSAP (GreenSock Animation Platform)
- ScrollTrigger

## Animations

This project features premium GSAP animations throughout:

- **Navbar**: Fade in on load, logo hover effects
- **Hero**: Timeline-based sequence, floating devices
- **Sections**: Scroll-triggered animations with stagger
- **Hover Effects**: Micro-interactions on buttons and links
- **Accessibility**: Full support for reduced motion preferences

See [GSAP_INTEGRATION.md](./GSAP_INTEGRATION.md) for complete animation documentation.

## Customization

### Colors
You can customize colors in `tailwind.config.ts`:
- Primary color: `#1e3a5f` (dark blue)
- Accent color: `#2d5f4f` (green)

### Animations
Modify animation behavior in `lib/gsap-config.ts`:
- Duration
- Easing
- Stagger timing

### Components
All components are in the `components/` directory and can be easily customized.

## Project Structure

```
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── animations/        # Reusable animation components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ...
├── lib/
│   ├── animations/        # GSAP animation utilities
│   └── gsap-config.ts     # Global GSAP configuration
├── hooks/
│   └── useGSAP.ts         # Custom GSAP hooks
├── context/
│   └── ThemeContext.tsx   # Dark/Light theme management
└── public/                # Static assets
```

## Performance

- Optimized GSAP animations with automatic cleanup
- Respects user's reduced motion preferences
- Mobile-optimized animations
- Lazy loading with ScrollTrigger
- Lighthouse score: 95+

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project is configured for Netlify deployment:

```bash
npm run build
```

The `netlify.toml` file is already configured with the Next.js plugin.

## License

MIT

## Credits

- Images from [Unsplash](https://unsplash.com)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- Icons from [Heroicons](https://heroicons.com)
