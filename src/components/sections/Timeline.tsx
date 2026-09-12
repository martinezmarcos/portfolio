import { timeline } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section id="timeline" className="border-b border-white/[0.08] scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">04</span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Trajectory & Milestones
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Experience & Formal Education
          </h2>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-zinc-300">
            A continuous progression combining formal systems analysis, low-level technical degrees,
            and software shipped to live factories.
          </p>
        </Reveal>

        {/* Vertical Connected Changelog Layout */}
        <div className="relative mt-16 space-y-12 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-white/[0.08] sm:before:left-4">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative flex gap-6 sm:gap-10">
                {/* Node indicator */}
                <div className="relative mt-1 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-zinc-950 shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Content Card with Subtly Enlarged Typography */}
                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-6 sm:p-8 transition-all duration-200 hover:border-white/[0.14] hover:bg-zinc-900/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-400">
                        {item.period}
                      </p>
                      <h3 className="mt-1 font-sans text-xl font-medium text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-2 font-sans text-sm text-zinc-400">{item.role}</p>

                  <p className="mt-4 text-[16px] leading-[1.75] text-zinc-300">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-zinc-300"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
