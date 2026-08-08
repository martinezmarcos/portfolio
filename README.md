# Portfolio — Marcos Martinez Jaime

Personal portfolio site for a Full Stack Developer, built to present real production work (a multi-tenant SaaS used daily by two furniture manufacturing businesses) to recruiters, companies and potential clients.

Editorial layout instead of the typical hero + skill-cards + project-cards template — typography, grid and spacing carry the visual hierarchy.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS 4
- [Motion](https://motion.dev) for scroll reveals (respects `prefers-reduced-motion`)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the real values:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, Open Graph tags, `sitemap.xml` and `robots.txt` | placeholder domain in `src/lib/site-config.ts` |

No secrets are required to run the site locally — it's fully static content.

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  app/                  # routes, layout, metadata, sitemap, robots, OG image
  components/
    layout/              # Header, Footer
    sections/            # Hero, About, Work, Skills, Timeline, Contact
    ui/                  # small reusable primitives (Reveal, UnderlineLink, icons)
  lib/
    site-config.ts       # name, role, contact links, social — edit this to update site content
    data.ts               # experience, skills and project content
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain in the project's Environment Variables.
4. Deploy — no other configuration needed.
