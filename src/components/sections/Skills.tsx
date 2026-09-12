"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";

export function Skills() {
  const { t } = useLanguage();
  const s = t.skillsSection;

  return (
    <section id="skills" className="border-b border-zinc-200/80 bg-white scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Index Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{s.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {s.sectionTag}
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-zinc-950 sm:text-4xl md:text-5xl">
            {s.title}
          </h2>
        </Reveal>

        {/* Blueprint Specifications Layout */}
        <div className="mt-16 space-y-12">
          {s.categories.map((section, idx) => (
            <Reveal key={section.number} delay={idx * 0.05}>
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-6 sm:p-8 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-md">
                {/* Domain Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-zinc-200/80 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-zinc-400">
                      {section.number}
                    </span>
                    <h3 className="font-sans text-xl font-medium text-zinc-950">
                      {section.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-zinc-500">
                    {section.subtitle}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-zinc-200/70 bg-white p-4 transition-all duration-200 hover:border-zinc-300 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-semibold text-zinc-900">
                          {skill.name}
                        </span>
                        <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
