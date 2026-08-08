import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

export default function SideStage() {
  const [ref, inView] = useInView()

  const cards = [
    {
      label: "LEADERSHIP",
      color: "var(--pink)",
      title: "Director of PR, IUGA",
      body:
        "I handle PR for the UW Informatics Undergraduate Association, where I'm building our brand identity and marketing events to a 1,000+ follower community. My goal is to bridge the gap between Informatics students, the broader campus, and career opportunities. ",
      tags: ["Event Planning", "Brand System", "Social Strategy"],
    },
    {
      label: "OFF STAGE",
      color: "var(--blue)",
      title: "Outside of Work",
      body:
        "I love going to concerts, some of my recent favorites were Tate McRae and Madison Beer. I also love exploring new coffee and matcha spots, you can usually find me in a café on the weekends. Also, I've recently been trying to get back into reading!",
      tags: ["Café Hopping", "Reading", "Concerts"],
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
