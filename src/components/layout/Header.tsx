"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/75 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3 font-mono text-sm tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          <span className="font-medium group-hover:text-zinc-300 transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Socials */}
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white px-3.5 py-1.5 font-mono text-xs font-medium text-black transition-all hover:bg-zinc-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-2 border-t border-white/[0.08] bg-black px-6 py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-6 border-t border-white/[0.08] pt-4 text-zinc-400">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
