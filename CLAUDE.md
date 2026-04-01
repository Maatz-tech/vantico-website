# Vantico Website - Project Context

## Overview
Pixel-perfect implementation of the Vantico website from Figma design.
- **Figma file**: `A7gxlMY7b3bveMyxKEN2uH` (Site - Vantico v.01)
- **Stack**: Astro + Tailwind CSS (via `@tailwindcss/vite` plugin)
- **Site URL**: https://vantico.com.br

## Approach
- Implement sections **one at a time**, matching Figma exactly
- Global components (Header, Footer) were done first, then sections sequentially
- **CSS custom properties** for design tokens (not Tailwind utility classes for design system values)
- **BEM-like naming** for component CSS (e.g., `.footer__row-inner`)
- **Scoped `<style>` blocks** in Astro components
- Always check both **desktop and mobile** Figma frames

## Design System (`src/styles/global.css`)

### Colors
| Token | Value |
|---|---|
| `--color-blue` | `#1C51C6` |
| `--color-dark-blue` | `#303030` |
| `--color-text` | `#484F62` |
| `--color-text-dark` | `#2E333F` |
| `--color-white` | `#FFFFFF` |
| `--color-white-2` | `#FAFAFA` |
| `--color-border` | `rgba(25, 31, 47, 0.1)` |
| `--color-border-solid` | `#E8E9EA` |

### Layout
| Token | Value |
|---|---|
| `--container-max` | `1200px` |
| `--container-padding` | `24px` |

### Typography
- **Font**: Satoshi Variable (woff2/woff), weights 300-900
- Utility classes: `.text-h1` (52px/56px), `.text-h2` (40px), `.text-h3` (20px), `.text-body` (14px), `.text-body-lg` (18px)

## Components Built

### Globals
- **Header** (`Header.astro`): All-blue logo (`logo-vantico-header-mobile.svg`) for both desktop/mobile. Desktop: pill-shaped nav + CTA. Mobile: hamburger menu in blue.
- **Footer** (`Footer.astro`): Dual container system - `1200px` for decorative grid lines, `1000px` (`--footer-max`) for content. Horizontal grid lines at 100vw with gradient fade. Vertical grid lines at 1200px edges. Mobile: no horizontal lines, vertical lines at 24px from edges, 1-column layout.
- **Button** (`Button.astro`): `primary` (blue bg, white text) and `outline` (white bg, dark text, border). 42px height, rounded-full.

### Sections (in page order)
1. **HeroSection** (`HeroSection.astro`): Pattern background (`hero-pattern.svg`), title 52px desktop / 32px mobile, subtitle 18px / 16px, two buttons. Padding 80px desktop / 48px mobile.
2. **LogosCarousel** (`LogosCarousel.astro`): CSS-only infinite carousel with duplicated elements. 10 client logos (PNG files). Desktop: text left + carousel right. Mobile: centered, text max-width 220px. `overflow: hidden` on section to prevent horizontal scroll.
3. **HighlightsSection** (`HighlightsSection.astro`): 4 stats (98%, R$15B, 5, +150) in row on desktop (1000px, border dividers) / 2x2 grid on mobile. Grid lines: horizontal at top/bottom of stats (100vw), vertical aligned to stats card edges (1000px) extending 40px beyond. Background `#FAFAFA`.

## Current Page Structure (`src/pages/index.astro`)
```
Header
  HeroSection
  LogosCarousel
  HighlightsSection
Footer
```

## Remaining Sections to Build
Based on the Figma, the following sections still need implementation (approximate order):
- **Certificacoes** (Certifications section)
- **Solucoes** (Solutions with tabs)
- **Depoimentos** (Testimonials)
- **Blog** (Blog posts)
- **CTA Final** (Final call-to-action)

**Next section to implement**: Figma node `4056-181`

## Key Patterns & Decisions

### Grid Lines Pattern
Decorative gradient grid lines are used in Footer and HighlightsSection:
- Horizontal: `position: absolute; width: 100vw; left: 50%; transform: translateX(-50%)` with `linear-gradient` fade at edges
- Vertical: `1px` width, `linear-gradient` fade top/bottom, positioned with `calc(50% +/- Npx)`
- Mobile: typically hide horizontal, keep vertical at container-padding edges

### Container Architecture
- Standard sections: single `--container-max` (1200px)
- Footer uses **dual containers**: 1200px for grid lines, 1000px for content (nested `.footer__row` / `.footer__row-inner`)
- HighlightsSection: 1200px wrapper for grid, 1000px stats card centered inside

### Logos
- **All-blue logo** (`logo-vantico-header-mobile.svg`) used in both Header and Footer - never dark text variant
- Client logos are `.png` files (not SVG despite original Figma exports)

### Carousel
- Infinite loop via CSS `@keyframes scroll { 0% { translateX(0) } 100% { translateX(-50%) } }`
- Two `.logos__set` wrappers each with `padding-right` equal to gap for seamless loop
- Pause on hover

## Image Assets
```
public/images/
  hero-pattern.svg          # Hero background pattern
  logo-vantico-header-mobile.svg  # All-blue logo (used everywhere)
  logos/                    # Client logos (PNG)
    capim.png, colmeia.png, pontotel.png, souair.png, trampo.png,
    client-9.png through client-13.png
  ai-logos/                 # AI partner logos (SVG)
    chatgpt.svg, claude.svg, copilot.svg, gemini.svg, meta-ai.svg, perplexity.svg
  footer/
    maatz-logo.svg, grid-bg.svg
```

## SEO & Meta (`src/layouts/Base.astro`)
- Title, description, canonical URL, OG tags, Twitter cards
- Font preload for Satoshi Variable
- Theme color: `#1C51C6`
- Sitemap via `@astrojs/sitemap`
- Favicon: `favicon.svg` (Vantico V icon)
- Missing: `apple-touch-icon.png` (180x180), `og-default.jpg` (1200x630)
