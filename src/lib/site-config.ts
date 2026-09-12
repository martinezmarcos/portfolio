export const siteConfig = {
  name: "Marcos Martinez Jaime",
  shortName: "Marcos Martinez",
  role: "Full Stack & Systems Developer",
  headline: "I build reliable software for real-world production and distributed systems.",
  title: "Marcos Martinez Jaime — Full Stack & Systems Developer",
  description:
    "Full Stack & Systems Developer based in Argentina. Builder of a production multi-tenant SaaS for furniture manufacturing, distributed locks with Redis/PostgreSQL, RAG architectures with pgvector, and low-level data structures in C++.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcosmartinez.dev",
  locale: "en_US",
  email: "martinezmarcostrabajo@gmail.com",
  social: {
    github: "https://github.com/martinezmarcos",
    linkedin: "https://www.linkedin.com/in/martinez-jaime-marcos/",
  },
  location: "Argentina",
  availability: "Available for Full Stack & Systems Roles",
} as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
