import { useEffect, useState } from "react"
import { projects, experience, skills } from "./data"

const navItems = ["about", "experience", "projects", "skills", "contact"]

const skillColors: Record<string, { bg: string; ink: string }> = {
  lang: {
    bg: "var(--pastel-blue)",
    ink: "var(--ink-blue)",
  },
  frame: {
    bg: "var(--pastel-mint)",
    ink: "var(--ink-mint)",
  },
  ml: {
    bg: "var(--pastel-lavender)",
    ink: "var(--ink-lavender)",
  },
  tool: {
    bg: "var(--pastel-peach)",
    ink: "var(--ink-peach)",
  },
}

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
              <a key={item} href={`#${item}`} className="nav-link">
                {item}
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
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
        <div className="hero-blob hero-blob-three" />

        <div className="container hero-content">
          <div className="availability fade-up fade-up-1">
            <span className="availability-dot" />
            Open to work · Seattle, WA
          </div>

          <h1 className="hero-title fade-up fade-up-2">
            Samantha
            <br />
            <em>Oh</em>
          </h1>

          <p className="hero-description fade-up fade-up-3">
            Informatics student at the University of Washington building
            thoughtful products and AI systems, from agentic workflows to
            interfaces people actually enjoy using.
          </p>

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
              Let's connect
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
            <span className="section-label label-lavender">
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
              <Detail
                label="School"
                value="University of Washington"
                bg="var(--pastel-lavender)"
                ink="var(--ink-lavender)"
              />

              <Detail
                label="Degree"
                value="B.S. Informatics · Data Science"
                bg="var(--pastel-blue)"
                ink="var(--ink-blue)"
              />

              <Detail
                label="Focus"
                value="Agentic AI + Data + UX"
                bg="var(--pastel-mint)"
                ink="var(--ink-mint)"
              />

              <Detail
                label="Graduating"
                value="June 2029"
                bg="var(--pastel-peach)"
                ink="var(--ink-peach)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label label-blue">
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
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.role}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label label-peach">
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

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="container">
          <span className="section-label label-mint">
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
                    .map((skill) => {
                      const colors = skillColors[skill.cat]

                      return (
                        <span
                          key={skill.label}
                          className="skill-pill"
                          style={
                            {
                              "--skill-bg": colors.bg,
                              "--skill-ink": colors.ink,
                            } as React.CSSProperties
                          }
                        >
                          {skill.label}
                        </span>
                      )
                    })}
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
            <span className="section-label label-pink">
              Get in touch
            </span>

            <h2 className="contact-title">
              Let's build
              <br />
              <em>something good.</em>
            </h2>

            <p className="contact-description">
              Always open to exciting projects, internships, collaborations,
              and coffee chats.
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

            <a href="#" className="contact-link">
              <span>Resume</span>
              <span>Download PDF ↗</span>
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
  bg,
  ink,
}: {
  label: string
  value: string
  bg: string
  ink: string
}) {
  return (
    <div
      className="detail-card"
      style={
        {
          "--detail-bg": bg,
          "--detail-ink": ink,
        } as React.CSSProperties
      }
    >
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[number]
  index: number
}) {
  const colors = [
    {
      bg: "var(--pastel-pink)",
      ink: "var(--ink-pink)",
    },
    {
      bg: "var(--pastel-blue)",
      ink: "var(--ink-blue)",
    },
    {
      bg: "var(--pastel-lavender)",
      ink: "var(--ink-lavender)",
    },
  ]

  const color = colors[index % colors.length]

  return (
    <article
      className="experience-card"
      style={
        {
          "--experience-bg": color.bg,
          "--experience-ink": color.ink,
        } as React.CSSProperties
      }
    >
      <div className="experience-date">
        {item.period}
      </div>

      <div className="experience-content">
        <div className="experience-topline">
          <span className="experience-badge">
            {item.badge}
          </span>
        </div>

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
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const colors = [
    {
      bg: "var(--pastel-lavender)",
      ink: "var(--ink-lavender)",
    },
    {
      bg: "var(--pastel-mint)",
      ink: "var(--ink-mint)",
    },
    {
      bg: "var(--pastel-peach)",
      ink: "var(--ink-peach)",
    },
  ]

  const color = colors[index % colors.length]

  return (
    <article
      className="project-card"
      style={
        {
          "--project-bg": color.bg,
          "--project-ink": color.ink,
        } as React.CSSProperties
      }
    >
      <div className="project-number">
        0{index + 1}
      </div>

      <div className="project-content">
        <div className="project-year">
          {project.year}
        </div>

        <h3>{project.name}</h3>

        <div className="project-tagline">
          {project.tagline}
        </div>

        <p>{project.desc}</p>

        <div className="project-stack">
          {project.stack.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            onClick={(event) => {
              if (project.github === "#") {
                event.preventDefault()
              }
            }}
          >
            GitHub ↗
          </a>

          <a
            href={project.demo}
            onClick={(event) => {
              if (project.demo === "#") {
                event.preventDefault()
              }
            }}
          >
            Demo ↗
          </a>
        </div>
      </div>
    </article>
  )
}
