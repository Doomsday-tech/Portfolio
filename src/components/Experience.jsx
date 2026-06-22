import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Experience"
          title="Where I&apos;ve worked."
          description="Hands-on virtual internships where I applied my skills to real-world business and security challenges."
        />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/50 via-accent-cyan/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                className="relative flex items-start gap-6 pl-0"
              >
                <div className="relative z-10 flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-accent-gradient flex items-center justify-center text-navy text-base sm:text-lg shadow-glow">
                  <FaBriefcase />
                </div>

                <div className="glass-card glass-card-hover flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <span className="pill w-fit">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent-cyan mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
