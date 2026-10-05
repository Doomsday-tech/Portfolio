import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import TerminalLoader from './components/TerminalLoader' // We will create this next
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <TerminalLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* We apply a global dark theme here (bg-zinc-950) to match the new vibe */}
      <div className={`relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-300 ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App