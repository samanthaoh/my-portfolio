import { useInView } from "./useInView"

export default function OutsideOfWork() {
  const [ref, inView] = useInView()

  const cards = [
    {
      label: "Leadership",
      title: "Director of PR, IUGA",
      body:
        "I handle PR for the UW Informatics Undergraduate Association, where I'm building our brand identity and marketing events to a 1,000+ follower community. My goal is to bridge the gap between Informatics students, the broader campus, and career opportunities.",
    },
    {
      label: "Interests",
      title: "Outside of Work",
      body:
        "I love going to concerts, some of my recent favorites were Tate McRae and Madison Beer. I also love exploring new coffee and matcha spots, you can usually find me in a café on the weekends. Also, I've recently been trying to get back into reading!",
    },
  ]

  return (
    <section id="hobbies" className="section section-soft">
      <div className="container" ref={ref}>
        <div className={`section-heading fade-up ${inView ? "visible" : ""}`}>
          <div>
            <h2 className="section-title">fun</h2>
          </div>
        </div>
        <div className="hobby-grid">
          {cards.map((card) => (
            <article key={card.title} className="hobby-card">
              <div className="hobby-card-header">
                <span className="section-label">{card.label}</span>
                <svg className="hobby-illustration" viewBox="0 0 120 80" fill="none" aria-hidden="true">
                  {card.label === "Leadership" ? (
                    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M25 40 74 20v40L25 45Z" fill="#e1dae3" />
                      <path d="m35 49 6 18h13l-7-22M74 27v26M84 20l10-7m-9 26h14M84 58l10 7" />
                      <rect x="15" y="32" width="10" height="20" rx="4" fill="#ffffff" />
                    </g>
                  ) : (
                    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 32h43l-5 30q-15 10-33 0ZM58 38c24-5 20 26-4 21M27 13q-6 6 0 12m14-16q-6 6 0 12" />
                      <ellipse cx="36" cy="32" rx="21" ry="5" fill="#e1dae3" />
                      <path d="M85 53V20l22-5v31m-22-17 22-5" />
                      <ellipse cx="79" cy="54" rx="6" ry="4" fill="#e1dae3" />
                      <ellipse cx="101" cy="47" rx="6" ry="4" fill="#e1dae3" />
                    </g>
                  )}
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
