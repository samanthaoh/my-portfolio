/* ─── Data ─────────────────────────────────────────────────────────── */

export const projects = [
  {
    name: "Music Rec System",
    tagline: "ML-powered song preference predictor",
    desc: "Engineered a music recommendation system using logistic regression and neural networks to predict user preferences. Cleaned song data with collaborative and comparative filtering.",
    stack: ["Python", "Pandas", "Scikit-learn", "Neural Networks"],
    pastel: "var(--pastel-mint)",
    ink: "var(--ink-mint)",
    github: "#",
    demo: "#",
    year: "2024",
  },
  {
    name: "Sip",
    tagline: "Café-based social connection app",
    desc: "Built the Updates and Profile pages with Firebase live data sync. Designed a state-driven mobile-first NavBar and interactive maps with react-leaflet and friend-filtering.",
    stack: ["React", "Firebase", "React-Leaflet", "JavaScript", "CSS"],
    pastel: "var(--pastel-blue)",
    ink: "var(--ink-blue)",
    github: "#",
    demo: "#",
    year: "2026",
  },
  {
    name: "GSU Course Redesign",
    tagline: "Full UX redesign proposal for course registration",
    desc: "Led requirements gathering and produced a BRD, DFDs, and data dictionary for a university course registration overhaul. Built a Jira backlog with full sprint planning.",
    stack: ["Jira", "Agile/Scrum", "DFDs", "BRD"],
    pastel: "var(--pastel-lavender)",
    ink: "var(--ink-lavender)",
    github: "#",
    demo: "#",
    year: "2026",
  },
]

export const experience = [
  {
    role: "Agentic AI Engineering Intern",
    org: "CACI International Inc. · Chantilly, VA",
    period: "Jun 2026 — Aug 2026",
    pastel: "var(--pastel-mint)",
    ink: "var(--ink-mint)",
    desc: "Built LLM-powered agents in Python using the Agno framework and Docker to automate government contract analysis. Designed custom MCP tools and RAG pipelines backed by a vector knowledge base — cutting contract review time from days to 1–2 hours.",
  },
  {
    role: "Information Systems Researcher",
    org: "George Mason University · Remote",
    period: "Jun 2025 — Aug 2025",
    pastel: "var(--pastel-blue)",
    ink: "var(--ink-blue)",
    desc: "Collaborated with Dr. Xie to improve UI features on an Asian grocery app, applying A/B testing, regression analysis, and Python-based marketing analytics (Jieba, Requests). Published abstract in GMU's Journal of Student-Scientists' Research.",
  },
  {
    role: "Software Development Intern",
    org: "NT Concepts · Vienna, VA",
    period: "Jun 2024 — Aug 2024",
    pastel: "var(--pastel-lavender)",
    ink: "var(--ink-lavender)",
    desc: "Developed and enhanced 5 UI features for an Electron web app using React, Redux, JavaScript, and CSS. Wrote 15+ Jest unit tests and delivered sprint demos to 90+ stakeholders.",
  },
]

export const skills = [
  { label: "Python", cat: "lang" },
  { label: "JavaScript", cat: "lang" },
  { label: "Java", cat: "lang" },
  { label: "R", cat: "lang" },
  { label: "Swift", cat: "lang" },
  { label: "React", cat: "frame" },
  { label: "Agno", cat: "frame" },
  { label: "Electron", cat: "frame" },
  { label: "Jest", cat: "frame" },
  { label: "RAG", cat: "ml" },
  { label: "MCP Tools", cat: "ml" },
  { label: "LLM Agents", cat: "ml" },
  { label: "Docker", cat: "tool" },
  { label: "AWS", cat: "tool" },
  { label: "GitHub", cat: "tool" },
  { label: "Figma", cat: "tool" },
  { label: "Jira", cat: "tool"},
]

export const catPastel: Record<string, string> = {
  lang: "var(--pastel-mint)",
  frame: "var(--pastel-blue)",
  ml: "var(--pastel-pink)",
  tool: "var(--pastel-yellow)",
}

export const catInk: Record<string, string> = {
  lang: "var(--ink-mint)",
  frame: "var(--ink-blue)",
  ml: "var(--ink-pink)",
  tool: "var(--ink-yellow)",
}

export const catLabels: Record<string, string> = {
  lang: "Languages",
  frame: "Frameworks",
  ml: "ML / AI",
  tool: "Tools",
}