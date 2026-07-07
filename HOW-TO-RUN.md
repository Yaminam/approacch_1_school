# Dalhousie Public School — Website (Next.js + TypeScript)

Warm-editorial redesign of dpsdalhousie.com, built from the competitive study.
Real content and photos extracted from the current site.

## Stack
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- Fonts: **Fraunces** (display) + **Nunito Sans** (body), self-hosted via `next/font`
- Photos in `public/images/` (pulled from the live site)

## Run it
```bash
cd dps-web
npm install       # first time only
npm run dev       # http://localhost:3000
```
Build for production: `npm run build && npm run start`

## What's on the page
1. **Hero** — cinematic mountain, one line: "Exceptional by Nature"
2. **Proof band** — 54 yrs · 7,000 ft · 102 cities · 10 countries · 50 classrooms
3. **The Dalhousie Difference** — inside / outside / beyond the classroom
4. **The Dalhousie Day** — a timeline of a boarding day
5. **★ Campus Chooser** — a 5-question interactive quiz that recommends
   Dalhousie (mountain/boarding) or New Chandigarh (city/day) — the standout feature
6. **Campuses** — two campus cards
7. **The Preparation System** — signature modules (Confidence Code, Life Code,
   Defence Pathway, Whole Child Report…)
8. **Life** — activities photo grid (shooting, theatre, trekking, yoga…)
9. **Pastoral Care & Safety** — the boarding-parent trust module
10. **Alumni testimonial**, **Book-a-visit CTA** (WhatsApp), **Footer**

## Key files
- `src/lib/content.ts` — all copy, stats, campuses, quiz data (edit here)
- `src/components/CampusChooser.tsx` — the interactive quiz
- `src/components/*` — one component per section
- `src/app/globals.css` — colours, fonts, animations

## Notes
- Every "Enquire / Book a visit" button opens a pre-filled WhatsApp message to
  +91 94183 81111 (see `whatsappHref` in `content.ts`).
- Design: soft cream + pine green + brass + warm clay; rounded cards, gentle
  scroll reveals — cute *and* professional.
