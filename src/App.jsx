import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

// Register the @gsap/react plugin once at the root level
gsap.registerPlugin(useGSAP)

function App() {
  return (
    <>
      {/* Fixed UI overlays */}
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
