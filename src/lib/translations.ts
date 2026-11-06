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
  typeTag: string;
  tagline: string;
  stack: string[];
  link: string;
  featured?: boolean;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  url: string;
  urlLabel: string;
  badge: string;
  tagline: string;
  summary: string;
  highlights: string[];
  bullets?: string[];
  clients?: string[];
  stack?: string[];
  decisions?: Decision[];
  metrics?: Metric[];
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
    downloadCv: string;
  };
  experienceSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    visit: string;
    usedBy: string;
    decisionsHeader: string;
    items: ExperienceItem[];
  };
  projectsSection: {
    sectionNum: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    featuredLabel: string;
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
      work: "Experience",
      projects: "Projects",
      skills: "Skills",
      timeline: "Education",
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
        "Software developer at Interd. I created Lorma, a multi-tenant SaaS that runs the daily operations of two manufacturing companies, and I co-develop HonyCars, a CRM with an AI chatbot for car dealerships. On the side, I build low-level systems in Rust and C++20.",
      metrics: {
        companiesValue: "2",
        companiesLabel: "Companies on Lorma Daily",
        lruValue: "O(1)",
        lruLabel: "Amortized LRU Cache",
        ragValue: "81%",
        ragLabel: "Recall@5 Vector RAG",
        systemsValue: "C++20",
        systemsLabel: "& Next.js Full Stack",
      },
      ctaProjects: "View Experience",
      ctaContact: "Get in touch",
      downloadCv: "Download CV",
    },
    experienceSection: {
      sectionNum: "01",
      sectionTag: "Professional Experience",
      title: "Software in production, used by real businesses.",
      subtitle:
        "Products I build and maintain every day: a company website, a multi-tenant SaaS, and a CRM with an AI chatbot.",
      visit: "Visit site",
      usedBy: "Used daily by",
      decisionsHeader: "Key technical decisions",
      items: [
        {
          id: "interd",
          company: "Interd",
          role: "Software Developer",
          period: "Present",
          url: "https://interd.com.ar",
          urlLabel: "interd.com.ar",
          badge: "Current Role",
          tagline: "Website and internal software for a commercial design studio.",
          highlights: ["Company website", "Filterable portfolio", "Lead capture", "Internal software"],
          summary:
            "Software developer at Interd, a Buenos Aires studio that designs and manufactures shop windows, stands, displays, and commercial furniture for brands such as Chandon and Warsteiner.",
          bullets: [
            "Designed and developed the company website, interd.com.ar: studio, services, process, and a filterable portfolio of client projects",
            "Built the contact and lead-capture form with spam protection, plus responsive, optimized imagery",
            "Develop the internal software that runs the studio's day-to-day operations (Lorma)",
          ],
        },
        {
          id: "lorma",
          company: "Lorma",
          role: "Creator & Lead Developer",
          period: "Jan 2025 — Present",
          url: "https://lorma.site",
          urlLabel: "lorma.site",
          badge: "Production SaaS",
          tagline: "ERP and 2D cutting optimization for furniture manufacturers.",
          highlights: ["Multi-tenant", "2D cutting engine", "14 modules", "Real-time", "RBAC"],
          summary:
            "I created Lorma, a multi-tenant SaaS for furniture manufacturers that combines an ERP and 2D cutting optimization in one platform: inventory, suppliers, quotes, purchase orders, production scheduling, and cash flow across 14 integrated modules. Each company works in its own isolated workspace.",
          clients: ["Interd", "Claxon"],
          decisions: [
            {
              tag: "ALGORITHM",
              title: "2D cut optimization",
              description:
                "Packs rectangular panels onto standard sheets and calculates PVC edging, minimizing offcuts before jobs reach the shop floor.",
            },
            {
              tag: "SECURITY",
              title: "PostgreSQL with RLS",
              description:
                "Prisma on Supabase with Row Level Security: every read and write goes through authenticated endpoints.",
            },
            {
              tag: "ACCESS",
              title: "Role-based access (RBAC)",
              description:
                "ADMIN, SALES, DESIGNER, and OPERATOR roles. Workshop tablets only see cutting and assembly queues.",
            },
            {
              tag: "REALTIME",
              title: "Live shop floor sync",
              description:
                "Supabase Realtime broadcast channels sync job queues and stock across devices without polling.",
            },
          ],
          metrics: [
            { label: "Companies", value: "2", subtext: "Interd & Claxon" },
            { label: "Scope", value: "14", subtext: "Modules" },
            { label: "Sync", value: "Live", subtext: "Real-time" },
          ],
          stack: ["React 19", "Next.js 16", "Node.js", "Prisma", "PostgreSQL", "Supabase Realtime", "Tailwind CSS v4", "Vercel"],
        },
        {
          id: "honycars",
          company: "HonyCars",
          role: "Co-developer",
          period: "Present",
          url: "https://honycars.com",
          urlLabel: "honycars.com",
          badge: "CRM + AI",
          tagline: "CRM with an AI chatbot that answers customers on WhatsApp.",
          highlights: ["WhatsApp", "Instagram", "Mercado Libre", "AI chatbot", "PDF quotes", "Funnel metrics"],
          summary:
            "Co-developer of HonyCars, a CRM for car dealerships in Argentina that centralizes every inquiry so each lead has an owner, a response, and a next step.",
          bullets: [
            "Unified lead inbox for WhatsApp, Instagram, Mercado Libre, email, web forms, and showroom visits, with assignment and follow-ups per salesperson",
            "“Hony”, an AI chatbot that answers on WhatsApp using the dealership's real stock, discards any reply with figures not backed by its data, and hands off to a person on request",
            "Stock with photos and pricing, PDF quotes, and funnel metrics: first-response time, team ranking, and lost-sale reasons",
          ],
        },
      ],
    },
    projectsSection: {
      sectionNum: "02",
      sectionTag: "Side Projects",
      title: "Systems & low-level engineering",
      subtitle: "Open source projects where I explore performance, concurrency, and data structures.",
      featuredLabel: "Featured",
      source: "Source",
      allRepos: "View all repositories on GitHub →",
      items: [
        {
          id: "llm-inference-engine",
          title: "LLM Inference Engine",
          typeTag: "Rust",
          featured: true,
          tagline: "Transformer inference engine written from scratch in Rust, with zero ML frameworks: GGUF mmap parser, KV cache, and INT8/INT4 quantization.",
          stack: ["Rust", "Rayon", "GGUF", "SIMD"],
          link: "https://github.com/martinezmarcos/LLM-Inference-Engine",
        },
        {
          id: "cancha-directa",
          title: "Cancha Directa",
          typeTag: "Distributed Systems",
          tagline: "Booking engine that prevents double-booking with atomic Redis locks and a PostgreSQL constraint as backstop.",
          stack: ["Next.js", "Redis", "PostgreSQL"],
          link: "https://github.com/martinezmarcos/cancha-directa",
        },
        {
          id: "claude-docs",
          title: "Claude Docs Navigator",
          typeTag: "AI & RAG",
          tagline: "RAG assistant over Anthropic's documentation with pgvector search and cited answers. 81% Recall@5.",
          stack: ["Next.js", "pgvector", "PostgreSQL"],
          link: "https://github.com/martinezmarcos/rag",
        },
        {
          id: "lru-cache",
          title: "LRU Cache",
          typeTag: "C++20",
          tagline: "Thread-safe LRU cache with O(1) operations.",
          stack: ["C++20", "STL", "GoogleTest"],
          link: "https://github.com/martinezmarcos/LRUCache",
        },
        {
          id: "bloom-filter",
          title: "Bloom Filter",
          typeTag: "C++",
          tagline: "Probabilistic set membership with zero false negatives and tunable false-positive rate.",
          stack: ["C++20", "Hashing", "CMake"],
          link: "https://github.com/martinezmarcos/bloomFilterProject",
        },
        {
          id: "turing-machine",
          title: "Turing Machine",
          typeTag: "C++",
          tagline: "Deterministic Turing machine simulator that runs programs from .tm files.",
          stack: ["C++20", "Automata"],
          link: "https://github.com/martinezmarcos/turingMachine",
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
      sectionTag: "Education",
      title: "Academic Background",
      items: [
        {
          period: "August 2025 — Present",
          title: "System Analyst",
          role: "University Degree",
          badge: "In Progress",
          description:
            "University degree curriculum in computer science and systems: software engineering methodologies, relational algebra, distributed systems theory, and database engines.",
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
        "I am a Full Stack & Systems Developer based in Argentina, specialized in building software that keeps working after deployment. Trained as a Computer Science Technician through a rigorous 7-year program and currently pursuing a university degree as a System Analyst, most of what I understand about software comes from maintaining systems that businesses rely on for their daily survival.",
        "Today I work as a software developer at Interd, where I built the company website. I also created Lorma, the SaaS that Interd and Claxon use every day to plan cutting jobs, manage inventory and purchases, and coordinate their workshops, and I co-develop HonyCars, a CRM with an AI chatbot for car dealerships. Building software that businesses trust with their daily operations requires defensive architecture and operational rigor.",
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
      location: "Buenos Aires, Argentina",
    },
    footer: {
      rights: "Engineered with Next.js 16 & Tailwind CSS v4",
      backToTop: "Back to top ↑",
    },
  },
  es: {
    nav: {
      work: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      timeline: "Formación",
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
        "Desarrollador de software en Interd. Creé Lorma, un SaaS multi-tenant con el que operan a diario dos empresas de fabricación, y soy codesarrollador de HonyCars, un CRM con chatbot de IA para concesionarias. En paralelo, construyo sistemas de bajo nivel en Rust y C++20.",
      metrics: {
        companiesValue: "2",
        companiesLabel: "Empresas Usan Lorma a Diario",
        lruValue: "O(1)",
        lruLabel: "Caché LRU Amortizado",
        ragValue: "81%",
        ragLabel: "Recall@5 Vector RAG",
        systemsValue: "C++20",
        systemsLabel: "& Next.js Full Stack",
      },
      ctaProjects: "Ver Experiencia",
      ctaContact: "Contactar",
      downloadCv: "Descargar CV (EN)",
    },
    experienceSection: {
      sectionNum: "01",
      sectionTag: "Experiencia Profesional",
      title: "Software en producción, usado por empresas reales.",
      subtitle:
        "Productos que construyo y mantengo a diario: un sitio corporativo, un SaaS multi-tenant y un CRM con chatbot de inteligencia artificial.",
      visit: "Visitar sitio",
      usedBy: "Lo usan a diario",
      decisionsHeader: "Decisiones técnicas clave",
      items: [
        {
          id: "interd",
          company: "Interd",
          role: "Desarrollador de Software",
          period: "Actualidad",
          url: "https://interd.com.ar",
          urlLabel: "interd.com.ar",
          badge: "Puesto Actual",
          tagline: "Sitio web y software interno para un estudio de diseño comercial.",
          highlights: ["Sitio corporativo", "Portfolio filtrable", "Captación de clientes", "Software interno"],
          summary:
            "Desarrollador de software en Interd, estudio de Buenos Aires que diseña y fabrica vidrieras, stands, exhibidores y mobiliario comercial para marcas como Chandon y Warsteiner.",
          bullets: [
            "Diseñé y desarrollé el sitio web de la empresa, interd.com.ar: estudio, servicios, proceso y portfolio filtrable de proyectos para clientes",
            "Construí el formulario de contacto y captación de clientes con protección antispam, e imágenes responsive optimizadas",
            "Desarrollo el software interno con el que opera el estudio día a día (Lorma)",
          ],
        },
        {
          id: "lorma",
          company: "Lorma",
          role: "Creador y Desarrollador Principal",
          period: "Ene 2025 — Actualidad",
          url: "https://lorma.site",
          urlLabel: "lorma.site",
          badge: "SaaS en Producción",
          tagline: "ERP y optimización de corte 2D para fábricas de muebles.",
          highlights: ["Multi-tenant", "Motor de corte 2D", "14 módulos", "Tiempo real", "RBAC"],
          summary:
            "Creé Lorma, un SaaS multi-tenant para fábricas de muebles que une un ERP y la optimización de corte 2D en una sola plataforma: inventario, proveedores, presupuestos, compras, planificación de producción y flujo de caja en 14 módulos integrados. Cada empresa trabaja en su propio espacio aislado.",
          clients: ["Interd", "Claxon"],
          decisions: [
            {
              tag: "ALGORITMO",
              title: "Optimización de corte 2D",
              description:
                "Distribuye piezas rectangulares sobre placas estándar y calcula tapacantos, minimizando el desperdicio antes de que la orden llegue al taller.",
            },
            {
              tag: "SEGURIDAD",
              title: "PostgreSQL con RLS",
              description:
                "Prisma sobre Supabase con Row Level Security: cada lectura y escritura pasa por endpoints autenticados.",
            },
            {
              tag: "ACCESOS",
              title: "Control por roles (RBAC)",
              description:
                "Roles ADMIN, VENTAS, DISEÑADOR y OPERARIO. Las tablets de taller solo ven colas de corte y armado.",
            },
            {
              tag: "TIEMPO REAL",
              title: "Sincronización con planta",
              description:
                "Canales broadcast de Supabase Realtime sincronizan colas de trabajo y stock entre dispositivos sin polling.",
            },
          ],
          metrics: [
            { label: "Empresas", value: "2", subtext: "Interd y Claxon" },
            { label: "Alcance", value: "14", subtext: "Módulos" },
            { label: "Sync", value: "Live", subtext: "Tiempo real" },
          ],
          stack: ["React 19", "Next.js 16", "Node.js", "Prisma", "PostgreSQL", "Supabase Realtime", "Tailwind CSS v4", "Vercel"],
        },
        {
          id: "honycars",
          company: "HonyCars",
          role: "Codesarrollador",
          period: "Actualidad",
          url: "https://honycars.com",
          urlLabel: "honycars.com",
          badge: "CRM + IA",
          tagline: "CRM con chatbot de IA que atiende clientes por WhatsApp.",
          highlights: ["WhatsApp", "Instagram", "Mercado Libre", "Chatbot IA", "Presupuestos PDF", "Métricas de embudo"],
          summary:
            "Codesarrollador de HonyCars, un CRM para concesionarias de Argentina que centraliza todas las consultas para que cada lead tenga responsable, respuesta y próximo paso.",
          bullets: [
            "Bandeja unificada de consultas de WhatsApp, Instagram, Mercado Libre, email, formularios web y salón, con asignación y seguimiento por vendedor",
            "“Hony”, un chatbot de IA que responde por WhatsApp con el stock real de la concesionaria, descarta cualquier respuesta con cifras que no estén en sus datos y deriva a una persona cuando se lo piden",
            "Stock con fotos y precios, presupuestos en PDF y métricas del embudo: tiempo de primera respuesta, ranking del equipo y motivos de venta perdida",
          ],
        },
      ],
    },
    projectsSection: {
      sectionNum: "02",
      sectionTag: "Proyectos Personales",
      title: "Sistemas e ingeniería de bajo nivel",
      subtitle: "Proyectos open source donde exploro rendimiento, concurrencia y estructuras de datos.",
      featuredLabel: "Destacado",
      source: "Código",
      allRepos: "Ver todos los repositorios en GitHub →",
      items: [
        {
          id: "llm-inference-engine",
          title: "LLM Inference Engine",
          typeTag: "Rust",
          featured: true,
          tagline: "Motor de inferencia Transformer escrito desde cero en Rust, sin frameworks de ML: parser GGUF con mmap, caché KV y cuantización INT8/INT4.",
          stack: ["Rust", "Rayon", "GGUF", "SIMD"],
          link: "https://github.com/martinezmarcos/LLM-Inference-Engine",
        },
        {
          id: "cancha-directa",
          title: "Cancha Directa",
          typeTag: "Sistemas Distribuidos",
          tagline: "Motor de reservas que evita turnos duplicados con bloqueos atómicos en Redis y una restricción de PostgreSQL como respaldo.",
          stack: ["Next.js", "Redis", "PostgreSQL"],
          link: "https://github.com/martinezmarcos/cancha-directa",
        },
        {
          id: "claude-docs",
          title: "Claude Docs Navigator",
          typeTag: "IA & RAG",
          tagline: "Asistente RAG sobre la documentación de Anthropic con búsqueda en pgvector y respuestas citadas. 81% Recall@5.",
          stack: ["Next.js", "pgvector", "PostgreSQL"],
          link: "https://github.com/martinezmarcos/rag",
        },
        {
          id: "lru-cache",
          title: "LRU Cache",
          typeTag: "C++20",
          tagline: "Caché LRU thread-safe con operaciones O(1).",
          stack: ["C++20", "STL", "GoogleTest"],
          link: "https://github.com/martinezmarcos/LRUCache",
        },
        {
          id: "bloom-filter",
          title: "Bloom Filter",
          typeTag: "C++",
          tagline: "Pertenencia probabilística a conjuntos sin falsos negativos y con tasa de falsos positivos ajustable.",
          stack: ["C++20", "Hashing", "CMake"],
          link: "https://github.com/martinezmarcos/bloomFilterProject",
        },
        {
          id: "turing-machine",
          title: "Turing Machine",
          typeTag: "C++",
          tagline: "Simulador de máquina de Turing determinista que ejecuta programas desde archivos .tm.",
          stack: ["C++20", "Autómatas"],
          link: "https://github.com/martinezmarcos/turingMachine",
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
      sectionTag: "Formación",
      title: "Formación Académica",
      items: [
        {
          period: "Agosto 2025 — Presente",
          title: "Analista en Sistemas",
          role: "Carrera Universitaria",
          badge: "En Curso",
          description:
            "Carrera universitaria en ciencias de la computación y sistemas: metodologías de ingeniería de software, álgebra relacional, teoría de sistemas distribuidos y motores de bases de datos.",
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
        "Soy Desarrollador Full Stack & Sistemas radicado en Argentina, especializado en construir software que sigue funcionando después del despliegue. Graduado como Técnico en Informática tras una formación intensiva de 7 años y cursando la carrera universitaria de Analista en Sistemas, la mayor parte de lo que entiendo sobre software proviene de mantener sistemas de los cuales dependen empresas para operar a diario.",
        "Hoy trabajo como desarrollador de software en Interd, donde hice el sitio web de la empresa. Además creé Lorma, el SaaS con el que Interd y Claxon planifican cortes, gestionan inventario y compras y coordinan sus talleres todos los días, y soy codesarrollador de HonyCars, un CRM con chatbot de IA para concesionarias. Construir software del que dependen empresas para operar a diario exige rigor defensivo y precisión.",
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
      location: "Buenos Aires, Argentina",
    },
    footer: {
      rights: "Desarrollado con Next.js 16 & Tailwind CSS v4",
      backToTop: "Volver arriba ↑",
    },
  },
};
