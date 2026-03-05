# Proctora — Landing Page Theme

## Overview
Pure white canvas with drifting blurred purple blobs in the background. The look is clean and minimal with a single purple brand accent colour.

---

## Colours

| Role | Value | Notes |
|---|---|---|
| Page background | `#ffffff` | Hard white, set on both `body` and `.animated-bg` |
| Brand / accent | `#9333ea` (purple-600) | Used on the "Proctora" wordmark and interactive highlights |
| Purple 500 | `#a855f7` | Lighter purple, used in bubble tints |
| Purple 700 | `#7e22ce` | Darker purple, used in deeper bubble tints |
| Purple 100 | `#f3e8ff` | Soft lavender, available for card/tag backgrounds |
| Heading text | `zinc-900` (`oklch(0.145 0 0)`) | Near-black, maximum contrast on white |
| Body / muted text | `zinc-500` (`oklch(0.556 0 0)`) | Mid-grey, used for subtitles and descriptions |

### Shadow tokens
```
--shadow-purple-sm: 0 1px 24px rgba(168, 85, 247, 0.07);
--shadow-purple-lg: 0 8px 40px rgba(168, 85, 247, 0.16);
```

---

## Typography

| Element | Classes / Values |
|---|---|
| Font family | Geist Sans (`--font-geist-sans`) |
| Mono font | Geist Mono (`--font-geist-mono`) |
| H1 — desktop | `text-6xl font-bold` · letter-spacing `-0.02em` |
| H1 — tablet | `sm:text-5xl` |
| H1 — mobile | `text-4xl` |
| Subtitle / lead | `text-lg leading-relaxed` · `text-zinc-500` |

---

## Layout

```
<div class="relative min-h-screen bg-white font-sans">
  <AnimatedBackground />          ← fixed, z-0
  <div class="relative z-10">
    <!-- content -->
  </div>
</div>
```

- The background is **position: fixed; inset: 0** — it stays put while content scrolls.
- Content sits on `z-10` above the blobs.

### Hero section
```
<main class="flex flex-col items-center justify-center
             px-4 pt-32 pb-20 text-center">
```
- Fully centred column.
- Top padding `pt-32` (128 px) reserves space that was formerly occupied by the navbar.
- Bottom padding `pb-20` (80 px).

---

## Animated Background Bubbles

Five solid-colour circles with heavy `blur(50px)` filters that slowly drift using a CSS `@keyframes drift` animation.

| Bubble | Size | Colour (rgba) | Duration | Notes |
|---|---|---|---|---|
| 1 | 520 × 520 px | `rgba(168, 85, 247, 0.28)` | 22 s | top-left, bleeds off edge |
| 2 | 380 × 380 px | `rgba(147, 51, 234, 0.24)` | 28 s | right-centre, reversed |
| 3 | 280 × 280 px | `rgba(126, 34, 206, 0.22)` | 18 s | bottom-centre, −8 s delay |
| 4 | 200 × 200 px | `rgba(168, 85, 247, 0.30)` | 25 s | upper-centre, −14 s delay |
| 5 | 150 × 150 px | `rgba(192, 132, 252, 0.26)` | 20 s | bottom-right, reversed, −5 s delay |

Drift keyframes:
```css
@keyframes drift {
  0%   { transform: translate(0px,   0px)  scale(1);    }
  25%  { transform: translate(30px, -40px) scale(1.04); }
  50%  { transform: translate(-20px, 50px) scale(0.97); }
  75%  { transform: translate(40px,  20px) scale(1.02); }
  100% { transform: translate(0px,   0px)  scale(1);    }
}
```

---

## Radius Tokens (shadcn/ui base)

```
--radius:    0.625rem   (base)
--radius-sm: 0.375rem
--radius-md: 0.5rem
--radius-lg: 0.625rem
--radius-xl: 0.875rem
--radius-2xl:1.125rem
```

---

## Key Design Rules

1. **White base, purple soul** — every element is on white; purple is used sparingly for brand moments and blur clouds only.
2. **No dark mode on the landing page** — the page forces `bg-white` / `background-color: #ffffff` regardless of system preference.
3. **Blobs are decorative only** — `pointer-events: none; aria-hidden="true"` — never block interaction.
4. **Subtle, not flashy** — bubble opacities are all ≤ 0.30; the `blur(50px)` keeps them soft and unobtrusive.
5. **Typography contrast** — headings in near-black `zinc-900`, supporting copy in mid-grey `zinc-500` for clear visual hierarchy.
