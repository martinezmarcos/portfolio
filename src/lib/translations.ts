export type Language = "en" | "es";

export type Decision = {
  tag: string;
  title: string;
  description: string;
};

export type Metric = {
  label: string;
  value: string;
  subtext: string;
};

export type ArchitectureBreakdownItem = {
  label: string;
  detail: string;
};

export type OtherProject = {
  id: string;
  title: string;
  category: "All" | "Distributed Systems" | "AI & RAG" | "Low-Level & C++";
  categoryLabel: string;
  typeTag: string;
  complexity: string;
  tagline: string;
  description: string;
  architectureBreakdown: ArchitectureBreakdownItem[];
  stack: string[];
  link: string;
};

export type SkillItem = {
  name: string;
  level: string;
  description: string;
};

export type SkillCategory = {
  number: string;
  title: string;
  subtitle: string;
  items: SkillItem[];
};

export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  badge: string;
  description: string;
  bullets: string[];
};

export type Translations = {
  nav: {
    work: string;
    projects: string;
    skills: string;
    timeline: string;
    about: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    terminal: string;
    location: string;
    headline: string;
    summary: string;
    metrics: {
      companiesValue: string;
      companiesLabel: string;
      lruValue: string;
      lruLabel: string;
      ragValue: string;
      ragLabel: string;
      systemsValue: string;
      systemsLabel: string;
    };
    ctaProjects: string;
    ctaContact: string;
  };
  featured: {
    sectionNum: string;
    sectionTag: string;
    status: string;
    title: string;
    subtitle: string;
    problemTitle: string;
    problemText: string;
    solutionTitle: string;
    solutionText: string;
    decisionsHeader: string;
    decisions: Decision[];
    metrics: Metric[];
    confidentiality: string;
  };
  projectsSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    systemMechanics: string;
    viewRepo: string;
    source: string;
    items: OtherProject[];
    allRepos: string;
  };
  skillsSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    categories: SkillCategory[];
  };
  timelineSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    items: TimelineItem[];
  };
  aboutSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    principleTitle: string;
    principleQuote: string;
    paragraphs: string[];
  };
  contactSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    location: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      work: "Work",
      projects: "Projects",
      skills: "Skills",
      timeline: "Timeline",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      terminal: "Full Stack & Systems",
      location: "Buenos Aires, AR",
      headline: "Building software that survives real production and concurrency.",
      summary:
        "I architect and maintain a multi-tenant operations SaaS powering daily industrial production across multiple companies. My engineering focus bridges distributed high-concurrency systems (atomic Redis locks, PostgreSQL RLS, pgvector RAG) with low-level C++20 data structures and memory mechanics.",
      metrics: {
        companiesValue: "3",
        companiesLabel: "Companies in Daily SaaS",
        lruValue: "O(1)",
        lruLabel: "Amortized LRU Cache",
        ragValue: "81%",
        ragLabel: "Recall@5 Vector RAG",
        systemsValue: "C++20",
        systemsLabel: "& Next.js Full Stack",
      },
      ctaProjects: "Inspect Projects",
      ctaContact: "Get in touch",
    },
    featured: {
      sectionNum: "01",
      sectionTag: "Flagship Production Platform",
      status: "Multi-Tenant Enterprise SaaS — Active Daily Use",
      title: "Enterprise Operations Platform",
      subtitle:
        "Multi-tenant ERP & 2D Cutting Optimization Platform utilized daily by multiple manufacturing companies",
      problemTitle: "The Industrial Bottleneck",
      problemText:
        "Multiple manufacturing and production operations historically coordinated workflows through disconnected spreadsheets, paper job sheets, and manual messaging. Material stock, cutting schedules, client quotes, and purchase orders lacked a unified source of truth, creating material waste on panel boards, delayed shop floor handoffs, and zero real-time cost visibility.",
      solutionTitle: "Engineered Solution",
      solutionText:
        "An integrated 14-module enterprise web platform. Features an algorithmic 2D cut optimization engine that packs rectangular panel orders onto standard sheets, real-time inventory and supplier management, dynamic quotes and budget generation, granular role-based permissions, technical CAD drawing repository, production job scheduling, and cash flow tracking across multiple isolated company workspaces.",
      decisionsHeader: "Core Architectural Decisions",
      decisions: [
        {
          tag: "ALGORITHM",
          title: "Algorithmic 2D Cut Optimization Engine",
          description:
            "Engineered a cutting optimization algorithm that packs rectangular panel requirements onto standard sheets and calculates linear PVC edging requirements, minimizing raw material offcuts before releasing jobs to the floor.",
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
            "Enforces strict separation between ADMIN, SALES, DESIGNER, and OPERATOR. Workshop tablets access only real-time cutting and assembly queues, while executive financials and supplier margins remain strictly protected.",
        },
        {
          tag: "REALTIME",
          title: "Real-time Workshop Floor Synchronization",
          description:
            "Utilizes Supabase Realtime Broadcast channels to synchronize workshop job queues and inventory changes instantly across shop floor tablets without database polling.",
        },
      ],
      metrics: [
        { label: "Production Scope", value: "Daily", subtext: "Used by Multiple Companies" },
        { label: "Business Modules", value: "14", subtext: "Cutting to Financials" },
        { label: "Shop Floor Sync", value: "Live", subtext: "Real-time Tablet Queues" },
      ],
      confidentiality:
        "Private enterprise system — client identities, operational metrics, and proprietary cutting jobs redacted for confidentiality.",
    },
    projectsSection: {
      sectionNum: "02",
      sectionTag: "Core Systems & Algorithmic Work",
      title: "Systems, Concurrency & Low-Level Engineering",
      subtitle:
        "Deterministic architectures, multithreaded C++ data structures, and production-tested distributed locking mechanisms.",
      categories: [
        { id: "All", label: "All" },
        { id: "Distributed Systems", label: "Distributed Systems" },
        { id: "AI & RAG", label: "AI & RAG" },
        { id: "Low-Level & C++", label: "Low-Level & C++" },
      ],
      systemMechanics: "System Mechanics",
      viewRepo: "View Repository on GitHub",
      source: "Source",
      allRepos: "View all open source repositories on GitHub →",
      items: [
        {
          id: "lru-cache",
          title: "LRU Cache",
          category: "Low-Level & C++",
          categoryLabel: "Low-Level & C++",
          typeTag: "Concurrent C++20",
          complexity: "O(1) Amortized",
          tagline: "Multithreaded C++20 Least-Recently-Used cache with O(1) operations",
          description:
            "Thread-safe Least Recently Used (LRU) memory cache implemented in modern C++20. Combines a doubly-linked list for constant-time eviction ordering with an unordered hash map for instantaneous key lookup, guarded by fine-grained reader-writer locks.",
          architectureBreakdown: [
            { label: "Time Complexity", detail: "O(1) get & put operations" },
            { label: "Synchronization", detail: "std::shared_mutex for concurrent reads" },
            { label: "Memory Topology", detail: "std::list + std::unordered_map" },
            { label: "Standard", detail: "Compiled with -std=c++20 and strict sanitizers" },
          ],
          stack: ["C++20", "STL", "Concurrency", "CMake", "GoogleTest"],
          link: "https://github.com/martinezmarcos/LRUCache",
        },
        {
          id: "bloom-filter",
          title: "Bloom Filter",
          category: "Low-Level & C++",
          categoryLabel: "Low-Level & C++",
          typeTag: "Probabilistic Data Structure",
          complexity: "O(k) Hash Bounds",
          tagline: "Space-efficient probabilistic filter with zero false negatives",
          description:
            "High-throughput probabilistic membership testing structure in C++. Uses MurmurHash3 and double-hashing techniques to achieve optimal false-positive probability tuning under strict byte-budget memory constraints.",
          architectureBreakdown: [
            { label: "Hash Strategy", detail: "Kirsch-Mitzenmacher double hashing" },
            { label: "Bit Array", detail: "std::vector<bool> memory bitset representation" },
            { label: "False Negatives", detail: "Guaranteed 0% by mathematical proof" },
            { label: "Verification", detail: "Empirical collision distribution testing" },
          ],
          stack: ["C++20", "MurmurHash3", "Algorithms", "CMake", "Catch2"],
          link: "https://github.com/martinezmarcos/bloomFilterProject",
        },
        {
          id: "turing-machine",
          title: "Turing Machine",
          category: "Low-Level & C++",
          categoryLabel: "Low-Level & C++",
          typeTag: "Automata & Computation",
          complexity: "Deterministic TM",
          tagline: "Deterministic theoretical automata simulator in modern C++",
          description:
            "Complete simulator of a deterministic single-tape Turing Machine. Reads declarative transition graphs, manages dynamic bi-infinite tape memory, and executes step-by-step state transitions with trace telemetry.",
          architectureBreakdown: [
            { label: "Tape Model", detail: "Dynamic bi-directional tape with auto-expansion" },
            { label: "Transition Engine", detail: "Lookup matrix with O(1) transition dispatch" },
            { label: "Debugging", detail: "Execution state snapshot & step trace logger" },
            { label: "Standard", detail: "Modern C++20 standard compliance" },
          ],
          stack: ["C++20", "Automata Theory", "Computation", "CMake"],
          link: "https://github.com/martinezmarcos/turingMachine",
        },
        {
          id: "cancha-directa",
          title: "Cancha Directa",
          category: "Distributed Systems",
          categoryLabel: "Distributed Systems",
          typeTag: "Full Stack & Concurrency",
          complexity: "Sub-50ms Locking",
          tagline: "High-concurrency sports booking platform with atomic Redis reservation locks",
          description:
            "Production booking engine engineered to prevent slot double-booking during peak traffic spikes. Features atomic Redis reservation locks with automatic TTL expiration, PostgreSQL transaction isolation, and live calendar synchronization.",
          architectureBreakdown: [
            { label: "Concurrency", detail: "Redis distributed locks with deterministic TTL" },
            { label: "Database", detail: "PostgreSQL with row-level transaction safety" },
            { label: "Frontend", detail: "Next.js App Router with optimistic UI updates" },
            { label: "Edge Gateway", detail: "Upstash Redis with regional sub-15ms latency" },
          ],
          stack: ["Next.js", "TypeScript", "Redis", "PostgreSQL", "Tailwind CSS", "Prisma"],
          link: "https://github.com/martinezmarcos/cancha-directa",
        },
        {
          id: "claude-docs",
          title: "Claude Docs Navigator",
          category: "AI & RAG",
          categoryLabel: "AI & RAG",
          typeTag: "Vector Search & Retrieval",
          complexity: "Recall@5: 81%",
          tagline: "Semantic RAG search engine over Anthropic official docs with pgvector embeddings",
          description:
            "Dense retrieval system that ingests Anthropic's official technical documentation, splits content into semantic markdown chunks, generates vector embeddings, and performs cosine similarity queries with hybrid BM25 re-ranking.",
          architectureBreakdown: [
            { label: "Vector Engine", detail: "pgvector with HNSW indexing for sub-20ms queries" },
            { label: "Embeddings", detail: "text-embedding-3-small (1536-dimensional space)" },
            { label: "Chunking", detail: "Hierarchical markdown AST structure-aware splitting" },
            { label: "Accuracy", detail: "81% Recall@5 evaluated across 120 synthetic queries" },
          ],
          stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "OpenAI API", "Tailwind CSS"],
          link: "https://github.com/martinezmarcos/rag",
        },
      ],
    },
    skillsSection: {
      sectionNum: "03",
      sectionTag: "Technical Competencies",
      title: "Engineered Capabilities",
      categories: [
        {
          number: "01",
          title: "Backend Architecture & Distributed Systems",
          subtitle: "Resilient microservices, atomic distributed locks, and production concurrency",
          items: [
            { name: "Node.js & TypeScript", level: "Production", description: "Strict typing, async I/O runtimes, defensive API contract modeling" },
            { name: "Redis & Concurrency", level: "Production", description: "Atomic SETNX distributed locks, TTL expiration, sub-50ms cache layers" },
            { name: "REST & RPC APIs", level: "Production", description: "Idempotent endpoints, structured telemetry, rate-limiting & auth barriers" },
            { name: "System Architecture", level: "Senior Technician", description: "Multi-tenant workspace resolution, RBAC access policies, state machines" },
          ],
        },
        {
          number: "02",
          title: "Low-Level, Concurrency & Data Structures",
          subtitle: "High-performance algorithms, memory safety, and multithreading in C++20",
          items: [
            { name: "Modern C++ (C++20)", level: "Systems Level", description: "Move semantics, smart pointers, RAII, concepts, compile-time templates" },
            { name: "Multithreading & Concurrency", level: "Advanced", description: "std::shared_mutex, atomic operations, race-condition mitigation" },
            { name: "Custom Data Structures", level: "Advanced", description: "Deterministic LRU caches, probabilistic Bloom filters, automata simulation" },
            { name: "Algorithmic Optimization", level: "Production Tested", description: "2D cutting stock heuristics, computational geometry, asymptotic bounding" },
          ],
        },
        {
          number: "03",
          title: "AI Workflows, Automation & Tooling",
          subtitle: "Agentic terminal pipelines, custom Python bots, local LLMs, and compiled toolchains",
          items: [
            { name: "AI Automation & Agentic CLI", level: "Production", description: "Automated developer workflows, codebase auditing, and prompt pipelines using Claude CLI, OpenAI Codex, and local LLM orchestration via Ollama" },
            { name: "Python Bots & Automation", level: "Production", description: "Event-driven bots, asynchronous scrapers, automated alerting, and multi-service data extraction pipelines in Python" },
            { name: "Vercel & Edge Infrastructure", level: "Production", description: "Serverless edge networks, dynamic OG generation, zero-downtime CI/CD deployment" },
            { name: "Compiled Systems Tooling", level: "Daily", description: "Git, GitHub Actions, CMake, Vitest concurrent suites, GoogleTest, ESLint 9, Turbopack" },
          ],
        },
        {
          number: "04",
          title: "Database Engineering, Storage & Vector",
          subtitle: "ACID compliance, relational schema design, and vector embedding similarity",
          items: [
            { name: "PostgreSQL & Prisma", level: "Production", description: "Complex migrations, relational constraints, foreign keys, index optimization" },
            { name: "Supabase & Postgres RLS", level: "Production", description: "Fine-grained row security policies, Realtime websockets, JWT auth tokens" },
            { name: "pgvector & RAG", level: "Production", description: "HNSW index vector searches, cosine distance similarity, high-recall retrieval" },
            { name: "Database Hardening", level: "Defensive", description: "Zero-leak multi-tenant schema isolation, connection pooling, prepared statements" },
          ],
        },
        {
          number: "05",
          title: "Frontend & Web Engineering",
          subtitle: "Modern server components, accessible micro-interactions, and design systems",
          items: [
            { name: "Next.js 16 & React 19", level: "Production", description: "App Router, React Server Components (RSC), Turbopack compilation" },
            { name: "Tailwind CSS v4", level: "Expert", description: "Inline theme tokens, modern postCSS engine, zero config overhead" },
            { name: "Motion (v13)", level: "Production", description: "Smooth physics curves, SSR hydration safety, fluid user interaction" },
            { name: "Web Accessibility", level: "Standard", description: "WCAG contrast, prefers-reduced-motion, graceful non-JS degradation" },
          ],
        },
      ],
    },
    timelineSection: {
      sectionNum: "04",
      sectionTag: "Career Progression",
      title: "Engineering Track Record",
      items: [
        {
          period: "January 2025 — Present",
          title: "Enterprise Operations Platform",
          role: "Full Stack & Systems Developer",
          badge: "Production SaaS",
          description:
            "Architected, built, and maintaining the production operations platform utilized daily by multiple manufacturing enterprises.",
          bullets: [
            "Engineered 2D sheet cut optimization engine preventing raw material waste across production runs",
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
            "Advanced formal computer science curriculum focusing on software engineering methodologies, relational algebra, distributed systems theory, and database engines.",
          bullets: [
            "Advanced relational calculus and database normalization",
            "Software architecture patterns and formal analysis",
            "Concurrent computing and systems engineering paradigms",
          ],
        },
        {
          period: "November 2025",
          title: "Samsung Innovation Campus — Artificial Intelligence",
          role: "Artificial Intelligence Certification",
          badge: "Certified",
          description:
            "Comprehensive intensive program covering machine learning foundations, deep learning architectures, and natural language processing. As the capstone project, engineered an automated Python bot; explored LLM fundamentals, performed rigorous model & prompt testing, and executed the live implementation.",
          bullets: [
            "Capstone Project: Developed and deployed an automated Python bot",
            "Tested and benchmarked LLM architectures, context limits, and prompt mechanics",
            "Built data processing pipelines for machine learning evaluation",
          ],
        },
        {
          period: "2018 — 2024",
          title: "Computer Science Technician",
          role: "Technical Degree (7-Year Program)",
          badge: "Technical Degree",
          description:
            "Comprehensive 7-year technical education with over 6,400 curriculum hours. Built strong fundamentals in C/C++, networking protocols, relational database design, algorithmic analysis, and computer architecture.",
          bullets: [
            "Completed 7 rigorous years of computer science and systems training",
            "Low-level programming in C and modern C++ with strict hardware interfaces",
            "Database design, TCP/IP networking stack, and operating systems principles",
          ],
        },
      ],
    },
    aboutSection: {
      sectionNum: "05",
      sectionTag: "Engineering Perspective",
      title: "Software engineering is about responsibility, not just tickets.",
      principleTitle: "Core Guiding Principle",
      principleQuote:
        "“A clean system is not one that has zero lines of code, but one where every constraint, memory allocation, and concurrency lock can be defended under production pressure.”",
      paragraphs: [
        "I am a Full Stack & Systems Developer based in Argentina, specialized in building software that keeps working after deployment. Trained as a Computer Science Technician through a rigorous 7-year program and currently completing formal studies as a System Analyst, most of what I understand about software comes from maintaining systems that businesses rely on for their daily survival.",
        "My primary production achievement is an enterprise operations platform utilized across multiple production facilities. It is not a demonstration repository — it orchestrates cutting schedules, 2D packing algorithms, raw inventory, purchase orders, and workshop teams. Building software that business owners trust with their daily survival requires defensive architecture and operational rigor.",
        "My work spans high-level web platforms (React 19, Next.js 16, Node.js, PostgreSQL with Supabase RLS, Redis atomic locks) and low-level algorithmic foundations in C++20 (multithreaded LRU caches, probabilistic Bloom filters, automata theory). Whether designing a 2D packing heuristic or preventing race conditions in high-concurrency booking engines, I value determinism, algorithmic clarity, and measurable performance.",
      ],
    },
    contactSection: {
      sectionNum: "06",
      sectionTag: "Initiate Contact",
      title: "Let's build something substantial.",
      subtitle:
        "Open to Full Stack and Systems engineering roles where I can take ownership of critical backend architectures, distributed resilience, and real product decisions.",
      copyEmail: "Copy Email",
      copied: "Copied!",
      location: "Argentina (UTC-3)",
    },
    footer: {
      rights: "Engineered with Next.js 16 & Tailwind CSS v4",
      backToTop: "Back to top ↑",
    },
  },
  es: {
    nav: {
      work: "Destacado",
      projects: "Proyectos",
      skills: "Habilidades",
      timeline: "Trayectoria",
      about: "Sobre mí",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar",
    },
    hero: {
      terminal: "Full Stack & Sistemas",
      location: "Buenos Aires, AR",
      headline: "Construyendo software que sobrevive a producción real y concurrencia.",
      summary:
        "Diseño y mantengo una plataforma SaaS multi-tenant en producción activa utilizada diariamente por varias empresas. Mi enfoque de ingeniería une sistemas distribuidos de alta concurrencia (bloqueos atómicos en Redis, PostgreSQL RLS, pgvector RAG) con estructuras de datos y gestión de memoria en C++20.",
      metrics: {
        companiesValue: "3",
        companiesLabel: "Empresas en Producción Diaria",
        lruValue: "O(1)",
        lruLabel: "Caché LRU Amortizado",
        ragValue: "81%",
        ragLabel: "Recall@5 Vector RAG",
        systemsValue: "C++20",
        systemsLabel: "& Next.js Full Stack",
      },
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contactar",
    },
    featured: {
      sectionNum: "01",
      sectionTag: "Plataforma Insignia en Producción",
      status: "SaaS Empresarial Multi-Tenant — En Uso Diario",
      title: "Plataforma de Operaciones Industriales",
      subtitle:
        "ERP multi-tenant y motor de optimización de corte 2D utilizado diariamente por varias empresas",
      problemTitle: "El Cuello de Botella Industrial",
      problemText:
        "Múltiples empresas de manufactura y producción coordinaban históricamente su trabajo mediante planillas desconectadas, órdenes en papel y mensajería manual. El stock de materiales, las órdenes de corte, los presupuestos y las compras carecían de una fuente centralizada, generando desperdicio de materia prima, fricción operativa y nula visibilidad de costos en tiempo real.",
      solutionTitle: "Solución de Ingeniería",
      solutionText:
        "Plataforma web empresarial integrada con 14 módulos. Incluye un motor algorítmico de optimización de corte 2D para empaquetar órdenes de paneles sobre placas estándar, gestión de inventario y proveedores en tiempo real, cotizaciones dinámicas, control de accesos por roles, planificación de planta y sincronización instantánea. Utilizada en producción diaria continua por varias empresas.",
      decisionsHeader: "Decisiones Arquitectónicas Clave",
      decisions: [
        {
          tag: "ALGORITMO",
          title: "Motor Algorítmico de Optimización de Corte 2D",
          description:
            "Algoritmo de empaquetamiento que distribuye piezas rectangulares sobre placas estándar y calcula metros lineales de tapacantos, minimizando el desperdicio de material antes de enviar órdenes a taller.",
        },
        {
          tag: "SEGURIDAD",
          title: "PostgreSQL con Row Level Security (RLS) Estricto",
          description:
            "Gestionado vía Prisma ORM en Supabase. El acceso público directo está bloqueado mediante políticas RLS, garantizando que cada lectura y escritura pase por endpoints autenticados.",
        },
        {
          tag: "CONTROL DE ACCESO",
          title: "Control de Acceso Granular por Roles (RBAC)",
          description:
            "Separación estricta entre ADMIN, VENTAS, DISEÑADOR y OPERARIO. Las tablets de taller acceden únicamente a colas de corte y ensamblado, protegiendo márgenes y balances contables.",
        },
        {
          tag: "TIEMPO REAL",
          title: "Sincronización en Tiempo Real para Planta",
          description:
            "Canales broadcast de Supabase Realtime para sincronizar colas de trabajo y movimientos de stock al instante en dispositivos de planta sin realizar polling a la base de datos.",
        },
      ],
      metrics: [
        { label: "Alcance en Producción", value: "Diario", subtext: "Uso Activo por Varias Empresas" },
        { label: "Módulos de Negocio", value: "14", subtext: "De Corte a Finanzas" },
        { label: "Sincronización de Planta", value: "En Vivo", subtext: "Colas en Tablets en Tiempo Real" },
      ],
      confidentiality:
        "Sistema empresarial privado — identidades de clientes y métricas operativas protegidas por confidencialidad.",
    },
    projectsSection: {
      sectionNum: "02",
      sectionTag: "Sistemas Centrales e Ingeniería Algorítmica",
      title: "Sistemas, Concurrencia e Ingeniería de Bajo Nivel",
      subtitle:
        "Arquitecturas deterministas, estructuras de datos multithread en C++ y mecanismos de concurrencia probados en producción.",
      categories: [
        { id: "All", label: "Todos" },
        { id: "Distributed Systems", label: "Sistemas Distribuidos" },
        { id: "AI & RAG", label: "IA & RAG" },
        { id: "Low-Level & C++", label: "Bajo Nivel & C++" },
      ],
      systemMechanics: "Mecánica del Sistema",
      viewRepo: "Ver Repositorio en GitHub",
      source: "Código",
      allRepos: "Ver todos los repositorios open source en GitHub →",
      items: [
        {
          id: "lru-cache",
          title: "LRU Cache",
          category: "Low-Level & C++",
          categoryLabel: "Bajo Nivel & C++",
          typeTag: "Concurrente C++20",
          complexity: "O(1) Amortizado",
          tagline: "Caché LRU multithread en C++20 con operaciones O(1)",
          description:
            "Caché en memoria thread-safe implementado en C++20 moderno. Combina una lista doblemente enlazada para el orden de desalojo en tiempo constante con una tabla hash para búsquedas instantáneas, protegido por bloqueos de lectura/escritura de granularidad fina.",
          architectureBreakdown: [
            { label: "Complejidad Temporal", detail: "O(1) en operaciones get y put" },
            { label: "Sincronización", detail: "std::shared_mutex para lecturas concurrentes" },
            { label: "Topología de Memoria", detail: "std::list + std::unordered_map" },
            { label: "Estándar", detail: "Compilado con -std=c++20 y sanitizers estrictos" },
          ],
          stack: ["C++20", "STL", "Concurrencia", "CMake", "GoogleTest"],
          link: "https://github.com/martinezmarcos/LRUCache",
        },
        {
          id: "bloom-filter",
          title: "Bloom Filter",
          category: "Low-Level & C++",
          categoryLabel: "Bajo Nivel & C++",
          typeTag: "Estructura Probabilística",
          complexity: "Límites Hash O(k)",
          tagline: "Estructura probabilística de memoria eficiente sin falsos negativos",
          description:
            "Estructura probabilística de comprobación de pertenencia de alto rendimiento en C++. Utiliza MurmurHash3 y técnicas de doble hashing para optimizar la probabilidad de falsos positivos bajo límites estrictos de memoria.",
          architectureBreakdown: [
            { label: "Estrategia Hash", detail: "Doble hashing Kirsch-Mitzenmacher" },
            { label: "Vector de Bits", detail: "std::vector<bool> para representación compacta" },
            { label: "Falsos Negativos", detail: "0% garantizado por demostración matemática" },
            { label: "Verificación", detail: "Pruebas empíricas de distribución de colisiones" },
          ],
          stack: ["C++20", "MurmurHash3", "Algoritmos", "CMake", "Catch2"],
          link: "https://github.com/martinezmarcos/bloomFilterProject",
        },
        {
          id: "turing-machine",
          title: "Turing Machine",
          category: "Low-Level & C++",
          categoryLabel: "Bajo Nivel & C++",
          typeTag: "Autómatas & Computación",
          complexity: "MT Determinista",
          tagline: "Simulador determinista de autómatas teóricos en C++ moderno",
          description:
            "Simulador completo de una Máquina de Turing determinista de cinta única. Lee grafos de transición declarativos, gestiona una cinta bi-infinita dinámica y ejecuta transiciones paso a paso con telemetría de traza.",
          architectureBreakdown: [
            { label: "Modelo de Cinta", detail: "Cinta bidireccional dinámica con autoexpansión" },
            { label: "Motor de Transición", detail: "Matriz de búsqueda con despacho en O(1)" },
            { label: "Depuración", detail: "Snapshots de estado y registro de traza paso a paso" },
            { label: "Estándar", detail: "Cumplimiento estricto del estándar C++20" },
          ],
          stack: ["C++20", "Teoría de Autómatas", "Computación", "CMake"],
          link: "https://github.com/martinezmarcos/turingMachine",
        },
        {
          id: "cancha-directa",
          title: "Cancha Directa",
          category: "Distributed Systems",
          categoryLabel: "Sistemas Distribuidos",
          typeTag: "Full Stack & Concurrencia",
          complexity: "Bloqueos Sub-50ms",
          tagline: "Plataforma deportiva de alta concurrencia con bloqueos atómicos en Redis",
          description:
            "Motor de reservas en producción diseñado para prevenir la doble asignación de turnos durante picos de tráfico. Implementa bloqueos atómicos en Redis con expiración TTL, transacciones aisladas en PostgreSQL y sincronización en vivo.",
          architectureBreakdown: [
            { label: "Concurrencia", detail: "Bloqueos distribuidos en Redis con TTL determinista" },
            { label: "Base de Datos", detail: "PostgreSQL con aislamiento a nivel de fila" },
            { label: "Frontend", detail: "Next.js App Router con actualizaciones optimistas" },
            { label: "Edge Gateway", detail: "Upstash Redis con latencia regional sub-15ms" },
          ],
          stack: ["Next.js", "TypeScript", "Redis", "PostgreSQL", "Tailwind CSS", "Prisma"],
          link: "https://github.com/martinezmarcos/cancha-directa",
        },
        {
          id: "claude-docs",
          title: "Claude Docs Navigator",
          category: "AI & RAG",
          categoryLabel: "IA & RAG",
          typeTag: "Búsqueda Vectorial & Retrieval",
          complexity: "Recall@5: 81%",
          tagline: "Buscador semántico RAG sobre la documentación de Anthropic con pgvector",
          description:
            "Sistema de recuperación densa que procesa la documentación oficial de Anthropic, divide el contenido en chunks semánticos de markdown, genera embeddings vectoriales y ejecuta consultas de similitud coseno con re-ranking híbrido.",
          architectureBreakdown: [
            { label: "Motor Vectorial", detail: "pgvector con índices HNSW para consultas sub-20ms" },
            { label: "Embeddings", detail: "text-embedding-3-small (espacio de 1536 dimensiones)" },
            { label: "Chunking", detail: "Segmentación consciente de la estructura AST de markdown" },
            { label: "Precisión", detail: "81% Recall@5 evaluado sobre 120 consultas sintéticas" },
          ],
          stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "OpenAI API", "Tailwind CSS"],
          link: "https://github.com/martinezmarcos/rag",
        },
      ],
    },
    skillsSection: {
      sectionNum: "03",
      sectionTag: "Competencias Técnicas",
      title: "Capacidades de Ingeniería",
      categories: [
        {
          number: "01",
          title: "Arquitectura Backend & Sistemas Distribuidos",
          subtitle: "Microservicios resilientes, bloqueos atómicos distribuidos y concurrencia en producción",
          items: [
            { name: "Node.js & TypeScript", level: "Producción", description: "Tipado estricto, runtimes asíncronos y modelado defensivo de contratos de API" },
            { name: "Redis & Concurrencia", level: "Producción", description: "Bloqueos atómicos SETNX distribuidos, expiración TTL y capas de caché sub-50ms" },
            { name: "APIs REST & RPC", level: "Producción", description: "Endpoints idempotentes, telemetría estructurada, rate-limiting y autenticación" },
            { name: "Arquitectura de Sistemas", level: "Técnico Superior", description: "Resolución de tenants multi-dominio, políticas RBAC y máquinas de estado" },
          ],
        },
        {
          number: "02",
          title: "Bajo Nivel, Concurrencia & Estructuras de Datos",
          subtitle: "Algoritmos de alto rendimiento, gestión de memoria y concurrencia en C++20",
          items: [
            { name: "C++ Moderno (C++20)", level: "Nivel Sistemas", description: "Semántica de movimiento, punteros inteligentes, RAII, conceptos y templates" },
            { name: "Multithreading & Concurrencia", level: "Avanzado", description: "std::shared_mutex, operaciones atómicas y mitigación de race conditions" },
            { name: "Estructuras de Datos a Medida", level: "Avanzado", description: "Cachés LRU deterministas, Bloom filters probabilísticos y autómatas" },
            { name: "Optimización Algorítmica", level: "Probado en Producción", description: "Heurísticas de corte 2D, geometría computacional y análisis asintótico" },
          ],
        },
        {
          number: "03",
          title: "Flujos de IA, Automatización & Tooling",
          subtitle: "Pipelines terminales agénticos, bots en Python, LLMs locales y toolchains compiladas",
          items: [
            { name: "Automatización con IA & CLI Agéntico", level: "Producción", description: "Flujos de desarrollo automatizados, auditorías de código y pipelines usando Claude CLI, OpenAI Codex y orquestación local vía Ollama" },
            { name: "Bots en Python & Automatización", level: "Producción", description: "Bots orientados a eventos, scrapers asíncronos, alertas automáticas y motores de extracción de datos en Python" },
            { name: "Vercel & Infraestructura Edge", level: "Producción", description: "Redes edge serverless, generación dinámica de OpenGraph y despliegues CI/CD" },
            { name: "Tooling de Sistemas Compilados", level: "Diario", description: "Git, GitHub Actions, CMake, Vitest concurrente, GoogleTest, ESLint 9, Turbopack" },
          ],
        },
        {
          number: "04",
          title: "Ingeniería de Bases de Datos, Almacenamiento & Vector",
          subtitle: "Cumplimiento ACID, diseño de esquemas relacionales y búsqueda vectorial",
          items: [
            { name: "PostgreSQL & Prisma", level: "Producción", description: "Migraciones complejas, restricciones relacionales, claves foráneas e índices" },
            { name: "Supabase & Postgres RLS", level: "Producción", description: "Políticas de seguridad a nivel de fila, websockets en tiempo real y tokens JWT" },
            { name: "pgvector & RAG", level: "Producción", description: "Búsquedas vectoriales con índices HNSW, similitud coseno y alta recuperación" },
            { name: "Seguridad y Blindaje de Datos", level: "Defensivo", description: "Aislamiento estricto de esquemas multi-tenant, connection pooling y prepared statements" },
          ],
        },
        {
          number: "05",
          title: "Frontend & Ingeniería Web",
          subtitle: "Componentes del servidor modernos, micro-interacciones accesibles y sistemas de diseño",
          items: [
            { name: "Next.js 16 & React 19", level: "Producción", description: "App Router, React Server Components (RSC) y compilación Turbopack" },
            { name: "Tailwind CSS v4", level: "Experto", description: "Tokens de diseño inline, motor postCSS moderno y cero sobrecarga de configuración" },
            { name: "Motion (v13)", level: "Producción", description: "Físicas suaves, seguridad ante hidratación SSR e interacción fluida" },
            { name: "Accesibilidad Web", level: "Estándar", description: "Contraste WCAG, soporte de prefers-reduced-motion y degradación elegante" },
          ],
        },
      ],
    },
    timelineSection: {
      sectionNum: "04",
      sectionTag: "Progresión Profesional",
      title: "Trayectoria de Ingeniería",
      items: [
        {
          period: "Enero 2025 — Presente",
          title: "Plataforma de Operaciones Industriales",
          role: "Desarrollador Full Stack y de Sistemas",
          badge: "SaaS en Producción",
          description:
            "Diseñé, construí y mantengo la plataforma de operaciones en producción utilizada diariamente por varias empresas industriales.",
          bullets: [
            "Diseñé el motor de optimización de corte 2D para eliminar el desperdicio de materia prima en tiradas de producción",
            "Implementé Row Level Security (RLS) en PostgreSQL con aislamiento multi-tenant estricto",
            "Desarrollé 14 módulos integrados con sincronización de planta en tiempo real",
          ],
        },
        {
          period: "Agosto 2025 — Presente",
          title: "Tecnicatura Superior en Análisis de Sistemas",
          role: "Educación Superior",
          badge: "En Curso",
          description:
            "Formación formal avanzada en ciencias de la computación: metodologías de ingeniería de software, álgebra relacional, teoría de sistemas distribuidos y motores de bases de datos.",
          bullets: [
            "Cálculo relacional avanzado y normalización de bases de datos",
            "Patrones de arquitectura de software y análisis formal de requerimientos",
            "Paradigmas de computación concurrente e ingeniería de sistemas",
          ],
        },
        {
          period: "Noviembre 2025",
          title: "Samsung Innovation Campus — Inteligencia Artificial",
          role: "Certificación en Inteligencia Artificial",
          badge: "Certificado",
          description:
            "Programa intensivo sobre fundamentos de machine learning, arquitecturas de deep learning y procesamiento de lenguaje natural. Como proyecto final, desarrollé un bot en Python; abordamos fundamentos de LLMs, realizamos pruebas y testeos de modelos, y llevamos a cabo la implementación completa.",
          bullets: [
            "Proyecto Final: Programación, testeo y puesta en marcha de un bot automatizado en Python",
            "Evaluación de rendimiento de LLMs, límites de contexto e ingeniería de prompts",
            "Construcción de pipelines de procesamiento de datos para evaluación de machine learning",
          ],
        },
        {
          period: "2018 — 2024",
          title: "Técnico en Informática",
          role: "Título Técnico Secundario (Formación de 7 Años)",
          badge: "Título Técnico",
          description:
            "Formación técnica integral de 7 años con más de 6.400 horas de cursada. Sólidas bases en programación C/C++, redes y protocolos, bases de datos relacionales, análisis algorítmico y arquitectura de computadoras.",
          bullets: [
            "7 años de formación intensiva en ciencias de la computación y sistemas",
            "Programación de bajo nivel en C y C++ moderno con interacción directa de hardware",
            "Diseño de bases de datos, pila de protocolos TCP/IP y fundamentos de sistemas operativos",
          ],
        },
      ],
    },
    aboutSection: {
      sectionNum: "05",
      sectionTag: "Perspectiva de Ingeniería",
      title: "La ingeniería de software se trata de responsabilidad, no solo de tickets.",
      principleTitle: "Principio Rector",
      principleQuote:
        "“Un sistema limpio no es aquel que tiene cero líneas de código, sino aquel donde cada restricción, asignación de memoria y bloqueo de concurrencia puede ser defendido bajo la presión de producción.”",
      paragraphs: [
        "Soy Desarrollador Full Stack & Sistemas radicado en Argentina, especializado en construir software que sigue funcionando después del despliegue. Graduado como Técnico en Informática tras una formación intensiva de 7 años y cursando la carrera de Analista de Sistemas, la mayor parte de lo que entiendo sobre software proviene de mantener sistemas de los cuales dependen empresas para operar a diario.",
        "Mi mayor logro en producción es una plataforma de operaciones utilizada activamente por varias empresas. No es un repositorio de demostración: orquesta programas de corte, algoritmos de empaquetamiento 2D, inventario de materiales, compras y equipos de taller. Construir software en el cual empresas depositan su operación diaria exige rigor defensivo y precisión.",
        "Mi trabajo abarca desde plataformas web de alto nivel (React 19, Next.js 16, Node.js, PostgreSQL con Supabase RLS, bloqueos atómicos en Redis) hasta bases algorítmicas de bajo nivel en C++20 (cachés LRU concurrentes, Bloom filters probabilísticos, teoría de autómatas). Ya sea optimizando un algoritmo de corte 2D o evitando race conditions en motores de reservas de alta concurrencia, valoro el determinismo, la claridad algorítmica y el rendimiento medible.",
      ],
    },
    contactSection: {
      sectionNum: "06",
      sectionTag: "Iniciar Contacto",
      title: "Construyamos algo trascendente.",
      subtitle:
        "Disponible para roles de Full Stack y Systems Engineering donde pueda asumir la responsabilidad de arquitecturas críticas de backend, resiliencia distribuida y decisiones reales de producto.",
      copyEmail: "Copiar Email",
      copied: "¡Copiado!",
      location: "Argentina (UTC-3)",
    },
    footer: {
      rights: "Desarrollado con Next.js 16 & Tailwind CSS v4",
      backToTop: "Volver arriba ↑",
    },
  },
};
