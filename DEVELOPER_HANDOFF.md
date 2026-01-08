# TechConsult Pro - Enterprise IT Consulting Website

## 🎯 Overview

A modern, responsive, enterprise-grade IT consulting website built with React, TypeScript, Tailwind CSS v4, and Motion (Framer Motion). Features comprehensive service offerings, case studies, compliance services, and multi-language support (English/Hindi).

## 🚀 Features

### Pages
- **Home**: Hero section with animated illustrations, primary services, metrics counter, case studies, testimonials
- **Services**: Filterable service grid with 11+ service categories
- **Solutions**: Detailed product pages for CRM, ERP, Billing, IVR, and Hyperlocal platforms
- **Case Studies**: Success stories with detailed metrics and downloadable PDFs
- **Compliance**: Business registration, GST, trademark, and legal services with step-by-step flows
- **About**: Company story, mission/vision, values, leadership team, and careers
- **Resources**: Blog posts, whitepapers, and comprehensive FAQ section
- **Contact**: Multi-channel contact info, inquiry form, pricing plans, and office map

### Components

#### Core Components
- **Header**: Sticky navigation with mega-menu, transparent-to-solid transition on scroll
- **Footer**: 4-column layout with newsletter signup, social links, and compliance badges
- **Hero**: Full-bleed hero with animated illustrations and dual CTAs
- **ServiceCard**: Hover lift effect with icon, features, and CTA
- **CaseStudyCard**: Interactive tilt effect with metrics overlay
- **MetricsCounter**: Animated number counters with scroll-triggered animation
- **Testimonials**: Auto-advancing carousel with smooth transitions
- **TrustCarousel**: Infinite-scroll client logo carousel
- **PricingCard**: 3-tier pricing with highlighted "Most Popular" option
- **ContactForm**: Multi-step modal form with validation

### Design System

#### Colors
- **Primary**: Deep blue (#1a3a5c) - Trust and authority
- **Secondary**: Teal (#14b8a6) - Innovation and growth
- **Accent**: Orange (#f97316) - CTAs and important actions
- **Neutrals**: Gray scale from 50-900

#### Typography
- **Font**: Inter from Google Fonts
- **Scale**: 0.75rem (xs) to 3.75rem (6xl)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

#### Spacing
- **Base unit**: 8px
- **Scale**: xs (4px) to 4xl (96px)

#### Animations
- **Duration**: 150ms (fast) to 400ms (slower)
- **Easing**: cubic-bezier(0.2, 0.9, 0.2, 1)
- **Library**: Motion/React (Framer Motion v12)

## 📐 Layout & Grid

- **Max Width**: 1200px
- **Columns**: 12-column grid
- **Gutter**: 24px
- **Breakpoints**:
  - Mobile: ≤767px
  - Tablet: 768-1279px
  - Desktop: ≥1280px

## 🎨 Design Tokens

All design tokens are available in:
- **CSS Variables**: `/src/styles/theme.css`
- **JSON Export**: `/design-tokens.json`

## 🛠️ Technical Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion/React (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Radix UI (shadcn/ui components)

## 📦 Component Library

### Usage Examples

#### ServiceCard
```tsx
<ServiceCard
  icon="Code"
  title="Web Development"
  description="Custom web applications..."
  features={["React", "Node.js", "AWS"]}
  onClick={() => handleClick()}
/>
```

#### CaseStudyCard
```tsx
<CaseStudyCard
  title="E-commerce Transformation"
  client="RetailCo"
  industry="Retail"
  image="ecommerce retail"
  impact={{ revenue: "+145%", uptime: "99.9%" }}
/>
```

#### MetricsCounter
```tsx
<MetricsCounter
  metrics={[
    { label: "Clients", value: 250, suffix: "+" },
    { label: "Projects", value: 450, suffix: "+" }
  ]}
/>
```

## 🌐 Multi-language Support

All major sections include Hindi translations:
- Headlines and CTAs
- Service titles
- Navigation items
- Compliance service names

Example:
```tsx
<h1>Enterprise IT Consulting</h1>
<p className="italic">एंटरप्राइज़-ग्रेड IT परामर्श</p>
```

## 🎭 Interactions & Micro-animations

### Hover Effects
- **Cards**: Lift -8px with shadow increase
- **Buttons**: Scale 1.05 or color transition
- **Images**: Scale 1.1 on parent hover

### Scroll Animations
- **Fade-up**: Elements fade in and slide up 30px
- **Trigger**: Elements animate when 50px into viewport
- **Once**: Animations trigger only once per page load

### Transitions
- **Navigation**: 200-300ms smooth transitions
- **Modal**: 200ms scale and opacity
- **Carousel**: Spring animation for natural feel

## 📱 Responsive Design

### Mobile (≤767px)
- Single column layouts
- Collapsed navigation (hamburger menu)
- Reduced spacing (75% of desktop)
- Touch-optimized interactions
- Stacked service/case study cards

### Tablet (768-1279px)
- 2-column layouts
- Full navigation visible
- Standard spacing
- Grid layouts for services

### Desktop (≥1280px)
- 3-4 column layouts
- Mega-menu navigation
- Full spacing and animations
- Hover interactions enabled

## ♿ Accessibility

- **WCAG AA** compliant color contrast
- **Semantic HTML** with proper heading hierarchy
- **Focus states** visible on all interactive elements
- **Keyboard navigation** fully supported
- **Screen reader** friendly with aria-labels
- **Motion preferences** respected (prefers-reduced-motion)

## 🔧 Developer Handoff

### File Structure
```
/src
  /app
    /components      # Reusable components
    /pages          # Page components
    /data           # Mock data
    App.tsx         # Main app with routing
  /styles
    theme.css       # Design tokens & CSS variables
    fonts.css       # Font imports
```

### Key Files
- **Design Tokens**: `/design-tokens.json`
- **Theme Config**: `/src/styles/theme.css`
- **Mock Data**: `/src/app/data/mockData.ts`
- **Main App**: `/src/app/App.tsx`

### CSS Variables Usage
```css
/* Colors */
color: var(--primary-blue-700);
background: var(--secondary-teal-600);

/* Spacing */
padding: var(--spacing-xl);
margin-bottom: var(--spacing-2xl);

/* Typography */
font-size: var(--text-2xl);
font-weight: var(--font-weight-bold);

/* Shadows */
box-shadow: var(--shadow-xl);

/* Border Radius */
border-radius: var(--radius-lg);
```

### Animation Patterns
```tsx
// Fade-up on scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Hover lift
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.2 }}
>

// Number counter
<AnimatedNumber value={250} suffix="+" />
```

## 🎯 Performance Optimizations

- **Images**: Using ImageWithFallback component with lazy loading
- **Animations**: GPU-accelerated transforms only
- **Code splitting**: Page-level code splitting with dynamic imports
- **Font loading**: Google Fonts with display=swap
- **Icons**: Tree-shakeable lucide-react imports
- **Carousel**: Virtualized for large datasets

## 🌓 Dark Mode

Dark mode color palette is defined in theme.css but not yet implemented in the UI. To enable:

1. Add theme toggle in Header component
2. Wrap app with ThemeProvider
3. Toggle `.dark` class on root element

Dark mode colors are pre-defined with proper contrast ratios.

## 📊 Metrics & Analytics

Mock metrics are hardcoded. To integrate real analytics:

1. Replace mock data in `/src/app/data/mockData.ts`
2. Connect to your analytics API
3. Update MetricsCounter component with live data
4. Add error handling for API failures

## 🔐 Security & Compliance

- **GDPR** compliant notice in footer
- **SSL** badge displayed
- **ISO 9001:2015** certification badge
- **PII protection** notice in forms
- **Data privacy** link in footer

## 🚀 Deployment Notes

### Environment Variables (if needed)
```env
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_KEY=your_maps_key
```

### Build Command
```bash
npm run build
```

### Production Checklist
- [ ] Replace Unsplash images with actual assets
- [ ] Update contact information (phone, email, address)
- [ ] Configure Google Maps API key
- [ ] Set up contact form backend
- [ ] Add analytics tracking (GA4, etc.)
- [ ] Test all forms and CTAs
- [ ] Verify all links and navigation
- [ ] Run accessibility audit
- [ ] Test on multiple devices
- [ ] Set up CDN for assets

## 📝 Content Guidelines

### Copy Tone
- **Confident** but not arrogant
- **Expert** but approachable
- **Professional** but friendly
- **Technical** but clear

### Image Guidelines
- **Style**: Clean, modern, business-focused
- **Quality**: Minimum 1920x1080 for hero images
- **Format**: WebP with JPG fallback
- **Alt text**: Descriptive for accessibility

### CTA Best Practices
- Primary CTA: Orange (#f97316)
- Secondary CTA: Outlined or teal
- Clear action words: "Request Demo", "Get Started"
- Always include Hindi translation

## 🤝 Support & Maintenance

### Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: Last 2 versions
- Samsung Internet: Last 2 versions

### Future Enhancements
- [ ] Blog CMS integration
- [ ] Case study detail pages
- [ ] Client portal login
- [ ] Live chat integration
- [ ] Multi-language switcher
- [ ] Dark mode toggle
- [ ] Advanced search functionality
- [ ] Video testimonials
- [ ] Interactive pricing calculator

## 📞 Contact

For questions about this implementation:
- Technical: dev@techconsultpro.com
- Design: design@techconsultpro.com
- Content: content@techconsultpro.com

---

**Built with ❤️ using React, Tailwind CSS v4, and Motion**

© 2026 TechConsult Pro. All rights reserved.
