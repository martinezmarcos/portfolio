export const siteConfig = {
  name: "Marcos Martinez Jaime",
  shortName: "Marcos Martinez",
  role: "Full Stack Developer",
  title: "Marcos Martinez Jaime — Full Stack Developer",
  description:
    "Full Stack Developer working with React, Next.js, Node.js and PostgreSQL/Supabase. Builder of a SaaS platform used daily by two furniture manufacturing businesses.",
  // Placeholder — replace with the real production domain before going live.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcosmartinez.dev",
  locale: "en_US",
  email: "martinezmarcostrabajo@gmail.com",
  social: {
    github: "https://github.com/martinezmarcos",
    linkedin: "https://www.linkedin.com/in/martinez-jaime-marcos/",
  },
  location: "Argentina",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
