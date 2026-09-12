---
name: portfolio-design-system
description: >-
  Design guidelines, typography hierarchy, Tailwind v4 @theme inline tokens,
  monochrome black and white craft palette, and accessible smooth micro-interaction rules.
---

# Portfolio Minimalist Monochrome Design System

This skill defines the visual identity, token architecture, and animation principles used across the portfolio.

## Aesthetic Philosophy: Minimalist Black & White Engineering Craft

Inspired by Vercel, Linear, Rauno Freiberg, and Paco Coursey:
- Pitch black `#000000` base with elevated translucent dark zinc cards (`bg-zinc-950/70`, `backdrop-blur-md`).
- Ultra-fine 1px hairline borders (`border-white/[0.08]`) with interactive radial spotlight illumination on hover.
- High-contrast pure white typography for headings and metrics, paired with muted zinc (`#a1a1aa`, `#71717a`) for long-form prose.
- Live status indicators (pulsing green dot for work availability).

## Color Tokens & Tailwind CSS 4 `@theme inline`

All colors are exposed through CSS variables defined in [`src/app/globals.css`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/app/globals.css):

| CSS Variable | Hex / Opacity Value | Semantic Usage | Tailwind Token |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#000000` | Main canvas background | `bg-black` / `bg-canvas` |
| `--color-surface` | `#09090b` | Elevated cards & panels | `bg-surface` / `bg-zinc-950` |
| `--color-surface-hover` | `#121216` | Card hover state | `bg-surface-hover` |
| `--color-border` | `rgba(255, 255, 255, 0.08)` | Subtle hairline divider & borders | `border-white/[0.08]` |
| `--color-border-hover` | `rgba(255, 255, 255, 0.22)` | Active / spotlight hover border | `border-white/20` |
| `--color-text-primary` | `#ffffff` | Primary headings, titles, metrics | `text-white` |
| `--color-text-secondary` | `#a1a1aa` | Body text, descriptions | `text-zinc-400` |
| `--color-text-muted` | `#71717a` | Monospace kickers, metadata, tags | `text-zinc-500` |

## Typography: Geist & Geist Mono

The project uses Google Fonts via `next/font/google`:
1. **Geist Sans** (`--font-geist-sans` / `font-sans`):
   - Headings (`h1`, `h2`, `h3`, `h4`) with tight tracking (`tracking-[-0.035em]`), weights `500` and `600`.
   - Body copy with neutral humanist geometry and high legibility.
2. **Geist Mono** (`--font-geist-mono` / `font-mono`):
   - Kickers, timestamps, metrics, category labels, and stack badges (`text-[11px] uppercase tracking-[0.16em]`).

## Component Primitives

- **SpotlightCard** ([`src/components/ui/SpotlightCard.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/SpotlightCard.tsx)):
  - Radial spotlight border following mouse movement via CSS variables `--mouse-x` and `--mouse-y`.
- **CopyButton** ([`src/components/ui/CopyButton.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/CopyButton.tsx)):
  - Animated copy-to-clipboard button with smooth spring transition to a green checkmark.
- **Kicker** ([`src/components/ui/Kicker.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/Kicker.tsx)):
  - Monospace uppercase indicator dot + label in `text-zinc-400 tracking-[0.2em]`.
- **UnderlineLink** ([`src/components/ui/UnderlineLink.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/UnderlineLink.tsx)):
  - Animated white underline effect expanding on hover (`after:bg-white`).
- **Reveal** ([`src/components/ui/Reveal.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/Reveal.tsx)):
  - Motion wrapper with `ease: [0.16, 1, 0.3, 1]`, respecting `prefers-reduced-motion` via `useSyncExternalStore`.
