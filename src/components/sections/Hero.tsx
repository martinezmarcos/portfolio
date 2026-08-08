import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {siteConfig.role} — React / Node.js / PostgreSQL
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.08] sm:text-6xl md:text-[4.25rem]">
            I build web software that businesses actually run on.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            I design and maintain a multi-tenant SaaS platform for furniture
            manufacturers — handling inventory, orders and role-based access
            for two companies in daily production use. Currently studying to
            become a System Analyst while shipping real products.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent hover:border-accent"
            >
              View my work
            </a>
            <UnderlineLink
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink"
            >
              Get in touch
            </UnderlineLink>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16 flex items-center gap-6 text-ink-muted">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-ink"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-ink"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send an email"
              className="transition-colors hover:text-ink"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
