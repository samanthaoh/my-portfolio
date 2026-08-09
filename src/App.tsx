import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import OutsideOfWork from "./OutsideOfWork"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer"

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OutsideOfWork />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}