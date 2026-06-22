import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile } from '../data/data'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern [background-size:48px_48px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-blue/20 blur-[120px] -z-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-accent-cyan/15 blur-[110px] -z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-section relative w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-3xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 pill mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
            </span>
            Open to Software Engineering Internships &amp; Roles
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg sm:text-xl font-medium text-slate-300 text-balance"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            {profile.intro}
          </motion.p>

         <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
  <a
    href="/Aryan_Ahire_Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
  >
    <FaDownload className="text-sm" />
    Download Resume
  </a>

  <button
    onClick={() => scrollTo('#contact')}
    className="btn-secondary"
  >
    Contact Me
    <FaArrowRight className="text-sm" />
  </button>
</motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
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
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="btn-icon"
            >
              <HiOutlineMail className="text-lg" />
            </a>
            <span className="text-sm text-slate-500 ml-2">{profile.location}</span>
          </motion.div>
        </motion.div>

        {/* Floating code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
          className="hidden lg:block absolute right-10 top-32 w-[360px] animate-float"
        >
          <div className="glass-card p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 shadow-glow">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-auto text-slate-500">profile.json</span>
            </div>
            <pre className="whitespace-pre-wrap">
{`{
  "name": "Aryan Ahire",
  "role": "Full Stack Developer",
  "focus": [
    "AI / ML",
    "Cybersecurity",
    "DSA"
  ],
  "status": "Open to work",
  "location": "Maharashtra, IN"
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
