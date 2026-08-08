import { timeline } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section id="background" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Kicker>Background</Kicker>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-12 sm:gap-8">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted sm:col-span-3">
                  {item.date}
                </span>
                <div className="sm:col-span-9">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
