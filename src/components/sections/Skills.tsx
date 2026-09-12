import { technicalSkills } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/[0.08] scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Index Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">03</span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Engineering Capabilities
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Technical Stack & Systems Tooling
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-zinc-300">
            Systems programming, high-concurrency cloud backends, and low-latency client runtimes.
          </p>
        </Reveal>

        {/* Blueprint Specifications Layout */}
        <div className="mt-16 space-y-12">
          {technicalSkills.map((section, idx) => (
            <Reveal key={section.number} delay={idx * 0.05}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-6 sm:p-8 transition-all duration-300 hover:border-white/[0.14] hover:bg-zinc-900/20">
                {/* Domain Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-white/[0.06] pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-zinc-500">
                      {section.number}
                    </span>
                    <h3 className="font-sans text-xl font-medium text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-zinc-400">
                    {section.subtitle}
                  </p>
                </div>

                {/* Skills Grid with Subtly Enlarged Typography */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="rounded bg-white/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-zinc-300">
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
