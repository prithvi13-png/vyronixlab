# VYRONIX LAB

Luxury body transformation coaching — a premium, cinematic marketing site built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router, Turbopack dev server)
- **React 19**
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll/hover/entrance animations
- **GSAP** available for advanced timeline animation needs
- **Lenis** for buttery smooth scrolling
- **Lucide React** for iconography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the local dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project Structure

```
app/                  Next.js App Router routes, layout, metadata, SEO files
components/
  layout/             Navbar, Footer, PageLoader, WhatsAppButton, CursorGlow, SmoothScroll
  sections/           Hero, Stats, WhyChooseUs, Services, Comparison, Timeline,
                       Programs, DailyFollowUp, About, Testimonials, FAQ, Contact
  ui/                  Reusable primitives — MagneticButton, SectionHeading,
                       GoldParticles, AnimatedCounter
hooks/                 useLenis, useMousePosition
lib/                   site-config.ts (all site content/copy), utils.ts (cn helper)
types/                 Shared TypeScript interfaces
```

## Editing Content

All copy — programs, pricing, testimonials, FAQ, stats, nav links — lives in a single
file: [`lib/site-config.ts`](./lib/site-config.ts). Update it there and the whole site
reflects the change.

## Brand Palette

| Token       | Value     |
| ----------- | --------- |
| Background  | `#050505` |
| Card        | `#101010` |
| Gold        | `#D4AF37` |
| Light Gold  | `#F7D774` |
| White       | `#FFFFFF` |
| Grey        | `#A0A0A0` |

## SEO

- Metadata, Open Graph, and Twitter Card tags configured in `app/layout.tsx`
- Dynamic OG image, favicon, and Apple touch icon generated via `next/og`
  (`app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`)
- `app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml`
- Organization schema (JSON-LD) injected in the root layout
