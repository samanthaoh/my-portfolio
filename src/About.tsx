import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

/* ─── About ────────────────────────────────────────────────────────── */

export default function About() {
  const [ref, inView] = useInView()
  const info = [
    { label: "Venue", value: "University of Washington, Seattle", pastel: "var(--pastel-mint)", ink: "var(--ink-mint)" },
    { label: "Stage", value: "B.S. Informatics, Data Science", pastel: "var(--pastel-blue)", ink: "var(--ink-blue)" },
    { label: "Headliner", value: "Agentic AI Intern @ CACI", pastel: "var(--pastel-lavender)", ink: "var(--ink-lavender)" },
    { label: "Role", value: "Director of PR @ IUGA", pastel: "var(--pastel-pink)", ink: "var(--ink-pink)" },
    { label: "Grad", value: "June 2029", pastel: "var(--pastel-peach)", ink: "var(--ink-peach)" },
  ]

  return (
    <section
      id="about"
      style={{ background: "var(--bg-section)", padding: "120px 32px" }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div className={`fade-up fade-up-delay-1 ${inView ? "visible" : ""}`}>
          <SectionLabel pastel="var(--pastel-lavender)" ink="var(--ink-lavender)">
            {"About Me"}
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: "0 0 24px",
            }}
          >
            Getting to know <em>me</em>.
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--muted)",
              marginBottom: 16,
              maxWidth: 460,
            }}
          >
            I'm Samantha Oh, an Informatics student at UW interested in making
            AI systems that actually work in the real world. I've built LLM
            agents at CACI, shipped UI features at NT Concepts, and published
            research at George Mason.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: 460,
            }}
          >
            Currently running PR for IUGA and looking for what's next.
          </p>
        </div>

        {/* Info stack */}
        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          {info.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 20px",
                background: item.pastel,
                borderRadius: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Elms Sans', sans-serif",
                  fontSize: 13,
                  color: item.ink,
                  opacity: 0.75,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Elms Sans', sans-serif",
                  fontSize: 14,
                  color: item.ink,
                  fontWeight: 600,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 720px) { #about > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  )
}