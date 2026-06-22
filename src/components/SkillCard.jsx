import { motion } from 'framer-motion'
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaProjectDiagram,
  FaLayerGroup,
  FaBrain,
  FaLanguage,
  FaShieldAlt,
  FaCode,
} from 'react-icons/fa'
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiMysql } from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'

const iconMap = {
  Java: FaJava,
  Python: FaPython,
  'C++': SiCplusplus,
  C: TbLetterC,
  SQL: SiMysql,
  JavaScript: FaJsSquare,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  'Data Structures & Algorithms': FaProjectDiagram,
  'Full Stack Development': FaLayerGroup,
  'Machine Learning': FaBrain,
  NLP: FaLanguage,
  Cybersecurity: FaShieldAlt,
}

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SkillCard({ name }) {
  const Icon = iconMap[name] || FaCode

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.03 }}
      className="glass-card glass-card-hover flex items-center gap-3 px-4 py-3.5 group"
    >
      <span className="text-xl sm:text-2xl text-accent-blue group-hover:text-accent-cyan transition-colors duration-300 shrink-0">
        <Icon />
      </span>
      <span className="text-sm sm:text-[15px] font-medium text-slate-200">{name}</span>
    </motion.div>
  )
}
