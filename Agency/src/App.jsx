import React from "react"
import Welcome from "./welcome"
import Navbar from "./navbar"
import Workbutton from "./workbutton"
import Process from "./Process"
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

      <Process />

      <About />

      <Contact />
    </div>
  )
}

export default App
