// =========================================================
// ALL YOUR CONTENT LIVES HERE.
// Edit text, jobs, skills, and certs in this one file —
// the components just render whatever is in this file.
// =========================================================

export const profile = {
  name: "Nazim Gafarli",
  initials: "NG",
  role: "Full Stack Software Engineer",
  typedRoles: [
    "Full Stack Software Engineer",
    "Java, Spring Boot, Hibernate",
    "React, Angular, Node.js",
    "Cloud-native systems builder",
  ],
  location: "Toronto, ON",
  tagline: "I turn requirements into reliable, shipped software.",
  summary:
    "Over 3 years of experience designing, building, and deploying scalable web applications and enterprise-grade database systems. Core strength in the Java ecosystem: Spring Boot, Hibernate, JPA, paired with modern front-end frameworks like React, Angular, and Node.js.",
  email: "gafarlinazim@gmail.com",
  phone: "647-292-4607",
  github: "https://github.com/NazimGafarli",
  githubLabel: "github.com/NazimGafarli",
  linkedin: "https://linkedin.com/in/nazimgafarli",
  linkedinLabel: "linkedin.com/in/nazimgafarli",
  availability: "Open to new opportunities",
};

export const stats = [
  { value: "3+", label: "years of experience" },
  { value: "3", label: "industries: fintech, auto, SaaS" },
  { value: "50%", label: "load-time improvement, best case" },
];

export const aboutCards = [
  { icon: "grad", title: "Software Eng. Technology", sub: "Centennial College, 2024 to 2026" },
  { icon: "gear", title: "Full Stack @ Wix", sub: "Current role, Remote, NY" },
  { icon: "trophy", title: "IBM Certified", sub: "Intro to Software Engineering, 2025" },
  { icon: "chart", title: "Google IT Support", sub: "Professional Certificate, 2025" },
];

// Skills grouped like the reference site's "Tools I ship with",
// but tagged with a logo id so each chip can carry a real tech icon.
export const skillGroups = [
  {
    title: "Languages",
    accent: "blue",
    items: [
      { name: "Java", logo: "java" },
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Python", logo: "python" },
      { name: "C# / C++", logo: "csharp" },
      { name: "SQL / PL-SQL", logo: "database" },
    ],
  },
  {
    title: "Backend & Frameworks",
    accent: "purple",
    items: [
      { name: "Spring Boot", logo: "spring" },
      { name: ".NET Core", logo: "dotnet" },
      { name: "Node.js", logo: "node" },
      { name: "Django", logo: "python" },
      { name: "GraphQL", logo: "graphql" },
      { name: "REST APIs", logo: "api" },
    ],
  },
  {
    title: "Frontend",
    accent: "gold",
    items: [
      { name: "React", logo: "react" },
      { name: "Angular", logo: "angular" },
      { name: "Next.js", logo: "nextjs" },
      { name: "Redux", logo: "redux" },
      { name: "Tailwind CSS", logo: "tailwind" },
    ],
  },
  {
    title: "Data & Cloud",
    accent: "red",
    items: [
      { name: "PostgreSQL", logo: "postgres" },
      { name: "MongoDB", logo: "mongo" },
      { name: "AWS", logo: "aws" },
      { name: "Azure", logo: "azure" },
      { name: "GCP", logo: "gcp" },
      { name: "Redis", logo: "redis" },
    ],
  },
  {
    title: "Practices & Testing",
    accent: "blue",
    items: [
      { name: "CI/CD", logo: "cicd" },
      { name: "Agile / Scrum", logo: "agile" },
      { name: "JUnit", logo: "junit" },
      { name: "Jest", logo: "jest" },
      { name: "Git", logo: "git" },
    ],
  },
  {
    title: "AI / LLM",
    accent: "purple",
    items: [
      { name: "OpenAI API", logo: "openai" },
      { name: "Prompt Engineering", logo: "prompt" },
      { name: "LLM App Dev", logo: "ai" },
    ],
  },
];

// Experience, styled as a git log (each role = one commit).
export const experience = [
  {
    hash: "a1f3c9e",
    date: "Feb 2026 to Present",
    title: "Full Stack Software Engineer",
    company: "Wix",
    location: "New York, US (Remote)",
    notes: [
      "Optimized the development environment with advanced version-control tooling, improving code quality and cutting bug-resolution time.",
      "Built a solutions-oriented test-planning framework, driving a real drop in critical bugs.",
      "Re-architected core services with Vue.js and modern app frameworks, improving scalability and load times.",
      "Led incident-response initiatives that tied technical fixes to business impact, raising service reliability.",
    ],
    tags: [
      { label: "+50% load time", tone: "blue" },
      { label: "+40% code quality", tone: "gold" },
      { label: "-40% critical bugs", tone: "red" },
    ],
  },
  {
    hash: "7b2d0a4",
    date: "Jun 2025 to May 2026",
    title: "Java Software Engineer",
    company: "BMO (Bank of Montreal)",
    location: "Toronto, ON (Remote)",
    notes: [
      "Shipped an enterprise solution on Google Cloud Platform, aligned with banking-grade reliability standards.",
      "Designed a scalable systems architecture on ASP.NET and Azure DevOps, cutting deployment time.",
      "Integrated third-party payment gateways and analytics, managing data persistence across MongoDB and PostgreSQL with strategic indexing.",
      "Built and maintained ASP.NET Core services on Entity Framework, improving data-retrieval speed through query tuning.",
    ],
    tags: [
      { label: "+30% on-time delivery", tone: "blue" },
      { label: "+20% performance", tone: "gold" },
      { label: "-30% deploy time", tone: "red" },
    ],
  },
  {
    hash: "4e9c1f2",
    date: "Jun 2024 to Jan 2025",
    title: "Database Developer",
    company: "Toyota Canada Inc.",
    location: "Toronto, ON (Hybrid)",
    notes: [
      "Designed and optimized relational schemas in Oracle SQL / PL-SQL for supply-chain and inventory systems.",
      "Partnered with front-end, mobile, and product teams to ship RESTful APIs (Java, Spring Boot) across dashboards and apps.",
      "Rebuilt the deployment pipeline with CI/CD, achieving a much faster release cycle.",
      "Ran architectural-planning sessions that improved delivery timelines and cut deployment errors.",
    ],
    tags: [
      { label: "+30% query speed", tone: "blue" },
      { label: "+40% deploy speed", tone: "gold" },
      { label: "-20% deploy errors", tone: "red" },
    ],
  },
];

// Certifications + education.
export const achievements = [
  {
    icon: "grad",
    title: "Diploma: Software Engineering Technology",
    org: "Centennial College, Toronto, ON",
    desc: "Advanced Java, Database Design & Management, Web Development, Cloud Computing, Data Structures & Algorithms, Software Testing & QA, DevOps Fundamentals.",
    date: "09/2024 to 08/2026",
  },
  {
    icon: "cert",
    title: "Introduction to Software Engineering",
    org: "IBM",
    desc: "Certified coursework covering the software development lifecycle, requirements, and engineering practice.",
    date: "12/2025",
  },
  {
    icon: "cert",
    title: "Google IT Support Professional Certificate",
    org: "Google",
    desc: "Certified across troubleshooting, networking, operating systems, system administration, and security.",
    date: "03/2025",
  },
];

// Selected projects, swap in your real repos anytime.
export const projects = [
  {
    icon: "bank",
    tag: "FEATURED",
    tone: "blue",
    title: "Payment Gateway Integration",
    desc: "Enterprise-grade payment and analytics integration built on ASP.NET Core, with data persistence across MongoDB and PostgreSQL.",
    tech: ["ASP.NET Core", "MongoDB", "PostgreSQL"],
    link: "https://github.com/NazimGafarli",
  },
  {
    icon: "pipeline",
    tag: "CLOUD",
    tone: "purple",
    title: "CI/CD Release Pipeline",
    desc: "Automated build, test, and deploy pipeline that took a manual release process down to a single, repeatable click.",
    tech: ["Azure DevOps", "Docker", "GitHub Actions"],
    link: "https://github.com/NazimGafarli",
  },
  {
    icon: "api",
    tag: "BACKEND",
    tone: "gold",
    title: "Inventory REST API",
    desc: "Spring Boot API layer over a re-modeled Oracle schema, powering supply-chain dashboards used across teams.",
    tech: ["Spring Boot", "Oracle SQL", "REST"],
    link: "https://github.com/NazimGafarli",
  },
];