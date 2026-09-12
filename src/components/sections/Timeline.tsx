import { timeline } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section id="timeline" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Trajectory & Milestones</Kicker>
          <h2 className="mt-4 max-w-md text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Engineering Background
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            A continuous path spanning formal systems analysis, production shipping, and
            specialized AI engineering.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group grid gap-4 border-t border-white/[0.08] py-8 last:border-b sm:grid-cols-12 sm:gap-8 transition-colors hover:bg-white/[0.01]">
                <div className="sm:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-400">
                    {item.period}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-400">{item.role}</p>
                </div>

                <div className="sm:col-span-8">
                  <h3 className="text-xl font-medium text-white group-hover:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 font-mono text-xs text-zinc-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-500" />
                        <span>{highlight}</span>
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
