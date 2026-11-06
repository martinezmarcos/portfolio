"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/icons";
import { useLanguage } from "@/lib/language-context";

export function OtherProjects() {
  const { t } = useLanguage();
  const p = t.projectsSection;

  return (
    <div id="projects" className="scroll-mt-28">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-zinc-400">{p.sectionNum}</span>
          <span className="h-3 w-px bg-zinc-300" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{p.sectionTag}</span>
        </div>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">{p.title}</h2>
        <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-zinc-600">{p.subtitle}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {p.items.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04} className="h-full">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — ${p.source}`}
              className="group flex h-full flex-col justify-between rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-5 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">
                    <span>{project.typeTag}</span>
                    {project.featured && (
                      <span className="rounded bg-zinc-950 px-1.5 py-0.5 font-semibold text-white">
                        {p.featuredLabel}
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-zinc-400 transition-colors group-hover:text-zinc-950">
                    <GitHubIcon size={14} />
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium tracking-tight text-zinc-950">{project.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-600">{project.tagline}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[10.5px] text-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
