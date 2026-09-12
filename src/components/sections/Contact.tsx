"use client";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contactSection;

  return (
    <section id="contact" className="relative bg-white scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{c.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {c.sectionTag}
            </span>
          </div>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-6xl md:text-7xl">
            {c.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-[17px] sm:text-[19px] leading-[1.75] text-zinc-600">
            {c.subtitle}
          </p>
        </Reveal>

        {/* Contact Action Stage with tactile spring physics */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <CopyButton
              text={siteConfig.email}
              label={c.copyEmail}
              className="rounded-full px-5 py-3.5 text-sm"
            />
          </div>
        </Reveal>

        {/* Social Links Row */}
        <Reveal delay={0.24}>
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-zinc-200/80 pt-8 font-sans text-xs uppercase tracking-[0.16em]">
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-950"
            >
              <GitHubIcon size={16} />
              <span>GitHub ↗</span>
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-950"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn ↗</span>
            </motion.a>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500 font-sans">{c.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
