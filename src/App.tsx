import { useEffect, useState } from "react"
import { projects, experience, skills } from "./data"
import OutsideOfWork from "./OutsideOfWork"

const navItems = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "side-stage", label: "hobbies" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
]


export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="site">
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo">
            samantha oh
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="container hero-content">
          <h1 className="hero-title fade-up fade-up-2">
            Samantha    Oh
          </h1>

          

          <div className="hero-meta fade-up fade-up-3">
            <span>Informatics @ UW</span>
            <span>·</span>
            <span>Agentic AI Engineering</span>
            <span>·</span>
            <span>Seattle, WA</span>
          </div>

          <div className="hero-actions fade-up fade-up-4">
            <a href="#projects" className="button button-primary">
              See my work
            </a>

            <a href="#contact" className="button button-secondary">
              Say hello!
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>scroll</span>
          <div />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-soft">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              src="/headshot.jpg"
              alt="Samantha Oh"
              className="about-image"
            />

            <div className="image-accent image-accent-pink" />
            <div className="image-accent image-accent-lavender" />
          </div>

          <div>
            <span className="section-label label-accent">
              About me
            </span>

            <h2 className="section-title">
              Building at the edge of{" "}
              <em>what AI can do.</em>
            </h2>

            <div className="about-copy">
              <p>
                I'm Samantha Oh, an Informatics student at UW interested in
                making AI systems that actually work in the real world. I've
                built LLM agents at CACI, shipped UI features at NT Concepts,
                and published research at George Mason. Currently running PR
                for IUGA and looking for what's next.
              </p>
            </div>

            <div className="about-details">
              <Detail label="School" value="University of Washington" />
              <Detail label="Degree" value="B.S. Informatics · Data Science" />
              <Detail label="Focus" value="Agentic AI + Data + Product" />
              <Detail label="Graduating" value="June 2029" />
            </div>
          </div>
        </div>
      </section>

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

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-blob contact-blob-one" />
        <div className="contact-blob contact-blob-two" />

        <div className="container contact-grid">
          <div>
            <span className="section-label label-accent">
              Get in touch
            </span>

            <h2 className="contact-title">
              Let's build
              <br />
              <em>something cool.</em>
            </h2>

            <p className="contact-description">
              Always open to exciting projects, internships,
              and grabbing coffee (or matcha!) 
            </p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:sgoh6@uw.edu"
              className="contact-link contact-link-primary"
            >
              <span>Email</span>
              <span>sgoh6@uw.edu ↗</span>
            </a>

            <a
              href="https://linkedin.com/in/samantha-oh/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <span>View profile ↗</span>
            </a>

            <a 
              href="/SamanthaOhResume.pdf"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
              <span>Download PDF ↗</span>
            </a>
            <a 
              href="https://github.com/samanthaoh"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
              <span>View profile ↗</span>
            </a>
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

function Detail({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="detail-card">
      <span>{label}</span>
      <strong>{value}</strong>
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