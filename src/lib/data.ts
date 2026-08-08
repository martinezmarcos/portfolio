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
  note: "Private B2B software. Code walkthrough and screenshots available on request.",
};

export type RoadmapProject = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  status: string;
};

export const roadmapProjects: RoadmapProject[] = [
  {
    number: "01",
    title: "Public REST API with Auth & Rate Limiting",
    description:
      "A standalone, documented REST API treated as the product itself — JWT + refresh tokens, revocable API keys, request rate limiting, versioned endpoints and published Swagger/Redoc docs.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    status: "Roadmap — 2026",
  },
  {
    number: "02",
    title: "RAG Assistant Over Technical Docs",
    description:
      "A chat interface that answers questions over a real document set with cited sources — chunking, embeddings and vector search, evaluated with honest retrieval-quality metrics instead of a generic chatbot wrapper.",
    stack: ["Next.js", "Node.js", "pgvector", "OpenAI API"],
    status: "Roadmap — 2026",
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
    date: "[ADD YEAR]",
    title: "Técnico en Informática",
    description:
      "Completed technical degree covering programming fundamentals, databases and systems.",
  },
  {
    date: "[ADD YEAR] — Present",
    title: "Furniture Business Management Platform",
    description:
      "Designing, building and maintaining the production SaaS now used daily by two furniture manufacturing businesses.",
  },
  {
    date: "In progress",
    title: "Analista de Sistemas",
    description:
      "Continuing formal education in systems analysis alongside shipping production software.",
  },
];
