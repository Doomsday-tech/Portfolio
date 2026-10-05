import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { navLinks, profile } from '../data/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)

      let current = 'home'
      for (const link of navLinks) {
        const el = document.querySelector(link.href)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = link.href.replace('#', '')
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-section flex items-center justify-between h-16 sm:h-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="text-lg sm:text-xl font-bold text-white tracking-tight"
        >
          Aryan<span className="text-cyan-400">.dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-cyan-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 text-zinc-400 hover:text-cyan-400 bg-zinc-900/50 border border-zinc-800 rounded-lg transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 text-zinc-400 hover:text-cyan-400 bg-zinc-900/50 border border-zinc-800 rounded-lg transition-colors"
          >
            <FaLinkedin />
          </a>
          
          {/* Resume Quick Link Button */}
          <a
            href="/Aryan%20Ahire%20Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
          >
            <FaFilePdf /> Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors ml-1"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800"
          >
            <div className="container-section flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`text-base font-medium py-1.5 transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cyan-400'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="p-2.5 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <FaGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="p-2.5 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <FaLinkedin />
                </a>
                <a
                  href="/Aryan%20Ahire%20Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2.5 text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg flex items-center gap-2"
                >
                  <FaFilePdf /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-cyan-400 rounded-lg flex-1 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}