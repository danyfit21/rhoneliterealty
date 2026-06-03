# Rhon Elite Realty — Marketing Site UI Kit

A luxury personal-brand marketing site for Diego Rhon. Scroll-based
storytelling, slow-luxury motion, bilingual accents.

## Files

- `index.html` — the full interactive site, scroll-storytelling, single page.
- `Nav.jsx` — top navigation with scroll-blur sticky behavior + EN/ES toggle.
- `Hero.jsx` — full-bleed cinematic hero with subtle Ken-Burns and bilingual line.
- `ProblemSection.jsx` — quiet problem framing on midnight.
- `MethodSection.jsx` — the four-phase Strategic Method, numbered.
- `BilingualSection.jsx` — split panel: English ↔ Spanish.
- `DisciplineSection.jsx` — MMA-as-metaphor full-bleed.
- `PropertyCategoriesSection.jsx` — Families / Foreigners / Investors / Relocation tiles.
- `MarketAreasSection.jsx` — Colorado Springs map regions list.
- `You1stCredibilitySection.jsx` — institutional backing strip.
- `ConsultationCTA.jsx` — final CTA with gold glow.
- `Footer.jsx` — quiet, hairline-divided.
- `ScrollReveal.jsx` — IntersectionObserver-driven reveal hook (translateY + fade, expo.out, 1200ms).

## Scroll order (matches the brief)

1. Hero reveal
2. Problem framing
3. Strategic method
4. Bilingual advantage
5. Personal discipline
6. Property categories
7. Market areas
8. You 1st Realty — Unity credibility
9. Final consultation CTA

## Conventions

- All design tokens come from `/colors_and_type.css`.
- Motion is gated on `[data-revealed]` + `prefers-reduced-motion: no-preference`.
- The MMA section is the **only** place fight imagery appears, always desaturated and overlaid with midnight.
- Images expand 1.04× over 1800ms when entering the viewport — the
  "walking through the property" effect from the Blueprint.
- Mobile-first; layouts collapse to single column with maintained negative space.
