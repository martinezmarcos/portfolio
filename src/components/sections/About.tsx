"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();
  const ab = t.aboutSection;

  return (
    <section id="about" className="border-b border-zinc-200/80 bg-white scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{ab.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {ab.sectionTag}
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          {/* Left Title & Manifesto Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.06}>
              <h2 className="text-3xl font-medium tracking-[-0.03em] text-zinc-950 sm:text-5xl sm:leading-[1.1]">
                {ab.title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-6 shadow-sm">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  {ab.principleTitle}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-800">
                  {ab.principleQuote}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Narrative Prose */}
          <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-6">
            {ab.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 30)} delay={index * 0.08}>
                <p className="text-[16.5px] sm:text-[18px] leading-[1.78] text-zinc-600 font-normal">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
