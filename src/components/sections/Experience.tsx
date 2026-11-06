"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
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

        <div className="mt-16 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
          {ex.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <ExperienceRow item={item} visit={ex.visit} usedBy={ex.usedBy} decisionsHeader={ex.decisionsHeader} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
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
    <article className="grid gap-6 py-12 lg:grid-cols-12 lg:gap-12">
      {/* Left: company meta */}
      <div className="lg:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">{item.period}</p>
        <h3 className="mt-2 text-3xl font-medium tracking-tight text-zinc-950">{item.company}</h3>
        <p className="mt-1 font-sans text-[15px] font-medium text-zinc-600">{item.role}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {item.badge}
          </span>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${visit} ${item.urlLabel}`}
            className="group inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-[11px] text-zinc-700 transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            {item.urlLabel}
            <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {item.clients && (
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">{usedBy}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.clients.map((client) => (
                <span
                  key={client}
                  className="rounded-md bg-zinc-950 px-2.5 py-1 font-sans text-xs font-semibold text-white"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="lg:col-span-8">
        <p className="text-[17px] leading-[1.75] text-zinc-700">{item.summary}</p>

        {item.bullets && (
          <ul className="mt-5 space-y-2.5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-zinc-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {item.preview && (
          <SpotlightCard className="mt-8 p-3 sm:p-4">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
              <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/90 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <span className="font-mono text-[11px] text-zinc-500">{item.urlLabel}</span>
                <span className="w-10" />
              </div>
              <Image
                src={item.preview.src}
                alt={item.preview.alt}
                width={item.preview.width}
                height={item.preview.height}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
            {item.metrics && (
              <div className="mt-3 grid grid-cols-3 gap-2 px-2 py-2 text-center">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-xl font-medium text-zinc-950">{m.value}</p>
                    <p className="font-mono text-[10px] uppercase text-zinc-500">{m.subtext}</p>
                  </div>
                ))}
              </div>
            )}
          </SpotlightCard>
        )}

        {item.decisions && (
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{decisionsHeader}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {item.decisions.map((dec) => (
                <div
                  key={dec.title}
                  className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    <span className="rounded bg-zinc-200/80 px-1.5 py-0.5 font-semibold text-zinc-800">{dec.tag}</span>
                    <span>{dec.title}</span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-700">{dec.description}</p>
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
                className="rounded border border-zinc-200 bg-zinc-100/80 px-2.5 py-0.5 font-mono text-[11px] text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
