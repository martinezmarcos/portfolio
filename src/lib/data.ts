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
    tag: string;
  }[];
  stack: string[];
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  result: string;
  note: string;
};

export const featuredProject: FeaturedProject = {
  kicker: "Flagship Production SaaS · Workshop & Factory Floor",
  badge: "Active in Production",
  title: "Furniture Operating System",
  subtitle: "Multi-tenant ERP & 2D Cutting Optimization Platform for INTERD & CLAXON",
  problem:
    "Two bespoke furniture manufacturing companies operating in the same workshop managed production through disconnected spreadsheets and messaging groups. Cutting lists, sheet inventory, client quotes, and purchase orders had no central source of truth. The result was severe raw material waste on melamine boards, zero real-time cost visibility, and constant operational friction between the office and the shop floor.",
  build:
    "An integrated 14-module enterprise web platform. Features an algorithmic 2D cut optimization engine that packs rectangular panel orders onto standard melamine sheets, real-time inventory and supplier management, dynamic quotes and budget generation, granular role-based permissions, technical CAD drawing repository, production job scheduling, and cash flow tracking. Each company operates in an isolated workspace resolved dynamically from the domain.",
  decisions: [
    {
      tag: "ALGORITHM",
      title: "Algorithmic 2D Cut Optimization Engine",
      description:
        "Engineered a cutting optimization algorithm that packs rectangular panel requirements onto standard melamine sheets (1.83m × 2.60m) and calculates linear PVC edging requirements. Minimizes raw material offcuts before cutting orders are released to the shop floor.",
    },
    {
      tag: "SECURITY",
      title: "PostgreSQL with Strict Row Level Security (RLS)",
      description:
        "Managed via Prisma ORM on Supabase. Public client-side access is completely blocked with Postgres RLS policies, ensuring all database reads and writes pass through authenticated serverless endpoints.",
    },
    {
      tag: "ACCESS CONTROL",
      title: "Granular Role-Based Access Control (RBAC)",
      description:
        "Enforces strict separation between ADMIN, VENTAS, DISEÑADOR, and OPERARIO. Workshop tablets access only real-time cutting and assembly queues, while executive financials and supplier margins remain strictly protected.",
    },
    {
      tag: "REALTIME",
      title: "Real-time Workshop Floor Synchronization",
      description:
        "Utilizes Supabase Realtime Broadcast channels to synchronize workshop job queues and inventory changes instantly across shop floor tablets without database polling.",
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
    { label: "Manufacturing Companies", value: "2", subtext: "INTERD & CLAXON" },
    { label: "Business Modules", value: "14", subtext: "Cutting to Financials" },
    { label: "Shop Floor Status", value: "Daily", subtext: "Live Workshop Use" },
  ],
  result:
    "Orchestrating daily production for two furniture manufacturers — cutting plans, raw inventory, purchase orders, and team workflows.",
  note: "Private enterprise system — client identities, operational metrics, and proprietary cutting jobs redacted for confidentiality.",
};

export type ProjectCategory =
  | "All"
  | "Production SaaS"
  | "Distributed Systems"
  | "AI & RAG"
  | "Low-Level & C++";

export type OtherProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  typeTag: string;
  complexity: string;
  tagline: string;
  description: string;
  highlights: string[];
  architectureBreakdown: {
    label: string;
    detail: string;
  }[];
  stack: string[];
  link: string;
};

export const otherProjects: OtherProject[] = [
  {
    id: "cancha-directa",
    title: "Cancha Directa",
    category: "Distributed Systems",
    typeTag: "CONCURRENCY ENGINE",
    complexity: "Atomic Locking",
    tagline: "High-concurrency booking engine eliminating double-booking via distributed atomic locks",
    description:
      "Facility booking platform designed to eliminate race conditions under extreme concurrent demand. Implements an atomic lock pattern using Redis SET NX PX with an automatic 3-minute hold countdown, backed by a PostgreSQL EXCLUDE constraint as an unbreakable database-level backstop. Validated with a 50-thread concurrent request suite where exactly one wins the reservation.",
    highlights: [
      "Atomic Redis Lock (SET NX PX)",
      "PostgreSQL EXCLUDE Constraint",
      "50-Thread Vitest Concurrency Test",
      "3-Minute Ephemeral Hold",
    ],
    architectureBreakdown: [
      { label: "Lock Primitive", detail: "Redis SET NX PX with millisecond TTL" },
      { label: "Safety Backstop", detail: "PostgreSQL GiST EXCLUDE constraint on temporal ranges" },
      { label: "Validation", detail: "Simultaneous 50-request simulator proving exactly 1 lock acquisition" },
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
    id: "claude-docs-navigator",
    title: "Claude Docs Navigator",
    category: "AI & RAG",
    typeTag: "RETRIEVAL PIPELINE",
    complexity: "81% Recall@5",
    tagline: "Deterministic RAG assistant with pgvector cosine similarity search",
    description:
      "RAG assistant answering technical questions strictly using Anthropic's public API documentation, requiring inline verified citations for every answer. Retrieval runs on pgvector cosine similarity search over 1,200+ chunked embeddings from 28 documentation pages (Voyage AI embeddings), quantitatively benchmarked against a 21-question eval set achieving 81% Recall@5.",
    highlights: [
      "pgvector Cosine Similarity",
      "Voyage AI Embeddings",
      "1,200+ Embedded Document Chunks",
      "81% Recall@5 Eval Benchmark",
    ],
    architectureBreakdown: [
      { label: "Vector Search", detail: "PostgreSQL pgvector cosine distance operator (<=>)" },
      { label: "Embedding Model", detail: "Voyage AI voyage-code-2 with contextual chunking" },
      { label: "Evaluation", detail: "Hand-verified 21-question eval set achieving 81% Recall@5" },
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
    id: "lru-cache",
    title: "LRU Cache",
    category: "Low-Level & C++",
    typeTag: "MEMORY ARCHITECTURE",
    complexity: "O(1) Amortized",
    tagline: "Thread-safe Least Recently Used cache in C++20 with zero-allocation node moves",
    description:
      "Generic, high-performance Least Recently Used (LRU) Cache implemented in modern C++20 with amortized O(1) time complexity for put, get, and eviction. Implements zero-allocation node repositioning using std::list::splice and hash map iterators. Synchronized for multithreaded access with std::mutex and std::lock_guard, verified against data races.",
    highlights: [
      "Amortized O(1) Operations",
      "std::list::splice Zero Reallocation",
      "Thread-Safe Mutex Locking",
      "Header-only Generic Template",
    ],
    architectureBreakdown: [
      { label: "Data Structure", detail: "std::list + std::unordered_map storing list iterators" },
      { label: "Reallocation Avoidance", detail: "std::list::splice for O(1) pointer adjustment without heap churn" },
      { label: "Concurrency", detail: "std::mutex with RAII std::lock_guard eliminating race conditions" },
    ],
    stack: ["C++20", "Templates", "STL", "Multithreading", "CMake", "GoogleTest"],
    link: "https://github.com/martinezmarcos/LRUCache.cpp",
  },
  {
    id: "bloom-filter",
    title: "Bloom Filter",
    category: "Low-Level & C++",
    typeTag: "PROBABILISTIC STRUCTURE",
    complexity: "O(k) Bitwise",
    tagline: "Space-efficient probabilistic set membership data structure in C++",
    description:
      "Probabilistic data structure in C++ for ultra-fast set membership queries with zero false negatives and mathematically bounded false positive probability. Automatically computes optimal bit array size (m) and k independent hash functions based on target capacity and desired error threshold (k = (m/n) ln 2), utilizing bitwise vector operators.",
    highlights: [
      "Zero False Negatives",
      "Optimal Bit Array Sizing",
      "O(k) Bitwise Query Execution",
      "Bounded False Positive Rate",
    ],
    architectureBreakdown: [
      { label: "Mathematical Bound", detail: "Optimal hash count k = (m/n) * ln(2) for target capacity" },
      { label: "Bit Representation", detail: "Dynamic bit-array utilizing native bitwise shifts and masks" },
      { label: "Guarantees", detail: "100% true-negative accuracy with mathematically bounded false positives" },
    ],
    stack: ["C++", "Bitwise Operations", "Hashing Algorithms", "CMake"],
    link: "https://github.com/martinezmarcos/bloomFilterProject",
  },
  {
    id: "turing-machine",
    title: "Turing Machine",
    category: "Low-Level & C++",
    typeTag: "COMPUTATION MODEL",
    complexity: "Formal Automata",
    tagline: "Formal Turing Machine interpreter and program executor in C++",
    description:
      "Formal computation engine implemented in C++ capable of parsing and executing instructions defined in external .tm program files. Accurately simulates an infinite symbolic tape, bidirectional read/write head, multi-state transition tables, and halt state detection. Ships with verification test programs for binary incrementation and bit inversion.",
    highlights: [
      "Formal Automata Simulator",
      "Custom .tm Program Parser",
      "State Transition Execution",
      "Binary Increment & Invert Tests",
    ],
    architectureBreakdown: [
      { label: "Execution Model", detail: "Infinite tape representation with dynamic cell expansion" },
      { label: "Parser", detail: "Custom file parser for .tm transition rules (current_state, read -> write, move, next_state)" },
      { label: "Verification", detail: "Unit tests simulating binary addition and bitwise negation" },
    ],
    stack: ["C++", "Automata Theory", "Parser", "Systems Programming"],
    link: "https://github.com/martinezmarcos/TuringMachine.cpp",
  },
];

export type TechnicalSkillSection = {
  number: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
};

export const technicalSkills: TechnicalSkillSection[] = [
  {
    number: "01",
    title: "Systems & Low-Level Foundations",
    subtitle: "Memory management, concurrent algorithms, and formal computing",
    items: [
      { name: "C++20", level: "Core", description: "Templates, RAII, STL, move semantics, pointer mechanics" },
      { name: "Concurrency", level: "Core", description: "std::mutex, std::lock_guard, thread synchronization, deadlocks prevention" },
      { name: "Data Structures", level: "Deep", description: "LRU caches, Bloom filters, hash maps, double-linked lists, binary trees" },
      { name: "Automata & Parsers", level: "Theory", description: "Turing machines, state machines, transition tables, lexers" },
    ],
  },
  {
    number: "02",
    title: "Distributed Backend & Architecture",
    subtitle: "High-concurrency systems, atomic locking, and multi-tenant security",
    items: [
      { name: "Node.js & TypeScript", level: "Production", description: "Asynchronous architectures, serverless functions, RESTful contracts" },
      { name: "Distributed Locks", level: "Specialized", description: "Redis SET NX PX atomic locking pattern, automatic TTL expiration" },
      { name: "Security & Auth", level: "Production", description: "JWT, bcrypt, granular RBAC (Admin, Sales, Designer, Operator)" },
      { name: "Multi-tenant Architecture", level: "Production", description: "Dynamic workspace resolution, strict tenant data partitioning" },
    ],
  },
  {
    number: "03",
    title: "Databases & Vector Retrieval",
    subtitle: "Relational integrity, versioned migrations, and cosine embeddings",
    items: [
      { name: "PostgreSQL", level: "Production", description: "Relational schema design, GiST EXCLUDE constraints, indexing strategies" },
      { name: "Prisma ORM", level: "Production", description: "Type-safe database queries, schema migrations, relation modeling" },
      { name: "Supabase & RLS", level: "Production", description: "Postgres Row Level Security, Realtime broadcast channels, S3 storage" },
      { name: "pgvector & RAG", level: "Specialized", description: "Cosine similarity search, Voyage AI embeddings, 1,200+ chunk pipelines" },
    ],
  },
  {
    number: "04",
    title: "Frontend & Web Engineering",
    subtitle: "Modern server components, accessible micro-interactions, and design systems",
    items: [
      { name: "Next.js 16 & React 19", level: "Production", description: "App Router, React Server Components (RSC), Turbopack compilation" },
      { name: "Tailwind CSS v4", level: "Expert", description: "Inline theme tokens, modern postCSS engine, zero config overhead" },
      { name: "Motion (v13)", level: "Production", description: "Smooth physics curves, SSR hydration safety via useSyncExternalStore" },
      { name: "Web Accessibility", level: "Standard", description: "WCAG contrast, prefers-reduced-motion, graceful non-JS degradation" },
    ],
  },
  {
    number: "05",
    title: "Tooling & Compiled Workflow",
    subtitle: "Developer experience, unit testing, and automated deployment",
    items: [
      { name: "Vercel & Edge", level: "Production", description: "Serverless edge networks, dynamic OG generation, static site generation" },
      { name: "Testing Suites", level: "Production", description: "Vitest concurrent stress-tests, GoogleTest, automated test runners" },
      { name: "Build & Systems Tools", level: "Daily", description: "Git, GitHub, CMake, Vite, ESLint 9, Turbopack" },
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  badge: string;
  description: string;
  bullets: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "January 2025 — Present",
    title: "Furniture Operating System",
    role: "Full Stack & Systems Developer",
    badge: "Production SaaS",
    description:
      "Architected, built, and maintaining the production operating system powering daily operations for two furniture manufacturers (INTERD & CLAXON).",
    bullets: [
      "Engineered 2D sheet cut optimization engine preventing raw material offcuts",
      "Implemented PostgreSQL Row Level Security (RLS) and multi-tenant isolation",
      "Shipped 14 integrated modules with real-time shop floor synchronization",
    ],
  },
  {
    period: "August 2025 — Present",
    title: "System Analyst Degree",
    role: "Higher Education",
    badge: "In Progress",
    description:
      "Advancing formal academic training in software architecture, distributed systems, relational calculus, and enterprise information systems.",
    bullets: [
      "Distributed transactions, concurrency control, and database normalization",
      "Formal automata, complexity analysis, and systems engineering",
    ],
  },
  {
    period: "July — December 2025",
    title: "Samsung Innovation Campus",
    role: "Artificial Intelligence Specialization",
    badge: "155 Hours",
    description:
      "Completed intensive technical AI program covering vector embeddings, neural architectures, NLP pipelines, and quantitative model evaluations.",
    bullets: [
      "Hands-on RAG implementation and semantic vector similarity benchmarking",
      "Over 90% attendance and approved end-to-end AI capstone project",
    ],
  },
  {
    period: "2018 — 2024",
    title: "Computer Science Technician",
    role: "Technical Degree",
    badge: "Graduated",
    description:
      "Six-year rigorous technical degree with deep foundations in computer architecture, C/C++ programming, algorithm design, and relational databases.",
    bullets: [
      "Extensive low-level programming in C/C++, pointer logic, and memory structures",
      "Networking protocols, operating systems internals, and relational modeling",
    ],
  },
];
