import { technicalSkills } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Capabilities</Kicker>
          <h2 className="mt-4 max-w-md text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Engineering & Technical Stack
          </h2>
          <p className="mt-3 max-w-2xl text-base text-zinc-400">
            Systems programming, modern web application architecture, and production-tested data
            pipelines.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-zinc-950/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/30">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white">
                    {category.category}
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                </div>

                <ul className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="group">
                      <p className="font-mono text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote on legacy / exploration stack */}
        <Reveal delay={0.25}>
          <div className="mt-12 rounded-lg border border-white/[0.06] bg-white/[0.01] p-4">
            <p className="font-mono text-xs leading-relaxed text-zinc-400">
              <span className="text-zinc-300 font-medium">Additional Background:</span> C#,
              ASP.NET, Entity Framework, Python (Automation & AI pipelines) — practical knowledge
              applied when required, focusing primary engineering work on C++ systems and the
              modern TypeScript/PostgreSQL ecosystem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
