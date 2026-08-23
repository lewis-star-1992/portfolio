import { About } from "./components/About"
import { Capabilities } from "./components/Capabilities"
import { Connect } from "./components/Connect"
import { Credibility } from "./components/Credibility"
import { Experience } from "./components/Experience"
import { Expertise } from "./components/Expertise"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { useReveal, useScrollProgress } from "./hooks/useUi"

export default function App() {
  const { progress, scrolled } = useScrollProgress()
  useReveal()

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Expertise />
        <Experience />
        <Capabilities />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
