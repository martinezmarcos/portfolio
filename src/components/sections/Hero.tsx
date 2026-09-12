import { ArrowDownRight, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-white/[0.08] pt-28 sm:pt-36">
      {/* Subtle architectural background line grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-content px-6 pb-24 sm:px-10 sm:pb-32">
        {/* Terminal Micro-Spec Strip */}
        <Reveal>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-3.5 py-1.5 font-mono text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Terminal size={12} className="text-zinc-500" />
              <span>Full Stack & Systems</span>
            </span>
            <span className="text-zinc-600">/</span>
            <span>Buenos Aires, AR</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Available</span>
            </span>
          </div>
        </Reveal>

        {/* Hero Display Headline */}
        <Reveal delay={0.06}>
          <div className="mt-8 max-w-5xl">
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl md:text-[4.75rem] md:leading-[1.05]">
              Building software that survives real production and concurrency.
            </h1>
          </div>
        </Reveal>

        {/* Narrative & Profile summary */}
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            I architect and maintain a multi-tenant manufacturing SaaS powering two furniture
            factories in daily production (INTERD & CLAXON). My engineering focus bridges
            distributed high-concurrency systems (atomic Redis locks, PostgreSQL RLS, pgvector RAG)
            with low-level C++20 data structures and memory mechanics.
          </p>
        </Reveal>

        {/* Architectural Telemetry Badges */}
        <Reveal delay={0.18}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl">
            <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3.5">
              <p className="font-mono text-2xl font-semibold tracking-tight text-white">2</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Companies in Daily SaaS
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3.5">
              <p className="font-mono text-2xl font-semibold tracking-tight text-white">O(1)</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Amortized LRU Cache
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3.5">
              <p className="font-mono text-2xl font-semibold tracking-tight text-white">81%</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Recall@5 Vector RAG
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3.5">
              <p className="font-mono text-2xl font-semibold tracking-tight text-white">C++20</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                & Next.js Full Stack
              </p>
            </div>
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-black transition-all hover:bg-zinc-200 shadow-sm"
            >
              <span>Inspect Systems</span>
              <ArrowDownRight size={15} />
            </a>

            <CopyButton
              text={siteConfig.email}
              label={siteConfig.email}
              className="rounded-xl px-4 py-3"
            />

            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
