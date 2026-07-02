import React from "react"
import Welcome from "./welcome"
import Navbar from "./navbar"
import Workbutton from "./workbutton"
import Projects from "./Projects"
import Process from "./Process"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <section id="home" className="hero-section">
        <Welcome />
        <Workbutton />
      </section>

      <Projects />

      <Process />

      <Services />

      <About />

      <Contact />
    </div>
  )
}

export default App
