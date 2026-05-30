import { projectImages } from "@/assets/projects";

export const siteConfig = {
  name: "Mohamed Fateen F",
  brand: "Fateen",
  title: "Backend Developer · AI Systems Builder",
  tagline:
    "I build backend systems and AI-assisted products — focused on problems that require careful design, not just code.",
  email: "fateen1028@gmail.com",
  phone: "+91-9025811027",
  location: "Chennai, Tamil Nadu, India",
  github: "https://github.com/fateen1028-pixel",
  linkedin: "https://linkedin.com/in/mohamed-fateen",
  resume: "/resume.pdf",
  ogImage: "/og-image.svg",
  education: {
    degree: "B.E. Computer Science",
    status: "First Year — Currently Pursuing",
  },
  certification: "Full Stack Intern – Cognifyz",
  summary:
    "Backend-focused Computer Science student. I work on scalable APIs, real-time systems, and AI-integrated applications — learning by building production-style software, not tutorials.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export interface CaseStudy {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  problem: string;
  built: string;
  difficulty: string;
  learned: string;
  stack: string;
  architecture?: string[];
  links: { github: string; demo?: string };
  preview: { src: string; alt: string };
  screenshots?: { label: string; src: string; alt: string }[];
}

export const skillForgeAI: CaseStudy = {
  id: "skillforge",
  name: "SkillForgeAI",
  subtitle: "Adaptive AI learning platform",
  summary:
    "Personalized learning roadmaps that adapt to your progress — powered by LangChain and a custom roadmap engine.",
  stack: "Next.js · FastAPI · LangChain · Redis · MongoDB",
  problem:
    "Most learning platforms deliver the same content to everyone. They don't account for what you already know, where you're stuck, or how fast you're progressing.",
  built:
    "An AI-driven platform that generates personalized learning roadmaps from a user's goals, then adapts task progression as they move through the path. The backend manages roadmap state, injects new tasks dynamically, and tracks skill progression over time.",
  difficulty:
    "Roadmap state is complex. Tasks depend on prior completion, LLM generation is async and slow, and concurrent updates can corrupt progression if not handled carefully.",
  learned:
    "State machines should be designed before features, not after. Structured output parsers are essential when LLMs feed into application logic.",
  architecture: ["Next.js", "FastAPI", "LangChain", "Redis", "MongoDB"],
  links: {
    github: "https://github.com/fateen1028-pixel",
    demo: "#",
  },
  preview: {
    src: projectImages.skillforgeDashboard,
    alt: "SkillForgeAI dashboard preview",
  },
  screenshots: [
    { label: "Dashboard", src: projectImages.skillforgeDashboard, alt: "SkillForgeAI Dashboard" },
    { label: "Roadmap", src: projectImages.skillforgeRoadmap, alt: "SkillForgeAI Roadmap" },
    { label: "Progress", src: projectImages.skillforgeProgress, alt: "SkillForgeAI Progress" },
  ],
};

export const otherProjects: CaseStudy[] = [
  {
    id: "chat",
    name: "Real-Time Chat Application",
    subtitle: "Spring Boot · WebSockets · React",
    summary:
      "Full-stack real-time chat with JWT auth, STOMP messaging, presence tracking, and read/delivery receipts.",
    stack: "Spring Boot · React · STOMP · JWT · PostgreSQL",
    problem:
      "Chat apps need more than live text—secure auth on both REST and WebSockets, saved conversations, online presence, and clear message status from sent to read.",
    built:
      "Spring Boot backend with JWT and Spring Security; STOMP over WebSockets for messaging, presence, and receipts; JPA for persistence. React + Vite frontend with recent chats, history, and a responsive dark-mode UI.",
    difficulty:
      "The hard parts were JWT-secured WebSocket handshakes, keeping STOMP destinations in sync with the database, and multi-tab presence without duplicate or out-of-order events on the client.",
    learned:
      "STOMP and Spring Boot work well for user-specific queues. Modeling SENT → DELIVERED → READ upfront keeps receipts simple. Presence and read states are worth designing before UI polish.",
    architecture: ["React", "STOMP / SockJS", "Spring Boot", "JWT + Security", "PostgreSQL"],
    links: {
      github: "https://github.com/fateen1028-pixel/ChatApplication---SpringBoot",
      demo: "#",
    },
    preview: { src: projectImages.chatPreview, alt: "Real-Time Chat Application preview" },
  },
  {
    id: "spring-api",
    name: "Spring Boot Backend API",
    subtitle: "Secure REST API",
    summary: "Production-style REST API with JWT authentication and role-based access control.",
    stack: "Java · Spring Boot · Spring Security · PostgreSQL",
    problem:
      "APIs without proper authentication and authorization are not production-ready. I needed to understand JWT-based auth and RBAC in a real Spring Boot application.",
    built:
      "A secure REST API with JWT authentication, role-based authorization, relational schema via JPA/Hibernate, and layered architecture with validation and exception handling.",
    difficulty:
      "Spring Security's filter chain ordering matters — misconfiguration silently breaks auth. Designing the JWT lifecycle and mapping roles to endpoints required careful testing.",
    learned:
      "Security configuration must be understood, not copied. Filter chain order and token validation on every protected request are non-negotiable.",
    architecture: ["Client", "Spring Boot", "Spring Security", "PostgreSQL"],
    links: { github: "https://github.com/fateen1028-pixel", demo: "#" },
    preview: { src: projectImages.springPreview, alt: "Spring Boot API preview" },
  },
  {
    id: "docker",
    name: "Dockerized Web Application",
    subtitle: "Containerized deployment",
    summary: "Multi-container Spring Boot deployment with PostgreSQL and environment-based config.",
    stack: "Docker · Spring Boot · PostgreSQL",
    problem:
      "Applications that run locally but fail in deployment usually have environment or dependency issues. I wanted a reproducible setup that mirrors production.",
    built:
      "A containerized Spring Boot backend with PostgreSQL, configured through environment variables and Docker Compose for local multi-service orchestration.",
    difficulty:
      "Database persistence in containers, environment variable management, and health checks for orchestration were the main friction points.",
    learned:
      "Separate build and runtime stages in Dockerfiles. Health check endpoints are essential. Never hardcode config.",
    architecture: ["Docker", "Spring Boot", "PostgreSQL", "Cloud Host"],
    links: { github: "https://github.com/fateen1028-pixel", demo: "#" },
    preview: { src: projectImages.dockerPreview, alt: "Docker deployment preview" },
  },
];

export const skills = {
  backend:
    "Java, Spring Boot, Spring Data JPA, Hibernate, FastAPI, Flask, Node.js, REST APIs, JWT authentication",
  ai: "LangChain, LangGraph, Spring AI, LLM workflows, RAG concepts, prompt engineering",
  frontend: "JavaScript, React, Next.js, TypeScript, Tailwind CSS",
  data: "PostgreSQL, MongoDB, Redis",
  tools: "Docker, Git, Postman, Vercel, Render",
};

export const availableFor = [
  "Backend development internships",
  "Full stack development internships",
  "AI engineering internships",
];
