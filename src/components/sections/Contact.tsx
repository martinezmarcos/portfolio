import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">06</span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Initiate Contact
            </span>
          </div>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            Let&apos;s build something substantial.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Open to Full Stack and Systems engineering roles where I can take ownership of
            critical backend architectures, distributed resilience, and real product decisions.
          </p>
        </Reveal>

        {/* Contact Action Stage */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-mono text-sm font-medium text-black transition-all hover:bg-zinc-200 shadow-md"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <CopyButton
              text={siteConfig.email}
              label="Copy Email"
              className="rounded-xl px-5 py-4 text-sm"
            />
          </div>
        </Reveal>

        {/* Social Links Row */}
        <Reveal delay={0.24}>
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/[0.08] pt-8 font-mono text-xs uppercase tracking-[0.16em]">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              <GitHubIcon size={16} />
              <span>GitHub ↗</span>
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn ↗</span>
            </a>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500 lowercase">Argentina (UTC-3)</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
