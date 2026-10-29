export const projects = [
  {
    name: "GroundworkAI",
    tagline: "AI-powered road damage detection · DubHacks 2026",
    desc: "Helps reviewers find road damage and prioritize repairs. I built the React and FastAPI app, connected Mapillary street imagery to an interactive map, and fine-tuned YOLO11 on US road images from RDD2022 to detect potholes and cracks.",
    stack: ["React", "Python", "YOLO", "FastAPI", "React-Leaflet"],
    github: "https://github.com/jacheun/DubHacks2026",
    demo: "https://ground-work-ai.vercel.app/",
    devpost: "https://devpost.com/software/groundwork-ai",
    video: "https://youtu.be/Ywb3-EA2uNw",
  },
  {
    name: "Music Rec System",
    tagline: "ML-powered song preference predictor",
    desc: "Predicts song preferences using logistic regression and neural networks, with song data prepared through collaborative and comparative filtering.",
    stack: ["Python", "Pandas", "Scikit-learn", "Neural Networks"],
    github: "#",
    demo: "#",
  },
  {
    name: "Sip",
    tagline: "Café-based social connection app",
    desc: "A social app built around cafés and community. I built the Updates and Profile pages with live Firebase data, mobile navigation, and interactive maps with friend filtering.",
    stack: ["React", "Firebase", "React-Leaflet", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "3D Room",
    status: "Coming soon",
    tagline: "Visualize your space before you move in",
    desc: "A room-planning app in development for homeowners, renters, and designers. Upload a reference, arrange furniture in an interactive 3D room, and save layouts to revisit—making it easier to plan a space before moving in.",
    stack: ["Reference uploads", "Interactive 3D editor", "Saved spaces"],
    github: "https://github.com/samanthaoh/3d-room",
    demo: "#",
  },
]

export const experience = [
  {
    role: "Agentic AI Engineering Intern",
    org: "CACI International Inc. · Chantilly, VA",
    period: "Jun 2026 - Aug 2026",
    highlights: [
      "Built LLM-powered agents in Python using the Agno framework and packaged via Docker containerization to automate government contract analysis.",
      "Designed custom MCP tools and RAG pipelines backed by a vector knowledge base - cutting contract review time from days to 1-2 hours.",
      "Also designed UX frameworks for chat interfaces.",
    ],
  },
  {
    role: "Information Systems Researcher",
    org: "George Mason University · Remote",
    period: "Jun 2025 - Aug 2025",
    highlights: [
      "Collaborated with Dr. Xie to improve UI features on an Asian grocery app, applying A/B testing, regression analysis, and Python-based marketing analytics (Jieba, Requests).",
      "Published abstract in GMU's Journal of Student-Scientists' Research.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "NT Concepts · Vienna, VA",
    period: "Jun 2024 - Aug 2024",
    highlights: [
      "Developed and enhanced 5 UI features for an Electron web app using React, Redux, JavaScript, and CSS.",
      "Managed software delivery and tracked sprint progress using Jira within an Agile Scrum framework.",
      "Authored 15+ Jest unit tests to maintain code stability, and presented live feature walkthroughs to 90+ stakeholders during sprint demos.",
    ],
  },
]


export const skills = [
  { label: "Python", cat: "lang" },
  { label: "Java", cat: "lang" },
  { label: "JavaScript", cat: "lang" },
  { label: "SQL", cat: "lang" },
  { label: "R", cat: "lang" },
  { label: "Swift", cat: "lang" },
  { label: "HTML/CSS", cat: "lang" },
  { label: "React", cat: "frame" },
  { label: "FastAPI", cat: "frame" },
  { label: "React Leaflet", cat: "frame" },
  { label: "YOLO", cat: "frame" },
  { label: "Agno", cat: "frame" },
  { label: "Electron", cat: "frame" },
  { label: "JUnit", cat: "frame" },
  { label: "Jest", cat: "frame" },
  { label: "Firebase", cat: "tool" },
  { label: "SQLite", cat: "tool" },
  { label: "AWS", cat: "tool" },
  { label: "Docker", cat: "tool" },
  { label: "Vite", cat: "tool" },
  { label: "Vercel", cat: "tool" },
  { label: "Google Colab", cat: "tool" },
  { label: "REST APIs", cat: "tool" },
  { label: "Git", cat: "dev" },
  { label: "GitHub", cat: "dev" },
  { label: "GitLab", cat: "dev" },
  { label: "VS Code", cat: "dev" },
  { label: "Xcode", cat: "dev" },
  { label: "Claude Code", cat: "dev" },
  { label: "Codex", cat: "dev" },
  { label: "Jira", cat: "dev" },
  { label: "Figma", cat: "dev" },
  { label: "Agile/Scrum", cat: "dev" },
]

export const catLabels: Record<string, string> = {
  lang: "Languages",
  frame: "Frameworks / Libraries",
  tool: "Platforms / Tools",
  dev: "Development / Design",
}
