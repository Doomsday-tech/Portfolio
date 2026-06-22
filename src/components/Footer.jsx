import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { profile, navLinks } from '../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-section py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-white tracking-tight">
              Aryan<span className="gradient-text">.dev</span>
            </a>
            <p className="mt-3 text-sm text-slate-500 max-w-xs">
              Computer Science Engineer crafting full-stack &amp; AI-driven products.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="btn-icon">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="btn-icon">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="btn-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn-icon h-10 w-10"
          >
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  )
}
