import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { experience } from "./data"

/* ─── Experience ───────────────────────────────────────────────────── */

export default function Experience() {
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
              className={`fade-up fade-up-delay-${i + 1} ${inView ? "visible" : ""
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
