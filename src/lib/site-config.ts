export const siteConfig = {
  name: "Marcos Martinez Jaime",
  shortName: "Marcos Martinez",
  role: "Full Stack & Systems Developer",
  headline: "I build reliable software for real-world production and distributed systems.",
  title: "Marcos Martinez Jaime — Full Stack & Systems Developer",
  description:
    "Full Stack & Systems Developer based in Argentina. Software developer at Interd, creator of Lorma (multi-tenant SaaS for manufacturing and production companies) and co-developer of HonyCars (CRM with an AI chatbot for car dealerships).",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.martinezjaime.dev",
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
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
