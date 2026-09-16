# MENA Growth Blueprint

Build the "UpScrolled MENA Growth Map" single-page strategic editorial site for Adnan Aklouk.

Design & Aesthetic:
- High-end editorial strategy publication + modern tech company + cultural intelligence report (inspired by McKinsey Quarterly, Stripe Press, Monocle, Bain briefs).
- Color palette: off-white/warm cream backgrounds (#FBF9F5, #F5F2EB), rich charcoal/black sections (#121316, #1C1D21), subtle borders (#E5E0D8 / #2D2F36), and a restrained warm terracotta / ochre orange accent (#D95D39 or #C85A32).
- Typography: sophisticated editorial serif headlines (e.g. Playfair Display or Newsreader or serif styling) paired with clean geometric sans (Inter / Plus Jakarta Sans) for data & labels.
- Do NOT use generic blue SaaS styling, neon, purple gradients, glassmorphism, or cartoon illustrations.
- Use "UpScrolled" strictly as plain text (no copied logo), and include "Unofficial strategic concept" badge.

Structure & Data:
- Setup static data modules in `src/data/`: `markets.ts`, `creators.ts`, `ecosystems.ts`, `scrollPacks.ts`, `sources.ts`.
- Sticky minimal header: Left: "UpScrolled MENA Growth Map" with badge "Unofficial strategic concept". Right nav links with smooth scrolling: "Opportunity", "Markets", "Creators", "Ecosystems", "90 Days", and CTA button "Explore the opportunity".
- Hero section:
  * Eyebrow: "UPSCROLLED × MENA"
  * Headline: "“The next wave of growth could already be here.”"
  * Supporting copy: "UpScrolled has created something that naturally resonates with communities across MENA. The opportunity is to turn that affinity into deliberate growth by starting with trusted creators and the communities around them."
  * 4 large stat metrics: 4 Priority markets, 20 Researched creator prospects, 15 Ecosystem targets, 90 Days to test the thesis. Label: "External research set".
  * CTAs: "Explore the markets", "See the 90-day plan", and note: "An external growth hypothesis by Adnan Aklouk".
- Why Now Strip:
  * 4 compact cards: ARABIC READY (UpScrolled already supports Arabic), COMMUNITY PRODUCT (Scroll Packs help people discover curated creators and communities), MOMENTUM (UpScrolled publicly reported passing 5 million users in February 2026), MENA FIT (UpScrolled’s focus on control, transparent reach and community has clear relevance to digitally active MENA audiences).
- The Thesis Section:
  * Label: "THE THESIS"
  * Headline: "“Don’t launch into MENA. Build with MENA.”"
  * Copy: "The opportunity isn’t simply to acquire MENA users. It’s to create pockets of community density around people and interests users already care about, then give those communities a reason to return."
  * 3 numbered stages: 01 Creators (Bring trusted voices onto the platform), 02 Communities (Build conversation around shared interests and identities), 03 Ecosystems (Use existing networks to accelerate discovery and distribution).
  * Prominent, large visual flywheel:
    CREATOR JOINS → BRINGS TRUST → AUDIENCE DISCOVERS → COMMUNITY FORMS → PEOPLE PARTICIPATE → PEOPLE RETURN → MORE CREATORS (high visual polish, interactive/animated circular or step loop, occupying meaningful space).
- Clean, beautifully framed placeholder sections with anchors:
  * Markets (#markets)
  * Creator Strategy (#creators)
  * Scroll Packs (#scroll-packs)
  * Ecosystem Targets (#ecosystems)
  * Growth Experiments (#experiments)
  * 90-Day Plan (#90-days)
  * What I’d Want to Learn (#learnings)
  * Why I Built This (#why-built)
  * Sources (#sources)
  Keep placeholders minimal and ready for data without fake filler.
- Full mobile responsiveness, smooth scroll anchors, elegant transitions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d67a1843-9cd4-445c-9676-3faf10702d8d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
