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
      tags: [],
    },
    {
      label: "Interests",
      title: "Outside of Work",
      body:
        "I love going to concerts, some of my recent favorites were Tate McRae and Madison Beer. I also love exploring new coffee and matcha spots, you can usually find me in a café on the weekends. Also, I've recently been trying to get back into reading!",
      tags: [],
    },
  ]

  return (
    <section id="hobbies" className="section section-soft">
      <div className="container" ref={ref}>
        <div className={`section-heading fade-up ${inView ? "visible" : ""}`}>
          <div>
            <SectionLabel>Hobbies</SectionLabel>
            <h2 className="section-title">Off <em>the clock</em>.</h2>
          </div>
        </div>
        <div className="hobby-grid">
          {cards.map((card) => (
            <article key={card.title} className="hobby-card">
              <span className="section-label">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.tags.length > 0 && <div className="hobby-tags">
                {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
