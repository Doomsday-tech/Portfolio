import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'
import { skillCategories } from '../data/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Skills &amp; Technologies"
          title="My technical toolkit."
          description="A blend of languages, frameworks, and tools I use to design, build and ship full-stack and AI-powered applications."
        />

        <div className="mt-12 space-y-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                {category.title}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
