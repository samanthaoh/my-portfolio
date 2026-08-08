import Nav from "./Nav"
import Hero from "./Hero"
import Marquee from "./Marquee"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import SideStage from "./SideStage"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer"

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee
        items={[
          "Agentic AI Engineering",
          "UW Informatics",
          "Data Science",
          "Seattle WA",
          "Open to Work",
          "Building LLM Agents",
          "Agno · RAG · MCP Tools · React",
        ]}
      />
      <About />
      <Marquee
        items={[
          "Show Flyers",
          "Projects",
          "Ticket Stubs",
          "Music Rec System · Sip App · GSU Redesign",
        ]}
        reverse
      />
      <Projects />
      <Marquee
        items={[
          "Festival Lineup",
          "Experience",
          "CACI International",
          "NT Concepts",
          "George Mason University",
          "Research · Intern · PR Director",
        ]}
      />
      <Experience />
      <SideStage />
      <Skills />
      <Marquee
        items={[
          "Backstage Pass",
          "All Access",
          "Let's Build",
          "Open to Work",
          "Coffee Chats Welcome",
          "sgoh6@uw.edu",
        ]}
        reverse
      />
      <Contact />
      <Footer />
    </div>
  )
}