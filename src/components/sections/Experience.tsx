"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import type { ExperienceItem } from "@/lib/translations";

type Accent = {
  bar: string;
  glow: string;
  dot: string;
  chip: string;
  index: string;
};

const accents: Record<string, Accent> = {
  interd: {
    bar: "from-amber-400 via-orange-500 to-rose-500",
    glow: "bg-amber-300/25",
    dot: "bg-amber-500",
    chip: "border-amber-200 bg-amber-50 text-amber-900",
    index: "text-amber-500/25",
  },
  lorma: {
    bar: "from-emerald-400 via-teal-500 to-cyan-500",
    glow: "bg-emerald-300/25",
    dot: "bg-emerald-500",
    chip: "border-emerald-200 bg-emerald-50 text-emerald-900",
    index: "text-emerald-500/25",
  },
  honycars: {
    bar: "from-violet-500 via-fuchsia-500 to-pink-500",
    glow: "bg-violet-300/25",
    dot: "bg-violet-500",
    chip: "border-violet-200 bg-violet-50 text-violet-900",
    index: "text-violet-500/25",
  },
};

const fallbackAccent = accents.lorma;

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
                index={index}
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
  index,
  visit,
  usedBy,
  decisionsHeader,
}: {
  item: ExperienceItem;
  index: number;
  visit: string;
  usedBy: string;
  decisionsHeader: string;
}) {
  const a = accents[item.id] ?? fallbackAccent;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-zinc-200/80"
    >
      {/* Accent bar + glow */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${a.bar}`} />
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${a.glow}`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-2 left-10 hidden select-none font-mono text-[9rem] font-bold leading-none tracking-tighter lg:block ${a.index}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        {/* Left: identity */}
        <div className="lg:col-span-5 lg:pb-32">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-white">
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${a.dot}`} />
                <span className={`relative inline-flex h-2 w-2 rounded-full ${a.dot}`} />
              </span>
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

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-zinc-950 py-2 pl-5 pr-2 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 hover:shadow-lg"
          >
            <span>
              {visit} <span className="font-mono font-normal text-zinc-400">{item.urlLabel}</span>
            </span>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${a.bar}`}>
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:rotate-45" />
            </span>
          </a>

          {item.clients && (
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">{usedBy}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.clients.map((client) => (
                  <span
                    key={client}
                    className="rounded-lg border border-zinc-300 bg-white px-3.5 py-1.5 font-sans text-sm font-semibold text-zinc-950 shadow-2xs"
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
              <span key={h} className={`rounded-full border px-3 py-1 font-sans text-xs font-semibold ${a.chip}`}>
                {h}
              </span>
            ))}
          </div>

          {item.bullets && (
            <div className="mt-8 grid gap-3">
              {item.bullets.map((bullet, i) => (
                <div
                  key={bullet}
                  className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 transition-colors duration-200 hover:border-zinc-300 hover:bg-white"
                >
                  <span className="font-mono text-xs font-semibold text-zinc-400">
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
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 transition-colors duration-200 hover:border-zinc-300 hover:bg-white"
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
    </motion.article>
  );
}
