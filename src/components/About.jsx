import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaLayerGroup,
  FaBrain,
  FaShieldAlt,
  FaPuzzlePiece,
  FaSeedling,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { aboutHighlights, profile } from '../data/data'

const iconMap = {
  FaGraduationCap,
  FaLayerGroup,
  FaBrain,
  FaShieldAlt,
  FaPuzzlePiece,
  FaSeedling,
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="About Me"
          title="Building software with purpose &amp; precision."
          description={`I'm a ${profile.education.degree} student at ${profile.education.institute} (${profile.education.university}), driven by curiosity and a love for solving real problems with code.`}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {aboutHighlights.map((highlight) => {
            const Icon = iconMap[highlight.icon]
            return (
              <motion.div
                key={highlight.title}
                variants={item}
                className="glass-card glass-card-hover p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-accent-gradient flex items-center justify-center text-navy text-xl mb-5 shadow-glow">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
