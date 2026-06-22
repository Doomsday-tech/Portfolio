import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaRocket } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/data'

const iconMap = { FaTrophy, FaMedal, FaRocket }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones along the way."
          description="Recognitions and highlights from competitive events and project work."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon]
            return (
              <motion.div
                key={achievement.title}
                variants={item}
                className="glass-card glass-card-hover p-6 text-center sm:text-left"
              >
                <div className="h-12 w-12 rounded-xl bg-accent-gradient flex items-center justify-center text-navy text-xl mb-5 mx-auto sm:mx-0 shadow-glow">
                  <Icon />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 text-balance">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
