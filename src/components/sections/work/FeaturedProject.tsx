import Image from "next/image";
import { featuredProject } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProject() {
  return (
    <div className="grid gap-12 sm:grid-cols-12 sm:gap-8">
      <div className="sm:col-span-7">
        <Reveal>
          <Kicker>{featuredProject.kicker}</Kicker>
          <h3 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            {featuredProject.title}
          </h3>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 text-base leading-relaxed text-ink-muted">
            {featuredProject.problem}
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {featuredProject.build}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink">
              Technical decisions
            </p>
            <ul className="mt-4 flex flex-col">
              {featuredProject.decisions.map((decision) => (
                <li
                  key={decision.slice(0, 24)}
                  className="border-t border-line py-4 text-sm leading-relaxed text-ink-muted last:border-b"
                >
                  {decision}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-base leading-relaxed text-ink">{featuredProject.result}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-ink-muted">
            {featuredProject.stack.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < featuredProject.stack.length - 1 && (
                  <span className="ml-4 text-line">/</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="sm:col-span-5">
        <Reveal delay={0.1}>
          <div className="border border-line">
            <Image
              src="/dashboard-preview.png"
              alt="Furniture Business Management Platform dashboard — client and task names redacted for confidentiality"
              width={1910}
              height={854}
              priority
              className="h-auto w-full"
              sizes="(min-width: 640px) 40vw, 100vw"
            />
          </div>
          <p className="mt-4 font-mono text-xs italic text-ink-muted">{featuredProject.note}</p>
        </Reveal>
      </div>
    </div>
  );
}
