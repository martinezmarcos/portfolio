"use client";

import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200/80 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-xs text-zinc-500">
          © {year} {siteConfig.name} · {t.footer.rights}
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.16em]">
          <UnderlineLink href={siteConfig.social.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950">
            GitHub
          </UnderlineLink>
          <UnderlineLink href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950">
            LinkedIn
          </UnderlineLink>
          <UnderlineLink href="#top" className="text-zinc-500 hover:text-zinc-950">
            {t.footer.backToTop}
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
