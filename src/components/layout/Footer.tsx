import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-xs">
          © {year} {siteConfig.name}
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.15em]">
          <UnderlineLink href={siteConfig.social.github} target="_blank" rel="noreferrer">
            GitHub
          </UnderlineLink>
          <UnderlineLink href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </UnderlineLink>
          <UnderlineLink href="#top">Back to top</UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
