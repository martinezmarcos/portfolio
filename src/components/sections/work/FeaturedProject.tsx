"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/lib/language-context";

export function FeaturedProject() {
  const { t } = useLanguage();
  const f = t.featured;

  const stack = [
    "React 19",
    "Next.js 16",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Supabase Realtime",
    "Tailwind CSS v4",
    "JWT Auth",
    "Vercel",
  ];

  return (
    <div id="featured" className="relative scroll-mt-28">
      {/* Top telemetry bar */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{f.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {f.sectionTag}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
            <span className="text-zinc-700">{f.status}</span>
          </div>
        </div>
      </Reveal>

      {/* Main Title & Description */}
      <Reveal delay={0.06}>
        <div className="mt-8 max-w-4xl">
          <h3 className="text-3xl font-medium tracking-[-0.03em] text-zinc-950 sm:text-5xl md:text-6xl">
            {f.title}
          </h3>
          <p className="mt-3 font-sans text-base text-zinc-600 sm:text-lg">
            {f.subtitle}
          </p>
        </div>
      </Reveal>

      {/* 2-Column Asymmetrical Engineering Stage */}
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Problem, System Architecture, Decisions */}
        <div className="lg:col-span-7 space-y-8">
          <Reveal delay={0.1}>
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {f.problemTitle}
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-zinc-700">
                  {f.problemText}
                </p>
              </div>

              <div className="border-t border-zinc-200/80 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {f.solutionTitle}
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-zinc-700">
                  {f.solutionText}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Key Architectural Decisions */}
          <Reveal delay={0.16}>
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {f.decisionsHeader}
              </p>
              <div className="grid gap-3">
                {f.decisions.map((dec) => (
                  <div
                    key={dec.title}
                    className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      <span className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-zinc-800 font-semibold">
                        {dec.tag}
                      </span>
                      <span>{dec.title}</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">
                      {dec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tech Stack Pills */}
          <Reveal delay={0.22}>
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-200 bg-zinc-100/80 px-3 py-1 font-mono text-xs text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: High-Fidelity Preview & Live Telemetry (No zoom on hover) */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={0.12}>
            <SpotlightCard className="p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/90 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500">
                    app.enterprise-production.sys
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-emerald-600">HTTPS 200</span>
                </div>

                {/* Dashboard Image — Zoom on hover disabled as requested */}
                <Image
                  src="/dashboard-preview.png"
                  alt="Enterprise Production Platform Dashboard Preview"
                  width={1910}
                  height={854}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>

              <div className="mt-4 px-2 space-y-3">
                <div className="grid grid-cols-3 gap-2 border-y border-zinc-200/80 py-3 text-center">
                  {f.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-xl font-medium text-zinc-950">{m.value}</p>
                      <p className="font-mono text-[10px] uppercase text-zinc-500">{m.subtext}</p>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[11px] leading-relaxed text-zinc-500 italic">
                  {f.confidentiality}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
