# P-Vita About Page

A production-ready, pixel-perfect About page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Advanced Animations**: Parallax scrolling, smooth reveals, micro-interactions, and Apple-style zoom transitions
- 🎨 **Design-Driven**: Pixel-perfect implementation using design tokens
- ♿ **Accessible**: WCAG AA compliant with semantic HTML, ARIA attributes, and keyboard navigation
- 📱 **Responsive**: Mobile-first design; works flawlessly on all screen sizes
- ⚡ **Performance**: Lazy-loaded images, code-splitting, optimized bundle size
- 🎭 **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility
- 🧩 **Modular**: Reusable, typed React components

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── components/
│   │   ├── ClientLayout.tsx      # Main layout wrapper
│   │   ├── Navbar.tsx             # Navigation header
│   │   ├── HeroSection.tsx         # Hero with parallax
│   │   ├── TimelineSection.tsx     # Company timeline
│   │   ├── TeamSection.tsx         # Team member cards
│   │   ├── StatsSection.tsx        # Impact statistics
│   │   ├── CTASection.tsx          # Call-to-action
│   │   └── Footer.tsx              # Footer with links
│   ├── globals.css                 # Global styles & tailwind directives
│   ├── layout.tsx                  # Root layout & metadata
│   └── page.tsx                    # Home page
├── design-tokens.json              # Design system tokens
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

## Customization Guide

### Edit Copy & Content

All page copy is hardcoded in the component files. Edit these files to customize:
- `app/components/HeroSection.tsx` - Hero headline and subheading
- `app/components/TimelineSection.tsx` - Timeline events
- `app/components/TeamSection.tsx` - Team member details
- `app/components/StatsSection.tsx` - Impact statistics
- `app/components/CTASection.tsx` - CTA copy and email target

### Update Colors & Design Tokens

Edit `design-tokens.json` to update:
- Primary, secondary, and accent colors
- Spacing scale
- Typography settings
- Animation durations
- Shadows and border radii

Changes automatically apply throughout via Tailwind config.

### Add Images

1. Place image files in `public/` directory
2. Replace placeholder URLs in components:
   ```typescript
   image: '/your-image.jpg'  // instead of unsplash URL
   ```
3. Use `next/image` for optimization (shown in examples)

### Customize Animations

Edit animation variants in each component:
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,  // Change duration
      ease: [0.16, 1, 0.3, 1],  // Change easing
    },
  },
};
```

### Modify Responsive Breakpoints

Update screen sizes in `tailwind.config.js`:
```js
screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  // ...
}
```

## Design Assumptions

These assumptions were made based on typical premium tech product About pages:

1. **Font Stack**: Using system fonts (`-apple-system`, `Segoe UI`, etc.) for optimal performance and native feel on all platforms.

2. **Color Palette**: Primary dark navy (#1a1a1a) for professional appearance; secondary indigo (#6366f1) and accent pink (#ec4899) for brand personality, maintaining WCAG AA contrast.

3. **Animation Timings**: Micro (80ms) for quick interactions, short (120ms) for hover states, medium (280ms) for section reveals—balancing perceived speed with smoothness. Parallax uses 300px scroll depth for subtle effect.

4. **Spacing Scale**: 8px base unit (4px, 8px, 16px, 24px, 32px, etc.) enables consistent, scalable layouts across all breakpoints.

5. **Breakpoints**: Mobile-first approach with `xs` (320px), `sm` (640px), `md` (768px), `lg` (1024px)—covering all common device sizes without fragmentation.

6. **Team Member Images**: Using Unsplash placeholder images by default; replace with actual headshots in production for authentic brand presence.

7. **Reduced Motion**: All animations respect `prefers-reduced-motion: reduce` media query to ensure accessibility for users sensitive to motion.

8. **Touch Targets**: All interactive elements maintain 44x44px minimum hit area for mobile accessibility, exceeding WCAG guidelines.

## Performance Optimization Tips

- **Images**: Replace Unsplash URLs with optimized local images using `next/image`
- **Lazy Loading**: Heavy components use dynamic imports (shown in page.tsx)
- **CSS**: Tailwind purges unused styles in production
- **Fonts**: Preload custom fonts if added (via `next/font`)
- **Bundle**: Use `npm run build` and check `.next/` folder size

## Accessibility Features

- ✅ Semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation with visible focus states
- ✅ Color contrast meets WCAG AA (4.5:1 minimum for text)
- ✅ Touch-friendly targets (≥44px)
- ✅ Reduced motion support
- ✅ Screen reader friendly

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations |
| **PostCSS** | CSS processing |

## Troubleshooting

### Styles not loading
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Animations not smooth
- Check GPU acceleration: Chrome DevTools → Rendering → Paint flashing
- Reduce animation duration values in components
- Profile with `npm run build && npm start`

### Performance issues
- Optimize images using `next/image`
- Check bundle size: `npm run build` outputs size report
- Use React DevTools Profiler to identify slow components

## License

Proprietary — All rights reserved. Built for P-Vita.

## Support

For questions or issues, contact: hello@pvita.com

---

**Last Updated**: November 26, 2024 | **Version**: 1.0.0
