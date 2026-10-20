import { useState } from "react"
import { projects, experience, skills } from "./data"
import OutsideOfWork from "./OutsideOfWork"

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "side-stage", label: "HOBBIES" },
  { id: "projects", label: "PROJECTS" },
]

export default function App() {
  return (
    <div className="site">
      <div className="portfolio-home" id="top">
        <header className="home-header">
          <a href="#top" className="home-name">Samantha Oh</a>
          <nav className="home-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>{item.label}</a>
            ))}
          </nav>
        </header>
        <main className="home-grid">
          <section className="home-intro home-card" aria-labelledby="home-title">
            <h1 id="home-title">Building AI for <span>Social Good</span> through products.</h1>
          </section>
          <section id="about" className="home-bio home-card" aria-label="About Samantha">
            <p>Hi! I'm Samantha Oh, an Informatics student at UW in Seattle and originally from the DC area.</p>
          </section>
          <div className="home-art home-card">
            <img src="/figma/abstract.png" alt="" />
          </div>
          <section className="home-focus home-card" aria-labelledby="focus-title">
            <h2 id="focus-title">Focuses:</h2>
            <ul><li>Agentic AI</li><li>Data</li><li>Product</li></ul>
          </section>
          <div className="home-portrait home-card">
            <img src="/figma/portrait.png" alt="Samantha Oh" />
          </div>
          <section id="home-contact" className="home-contact home-card" aria-label="Contact">
            <a className="home-contact-top" href="mailto:sgoh6@uw.edu">
              <span>Have some<br />questions?</span>
              <img src="/figma/arrow.svg" alt="" width="38" height="38" />
            </a>
            <a className="home-email" href="mailto:sgoh6@uw.edu">sgoh6@uw.edu</a>
            <div className="home-socials">
              <a href="https://linkedin.com/in/samantha-oh/" target="_blank" rel="noopener noreferrer">LinkedIn<img src="/figma/social-arrow.svg" alt="" width="29" height="23" /></a>
              <a href="https://github.com/samanthaoh" target="_blank" rel="noopener noreferrer">GitHub<img src="/figma/social-arrow.svg" alt="" width="29" height="23" /></a>
              <a href="/SamanthaOhResume.pdf" target="_blank" rel="noopener noreferrer">Resume<img src="/figma/social-arrow.svg" alt="" width="29" height="23" /></a>
            </div>
          </section>
        </main>
      </div>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label label-accent-2">
                Experience
              </span>

              <h2 className="section-title">
                Where I've <em>worked.</em>
              </h2>
            </div>

            <p>
              A mix of software engineering, AI research, and building
              systems that solve practical problems.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <ExperienceCard
                key={item.role}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUTSIDE OF WORK */}
      <OutsideOfWork />

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label label-accent">
                Projects
              </span>

              <h2 className="section-title">
                Things I've <em>made.</em>
              </h2>
            </div>

            <p>
              Projects where engineering, data, product thinking, and user
              experience overlap.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                delay={index * 0.1 + 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-soft">
        <div className="container">
          <span className="section-label label-accent-2">
            Skills
          </span>

          <h2 className="section-title">
            What I work <em>with.</em>
          </h2>

          <div className="skills-intro">
            Technical tools I've used across coursework, internships,
            research, and personal projects.
          </div>

          <div className="skills-by-category">
            {[
              ["lang", "Languages"],
              ["frame", "Frameworks"],
              ["ml", "ML / AI"],
              ["tool", "Tools"],
            ].map(([category, label]) => (
              <div key={category} className="skill-category">
                <div className="skill-category-title">
                  {label}
                </div>

                <div className="skill-pills">
                  {skills
                    .filter((skill) => skill.cat === category)
                    .map((skill) => (
                      <span key={skill.label} className="skill-pill">
                        {skill.label}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-name">
            samantha oh
          </span>

          <span className="footer-copy">
            © 2026 Samantha Oh · Built with React + Vite
          </span>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({
  item,
}: {
  item: (typeof experience)[number]
}) {
  return (
    <article className="experience-card">
      <div className="experience-date">
        {item.period}
      </div>

      <div className="experience-content">
        <h3>{item.role}</h3>

        <div className="experience-org">
          {item.org}
        </div>

        <p>{item.desc}</p>
      </div>
    </article>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[number]
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fade-up"
      style={{
        transitionDelay: `${delay}s`,
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 20,
        padding: "28px 26px",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.07)"
          : "0 1px 4px rgba(26,24,20,0.04)",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 400,
            fontSize: 22,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {project.name}
        </h3>
        <span
          style={{
            fontFamily: "'Elms Sans', sans-serif",
            fontSize: 12,
            color: "var(--muted)",
            padding: "3px 0",
            fontWeight: 500,
          }}
        >
          {project.year}
        </span>
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "var(--muted)",
          marginBottom: 8,
        }}
      >
        {project.tagline}
      </p>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "var(--muted)",
          marginBottom: 18,
        }}
      >
        {project.desc}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 20,
        }}
      >
        {project.stack.map((technology) => (
          <span
            key={technology}
            style={{
              fontFamily: "'Elms Sans', sans-serif",
              fontSize: 12,
              color: "var(--chip-text)",
              background: "var(--chip-bg)",
              borderRadius: 8,
              padding: "4px 12px",
              fontWeight: 500,
            }}
          >
            {technology}
          </span>
        ))}
      </div>

      {/* <div style={{ display: "flex", gap: 16 }}>
        {[
          ["GitHub ↗", project.github],
          ["Demo ↗", project.demo],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={(event) => {
              if (href === "#") event.preventDefault()
            }}
            style={{
              fontFamily: "'Elms Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.04em",
              color: "var(--muted)",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div> */}
    </div>
  )
}
