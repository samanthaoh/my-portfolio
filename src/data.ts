export const projects = [
  {
    name: "Music Rec System",
    tagline: "ML-powered song preference predictor",
    desc: "Engineered a music recommendation system using logistic regression and neural networks to predict user preferences. Cleaned song data with collaborative and comparative filtering.",
    stack: ["Python", "Pandas", "Scikit-learn", "Neural Networks"],
    color: "var(--green)",
    github: "#",
    demo: "#",
    year: "2024",
  },
  {
    name: "Sip",
    tagline: "Café-based social connection app",
    desc: "Built the Updates and Profile pages with Firebase live data sync. Designed a state-driven mobile-first NavBar and interactive maps with react-leaflet and friend-filtering.",
    stack: ["React", "Firebase", "React-Leaflet", "JavaScript", "CSS"],
    color: "var(--blue)",
    github: "#",
    demo: "#",
    year: "2026",
  },
  {
    name: "GSU Course Redesign",
    tagline: "Full UX redesign proposal for course registration",
    desc: "Led requirements gathering and produced a BRD, DFDs, and data dictionary for a university course registration overhaul. Built a Jira backlog with full sprint planning.",
    stack: ["Jira", "Agile/Scrum", "DFDs", "BRD"],
    color: "var(--purple)",
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
    badge: "HEADLINER",
    badgeColor: "var(--green)",
    desc: "Built LLM-powered agents in Python using the Agno framework and packaged via Docker containerization to automate government contract analysis. Designed custom MCP tools and RAG pipelines backed by a vector knowledge base — cutting contract review time from days to 1–2 hours.",
  },
  {
    role: "Information Systems Researcher",
    org: "George Mason University · Remote",
    period: "Jun 2025 — Aug 2025",
    badge: "SUPPORTING",
    badgeColor: "var(--blue)",
    desc: "Collaborated with Dr. Xie to improve UI features on an Asian grocery app, applying A/B testing, regression analysis, and Python-based marketing analytics (Jieba, Requests). Published abstract in GMU's Journal of Student-Scientists' Research.",
  },
  {
    role: "Software Development Intern",
    org: "NT Concepts · Vienna, VA",
    period: "Jun 2024 — Aug 2024",
    badge: "MAIN STAGE",
    badgeColor: "var(--purple)",
    desc: "Developed and enhanced 5 UI features for an Electron web app using React, Redux, JavaScript, and CSS. Managed software delivery and tracked sprint progress using Jira within an Agile Scrum framework. Authored 15+ Jest unit tests to maintain code stability, and presented live feature walkthroughs to 90+ stakeholders during sprint demos.",
  },
]

export const skills = [
  { label: "Python", pct: 92, dur: 1.1, cat: "lang" },
  { label: "JavaScript", pct: 85, dur: 0.9, cat: "lang" },
  { label: "Java", pct: 75, dur: 1.2, cat: "lang" },
  { label: "R", pct: 72, dur: 1.3, cat: "lang" },
  { label: "Swift", pct: 60, dur: 1.4, cat: "lang" },
  { label: "React", pct: 88, dur: 0.8, cat: "frame" },
  { label: "Agno", pct: 85, dur: 0.9, cat: "frame" },
  { label: "Electron", pct: 78, dur: 1.1, cat: "frame" },
  { label: "Jest", pct: 80, dur: 1.0, cat: "frame" },
  { label: "RAG", pct: 88, dur: 1.0, cat: "ml" },
  { label: "MCP Tools", pct: 84, dur: 1.1, cat: "ml" },
  { label: "LLM Agents", pct: 90, dur: 0.8, cat: "ml" },
  { label: "Docker", pct: 80, dur: 1.2, cat: "tool" },
  { label: "AWS", pct: 78, dur: 1.0, cat: "tool" },
  { label: "GitHub", pct: 92, dur: 0.7, cat: "tool" },
  { label: "Figma", pct: 75, dur: 1.3, cat: "tool" },
]

export const catColors: Record<string, string> = {
  lang: "var(--green)",
  frame: "var(--blue)",
  ml: "var(--purple)",
  tool: "var(--yellow)",
}

export const catLabels: Record<string, string> = {
  lang: "Languages",
  frame: "Frameworks",
  ml: "ML / AI",
  tool: "Tools",
}
