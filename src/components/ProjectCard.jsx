import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaFolderOpen } from 'react-icons/fa'

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      className="glass-card glass-card-hover group flex flex-col overflow-hidden"
    >
      {/* Header / preview area */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-grid-pattern [background-size:28px_28px] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FaFolderOpen className="text-5xl text-white/15 group-hover:text-white/25 group-hover:scale-110 transition-all duration-500" />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-navy/60 backdrop-blur-md text-slate-200 transition-all duration-300 hover:border-accent-blue/40 hover:text-accent-cyan hover:-translate-y-0.5"
            >
              <FaGithub />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-navy/60 backdrop-blur-md text-slate-200 transition-all duration-300 hover:border-accent-blue/40 hover:text-accent-cyan hover:-translate-y-0.5"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-accent-cyan inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-300 inline-flex items-center gap-1.5 hover:text-white hover:gap-2.5 transition-all duration-300"
            >
              Source Code <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
