"use client";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28">
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
          <p className="mt-6 max-w-xl text-[17px] sm:text-[19px] leading-[1.75] text-zinc-300">
            Open to Full Stack and Systems engineering roles where I can take ownership of
            critical backend architectures, distributed resilience, and real product decisions.
          </p>
        </Reveal>

        {/* Contact Action Stage with smooth tactile physics */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.03, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-semibold text-black shadow-lg shadow-white/10"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <CopyButton
              text={siteConfig.email}
              label="Copy Email"
              className="rounded-full px-5 py-3.5 text-sm"
            />
          </div>
        </Reveal>

        {/* Social Links Row */}
        <Reveal delay={0.24}>
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/[0.08] pt-8 font-sans text-xs uppercase tracking-[0.16em]">
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              <GitHubIcon size={16} />
              <span>GitHub ↗</span>
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn ↗</span>
            </motion.a>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500 lowercase">Argentina (UTC-3)</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
