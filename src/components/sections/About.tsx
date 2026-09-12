import { Reveal } from "@/components/ui/Reveal";

const paragraphs = [
  "I am a Full Stack & Systems Developer based in Argentina, specialized in building software that keeps working after deployment. Trained as a Computer Science Technician and currently completing formal studies as a System Analyst, most of what I understand about software comes from maintaining systems that businesses rely on for their daily survival.",
  "My primary production achievement is an internal operating system powering two custom furniture manufacturers (INTERD & CLAXON). It is not a demonstration repository — it orchestrates real cutting schedules, sheet cut optimization algorithms, material inventory, purchase orders, and workshop teams. Building software that a stranger must trust with their business requires a level of defensive architecture and rigor that generic tutorials never touch.",
  "My work spans high-level web platforms (React 19, Next.js 16, Node.js, PostgreSQL with Supabase RLS, Redis atomic locks) and low-level algorithmic foundations in C++20 (multithreaded LRU caches, probabilistic Bloom filters, automata theory). Whether designing a 2D cutting problem or preventing race conditions in high-concurrency booking engines, I value determinism, algorithmic clarity, and measurable performance.",
];

export function About() {
  return (
    <section id="about" className="border-b border-white/[0.08] scroll-mt-28">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">05</span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Engineering Perspective
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          {/* Left Title & Manifesto Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.06}>
              <h2 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.1]">
                Software engineering is about responsibility, not just tickets.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Core Guiding Principle
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-200">
                  &ldquo;A clean system is not one that has zero lines of code, but one where every
                  constraint, memory allocation, and concurrency lock can be defended under production
                  pressure.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Narrative Prose */}
          <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-6">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 30)} delay={index * 0.08}>
                <p className="text-[16.5px] sm:text-[18px] leading-[1.78] text-zinc-300 font-normal">
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
