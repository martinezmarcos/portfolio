import { siteConfig } from "@/lib/site-config";
import { Kicker } from "@/components/ui/Kicker";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Contact</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
            Let&apos;s talk about what you&apos;re building.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Open to full stack roles and freelance work where I can own real
            product decisions — not just close tickets.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <UnderlineLink
            href={`mailto:${siteConfig.email}`}
            className="mt-10 block w-fit text-2xl font-medium sm:text-4xl"
          >
            {siteConfig.email}
          </UnderlineLink>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex gap-8 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            <UnderlineLink href={siteConfig.social.github} target="_blank" rel="noreferrer">
              GitHub
            </UnderlineLink>
            <UnderlineLink href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </UnderlineLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
