import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
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
          ? 'bg-navy/80 backdrop-blur-xl border-b border-white/[0.06] shadow-card'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-section flex items-center justify-between h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="text-lg sm:text-xl font-bold text-white tracking-tight"
        >
          Aryan<span className="gradient-text">.dev</span>
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
              className={`nav-link ${
                activeSection === link.href.replace('#', '')
                  ? 'text-white after:w-full'
                  : ''
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
            className="btn-icon"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="btn-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden btn-icon"
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
            className="lg:hidden overflow-hidden bg-navy/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="container-section flex flex-col py-6 gap-4">
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
                      ? 'text-accent-cyan'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="btn-icon">
                  <FaGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="btn-icon">
                  <FaLinkedin />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="btn-primary flex-1"
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
