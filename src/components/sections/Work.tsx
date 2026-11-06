"use client";

import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { OtherProjects } from "@/components/sections/work/OtherProjects";
import { useLanguage } from "@/lib/language-context";

export function Work() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200/80 bg-zinc-50/40">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-24">
        <OtherProjects />

        <div className="mt-10 text-center sm:text-left">
          <UnderlineLink
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-950"
          >
            {t.projectsSection.allRepos}
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
