import { Mail, ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-white/[0.08]">
      {/* Subtle background ambient radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="mx-auto max-w-content px-6 pt-24 pb-24 sm:px-10 sm:pt-32 sm:pb-32">
        {/* Availability Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{siteConfig.availability}</span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-4xl text-4xl font-medium tracking-[-0.035em] text-white sm:text-6xl md:text-[4.5rem] md:leading-[1.08]">
            I build reliable software for real-world production and distributed systems.
          </h1>
        </Reveal>

        {/* Narrative Intro */}
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Full Stack & Systems Developer based in Argentina. Architect and maintainer of an
            internal multi-tenant SaaS running daily operations for two furniture manufacturers
            (INTERD & CLAXON). Focused on concurrency-safe architectures, low-level data
            structures in C++, and deterministic RAG systems.
          </p>
        </Reveal>

        {/* CTAs & Copy Email */}
        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-black transition-all hover:bg-zinc-200"
            >
              <span>Explore Projects</span>
              <ArrowDownRight size={15} />
            </a>

            <CopyButton
              text={siteConfig.email}
              label={siteConfig.email}
              className="px-4 py-3 text-xs"
            />
          </div>
        </Reveal>

        {/* Social Icons & Status */}
        <Reveal delay={0.32}>
          <div className="mt-16 flex items-center gap-6 text-zinc-500">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-white"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-white"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send an email"
              className="transition-colors hover:text-white"
            >
              <Mail size={20} strokeWidth={1.75} />
            </a>
            <span className="font-mono text-xs text-zinc-600">· Buenos Aires, Argentina</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
