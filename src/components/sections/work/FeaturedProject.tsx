import Image from "next/image";
import { featuredProject } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function FeaturedProject() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      {/* Left Details */}
      <div className="lg:col-span-7">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>Flagship Production SaaS</Kicker>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-emerald-400">
              {featuredProject.badge}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {featuredProject.title}
          </h3>
          <p className="mt-2 font-mono text-xs text-zinc-400">
            {featuredProject.subtitle}
          </p>
        </Reveal>

        {/* Narrative */}
        <Reveal delay={0.08}>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
            <p>{featuredProject.problem}</p>
            <p>{featuredProject.build}</p>
          </div>
        </Reveal>

        {/* KPI Metrics */}
        <Reveal delay={0.12}>
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/[0.08] py-4">
            {featuredProject.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-2xl font-medium text-white">{metric.value}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Architecture Decisions */}
        <Reveal delay={0.16}>
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-300">
              Key Engineering Decisions
            </p>
            <div className="mt-4 space-y-3">
              {featuredProject.decisions.map((dec) => (
                <div
                  key={dec.title}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12]"
                >
                  <p className="font-mono text-xs font-medium text-zinc-200">
                    {dec.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {dec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Result & Stack */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-zinc-900/50 px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right Visual Dashboard Preview */}
      <div className="lg:col-span-5">
        <Reveal delay={0.1}>
          <SpotlightCard className="p-2 sm:p-3">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
              {/* Window frame topbar */}
              <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-zinc-950 px-3 py-2.5">
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="ml-2 font-mono text-[10px] text-zinc-500">
                  interd-claxon.internal.sys
                </span>
              </div>

              <Image
                src="/dashboard-preview.png"
                alt="Furniture Business Management Platform production dashboard preview"
                width={1910}
                height={854}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="mt-4 px-2 pb-1">
              <p className="font-mono text-[11px] leading-relaxed text-zinc-500 italic">
                {featuredProject.note}
              </p>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </div>
  );
}
