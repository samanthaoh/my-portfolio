import { useState } from "react"
import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { projects } from "./data"

/* ─── Projects ─────────────────────────────────────────────────────── */

export default function Projects() {
  const [ref, inView] = useInView()
  return (
    <section
      id="projects"
      style={{ padding: "120px 32px", maxWidth: 1000, margin: "0 auto" }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 48 }}
        >
          <SectionLabel pastel="var(--pastel-peach)" ink="var(--ink-peach)">
            {"Projects"}
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            Things I've <em>shipped</em>.
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
        background: hovered ? proj.pastel : "var(--bg-card)",
        border: `1px solid ${hovered ? "transparent" : "var(--border)"}`,
        borderRadius: 20,
        padding: "28px 26px",
        cursor: "pointer",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.07)" : "0 1px 4px rgba(26,24,20,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 400,
            fontSize: 22,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {proj.name}
        </h3>
        <span
          style={{
            fontFamily: "'Elms Sans', sans-serif",
            fontSize: 12,
            color: proj.ink,
            background: proj.pastel,
            padding: "3px 10px",
            borderRadius: 100,
            fontWeight: 500,
          }}
        >
          {proj.year}
        </span>
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "var(--muted)",
          marginBottom: 8,
        }}
      >
        {proj.tagline}
      </p>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "var(--muted)",
          marginBottom: 18,
        }}
      >
        {proj.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {proj.stack.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'Elms Sans', sans-serif",
              fontSize: 12,
              color: proj.ink,
              background: hovered ? "rgba(255,255,255,0.55)" : proj.pastel,
              borderRadius: 100,
              padding: "4px 12px",
              fontWeight: 500,
              transition: "background 0.3s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {[
          ["GitHub ↗", proj.github],
          ["Demo ↗", proj.demo],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "'Elms Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.04em",
              color: "var(--muted)",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = proj.ink)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}