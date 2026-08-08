import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { FeaturedProject } from "@/components/sections/work/FeaturedProject";
import { OtherProjects } from "@/components/sections/work/OtherProjects";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32">
        <FeaturedProject />
        <OtherProjects />

        <div className="mt-16 border-t border-line pt-8">
          <UnderlineLink
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink"
          >
            More projects and code on GitHub →
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
