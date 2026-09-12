"use client";

import { ArrowDownRight, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("#projects", 85);
  };

  return (
    <section id="top" className="relative border-b border-zinc-200/80 pt-28 sm:pt-36 bg-white">
      {/* Subtle architectural background dot grid in light tone */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-content px-6 pb-24 sm:px-10 sm:pb-32">
        {/* Terminal Micro-Spec Strip */}
        <Reveal>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-zinc-100/70 px-3.5 py-1.5 font-mono text-[11px] text-zinc-600">
            <span className="flex items-center gap-1.5 text-zinc-800">
              <Terminal size={12} className="text-zinc-500" />
              <span>{t.hero.terminal}</span>
            </span>
            <span className="text-zinc-300">/</span>
            <span>{t.hero.location}</span>
          </div>
        </Reveal>

        {/* Hero Display Headline */}
        <Reveal delay={0.06}>
          <div className="mt-8 max-w-5xl">
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-6xl md:text-[4.75rem] md:leading-[1.05]">
              {t.hero.headline}
            </h1>
          </div>
        </Reveal>

        {/* Narrative & Profile Summary */}
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-[19px] leading-[1.72] text-zinc-600 sm:text-[21px]">
            {t.hero.summary}
          </p>
        </Reveal>

        {/* Architectural Telemetry Badges */}
        <Reveal delay={0.18}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl">
            <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 transition-all hover:border-zinc-300 hover:bg-white hover:shadow-md">
              <p className="font-mono text-2xl font-semibold tracking-tight text-zinc-950">
                {t.hero.metrics.companiesValue}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {t.hero.metrics.companiesLabel}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 transition-all hover:border-zinc-300 hover:bg-white hover:shadow-md">
              <p className="font-mono text-2xl font-semibold tracking-tight text-zinc-950">
                {t.hero.metrics.lruValue}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {t.hero.metrics.lruLabel}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 transition-all hover:border-zinc-300 hover:bg-white hover:shadow-md">
              <p className="font-mono text-2xl font-semibold tracking-tight text-zinc-950">
                {t.hero.metrics.ragValue}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {t.hero.metrics.ragLabel}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 transition-all hover:border-zinc-300 hover:bg-white hover:shadow-md">
              <p className="font-mono text-2xl font-semibold tracking-tight text-zinc-950">
                {t.hero.metrics.systemsValue}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {t.hero.metrics.systemsLabel}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Action Buttons with Tactile Spring Animations */}
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-zinc-800 hover:shadow-lg"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowDownRight size={15} />
            </motion.a>

            <CopyButton
              text={siteConfig.email}
              label={siteConfig.email}
              className="rounded-xl px-4 py-3"
            />

            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 font-sans text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 font-sans text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
