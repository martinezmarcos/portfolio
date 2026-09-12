"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "#projects", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      {/* Floating Island Pill Navbar */}
      <div className="relative flex items-center justify-between rounded-full border border-white/[0.12] bg-zinc-950/80 px-4 py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] ring-1 ring-white/5 transition-all">
        {/* Left Monogram / Name with Live Status */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-xs font-medium text-white transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
          </span>
          <span className="tracking-tight font-sans text-sm font-medium text-zinc-200 group-hover:text-white">
            Marcos Martinez
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 font-mono text-xs text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1 rounded-full border border-white/20 bg-white px-3.5 py-1 text-xs font-medium text-black transition-all hover:bg-zinc-200 sm:inline-flex"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:hidden"
            aria-expanded={open}
            aria-controls="floating-mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Floating Mobile Dropdown Menu Card */}
      {open && (
        <div
          id="floating-mobile-menu"
          className="mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-2xl shadow-2xl sm:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 font-mono text-xs font-medium text-black"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
