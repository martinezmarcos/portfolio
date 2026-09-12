"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";

export function Timeline() {
  const { t } = useLanguage();
  const tl = t.timelineSection;

  return (
    <section id="timeline" className="border-b border-zinc-200/80 bg-white scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{tl.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {tl.sectionTag}
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-zinc-950 sm:text-4xl md:text-5xl">
            {tl.title}
          </h2>
        </Reveal>

        {/* Vertical Connected Changelog Layout */}
        <div className="relative mt-16 space-y-12 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-zinc-200 sm:before:left-4">
          {tl.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative flex gap-6 sm:gap-10">
                {/* Node indicator */}
                <div className="relative mt-1 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-zinc-900" />
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-6 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 pb-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                        {item.period}
                      </p>
                      <h3 className="mt-1 font-sans text-xl font-medium text-zinc-950">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-700 shadow-2xs font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-2 font-sans text-sm text-zinc-500 font-medium">{item.role}</p>

                  <p className="mt-4 text-[16px] leading-[1.75] text-zinc-600">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-zinc-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
