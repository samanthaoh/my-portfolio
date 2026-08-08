import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

/* ─── Side Stage (leadership + interests) ─────────────────────────── */

export default function SideStage() {
  const [ref, inView] = useInView()

  const cards = [
    {
      label: "LEADERSHIP",
      color: "var(--pink)",
      title: "Director of PR, IUGA",
      body:
        "I run PR for UW's Informatics Undergrad Association. Built out the brand and visual system, ran exec board social, and planned events start to finish. Biggest one was iFormal, a boat party that sold out at around 250 people.",
      tags: ["Event Planning", "Brand System", "Social Strategy"],
    },
    {
      label: "OFF STAGE",
      color: "var(--blue)",
      title: "Outside of Work",
      body:
        "Big into live music, mostly house and electronic (not really an EDM person). I'm usually tracking down the next show or adding to a setlist somewhere. Otherwise probably tinkering with this site.",
      tags: ["Live Music", "House/Electronic", "Concerts"],
    },
  ]

  return (
    <section
      id="side-stage"
      style={{
        padding: "100px 48px",
        position: "relative",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 56 }}
        >
          <SectionLabel>{"Side Stage"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: 0,
            }}
          >
            OFF
            <br />
            <span style={{ color: "var(--pink)" }}>THE CLOCK.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`fade-up fade-up-delay-${i + 1} ${
                inView ? "visible" : ""
              }`}
              style={{
                border: "1px solid rgba(30,25,15,0.1)",
                borderRadius: 12,
                background: "var(--bg-card)",
                padding: "28px 28px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: card.color,
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                {card.label}
              </div>
              <h3
                style={{
                  fontFamily: "'Righteous', sans-serif",
                  fontSize: 24,
                  color: "var(--text)",
                  margin: "0 0 12px",
                  lineHeight: 1.1,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  marginBottom: 20,
                }}
              >
                {card.body}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 20,
                      border: `1px solid ${card.color}`,
                      color: card.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
