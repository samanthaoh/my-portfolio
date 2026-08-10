import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

export default function OutsideOfWork() {
  const [ref, inView] = useInView()

  const cards = [
    {
      label: "Leadership",
      title: "Director of PR, IUGA",
      body:
        "I handle PR for the UW Informatics Undergraduate Association, where I'm building our brand identity and marketing events to a 1,000+ follower community. My goal is to bridge the gap between Informatics students, the broader campus, and career opportunities.",
      tags: ["Event Planning", "Brand System", "Social Strategy"],
    },
    {
      label: "Interests",
      title: "Outside of Work",
      body:
        "I love going to concerts, some of my recent favorites were Tate McRae and Madison Beer. I also love exploring new coffee and matcha spots, you can usually find me in a café on the weekends. Also, I've recently been trying to get back into reading!",
      tags: ["Concerts", "Café Hopping", "Reading"],
    },
  ]

  return (
    <section id="side-stage" className="section section-soft">
      <div className="container">
        <div ref={ref}>
          <div
            className={`fade-up ${inView ? "visible" : ""}`}
            style={{ marginBottom: 48 }}
          >
            <SectionLabel>{"Hobbies"}</SectionLabel>
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
              Off <em>the clock</em>.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`fade-up fade-up-delay-${i + 1} ${inView ? "visible" : ""}`}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  background: "var(--bg-card)",
                  padding: "28px 26px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Elms Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: 14,
                  }}
                >
                  {card.label}
                </span>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 400,
                    fontSize: 22,
                    color: "var(--text)",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    marginBottom: 18,
                  }}
                >
                  {card.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Elms Sans', sans-serif",
                        fontSize: 12,
                        padding: "4px 12px",
                        borderRadius: 8,
                        background: "var(--chip-bg)",
                        color: "var(--chip-text)",
                        fontWeight: 500,
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
      </div>
    </section>
  )
}