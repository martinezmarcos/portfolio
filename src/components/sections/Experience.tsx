"use client";

import { FillButton } from "@/components/ui/FillButton";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import type { ExperienceItem } from "@/lib/translations";

export function Experience() {
  const { t } = useLanguage();
  const ex = t.experienceSection;

  return (
    <section id="experience" className="border-b border-zinc-200/80 bg-white scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-400">{ex.sectionNum}</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {ex.sectionTag}
            </span>
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] text-zinc-950 sm:text-4xl md:text-5xl">
            {ex.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-zinc-600">{ex.subtitle}</p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {ex.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <ExperienceCard
                item={item}
                visit={ex.visit}
                usedBy={ex.usedBy}
                decisionsHeader={ex.decisionsHeader}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  visit,
  usedBy,
  decisionsHeader,
}: {
  item: ExperienceItem;
  visit: string;
  usedBy: string;
  decisionsHeader: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        {/* Left: identity */}
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {item.badge}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">{item.period}</span>
          </div>

          <h3 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl">
            {item.company}
          </h3>
          <p className="mt-2 font-sans text-base font-medium text-zinc-500">{item.role}</p>

          <p className="mt-6 text-xl font-medium leading-snug tracking-tight text-zinc-900 sm:text-2xl">
            {item.tagline}
          </p>

          <FillButton
            href={item.url}
            external
            ariaLabel={`${visit} ${item.urlLabel}`}
            className="mt-8"
          >
            {visit}
            <span className="font-mono text-[0.8125rem] font-normal opacity-60">{item.urlLabel}</span>
          </FillButton>

          {item.clients && (
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">{usedBy}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.clients.map((client) => (
                  <span
                    key={client}
                    className="rounded-lg border border-zinc-300 bg-white px-3.5 py-1.5 font-sans text-sm font-semibold text-zinc-950"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.metrics && (
            <div className="mt-8 grid grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 bg-zinc-50/70">
              {item.metrics.map((m) => (
                <div key={m.label} className="px-3 py-4 text-center">
                  <p className="font-mono text-2xl font-semibold text-zinc-950">{m.value}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{m.subtext}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: what I built */}
        <div className="lg:col-span-7 lg:pt-12">
          <p className="text-[17px] leading-[1.75] text-zinc-700">{item.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span key={h} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-sans text-xs font-medium text-zinc-700">
                {h}
              </span>
            ))}
          </div>

          {item.bullets && (
            <div className="mt-8 grid gap-3">
              {item.bullets.map((bullet, i) => (
                <div
                  key={bullet}
                  className="flex items-baseline gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 px-4 py-3.5"
                >
                  <span className="w-5 shrink-0 font-mono text-xs font-semibold leading-relaxed text-zinc-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-zinc-700">{bullet}</p>
                </div>
              ))}
            </div>
          )}

          {item.decisions && (
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{decisionsHeader}</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {item.decisions.map((dec) => (
                  <div
                    key={dec.title}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4"
                  >
                    <span className="rounded bg-zinc-950 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                      {dec.tag}
                    </span>
                    <p className="mt-2.5 font-sans text-sm font-semibold text-zinc-950">{dec.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-zinc-600">{dec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.stack && (
            <div className="mt-6 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-[11px] text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
