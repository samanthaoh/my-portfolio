import { useState, useEffect, useRef, type CSSProperties } from "react"

/* ─── Helpers ──────────────────────────────────────────────────────── */

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView] as const
}

/* ─── Data ─────────────────────────────────────────────────────────── */

const projects = [
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

const experience = [
  {
    role: "Agentic AI Engineering Intern",
    org: "CACI International Inc. · Chantilly, VA",
    period: "Jun 2026 — Aug 2026",
    badge: "HEADLINER",
    badgeColor: "var(--green)",
    desc: "Built LLM-powered agents in Python using the Agno framework and Docker to automate government contract analysis. Designed custom MCP tools and RAG pipelines backed by a vector knowledge base — cutting contract review time from days to 1–2 hours.",
  },
  {
    role: "Information Systems Researcher",
    org: "George Mason University · Remote",
    period: "Jun 2025 — Aug 2025",
    badge: "MAIN STAGE",
    badgeColor: "var(--blue)",
    desc: "Collaborated with Dr. Xie to improve UI features on an Asian grocery app, applying A/B testing, regression analysis, and Python-based marketing analytics (Jieba, Requests). Published abstract in GMU's Journal of Student-Scientists' Research.",
  },
  {
    role: "Software Development Intern",
    org: "NT Concepts · Vienna, VA",
    period: "Jun 2024 — Aug 2024",
    badge: "SUPPORTING",
    badgeColor: "var(--purple)",
    desc: "Developed and enhanced 5 UI features for an Electron web app using React, Redux, JavaScript, and CSS. Wrote 15+ Jest unit tests and delivered sprint demos to 90+ stakeholders.",
  },
]

const skills = [
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

const catColors: Record<string, string> = {
  lang: "var(--green)",
  frame: "var(--blue)",
  ml: "var(--purple)",
  tool: "var(--yellow)",
}

const catLabels: Record<string, string> = {
  lang: "Languages",
  frame: "Frameworks",
  ml: "ML / AI",
  tool: "Tools",
}

/* ─── Blob ─────────────────────────────────────────────────────────── */

function Blob({
  color,
  size,
  top,
  left,
  anim,
  delay,
  blur = 80,
}: {
  color: string
  size: number
  top: string
  left: string
  anim: string
  delay: number
  blur?: number
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.28,
        animation: `${anim} 12s ease-in-out infinite, float ${8 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  )
}

/* ─── Marquee divider ──────────────────────────────────────────────── */

function Marquee({ items, reverse }: { items: string[], reverse?: boolean }) {  const text = items.join("  ·  ") + "  ·  "
  const doubled = text + text
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(30,25,15,0.09)",
        borderBottom: "1px solid rgba(30,25,15,0.09)",
        padding: "12px 0",
        background: "rgba(30,25,15,0.035)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          fontFamily: "'Righteous', monospace",
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        {doubled}
      </div>
    </div>
  )
}

/* ─── Section label ────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: "'Righteous', monospace",
        fontSize: 12,
        letterSpacing: "0.2em",
        color: "var(--muted)",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Nav ──────────────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = ["About", "Projects", "Experience", "Skills", "Contact"]
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,247,240,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,25,15,0.08)" : "none",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Righteous', serif",
          fontSize: 20,
          color: "var(--green)",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        {"[ SO ]"}
      </a>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Righteous', monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link}
          </a>
        ))}
        <div
          style={{
            padding: "4px 10px",
            border: "1px solid var(--green)",
            borderRadius: 4,
            fontFamily: "'Righteous', monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            color: "var(--green)",
            boxShadow: "0 0 8px rgba(0,255,136,0.15)",
          }}
        >
          OPEN TO WORK
        </div>
      </div>
    </nav>
  )
}

/* ─── Hero ─────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Blobs */}
      <Blob
        color="var(--green)"
        size={500}
        top="-10%"
        left="-15%"
        anim="blob-a"
        delay={0}
        blur={90}
      />
      <Blob
        color="var(--purple)"
        size={420}
        top="20%"
        left="60%"
        anim="blob-b"
        delay={2.5}
        blur={90}
      />
      <Blob
        color="var(--blue)"
        size={360}
        top="60%"
        left="5%"
        anim="blob-c"
        delay={1.5}
        blur={80}
      />
      <Blob
        color="var(--yellow)"
        size={280}
        top="70%"
        left="75%"
        anim="blob-a"
        delay={3.5}
        blur={80}
      />

      {/* Floating geometric shapes */}
      <FloatShape shape="note" color="var(--yellow)" size={28} top="18%" right="12%" delay={0} />
      <FloatShape shape="waveform" color="var(--blue)" size={22} top="70%" right="20%" delay={1.2} />
      <FloatShape shape="headphones" color="var(--green)" size={22} top="35%" right="6%" delay={0.7} />
      <FloatShape shape="vinyl" color="var(--purple)" size={18} top="80%" left="18%" delay={2} />
      <FloatShape shape="note" color="var(--pink)" size={20} top="25%" left="8%" delay={1.5} />

      {/* Bracket decorations */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 32,
          fontFamily: "'Righteous', monospace",
          fontSize: 14,
          color: "rgba(0, 0, 0, 0.16)",
          letterSpacing: "0.1em",
          lineHeight: 1.8,
          userSelect: "none",
        }}
      >
        {"{"}
        <br />
        {'  role: "builder",'}
        <br />
        {'  stack: "ai + data",'}
        <br />
        {'  status: "shipping"'}
        <br />
        {"}"}
      </div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        <div
          style={{
            fontFamily: "'Righteous', monospace",
            fontSize: 12,
            letterSpacing: "0.25em",
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          ◉ Now playing 
        </div>

        <h1
          className="glitch"
          data-text="SAMANTHA OH"
          style={{
            fontFamily: "'Righteous', serif",
            fontSize: "clamp(64px, 14vw, 100px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: 0,
            marginBottom: 28,
          }}
        >
          SAMANTHA OH
        </h1>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 48,
            fontFamily: "'Righteous', monospace",
            fontSize: 19,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--blue)" }}>Informatics @ UW</span>
          <span>·</span>
          <span style={{ color: "var(--green)" }}>
            Agentic AI Engineering Intern
          </span>
          <span>·</span>
          <span style={{ color: "var(--purple)" }}>Seattle, WA</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            className="btn-wiggle"
            style={{
              padding: "14px 32px",
              background: "var(--green)",
              color: "#fff",
              fontFamily: "'Righteous', serif",
              fontSize: 15,
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 6,
              display: "inline-block",
              boxShadow: "0 8px 20px rgba(10,148,99,0.28)",
              transition: "box-shadow 0.2s",
            }}
          >
            SEE MY WORK
          </a>
          <a
            href="#contact"
            style={{
              padding: "14px 32px",
              border: "1.5px solid rgba(30,25,15,0.22)",
              color: "var(--text)",
              fontFamily: "'Righteous', serif",
              fontSize: 15,
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 6,
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--purple)"
              e.currentTarget.style.background = "rgba(192,64,255,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(30,25,15,0.22)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            LET'S CONNECT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'Righteous', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, var(--muted), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  )
}

/* ─── Floating shape ───────────────────────────────────────────────── */

function FloatShape({
  shape,
  color,
  size,
  top,
  left,
  right,
  delay,
}: {
  shape: "note" | "headphones" | "vinyl" | "waveform"
  color: string
  size: number
  top: string
  left?: string
  right?: string
  delay: number
}) {
  const style: CSSProperties = {
    position: "absolute",
    top,
    left,
    right,
    width: size,
    height: size,
    animation: `float-b ${6 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    color,
    zIndex: 1,
    pointerEvents: "none",
  }

  if (shape === "vinyl") {
    return (
      <div
        style={{
          ...style,
          borderRadius: "50%",
          border: `2px solid ${color}`,
          boxShadow: `0 0 12px ${color}`,
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "35%",
            height: "35%",
            borderRadius: "50%",
            background: color,
          }}
        />
      </div>
    )
  }

  if (shape === "waveform") {
    return (
      <svg
        style={style}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.7}
        filter={`drop-shadow(0 0 6px ${color})`}
      >
        <line x1="4" y1="9" x2="4" y2="15" />
        <line x1="9" y1="5" x2="9" y2="19" />
        <line x1="14" y1="2" x2="14" y2="22" />
        <line x1="19" y1="7" x2="19" y2="17" />
      </svg>
    )
  }

  if (shape === "note") {
    return (
      <svg
        style={style}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
        filter={`drop-shadow(0 0 6px ${color})`}
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    )
  }

  const svgs: Record<string, string> = {
    headphones:
      "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-7a9 9 0 0 1 18 0v7h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
  }

  return (
    <svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      opacity={0.7}
      filter={`drop-shadow(0 0 6px ${color})`}
    >
      <path d={svgs[shape]} />
    </svg>
  )
}

/* ─── About ────────────────────────────────────────────────────────── */

function About() {
  const [ref, inView] = useInView()
  const setlist = [
    { icon: "◉", label: "VENUE", value: "University of Washington, Seattle" },
    { icon: "◉", label: "STAGE", value: "B.S. Informatics - Data Science" },
    {
      icon: "◉",
      label: "HEADLINER",
      value: "Agentic AI Intern @ CACI International",
    },
    { icon: "◉", label: "ROLE", value: "Director of PR @ IUGA" },
    { icon: "◉", label: "GRAD", value: "June 2029" },
  ]

  return (
    <section
      id="about"
      style={{
        padding: "120px 48px",
        position: "relative",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Avatar blob */}
        <div
  style={{
    width: 320,
    height: 420,
    position: "relative",
    overflow: "hidden",
    boxShadow:
      "0 20px 50px rgba(10,148,99,0.16), 0 8px 24px rgba(137,49,201,0.12)",
  }}
>
  <img
    src="/headshot.jpg"
    alt="Samantha Oh"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

        {/* Setlist card */}
        <div className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}>
          <SectionLabel>{"The Setlist"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "var(--text)",
              margin: "0 0 20px",
            }}
          >
            ABOUT
            <br />
            <span style={{ color: "var(--green)" }}>ME.</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--muted)",
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            I'm Samantha Oh, an Informatics student at UW interested in making AI
            systems that actually work in the real world. I've built LLM agents
            at CACI, shipped UI features at NT Concepts, and published research
            at George Mason. Currently running PR for IUGA and looking for
            what's next.
          </p>

          {/* Setlist card */}
          <div
            style={{
              border: "1px solid rgba(30,25,15,0.1)",
              borderRadius: 12,
              background: "var(--bg-card)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--green)",
                padding: "8px 20px",
                fontFamily: "'Righteous', serif",
                fontSize: 13,
                letterSpacing: "0.15em",
                color: "#000",
              }}
            >
              TONIGHT'S SETLIST
            </div>
            {setlist.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "14px 20px",
                  borderBottom:
                    i < setlist.length - 1
                      ? "1px solid rgba(30,25,15,0.08)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Righteous', monospace",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "var(--muted)",
                    minWidth: 80,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--text)",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Projects ─────────────────────────────────────────────────────── */

function Projects() {
  const [ref, inView] = useInView()
  return (
    <section
      id="projects"
      style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 56 }}
        >
          <SectionLabel>{"Show Flyers"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: 0,
            }}
          >
            PROJECTS
            <br />
            <span style={{ color: "var(--blue)" }}>I'VE SHIPPED.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((proj, i) => (
            <ProjectCard
              key={proj.name}
              proj={proj}
              inView={inView}
              delay={i * 0.1 + 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  proj,
  inView,
  delay,
}: {
  proj: typeof projects[0]
  inView: boolean
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`card-tilt fade-up ${inView ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}s`,
        background: "var(--bg-card)",
        border: `1.5px solid ${
          hovered ? proj.color : "rgba(30,25,15,0.09)"
        }`,
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered ? `0 0 32px ${proj.color}33` : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Flyer header band */}
      <div
        style={{
          background: proj.color,
          padding: "20px 20px 12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: "'Righteous', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          {proj.year} · Live Demo
        </div>
        <div
          style={{
            fontFamily: "'Righteous', serif",
            fontSize: 28,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          {proj.name}
        </div>
        <div
          style={{
            fontFamily: "'Righteous', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.8)",
            fontStyle: "italic",
            marginTop: 4,
          }}
        >
          {proj.tagline}
        </div>
        {/* Grid texture on header */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Dashed separator (ticket perforation) */}
      <div
        style={{
          height: 1,
          borderTop: "1px dashed rgba(30,25,15,0.18)",
          margin: "0 12px",
        }}
      />

      {/* Body */}
      <div style={{ padding: "16px 20px 20px" }}>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: "var(--muted)",
            marginBottom: 16,
          }}
        >
          {proj.desc}
        </p>

        {/* Stack tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {proj.stack.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 10px",
                border: `1px solid ${proj.color}44`,
                borderRadius: 4,
                fontFamily: "'Righteous', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: proj.color,
                background: `${proj.color}11`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            ["GitHub ↗", proj.github],
            ["Demo ↗", proj.demo],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'Righteous', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = proj.color)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Experience ───────────────────────────────────────────────────── */

function Experience() {
  const [ref, inView] = useInView()
  return (
    <section
      id="experience"
      style={{
        padding: "100px 48px",
        position: "relative",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 64 }}
        >
          <SectionLabel>{"Festival Lineup"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: 0,
            }}
          >
            EXPERIENCE
            <br />
            <span style={{ color: "var(--purple)" }}>ON STAGE.</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, var(--purple), var(--blue), var(--green))",
              opacity: 0.4,
            }}
          />

          {experience.map((exp, i) => (
            <div
              key={exp.role}
              className={`fade-up fade-up-delay-${i + 1} ${
                inView ? "visible" : ""
              }`}
              style={{
                display: "flex",
                gap: 40,
                marginBottom: i < experience.length - 1 ? 56 : 0,
                paddingLeft: 60,
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: 11,
                  top: 12,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: exp.badgeColor,
                  boxShadow: `0 0 16px ${exp.badgeColor}`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: -6,
                    borderRadius: "50%",
                    border: `1px solid ${exp.badgeColor}`,
                    opacity: 0.4,
                    animation: "ping-slow 2s ease-out infinite",
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                {/* Poster-style header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      padding: "3px 10px",
                      background: exp.badgeColor,
                      borderRadius: 3,
                      fontFamily: "'Righteous', serif",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      color: "#fff",
                    }}
                  >
                    {exp.badge}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Righteous', monospace",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                      paddingTop: 4,
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Righteous', serif",
                    fontSize: 28,
                    color: "var(--text)",
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontFamily: "'Righteous', sans-serif",
                    fontSize: 14,
                    color: exp.badgeColor,
                    marginBottom: 12,
                    fontWeight: 500,
                  }}
                >
                  {exp.org}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    maxWidth: 560,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Skills ───────────────────────────────────────────────────────── */

function Skills() {
  const [ref, inView] = useInView()
  const cats = Array.from(new Set(skills.map((s) => s.cat)))

  return (
    <section
      id="skills"
      style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 64 }}
        >
          <SectionLabel>{"The Mix"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: 0,
            }}
          >
            SKILLS &<br />
            <span style={{ color: "var(--green)" }}>TECH STACK.</span>
          </h2>
        </div>

        {/* EQ visualizer */}
        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(30,25,15,0.09)",
            borderRadius: 16,
            padding: "40px 32px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Mixing board header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "'Righteous', monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--muted)",
                textTransform: "uppercase",
              }}
            >
              ◉ Channel Strip — EQ View
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {cats.map((cat) => (
                <div
                  key={cat}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: catColors[cat],
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Righteous', monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                    }}
                  >
                    {catLabels[cat]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EQ bars */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-end",
              height: 160,
            }}
          >
            {skills.map((skill, i) => (
              <EQBar
                key={skill.label}
                skill={skill}
                inView={inView}
                delay={i * 0.04}
              />
            ))}
          </div>

          {/* Scale lines */}
          {[25, 50, 75, 100].map((v) => (
            <div
              key={v}
              style={{
                position: "absolute",
                right: 32,
                bottom: `${(v / 100) * 160 + 86}px`,
                fontFamily: "'Righteous', monospace",
                fontSize: 9,
                color: "rgba(30,25,15,0.18)",
                pointerEvents: "none",
              }}
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EQBar({
  skill,
  inView,
  delay,
}: {
  skill: typeof skills[0]
  inView: boolean
  delay: number
}) {
  const color = catColors[skill.cat]
  const lowPct = Math.max(30, skill.pct - 30)
  const dur = skill.dur

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 6,
      }}
    >
      {/* Bar container */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          minHeight: 140,
        }}
      >
        {/* Track */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(30,25,15,0.06)",
            borderRadius: 4,
          }}
        />
        {/* Fill */}
        <div
          style={
            {
              width: "100%",
              height: inView ? `${skill.pct}%` : "4%",
              background: `linear-gradient(to top, ${color}, ${color}88)`,
              borderRadius: 4,
              boxShadow: inView ? `0 0 10px ${color}66` : "none",
              transition: `height 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
              position: "relative",
              animation: inView
                ? `eq-dance ${dur + 0.4}s ease-in-out ${delay * 0.5}s infinite alternate`
                : "none",
              "--eq-low": `${lowPct / skill.pct}`,
            } as CSSProperties & { "--eq-low": string }
          }
        />
      </div>
      {/* Label */}
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 9,
          letterSpacing: "0.08em",
          color: inView ? color : "var(--muted)",
          textAlign: "center",
          textTransform: "uppercase",
          transition: `color 0.4s ${delay}s`,
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
          height: 60,
          lineHeight: 1,
        }}
      >
        {skill.label}
      </div>
    </div>
  )
}

/* ─── Contact ──────────────────────────────────────────────────────── */

function Contact() {
  const [ref, inView] = useInView()
  const links = [
    { label: "EMAIL", href: "mailto:sgoh6@uw.edu", val: "sgoh6@uw.edu" },
    {
      label: "LINKEDIN",
      href: "https://linkedin.com/in/samantha-oh/",
      val: "linkedin.com/in/samantha-oh",
    },
    { label: "PHONE", href: "tel:5713961318", val: "571-396-1318" },
    { label: "RESUME", href: "#", val: "Download PDF ↗" },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(192,64,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}
      >
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          <SectionLabel>{"Backstage Pass"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: "0 0 16px",
            }}
          >
            LET'S BUILD
            <br />
            <span style={{ color: "var(--yellow)" }}>SOMETHING.</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Open to internships, collabs, side projects, and coffee chats. Slide
            in.
          </p>
        </div>

        {/* Backstage pass card */}
        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            border: "1.5px solid rgba(255,225,0,0.3)",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--bg-card)",
            boxShadow: "0 0 60px rgba(255,225,0,0.08)",
          }}
        >
          {/* Main pass body */}
          <div style={{ padding: "40px 40px" }}>
            <div
              style={{
                fontFamily: "'Righteous', monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "var(--muted)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              ◉ All Access · Valid Indefinitely
            </div>

            <div
              style={{
                fontFamily: "'Righteous', serif",
                fontSize: 40,
                color: "var(--text)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              SAMANTHA OH
            </div>
            <div
              style={{
                fontFamily: "'Righteous', sans-serif",
                fontSize: 14,
                color: "var(--yellow)",
                marginBottom: 36,
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Agentic AI Engineer · UW Informatics · Seattle
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {links.map((link) => (
                <div
                  key={link.label}
                  style={{ display: "flex", gap: 24, alignItems: "baseline" }}
                >
                  <span
                    style={{
                      fontFamily: "'Righteous', monospace",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      color: "var(--muted)",
                      minWidth: 72,
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--yellow)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                  >
                    {link.val}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stub */}
          <div
            style={{
              borderLeft: "1.5px dashed rgba(255,225,0,0.2)",
              width: 80,
              background: "rgba(255,225,0,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                fontFamily: "'Righteous', serif",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--yellow)",
                textTransform: "uppercase",
              }}
            >
              All Access Pass
            </div>
            <div style={{ marginTop: 16, fontSize: 20 }}>★</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ───────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(30,25,15,0.08)",
        padding: "28px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        © 2026 Samantha Oh · Built with React + Vite
      </div>
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
      </div>
    </footer>
  )
}

/* ─── App ──────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee
        items={[
          "Agentic AI Engineering",
          "UW Informatics",
          "Data Science",
          "Seattle WA",
          "Open to Work",
          "Building LLM Agents",
          "Agno · RAG · MCP Tools · React",
        ]}
      />
      <About />
      <Marquee
        items={[
          "Show Flyers",
          "Projects",
          "Ticket Stubs",
          "Music Rec System · Sip App · GSU Redesign",
        ]}
        reverse
      />
      <Projects />
      <Marquee
        items={[
          "Festival Lineup",
          "Experience",
          "CACI International",
          "NT Concepts",
          "George Mason University",
          "Research · Intern · PR Director",
        ]}
      />
      <Experience />
      <Skills />
      <Marquee
        items={[
          "Backstage Pass",
          "All Access",
          "Let's Build",
          "Open to Work",
          "Coffee Chats Welcome",
          "sgoh6@uw.edu",
        ]}
        reverse
      />
      <Contact />
      <Footer />
    </div>
  )
}