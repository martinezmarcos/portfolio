import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const paragraphs = [
  "I'm a full stack developer based in Argentina, working mainly with React, Next.js, Node.js and PostgreSQL/Supabase. I'm technically trained — Técnico en Informática — and currently studying Analista de Sistemas, but most of what I know comes from building and maintaining software that has to keep working after I ship it.",
  "My main project is a SaaS platform for furniture manufacturing businesses. It isn't a demo sitting in a personal repo — it's software two companies use every day to manage their products, materials, inventory, orders and teams. Building something a stranger has to trust with their business is a different discipline than building something for a portfolio.",
  "I've also worked with C#, ASP.NET and Python, but my focus going forward is the JavaScript/TypeScript ecosystem: React on the front end, Node.js and PostgreSQL on the back end, deployed on Vercel.",
];

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-4">
            <Reveal>
              <Kicker>About</Kicker>
              <h2 className="mt-4 max-w-xs text-2xl font-medium leading-tight sm:text-3xl">
                Building things that have to keep working.
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-7 sm:col-start-6">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-lg leading-relaxed text-ink-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
