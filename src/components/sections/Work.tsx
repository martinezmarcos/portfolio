import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { FeaturedProject } from "@/components/sections/work/FeaturedProject";
import { OtherProjects } from "@/components/sections/work/OtherProjects";

export function Work() {
  return (
    <section id="projects" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <FeaturedProject />
        <OtherProjects />

        <div className="mt-20 border-t border-white/[0.08] pt-8 text-center sm:text-left">
          <UnderlineLink
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-white"
          >
            View all open source repositories on GitHub →
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
