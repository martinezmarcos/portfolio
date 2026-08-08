export type FeaturedProject = {
  kicker: string;
  title: string;
  problem: string;
  build: string;
  decisions: string[];
  stack: string[];
  result: string;
  note: string;
};

export const featuredProject: FeaturedProject = {
  kicker: "Featured work — production SaaS, 2 companies, daily use",
  title: "Furniture Business Management Platform",
  problem:
    "Small and mid-sized furniture manufacturers were running production off spreadsheets and messaging apps — material costs, cut lists, inventory counts and client orders living in different places with no shared source of truth between the office and the shop floor.",
  build:
    "A multi-tenant web platform covering product and material catalogs, inventory tracking, client and order management, role-based user permissions, file storage for technical drawings, and business dashboards. Each company operates in its own isolated workspace inside the same codebase.",
  decisions:
    [
      "Supabase (Postgres + Auth + Storage) as the backend, to move fast without giving up a real relational schema or row-level security.",
      "Role-based permissions so office staff, production and admins each see only what their role needs — enforced at the database level, not just in the UI.",
      "Workspace isolation resolved from the URL, so each company's data and sessions stay fully separate on one deployment.",
    ],
  stack: [
    "React",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "Supabase Auth",
    "Supabase Storage",
    "Vercel",
  ],
  result:
    "In active daily use by two furniture manufacturing businesses — managing their real inventory, orders and teams.",
  note: "Private B2B software — client and task names redacted for confidentiality.",
};

export type OtherProject = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

// Keep at least 2 here so the Work section shows 3 projects total
// alongside the featured SaaS.
export const otherProjects: OtherProject[] = [
  {
    title: "Cancha Directa",
    description:
      "Booking platform for courts, rooms and desks that eliminates double-booking with an atomic lock (Redis SET NX PX) backed by a Postgres EXCLUDE constraint as a data-level backstop. Multi-tenant with owner/customer roles, a public calendar with a 3-minute hold and countdown, and a live simulator running 50 concurrent booking requests to prove only one ever wins the lock.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "Redis (Upstash)",
      "Vitest",
    ],
    link: "https://github.com/martinezmarcos/cancha-directa",
  },
  {
    title: "[ADD PROJECT NAME]",
    description: "[ADD PROJECT DESCRIPTION — what it does and what problem it solves]",
    stack: ["[ADD STACK]"],
    link: "",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "Supabase Auth", "Supabase Storage", "SQL"] },
  { label: "Tooling", items: ["Git", "GitHub", "Vercel"] },
];

export const alsoWorkedWith = ["C#", "ASP.NET", "Entity Framework", "Python"];

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2018 — 2024",
    title: "Computer Science Technician",
    description:
      "Completed technical degree covering programming fundamentals, databases and systems.",
  },
  {
    date: "January 2025 — Present",
    title: "Furniture Business Management Platform",
    description:
      "Designing, building and maintaining the production SaaS now used daily by two furniture manufacturing businesses.",
  },
  {
    date: "August 2025 — Present",
    title: "System Analyst",
    description:
      "Continuing formal education in systems analysis alongside shipping production software.",
  },
];
