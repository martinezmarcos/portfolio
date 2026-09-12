"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GitHubIcon } from "@/components/ui/icons";
import { useLanguage } from "@/lib/language-context";

export function OtherProjects() {
  const { t } = useLanguage();
  const pSection = t.projectsSection;
  const [activeCategoryId, setActiveCategoryId] = useState<string>("All");

  const filteredProjects =
    activeCategoryId === "All"
      ? pSection.items
      : pSection.items.filter((p) => p.category === activeCategoryId);

  return (
    <div id="projects" className="mt-32 border-t border-zinc-200/80 pt-24 scroll-mt-28">
      {/* Section Header & Architectural Switcher */}
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-zinc-400">{pSection.sectionNum}</span>
              <span className="h-3 w-px bg-zinc-300" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {pSection.sectionTag}
              </span>
            </div>
            <h3 className="mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl">
              {pSection.title}
            </h3>
            <p className="mt-2.5 max-w-xl text-[16px] leading-relaxed text-zinc-600">
              {pSection.subtitle}
            </p>
          </div>

          {/* Solid Category Switcher */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar rounded-full border border-black/10 bg-zinc-100/80 p-1.5 backdrop-blur-xl shadow-sm max-w-full">
            {pSection.categories.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`rounded-full px-4 py-1.5 font-sans text-xs font-medium whitespace-nowrap transition-all duration-200 outline-none ${
                    isActive
                      ? "bg-zinc-950 text-white font-semibold shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid with Spotlight Glow */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <SpotlightCard
            key={project.id}
            className="flex h-full flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60"
          >
            <div>
              {/* Meta Header */}
              <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                  <span className="rounded bg-zinc-100 px-2 py-0.5 font-semibold text-zinc-700">
                    {project.typeTag}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-emerald-600 font-medium">{project.complexity}</span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex items-center gap-1.5 font-sans text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  <GitHubIcon size={14} />
                  <span>{pSection.source}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Human Title & Tagline */}
              <h4 className="mt-5 text-2xl font-medium tracking-tight text-zinc-950 group-hover:text-black">
                {project.title}
              </h4>
              <p className="mt-1 font-sans text-sm text-zinc-500">
                {project.tagline}
              </p>

              {/* Narrative Description */}
              <p className="mt-4 text-[15.5px] leading-[1.72] text-zinc-600">
                {project.description}
              </p>

              {/* Architectural Breakdown Box */}
              <div className="mt-6 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 space-y-2.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  {pSection.systemMechanics}
                </p>
                {project.architectureBreakdown.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-12 gap-2 text-xs font-mono"
                  >
                    <span className="col-span-5 text-zinc-500 truncate">{item.label}:</span>
                    <span className="col-span-7 text-zinc-800">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with Stack & Direct Action */}
            <div className="mt-8 border-t border-zinc-200/80 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-zinc-200 bg-zinc-100/80 px-2.5 py-0.5 font-mono text-[11px] text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.14em] text-zinc-950 transition-opacity hover:opacity-75"
              >
                <span>{pSection.viewRepo}</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
