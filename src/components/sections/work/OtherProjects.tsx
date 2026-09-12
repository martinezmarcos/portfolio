"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { otherProjects, type ProjectCategory } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GitHubIcon } from "@/components/ui/icons";

const categories: ProjectCategory[] = [
  "All",
  "Distributed & Systems",
  "AI & RAG",
  "Algorithms & C++",
];

export function OtherProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="mt-28 border-t border-white/[0.08] pt-20">
      {/* Section Header & Filter Tabs */}
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Open Source & Systems Engineering
            </span>
            <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Systems, RAG & Algorithmic Projects
            </h3>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
                  activeCategory === cat
                    ? "bg-white font-medium text-black shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <SpotlightCard className="flex h-full flex-col justify-between">
              <div>
                {/* Top bar with category & GitHub link */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    <GitHubIcon size={14} />
                    <span>Source</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* Title & Tagline */}
                <h4 className="mt-4 text-xl font-medium text-white group-hover:text-zinc-100">
                  {project.title}
                </h4>
                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-5 space-y-1.5 rounded-lg border border-white/[0.04] bg-white/[0.01] p-3">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 font-mono text-[11px] text-zinc-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-zinc-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack Tags & Link */}
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
                >
                  <span>Explore Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
