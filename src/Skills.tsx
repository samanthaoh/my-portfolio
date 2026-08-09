import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { skills, catPastel, catInk } from "./data"

/* ─── Skills ───────────────────────────────────────────────────────── */

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section
      id="skills"
      style={{ padding: "120px 32px", maxWidth: 1000, margin: "0 auto" }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 40 }}
        >
          <SectionLabel pastel="var(--pastel-mint)" ink="var(--ink-mint)">
            {"Skills"}
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
            What I <em>work with</em>.
          </h2>
        </div>

        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          {skills.map((skill) => (
            <span
              key={skill.label}
              style={{
                fontFamily: "'Elms Sans', sans-serif",
                fontSize: 14,
                color: catInk[skill.cat],
                background: catPastel[skill.cat],
                borderRadius: 100,
                padding: "8px 18px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                cursor: "default",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}