---
name: portfolio-fullstack
description: >-
  Expert instructions and patterns for Full Stack development in this portfolio,
  covering Next.js 16, React 19, TypeScript, Tailwind v4, Prisma, PostgreSQL,
  Supabase, Redis atomic locking, pgvector RAG, and C++20 systems programming.
---

# Portfolio Full Stack & Systems Development Skill

This skill provides guidelines and development standards for building and extending the portfolio and its referenced projects.

## Core Stack Specifications

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI Runtime**: React 19 (Server Components by default, Client Components when interactive)
- **Language**: TypeScript 5 (Strict Mode, no implicit `any`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` and `@theme inline`
- **Animation**: `motion/react` (Motion 13) with SSR-safe hydration and cubic-bezier easing `[0.16, 1, 0.3, 1]`
- **Referenced Systems Architecture**:
  - **Furniture Business Management SaaS**: Multi-tenant operating system for 2 manufacturing companies (INTERD & CLAXON), 14 business modules, 2D sheet cut optimization engine, Supabase PostgreSQL, Prisma ORM, Supabase Realtime Broadcast, JWT Auth with Row Level Security.
  - **Cancha Directa**: Redis `SET NX PX` distributed atomic locks, Postgres `EXCLUDE` constraint backstop, 50-thread concurrent testing in Vitest.
  - **Claude Docs Navigator**: `pgvector` cosine similarity retrieval, Voyage AI embeddings over 1,200+ doc chunks, 81% Recall@5 benchmark.
  - **LRUCache.cpp**: C++20 generic LRU cache, amortized O(1) operations, `std::list::splice` zero-allocation node moves, `std::mutex` thread safety.
  - **bloomFilterProject**: C++ probabilistic data structure with optimal bit array sizing ($k=(m/n)\ln 2$).
  - **TuringMachine.cpp**: Formal Turing Machine parser and simulator executing `.tm` programs.
- **Deployment**: Vercel (Edge network, Static Site Generation)

## Architectural Guidelines

### 1. Next.js 16 & React 19 Conventions
- **Server Components by Default**: Keep all section components (`Hero`, `Work`, `About`, `Skills`, `Timeline`, `Contact`) as React Server Components (RSC).
- **Client Boundaries**: Isolate `"use client"` directives to the smallest leaf components possible:
  - [`Reveal.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/Reveal.tsx) (motion animation)
  - [`Header.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/layout/Header.tsx) (mobile drawer state)
  - [`CopyButton.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/CopyButton.tsx) (clipboard interaction)
  - [`SpotlightCard.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/ui/SpotlightCard.tsx) (mouse-tracking spotlight)
  - [`OtherProjects.tsx`](file:///C:/Users/Administrator/Documents/Vault/Proyectos/portfolio/src/components/sections/work/OtherProjects.tsx) (category filtering)

### 2. Hydration Safety & Graceful Degradation
- When accessing browser-only APIs (`window`, `matchMedia`), always use `useSyncExternalStore` or safe SSR fallbacks to prevent hydration mismatches.
- Never set `opacity: 0` as the SSR baseline for text content without an immediate fallback. Content must remain readable if JavaScript fails.
