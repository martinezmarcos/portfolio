"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortName}
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-line px-6 py-4 sm:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
