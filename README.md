# Rhon Elite Realty — Design System

> *Blueprint Confidencial — translated, codified and made executable.*

A premium personal-brand system for **Diego Rhon**, bilingual real-estate
advisor based in Colorado Springs, CO. The system is engineered to compete
at the highest tier of the North-American and international **luxury real
estate** market.

---

## 1. Brand at a glance

| | |
|---|---|
| **Name** | Rhon Elite Realty |
| **Principal** | Diego Rhon — Real Estate Broker |
| **Brokerage** | You 1st Realty — Unity *(institutional backing)* |
| **Market** | Colorado Springs, CO + national US (foreign-buyer focus) |
| **Phone** | 719 · 521 · 9117 |
| **Email** | diego@you1stunity.com |
| **Social** | @rhoneliterealty |
| **Languages** | English (primary) · Spanish (strategic accents) |

### Who Diego is

Diego is **not** a generic realtor. He is positioned as a *strategic
advisor* helping buyers, families, foreigners and investors acquire
property in the United States with clarity and premium guidance.

Two truths sit underneath the brand:

1. **The Broker** — disciplined, institutional, bilingual, deeply
   informed on the Colorado market.
2. **The Athlete** — competitive MMA practitioner. We use this *only as
   a metaphor* for discipline, focus, resilience, negotiation and the
   protection of the client's interests. Never as fighter aesthetics.

### Emotional perception we are designing for

> Trust · Authority · Discipline · Strategic guidance · Premium access ·
> Bilingual confidence for serious buyers and investors.

### What this system is **not**

- Not a cheap real-estate template.
- Not gold-saturated. Gold is a *seal*, not a *flood*.
- Not an MMA fan page. No octagon, no fight visuals.
- Not text-heavy. Negative space carries the message.
- Not stock-photo generic.
- Not a first-time-buyer / low-budget rental brand.

---

## 2. Source materials

All uploaded by the brand owner; archived in `assets/`.

| File in `assets/` | Original | Purpose |
|---|---|---|
| `branding-blueprint.pdf` | `uploads/branding.pdf` | Master brand blueprint (Spanish) — single source of truth |
| `logo-gold.png` | `uploads/logo.png` | Primary mark, on light |
| `logo-on-portrait.png` | `uploads/marcaydiego.png` | Mark over portrait (preferred social card) |
| `diego-suit-night.png` | `uploads/DiegoRhon1.png` | Authority portrait — navy suit, night |
| `diego-portfolio-day.png` | `uploads/DiegoRhon2.png` | Working portrait with portfolio |
| `diego-mma-training.png` | `uploads/diegomma.png` | Training shot — discipline metaphor (use w/ heavy treatment) |
| `diego-you1stunity-flyer.png` | `uploads/diegorhonstate.png` | You 1st Realty co-brand reference |

> **No codebase or Figma was provided.** The system is reconstructed
> from the Brand Blueprint PDF + the supplied photographs and logo.

---

## 3. Index

Root of the project:

| File / Folder | Purpose |
|---|---|
| `README.md` | This file — brand context, content + visual foundations, iconography |
| `colors_and_type.css` | All CSS variables: color scale, type scale, spacing, motion, semantic tokens |
| `SKILL.md` | Agent Skills / Claude Code entry point |
| `assets/` | Logos, portraits, source PDF |
| `preview/` | Design System tab cards (34 cards across Colors / Type / Spacing / Components / Brand) |
| `ui_kits/site/` | Full luxury marketing website UI kit |

### Design System cards (`preview/`)

**Colors (5):** Brand palette · Midnight scale · Gold scale · Earth + text scale · Semantic tokens

**Type (7):** Cormorant Garamond display · All-caps display · Heading scale · Body specimen · Eyebrow + numerals · Bilingual pattern · *Spacing in use (also in Spacing)*

**Spacing (7):** Spacing scale · Spacing in use · Radii · Shadow system · Motion tokens · Hairlines & dividers

**Components (8):** Buttons · Eyebrows & tags · Form inputs · Card midnight · Card earth · Top nav · CTA consultation · Quote / testimonial · Property tile

**Brand (9):** Primary mark · Mark clearspace · Portrait gallery · MMA discipline · Voice do/don't · Diamond motif · Lucide iconography · Co-brand You 1st Realty

### UI Kit: Luxury Marketing Site (`ui_kits/site/`)

Single-file cinematic marketing website. 9 scroll-driven sections:

1. **Hero** — fullscreen, Diego portrait, GSAP entrance sequence
2. **Problem** — Renting vs Ownership split with animated bars + counter
3. **Method** — 4-step process, ScrollTrigger pinned horizontal scroll
4. **Bilingual** — English ↔ Spanish dual panel
5. **Discipline** — MMA-as-metaphor, cinematic dark, word-by-word reveal
6. **Properties** — 5 category cards (hover expand + tag reveal)
7. **Areas** — 8 Colorado market areas, animated list
8. **Trust** — You 1st Realty backing panel
9. **CTA** — Fullscreen final call to action with gold glow

**Stack:** Vanilla HTML/CSS + GSAP 3.12 + ScrollTrigger + Lenis smooth scroll + Google Fonts (Cormorant Garamond + Inter)

**Component files** (for reference / extraction into production):
- `Nav.jsx` · `Hero.jsx` · `Primitives.jsx`
- `MethodSection.jsx` · `BilingualDisciplineSections.jsx`
- `PropertyMarketSections.jsx` · `CTAFooter.jsx`
- `site.css` · `colors_and_type.css`

---

## 4. Content fundamentals

### Voice

Diego speaks like a **strategic advisor**, not a salesperson. Sentences
are short, controlled, declarative. The reader should feel they are in
the room with someone who has already done the math.

- **Person:** *You* (the reader, the client). Diego speaks in first person
  sparingly — only when introducing himself or making a personal
  guarantee.
- **Casing:** Sentence-case for body. Display headings can be set in
  **ALL CAPS** but only in display sizes ≥48px and with wide tracking
  (`letter-spacing: 0.08em+`). Never small ALL-CAPS in body.
- **Tense:** Present. *"You acquire,"* not *"You will be able to acquire."*
- **No exclamation marks.** No emoji. No comic punctuation.
- **No red sustained caps.** No "ACT NOW" energy. Quiet authority only.

### Tone examples

| ❌ Avoid | ✅ Prefer |
|---|---|
| "Looking for your dream home? Diego is here to help!" | "Strategic acquisition. Bilingual counsel. Colorado-anchored." |
| "Best deals on the market 🔥🏡" | "Property is leverage. Acquire it correctly." |
| "Call now for amazing prices!!!" | "Schedule a private consultation." |
| "Hello! I'm Diego, your friendly realtor." | "I'm Diego Rhon. I help serious buyers acquire U.S. property." |

### Bilingual handling

Spanish is **a strategic accent, not a duplicate translation**. Use it:

- As a small italic supporting line under an English headline
- Inside the eyebrow ("ESTRATEGIA · PRECISIÓN · ACCESO")
- For trust statements ("Hablamos español") in low-emphasis positions
- In micro-copy: *"Bienvenido"*, *"Sin prisa, con estrategia."*

Do **not** duplicate full paragraphs in both languages on the same screen.
Build the site in English; surface Spanish accents that make a serious
Spanish-speaking buyer feel personally recognised.

### Signature phrases (use sparingly, never as taglines for everything)

- "Acquire property with strategy, not luck."
- "Discipline applied to real estate."
- "Bilingual counsel. Institutional support. Personal commitment."
- *"Sin prisa, con estrategia."* — *No rush, with strategy.*

### Casing & punctuation rules

- Currency: `$1,250,000` — no decimals on display amounts ≥ $1k.
- Phone: `719 · 521 · 9117` — middle-dot, never hyphens (Diego's flyer).
- Email: lowercase, never set in display type.
- Numerals are the **only** body element allowed at `font-weight: 800`.

---

## 5. Visual foundations

### Palette

Four colors, used in strict ratio (background : surface : text : accent).
Hex values come straight from the Blueprint PDF.

| Token | Hex | Use |
|---|---|---|
| `--rer-midnight-800` | `#0B1320` | Primary background — replaces black |
| `--rer-midnight-700` | `#111B2E` | Card / elevated surface |
| `--rer-earth-700` | `#3E2A22` | Warm secondary surface (property cards, testimonials) |
| `--rer-alabaster` | `#F4F4F6` | Primary text on dark |
| `--rer-gold-300` | `#D4AF37` | The seal — logo, hairlines, micro-labels, numerals |
| `--rer-gold-400` | `#C5A880` | Warm gold / champagne accent |

**Gold rule of thumb:** if more than ~3% of pixels on screen are gold,
you are oversaturated. Gold is a *signature*, never a *fill*.

### Typography

- **Display / Headings:** Cormorant Garamond (primary), Playfair Display
  (alternate). Used at monumental sizes (48–144px). Letter-spacing tight
  in mixed case; expanded (`0.08em+`) only in display all-caps.
- **Body / UI:** Inter (primary), Montserrat (alternate). Weight 300 for
  copy; 500 for navigation; **800 reserved for numerals and Diego's
  name**.
- **Italic serif** is the bilingual accent — used for Spanish lines only.

> Webfonts are loaded from Google Fonts in `colors_and_type.css`. No
> local font files are bundled, matching the Blueprint recommendation.

### Spacing & layout

- **Negative space is a feature.** Hero sections breathe with ≥128px
  vertical padding on desktop; section gaps are 96–192px.
- 12-column grid implied, not enforced. Editorial asymmetry is welcomed
  (text in 5 cols, image in 7 cols — never centered-and-symmetrical
  everywhere).
- Max content width: **1180px** for prose-led sections, **1440px** for
  full-bleed editorial.
- Prose measure capped at **640px** for readability.

### Backgrounds

- Default: solid `--rer-midnight-800`. **No gradients on flat surfaces.**
- High-impact photography is full-bleed, treated with a **5–15% midnight
  overlay** so type sits cleanly without losing the image.
- Subtle **film-grain noise** (1–2% opacity) on hero panels for the
  "editorial print" feel. Implement via CSS noise-pattern, never an
  image file.
- A diagonal *diamond / lozenge* shape (from the You1stUnity flyer) is
  allowed as a soft background motif — at < 8% opacity, gold or alabaster.

### Imagery rules

- **Cool & cinematic.** Slight teal in shadows, never warm orange.
- Portraits of Diego are **always cropped tight or shot full-figure** —
  no awkward chest-up amateur framing.
- **MMA imagery** must be high-shutter-speed studio or silhouette work
  — *never* the cage, never bloodied, never crowd shots. The single
  acceptable MMA reference per page is enough.
- Property photography (when added by the user) should be twilight or
  golden-hour, never harsh midday.
- B&W is permitted for archival or "Discipline" sections.

### Motion

Per the Blueprint: **slow luxury motion**.

| Property | Token | Value |
|---|---|---|
| Default ease | `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Secondary ease | `--ease-out-power3` | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| Standard duration | `--dur-base` | 600ms |
| Hero reveals | `--dur-slow` | 1200ms |
| Cinematic image expand | `--dur-cinema` | 1800ms |

- **No bounces, no kangaroo elastic.**
- **No infinite spins.** Decorative loops are forbidden.
- Images expand 2–4% as they enter the viewport — the "walking through
  the property" effect specifically called out by the Blueprint.
- Section text fades up 24px over 1200ms, staggered 80ms per line.
- Respect `prefers-reduced-motion: no-preference` — animations only
  play when motion is welcome; the base style is always the visible
  end state.

### Hover & press states

- **Hover (link):** color shifts from `--accent` → `--accent-warm`;
  underline thickens from 1px hairline to 1px solid.
- **Hover (card):** lift via shadow only (`--shadow-2` → `--shadow-3`),
  hairline brightens from 32% gold to 65% gold. No scale.
- **Hover (button, primary):** background `--accent` → `--accent-warm`;
  letter-spacing widens by `0.01em` over 400ms (subtle "breathe").
- **Hover (button, ghost):** border-color `--hairline` → `--accent`.
- **Press / active:** translate-y of 1px, no scale, no color flash.
- **Focus-visible:** 2px gold ring at `0 0 0 2px var(--accent)` with
  4px offset — always honor accessibility.

### Borders, radii, shadows

- **Radii are small.** `2px` to `8px` only — architectural, not pillowy.
  Pills (`999px`) are reserved for one-line eyebrows or tag chips.
- **Hairlines are gold @ 32%** — the signature divider. Never a flat grey.
- Shadows are restrained: `0 24px 64px -12px rgba(0,0,0,0.6)` is the
  deepest sanctioned shadow. We *lift*, we do not *glow*.
- The **gold glow** (`--shadow-gold-glow`) is reserved for the primary
  CTA on the consultation screen — one moment, one page.

### Transparency & blur

- A backdrop-blur sticky nav (`backdrop-filter: blur(20px)` over
  `rgba(11,19,32,0.72)`) is the only sanctioned use of blur.
- Card transparency: never. Cards are opaque midnight or earth.

### Card anatomy

```
┌────────────────────────────────┐  ← hairline @ rgba(212,175,55,.32)
│ EYEBROW · GOLD                 │
│                                │  4px radius
│ Title in serif                 │  bg: midnight-700 or earth-700
│ Body in 300-weight sans        │  shadow: --shadow-2
│                                │
│ Meta · gold rule · 24px gap    │
└────────────────────────────────┘
```

### Fixed elements

- Top nav: 80px tall, transparent at scroll-top, becomes
  blurred-midnight after ~80px scroll. Hairline appears on scroll only.
- A vertical **side-rail** with rotated eyebrow text (e.g. section
  number "01 / HERO") is permitted on desktop ≥1280px.

---

## 6. Iconography

**There is no proprietary icon set** in the supplied materials. The
system uses **Lucide** (`https://unpkg.com/lucide-static`) — a thin,
single-stroke set whose weight matches the brand's hairline aesthetic.

> ⚠️ **Substitution flag for the user:** if you have a preferred icon
> family (e.g. a custom Phosphor Thin set, or a hand-drawn pack), please
> share it and we will swap. Lucide is the closest CDN match to the
> Blueprint's stated tone (clean, geometric, restrained).

Rules:

- Stroke weight: **1.25–1.5px** only. Heavier weights read as "cheap
  realtor".
- Color: `--fg-3` (alabaster mute) by default, `--accent` for active
  state and CTAs. **Never multicolor.**
- Size: 18px or 20px in UI; 28–32px for category tiles; 48px+ for
  feature illustrations.
- **No emoji anywhere.** Diego's brand is not casual.
- **No Unicode glyphs** as icons (no ★, no ✓ inline) — use Lucide
  `check`, `award`, `globe-2`, `key`, `map-pin`, `phone`, `mail`,
  `arrow-up-right`, `building-2`, `shield-check`, `compass`.
- The mark itself (gold "R" house) is the only ornamental glyph on the
  site; it appears in nav, footer, and occasionally as a 4% opacity
  background watermark.

### Logo usage

- **Primary mark:** `assets/logo-gold.png` — gold-on-light.
- On dark backgrounds (default), the same mark sits against
  `--rer-midnight-800` — the gold provides its own contrast.
- Clearspace: minimum **1× the "R" height** on all sides.
- Minimum render size: **32px** monogram, **96px** full lockup.
- Co-brand: the "You 1st Realty — Unity" wordmark lives in the lower
  third of marketing pages and the footer, never alongside the Rhon
  Elite mark in the header.

---

## 7. Asset license & consent

Photographs and the wordmark are the property of Diego Rhon.
Distributed only as part of this design system project. Do not
redistribute outside the engagement.
