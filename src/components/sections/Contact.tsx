import { siteConfig } from "@/lib/site-config";
import { Kicker } from "@/components/ui/Kicker";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Initiate Collaboration</Kicker>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s talk about the systems you&apos;re engineering.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Open to Full Stack and Systems roles where I can contribute to mission-critical
            architecture, distributed reliability, and scalable software solutions.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white px-6 py-4 font-mono text-sm font-medium text-black transition-all hover:bg-zinc-200"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <CopyButton
              text={siteConfig.email}
              label="Copy Email"
              className="rounded-xl px-5 py-4 text-sm"
            />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-14 flex items-center gap-8 border-t border-white/[0.08] pt-8 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
            <UnderlineLink
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub ↗
            </UnderlineLink>
            <UnderlineLink
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn ↗
            </UnderlineLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
