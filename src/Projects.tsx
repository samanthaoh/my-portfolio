import { useState } from "react"
import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { projects } from "./data"

export default function Projects() {
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
        border: `1.5px solid ${hovered ? proj.color : "rgba(30,25,15,0.09)"
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
