export type FeaturedProject = {
  kicker: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  build: string;
  decisions: {
    title: string;
    description: string;
  }[];
  stack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  result: string;
  note: string;
};

export const featuredProject: FeaturedProject = {
  kicker: "Production SaaS · 2 Companies · Daily Factory Use",
  badge: "Active in Production",
  title: "Furniture Business Management Platform",
  subtitle: "Internal Operating System for INTERD & CLAXON — Workshop, Cutting & Financials",
  problem:
    "Two custom furniture manufacturing businesses sharing a single workshop were coordinating production off scattered spreadsheets and chat groups. Material cut lists, inventory balances, client quotes, and purchase orders lived in separate places without a single source of truth. This led to costly material offcut waste, lack of real-time job-costing visibility, and accidental data blending between companies.",
  build:
    "An end-to-end multi-tenant platform encompassing 14 integrated business modules: automated 2D sheet cut optimization, real-time inventory and supplier management, dynamic quotes and budget generation, granular role-based permissions, technical CAD drawing repository, production job scheduling, and cash flow tracking. Each company operates in an isolated workspace resolved from the URL.",
  decisions: [
    {
      title: "Algorithmic 2D Cut Optimization Engine",
      description:
        "Built a cut optimization algorithm that packs rectangular panel requirements onto standard melamine sheets (e.g. 1.83m × 2.60m) and calculates linear edging requirements. Minimizes raw material offcuts before cutting orders are released to the shop floor.",
    },
    {
      title: "PostgreSQL with Strict Row Level Security (RLS)",
      description:
        "PostgreSQL database on Supabase managed via Prisma ORM. Public client-side access is completely blocked with Postgres RLS policies, ensuring all mutations pass through authenticated backend serverless endpoints.",
    },
    {
      title: "Granular Role-Based Access Control (RBAC)",
      description:
        "Enforces strict boundaries between ADMIN, VENTAS, DISEÑADOR, and OPERARIO. Workshop tablets access only real-time cutting and assembly queues, while executive financials and supplier margins remain strictly protected.",
    },
    {
      title: "Real-time Workshop Floor Synchronization",
      description:
        "Utilizes Supabase Realtime Broadcast channels to update workshop job queues and inventory changes instantly across connected devices without continuous database polling.",
    },
  ],
  stack: [
    "React",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Supabase Realtime",
    "Tailwind CSS",
    "JWT Auth",
    "Vercel",
  ],
  metrics: [
    { label: "Active Companies", value: "2" },
    { label: "Core Modules", value: "14" },
    { label: "Shop Floor Users", value: "Daily" },
  ],
  result:
    "Running daily operations for two furniture manufacturing companies — coordinating cutting layouts, raw inventory, purchase orders, and team handoffs.",
  note: "Private enterprise system — client identities, operational metrics, and proprietary cutting jobs redacted for confidentiality.",
};

export type ProjectCategory =
  | "All"
  | "Production SaaS"
  | "Distributed & Systems"
  | "AI & RAG"
  | "Algorithms & C++";

export type OtherProject = {
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  stars?: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "Cancha Directa",
    category: "Distributed & Systems",
    tagline: "High-concurrency booking engine with distributed atomic locks",
    description:
      "Court and facility booking platform designed to eliminate double-booking under extreme concurrency. Implements an atomic lock pattern using Redis SET NX PX with an automatic 3-minute hold countdown, backed by a PostgreSQL EXCLUDE constraint as an unbreakable database-level backstop. Validated with a 50-thread concurrent request suite where exactly one wins the reservation.",
    highlights: [
      "Atomic Redis Lock (SET NX PX)",
      "PostgreSQL EXCLUDE Constraint",
      "50-Thread Vitest Concurrency Test",
      "3-Minute Ephemeral Hold",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redis (Upstash)",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "Vitest",
    ],
    link: "https://github.com/martinezmarcos/cancha-directa",
  },
  {
    title: "Claude Docs Navigator",
    category: "AI & RAG",
    tagline: "Deterministic RAG assistant with pgvector cosine retrieval",
    description:
      "RAG assistant answering technical questions strictly using Anthropic's public API documentation, requiring inline verified citations for every answer. Retrieval runs on pgvector cosine similarity search over 1,200+ chunked embeddings from 28 documentation pages (Voyage AI embeddings), quantitatively benchmarked against a 21-question eval set achieving 81% Recall@5.",
    highlights: [
      "pgvector Cosine Search",
      "Voyage AI Embeddings",
      "1,200+ Document Chunks",
      "81% Recall@5 Benchmark",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "pgvector",
      "Prisma",
      "PostgreSQL",
      "Claude API",
      "Voyage AI",
    ],
    link: "https://github.com/martinezmarcos/rag",
  },
  {
    title: "LRUCache.cpp",
    category: "Algorithms & C++",
    tagline: "Thread-safe Least Recently Used cache in C++20 with O(1) operations",
    description:
      "Generic, high-performance Least Recently Used (LRU) Cache implemented in modern C++20 with amortized O(1) time complexity for put, get, and eviction. Implements zero-allocation node repositioning using std::list::splice and hash map iterators. Synchronized for multithreaded access with std::mutex and std::lock_guard, verified against data races.",
    highlights: [
      "Amortized O(1) Put & Get",
      "std::list::splice Zero Reallocation",
      "Thread-Safe Mutex Locking",
      "Header-only Generic Template",
    ],
    stack: ["C++20", "Templates", "STL", "Multithreading", "CMake", "GoogleTest"],
    link: "https://github.com/martinezmarcos/LRUCache.cpp",
  },
  {
    title: "bloomFilterProject",
    category: "Algorithms & C++",
    tagline: "Space-efficient probabilistic set membership data structure in C++",
    description:
      "Probabilistic data structure in C++ for ultra-fast set membership queries with zero false negatives and mathematically bounded false positive probability. Automatically computes optimal bit array size (m) and k independent hash functions based on target capacity and desired error threshold (k = (m/n) ln 2), utilizing bitwise vector operators.",
    highlights: [
      "Zero False Negatives",
      "Optimal Bit Array Sizing",
      "O(k) Bitwise Query Execution",
      "Bounded False Positive Rate",
    ],
    stack: ["C++", "Bitwise Operations", "Hashing Algorithms", "CMake"],
    link: "https://github.com/martinezmarcos/bloomFilterProject",
  },
  {
    title: "TuringMachine.cpp",
    category: "Algorithms & C++",
    tagline: "Formal Turing Machine interpreter and program executor in C++",
    description:
      "Formal computation engine implemented in C++ capable of parsing and executing instructions defined in external .tm program files. Accurately simulates an infinite symbolic tape, bidirectional read/write head, multi-state transition tables, and halt state detection. Ships with verification test programs for binary incrementation and bit inversion.",
    highlights: [
      "Formal Automata Simulator",
      "Custom .tm Program Parser",
      "State Transition Execution",
      "Binary Increment & Invert Tests",
    ],
    stack: ["C++", "Automata Theory", "Parser", "Systems Programming"],
    link: "https://github.com/martinezmarcos/TuringMachine.cpp",
  },
];

export type SkillCategory = {
  category: string;
  skills: {
    name: string;
    description: string;
  }[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Systems & Low-Level",
    skills: [
      { name: "C++20", description: "Modern standards, templates, RAII, STL" },
      { name: "Multithreading", description: "Mutexes, lock guards, race condition prevention" },
      { name: "Data Structures", description: "LRU caches, Bloom filters, hash maps, linked lists" },
      { name: "Automata & Systems", description: "Turing machines, state machines, parsers" },
    ],
  },
  {
    category: "Frontend & Web",
    skills: [
      { name: "React 19 & Next.js 16", description: "App Router, React Server Components, SSR" },
      { name: "TypeScript 5", description: "Strict typing, generics, robust interfaces" },
      { name: "Tailwind CSS v4", description: "Inline theme tokens, modern postCSS engine" },
      { name: "Motion (v13)", description: "Fluid animations, prefers-reduced-motion a11y" },
    ],
  },
  {
    category: "Backend & Concurrency",
    skills: [
      { name: "Node.js", description: "RESTful architectures, serverless functions" },
      { name: "Distributed Locks", description: "Redis SET NX PX atomic locking pattern" },
      { name: "Auth & Security", description: "JWT, bcrypt, granular RBAC permissions" },
      { name: "Multi-tenant Isolation", description: "Workspace resolution, tenant data partitioning" },
    ],
  },
  {
    category: "Data & Artificial Intelligence",
    skills: [
      { name: "PostgreSQL", description: "Relational modeling, EXCLUDE constraints, indexing" },
      { name: "Prisma ORM", description: "Schema modeling, migrations, type-safe queries" },
      { name: "Supabase", description: "Row Level Security (RLS), Realtime broadcast, Storage" },
      { name: "pgvector & RAG", description: "Cosine similarity search, Voyage AI, Claude API" },
    ],
  },
  {
    category: "Tooling & Infrastructure",
    skills: [
      { name: "Vercel", description: "Edge networks, production deployments, static assets" },
      { name: "Git & GitHub", description: "Branching strategies, version control workflows" },
      { name: "Testing", description: "Vitest concurrent test suites, C++ test runners" },
      { name: "Build Tools", description: "Turbopack, Vite, CMake, ESLint 9" },
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "January 2025 — Present",
    title: "Furniture Business Management Platform",
    role: "Full Stack & Systems Developer",
    description:
      "Architected, built, and maintaining the production multi-tenant operating system used daily by two furniture manufacturing businesses (INTERD & CLAXON).",
    highlights: [
      "Built 2D algorithmic cut optimization engine saving raw sheet materials",
      "Implemented multi-tenant workspace isolation with PostgreSQL RLS",
      "Delivered 14 business modules deployed on Vercel with Supabase Realtime",
    ],
  },
  {
    period: "August 2025 — Present",
    title: "Systems Analyst Degree",
    role: "Higher Education",
    description:
      "Advancing formal academic training in systems analysis, distributed systems design, data architecture, and enterprise software engineering.",
    highlights: [
      "Advanced database architecture & transaction isolation",
      "Algorithms, operating systems & formal models",
    ],
  },
  {
    period: "July — December 2025",
    title: "Samsung Innovation Campus",
    role: "Artificial Intelligence Specialization",
    description:
      "Completed intensive 155-hour Artificial Intelligence program covering machine learning pipelines, vector representations, and deep neural models, finalized with an approved capstone project.",
    highlights: [
      "Hands-on NLP, vector embeddings, and evaluation benchmarks",
      "Over 90% attendance and approved end-to-end AI project",
    ],
  },
  {
    period: "2018 — 2024",
    title: "Computer Science Technician",
    role: "Technical Degree",
    description:
      "Six-year comprehensive technical degree covering fundamental programming, systems architecture, low-level algorithms, and relational databases.",
    highlights: [
      "Strong foundation in C/C++, algorithms, and memory structures",
      "Database design and network protocols",
    ],
  },
];
