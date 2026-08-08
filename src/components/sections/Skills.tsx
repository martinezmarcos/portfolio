import { alsoWorkedWith, skillGroups } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Skills</Kicker>
          <h2 className="mt-4 max-w-md text-2xl font-medium leading-tight sm:text-3xl">
            Stack I ship with.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-4 sm:gap-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.06}>
              <div className="border-t border-line pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink">
                  {group.label}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 max-w-2xl font-mono text-xs leading-relaxed text-ink-muted">
            Also worked with: {alsoWorkedWith.join(", ")} — automation-focused work, not my
            current specialty.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
