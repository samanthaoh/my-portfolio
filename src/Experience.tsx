import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { experience } from "./data"

/* ─── Experience ───────────────────────────────────────────────────── */

export default function Experience() {
  const [ref, inView] = useInView()
  return (
    <section
      id="experience"
      style={{ background: "var(--bg-section)", padding: "120px 32px" }}
    >
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 48 }}
        >
          <SectionLabel pastel="var(--pastel-blue)" ink="var(--ink-blue)">
            {"Experience"}
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
            Where I've <em>worked</em>.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experience.map((exp, i) => (
            <div
              key={exp.role}
              className={`fade-up fade-up-delay-${i + 1} ${inView ? "visible" : ""}`}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 24,
                background: exp.pastel,
                borderRadius: 16,
                padding: "28px 32px",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Elms Sans', sans-serif",
                  fontSize: 13,
                  color: exp.ink,
                  fontWeight: 500,
                }}
              >
                {exp.period}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "'Elms Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: "0 0 4px",
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontFamily: "'Elms Sans', sans-serif",
                    fontSize: 14,
                    color: exp.ink,
                    fontWeight: 500,
                    marginBottom: 12,
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
                    margin: 0,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 640px) { #experience [style*="grid-template-columns: 140px"] { grid-template-columns: 1fr !important; gap: 8px !important; } }`}</style>
    </section>
  )
}