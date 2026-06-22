import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I&apos;ve built."
          description="A selection of full-stack, AI and security projects that reflect how I think, build and ship software end-to-end."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
