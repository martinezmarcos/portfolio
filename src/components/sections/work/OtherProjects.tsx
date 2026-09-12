"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { otherProjects, type ProjectCategory } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GitHubIcon } from "@/components/ui/icons";

const categories: ProjectCategory[] = [
  "All",
  "Distributed Systems",
  "AI & RAG",
  "Low-Level & C++",
];

export function OtherProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeCategory);

  return (
    <div id="systems" className="mt-32 border-t border-white/[0.08] pt-24 scroll-mt-28">
      {/* Section Header & Gliding Architectural Switcher */}
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-zinc-500">02</span>
              <span className="h-3 w-px bg-zinc-700" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                Core Systems & Algorithmic Work
              </span>
            </div>
            <h3 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Systems, Concurrency & Low-Level Engineering
            </h3>
            <p className="mt-2.5 max-w-xl text-[16px] leading-relaxed text-zinc-300">
              Deterministic architectures, multithreaded C++ data structures, and production-tested
              distributed locking mechanisms.
            </p>
          </div>

          {/* Solid Smooth Category Switcher (Bug-free, no coordinate glitch) */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar rounded-full border border-white/[0.12] bg-zinc-950/85 p-1.5 backdrop-blur-xl shadow-lg max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-sans text-xs font-medium whitespace-nowrap transition-all duration-200 outline-none ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid with Spotlight Glow following cursor */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <SpotlightCard
            key={project.id}
            className="flex h-full flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
          >
            <div>
              {/* Meta Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                  <span className="rounded bg-white/[0.06] px-2 py-0.5 font-semibold text-zinc-300">
                    {project.typeTag}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-emerald-400">{project.complexity}</span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex items-center gap-1.5 font-sans text-xs font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  <GitHubIcon size={14} />
                  <span>Source</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Human Title & Tagline */}
              <h4 className="mt-5 text-2xl font-medium tracking-tight text-white group-hover:text-zinc-100">
                {project.title}
              </h4>
              <p className="mt-1 font-sans text-sm text-zinc-400">
                {project.tagline}
              </p>

              {/* Subtly Enlarged Narrative Description */}
              <p className="mt-4 text-[15.5px] leading-[1.72] text-zinc-300">
                {project.description}
              </p>

              {/* Architectural Breakdown Box */}
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-2.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  System Mechanics
                </p>
                {project.architectureBreakdown.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-12 gap-2 text-xs font-mono"
                  >
                    <span className="col-span-4 text-zinc-400 truncate">{item.label}:</span>
                    <span className="col-span-8 text-zinc-200">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with Stack & Direct Action */}
            <div className="mt-8 border-t border-white/[0.06] pt-5">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/[0.06] bg-zinc-900/50 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
              >
                <span>View Repository on GitHub</span>
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
