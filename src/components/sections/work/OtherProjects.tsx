import { otherProjects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

export function OtherProjects() {
  return (
    <div className="mt-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          Other projects
        </p>
      </Reveal>

      <div className="mt-6 flex flex-col">
        {otherProjects.map((project, index) => (
          <Reveal key={project.title + index} delay={index * 0.08}>
            <div className="grid gap-4 border-t border-line py-8 last:border-b sm:grid-cols-12 sm:gap-8">
              <span className="font-mono text-sm text-line sm:col-span-1">
                {String(index + 2).padStart(2, "0")}
              </span>

              <div className="sm:col-span-11">
                <h4 className="text-xl font-medium leading-snug sm:text-2xl">{project.title}</h4>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-ink-muted">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <UnderlineLink
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.15em] text-ink"
                  >
                    View on GitHub →
                  </UnderlineLink>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
