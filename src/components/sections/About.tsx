import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const paragraphs = [
  "I'm a Full Stack & Systems Developer based in Argentina, specialized in building software that has to run reliably after shipping. I'm technically trained as a Computer Science Technician and currently completing formal studies as a System Analyst. Most of my engineering decisions come from maintaining code that real people and businesses depend on every day.",
  "My core production work is an internal SaaS platform powering operations for two furniture manufacturing companies (INTERD & CLAXON). It isn't an unverified demo in a repo — it coordinates daily cutting schedules, sheet cut optimizations, raw material inventory, purchase orders, and workshop teams. Building systems that a business trusts with their revenue demands a level of rigor and defensive architecture that generic tutorials never teach.",
  "Across the stack, my focus is divided between high-level web platforms (React, Next.js, Node.js, PostgreSQL/Supabase, Redis) and low-level algorithmic foundations in C++20 (multithreaded LRU caches, probabilistic Bloom filters, automata theory). Whether optimizing a 2D cutting problem or preventing race conditions in distributed reservations, I value clarity, determinism, and measurable performance.",
];

export function About() {
  return (
    <section id="about" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>Philosophy</Kicker>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Building systems that cannot afford to fail.
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
