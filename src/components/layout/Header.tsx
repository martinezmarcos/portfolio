"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { smoothScrollTo } from "@/lib/smooth-scroll";

const navItems = [
  { href: "#projects", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScrollTo(href, 85);
    setOpen(false);
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      {/* Floating Island Pill Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between rounded-full border border-white/[0.12] bg-zinc-950/85 px-4 py-2 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition-all"
      >
        {/* Left Monogram / Name */}
        <a
          href="#top"
          onClick={(e) => handleSmoothScroll(e, "#top")}
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="font-sans text-[13.5px] font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            Marcos Martinez
          </span>
        </a>

        {/* Center Proportional Sans-Serif Navigation Links */}
        <nav
          className="hidden items-center gap-0.5 sm:flex"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative rounded-full px-3 py-1 font-sans text-[13px] font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA Button with Smooth Scaling */}
        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            whileHover={{ scale: 1.04, y: -0.5 }}
            whileTap={{ scale: 0.96 }}
            className="group hidden items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-sans text-[12px] font-semibold text-black transition-shadow hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] sm:inline-flex"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-sans text-xs font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:hidden"
            aria-expanded={open}
            aria-controls="floating-mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.div>

      {/* Floating Mobile Dropdown Menu Card with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="floating-mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-2xl shadow-2xl sm:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="rounded-xl px-3 py-2.5 font-sans text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="mt-2 flex items-center justify-between rounded-xl bg-white px-4 py-2.5 font-sans text-sm font-semibold text-black"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={15} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
