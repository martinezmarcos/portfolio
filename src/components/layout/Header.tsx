"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { href: "#featured", label: t.nav.work },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#about", label: t.nav.about },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScrollTo(href, 85);
    setOpen(false);
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      {/* Floating Island Pill Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between gap-3 sm:gap-4 rounded-full border border-black/[0.08] bg-white/90 px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] ring-1 ring-black/5 whitespace-nowrap"
      >
        {/* Left Monogram / Name */}
        <a
          href="#top"
          onClick={(e) => handleSmoothScroll(e, "#top")}
          className="group flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          <span className="font-sans text-[13.5px] font-semibold tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors">
            Marcos Martinez
          </span>
        </a>

        {/* Center Proportional Sans-Serif Navigation Links (md:flex ensures no cramping) */}
        <nav
          className="hidden items-center gap-0.5 md:flex shrink-0 whitespace-nowrap"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative rounded-full px-2.5 py-1 font-sans text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-950 whitespace-nowrap"
            >
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-zinc-100"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Stage: Language Switcher & Contact CTA */}
        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
          {/* Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language between Spanish and English"
            className="flex items-center gap-1 rounded-full border border-black/10 bg-zinc-100/90 px-2.5 py-1 font-sans text-xs font-semibold text-zinc-800 transition-all hover:bg-zinc-200 active:scale-95 shrink-0 whitespace-nowrap"
          >
            <span className={lang === "es" ? "font-bold text-zinc-950" : "font-normal text-zinc-400"}>
              ES
            </span>
            <span className="text-zinc-300">/</span>
            <span className={lang === "en" ? "font-bold text-zinc-950" : "font-normal text-zinc-400"}>
              EN
            </span>
          </button>

          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            whileHover={{ scale: 1.04, y: -0.5 }}
            whileTap={{ scale: 0.96 }}
            className="group hidden items-center gap-1.5 rounded-full bg-zinc-950 px-3.5 py-1.5 font-sans text-[12px] font-semibold text-white transition-all hover:bg-zinc-800 sm:inline-flex shrink-0 whitespace-nowrap"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Mobile Menu Toggle (visible on < md) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-black/10 bg-zinc-100 px-3 py-1 font-sans text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 md:hidden shrink-0 whitespace-nowrap"
            aria-expanded={open}
            aria-controls="floating-mobile-menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </motion.div>

      {/* Floating Mobile Dropdown Menu Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="floating-mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-4 backdrop-blur-2xl shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="rounded-xl px-3 py-2.5 font-sans text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="mt-2 flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-2.5 font-sans text-sm font-semibold text-white"
              >
                <span>{t.nav.contact}</span>
                <ArrowUpRight size={15} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
