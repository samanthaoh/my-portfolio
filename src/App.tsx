import { projects, experience, skills, catLabels } from "./data"
import OutsideOfWork from "./OutsideOfWork"
import Butterfly from "./Butterfly"
import ProjectPreview from "./ProjectPreview"

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "hobbies", label: "HOBBIES" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
]

export default function App() {
  return (
    <div className="site">
      <div className="portfolio-home" id="top">
        <header className="home-header">
          <a href="#top" className="home-name" aria-label="Samantha Oh, back to top"><img src="/favicon.svg" alt="" width="48" height="48" /></a>
          <nav className="home-nav" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
          </nav>
        </header>
        <main id="about" className="open-hero composed-hero">
          <div className="hero-portrait-composition">
            <div className="hero-photo-frame">
              <img src="/figma/portrait.png" alt="Samantha Oh" width="240" height="338" />
              <div className="polaroid-caption">
                <span className="polaroid-signature" aria-hidden="true">Samantha</span>
              </div>
            </div>
            <div className="hero-photo-butterfly"><Butterfly /></div>
          </div>
          <div className="hero-introduction">
            <div className="hero-signature"><h1>Samantha <span>Oh.</span></h1></div>
            <div className="hero-statement">
              <h2>Building AI for <span>social good.</span><br />Through thoughtful products.</h2>
              <p>Hi! I'm Samantha Oh, an Informatics student at UW in Seattle and originally from the DC area.</p>
              <nav className="hero-profile-links" aria-label="Connect with Samantha">
                <a href="https://linkedin.com/in/samantha-oh/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a href="https://github.com/samanthaoh" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href="mailto:sgoh6@uw.edu">Email <span aria-hidden="true">↗</span></a>
                <a href="/SamanthaOhResume.pdf" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
              </nav>
            </div>
          </div>
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

          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
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


          <div className="skills-by-category">
            {Object.entries(catLabels).map(([category, label]) => (
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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const links = [
    ["Website ↗", project.demo],
    ["Demo ↗", "video" in project ? project.video : undefined],
    ["Devpost ↗", "devpost" in project ? project.devpost : undefined],
    ["GitHub ↗", project.github],
  ].filter(([, href]) => href && href !== "#")

  return (
    <article className="project-card">
      <ProjectPreview name={project.name} />
      <div className="project-copy">
      <div className="project-topline">
        <h3>{project.name}</h3>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.desc}</p>
      <div className="project-stack">
        {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      {links.length > 0 && (
        <div className="project-links">
          {links.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
      )}
      </div>
    </article>
  )
}
