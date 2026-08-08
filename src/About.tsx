import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

/* ─── About ────────────────────────────────────────────────────────── */

export default function About() {
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
