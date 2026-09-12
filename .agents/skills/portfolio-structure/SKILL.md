---
name: portfolio-structure
description: >-
  Architecture, directory structure, config-driven content modeling,
  semantic SEO, JSON-LD, and Next.js 16 App Router component organization.
---

# Portfolio Structure & Architecture Skill

This skill documents the structural hierarchy, data flow, and SEO architecture of the portfolio project.

## Directory Structure Map

```
portfolio/
├── .agents/
│   └── skills/                  # Workspace Antigravity skills
│       ├── portfolio-fullstack/
│       ├── portfolio-design-system/
│       └── portfolio-structure/
├── public/
│   └── dashboard-preview.png     # Production SaaS dashboard preview
├── src/
│   ├── app/                      # Next.js 16 App Router tree
│   │   ├── globals.css           # Tailwind v4 theme, variables & base layers
│   │   ├── icon.svg              # Favicon SVG
│   │   ├── layout.tsx            # Root layout, Geist Google Fonts, JSON-LD Schema
│   │   ├── opengraph-image.tsx   # Dynamic OG image generation (Edge)
│   │   ├── page.tsx              # Main landing page orchestrator
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   └── sitemap.ts            # Dynamic sitemap.xml
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── sections/             # Page sections: Hero, Work, Skills, Timeline, About, Contact
│   │   │   └── work/             # FeaturedProject, OtherProjects (category filters)
│   │   └── ui/                   # Leaf primitives: SpotlightCard, CopyButton, Reveal, Kicker, UnderlineLink, icons
│   └── lib/
│       ├── data.ts               # Content data: featuredProject, otherProjects, technicalSkills, timeline
│       └── site-config.ts        # Global settings: metadata, URLs, navigation links, socials, availability
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript strict configuration
```

## Data-Driven Content Architecture

To maintain high maintainability and prevent visual regressions:
- **Site Global Config** ([`src/lib/site-config.ts`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/lib/site-config.ts)): Contains name, role, contact info, navigation links, availability pill, and canonical URLs.
- **Projects & Timeline Model** ([`src/lib/data.ts`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/lib/data.ts)):
  - `FeaturedProject`: Production SaaS case study with KPIs, cutting engine decisions, and dashboard screenshot.
  - `OtherProject`: 5 core engineering systems (Cancha Directa, Claude Docs Navigator, LRUCache.cpp, bloomFilterProject, TuringMachine.cpp) with GitHub links, highlights, and categories.
  - `SkillCategory`: 5 technical competency clusters (Systems, Frontend, Backend, Data/AI, Tooling).
  - `TimelineItem`: Academic and professional milestones with detailed accomplishments.
