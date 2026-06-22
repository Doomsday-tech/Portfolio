import { motion } from 'framer-motion'
import { FaDownload, FaFileAlt, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/data'

const highlights = [
  'Updated with latest projects & internships',
  'Skills, education and contact details',
  'Optimized for ATS & recruiter screening',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Resume"
          title="Get a copy of my resume."
          description="A quick overview of my education, skills, projects and experience — ready to share with recruiters."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-12 glass-card glass-card-hover p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="relative shrink-0">
            <div className="h-32 w-24 sm:h-40 sm:w-32 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-glow">
              <FaFileAlt className="text-4xl sm:text-5xl text-accent-blue" />
            </div>
            <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-lg bg-accent-gradient flex items-center justify-center text-navy shadow-glow">
              <FaCheckCircle />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white">Aryan Ahire — Resume</h3>
            <p className="mt-2 text-sm text-slate-400">
              PDF format · Updated 2026
            </p>
            <ul className="mt-4 space-y-2">
              {highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-slate-400 justify-center sm:justify-start"
                >
                  <FaCheckCircle className="text-accent-cyan shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <a href={profile.resumeUrl} download className="btn-primary w-full sm:w-auto shrink-0">
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
