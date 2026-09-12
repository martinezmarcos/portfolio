import Image from "next/image";
import { featuredProject } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function FeaturedProject() {
  return (
    <div className="relative">
      {/* Top telemetry bar */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">01</span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Flagship Production Platform
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-zinc-300">INTERD & CLAXON — Active Daily Use</span>
          </div>
        </div>
      </Reveal>

      {/* Main Title & Description */}
      <Reveal delay={0.06}>
        <div className="mt-8 max-w-4xl">
          <h3 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            {featuredProject.title}
          </h3>
          <p className="mt-3 font-sans text-base text-zinc-400 sm:text-lg">
            {featuredProject.subtitle}
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
                  The Industrial Bottleneck
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-zinc-300">
                  {featuredProject.problem}
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Engineered Solution
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-zinc-300">
                  {featuredProject.build}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Key Architectural Decisions */}
          <Reveal delay={0.16}>
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                Core Architectural Decisions
              </p>
              <div className="grid gap-3">
                {featuredProject.decisions.map((dec) => (
                  <div
                    key={dec.title}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      <span className="rounded bg-white/[0.08] px-1.5 py-0.5 text-zinc-300 font-semibold">
                        {dec.tag}
                      </span>
                      <span>{dec.title}</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">
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
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: High-Fidelity Preview & Live Telemetry */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={0.12}>
            <SpotlightCard className="p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-white/[0.12] bg-black shadow-2xl">
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-950 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400">
                    app.internal-production.sys
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">HTTPS 200</span>
                </div>

                {/* Dashboard Image */}
                <Image
                  src="/dashboard-preview.png"
                  alt="Furniture Operating System Dashboard Preview"
                  width={1910}
                  height={854}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>

              <div className="mt-4 px-2 space-y-3">
                <div className="grid grid-cols-3 gap-2 border-y border-white/[0.06] py-3 text-center">
                  {featuredProject.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-xl font-medium text-white">{m.value}</p>
                      <p className="font-mono text-[10px] uppercase text-zinc-400">{m.subtext}</p>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[11px] leading-relaxed text-zinc-400 italic">
                  {featuredProject.note}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
