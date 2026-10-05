import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProjects = [
  {
    title: "ShardDB",
    tech: ["Java", "TCP Sockets", "Concurrency", "File I/O"],
    description: "Built a distributed, multi-threaded key-value database from scratch in Java to seamlessly handle concurrent client connections. Features a custom Write-Ahead Log (WAL) for instant crash recovery and a master routing node for dynamic traffic balancing.",
    link: "https://github.com/Doomsday-tech/sharddb",
    github: "https://github.com/Doomsday-tech/sharddb",
  },
  {
    title: "Nodex",
    tech: ["Python", "FastAPI", "React", "Random Forest"],
    description: "Architected an auto-scaling cloud engine using a Python FastAPI backend and an interactive React dashboard. Trained a Random Forest Regressor to predict server overloads before they happen by analyzing live RAM usage patterns.",
    link: "https://github.com/Doomsday-tech/Nodex",
    github: "https://github.com/Doomsday-tech/Nodex",
  },
  {
    title: "Duely",
    tech: ["React", "Node.js", "Prisma ORM", "Tailwind CSS"],
    description: "Engineered a full-stack web platform that helps users securely manage personal documents, deadlines, and expiry dates. Designed a strict relational database schema using Prisma ORM to guarantee data integrity alongside secure authentication.",
    link: "https://duely-qljh.onrender.com/",
    github: "https://github.com/Doomsday-tech/Duely",
  }
];

const otherProjects = [
  {
    title: "Interviewa",
    tech: ["React", "Node.js", "Full Stack"],
    description: "Mock interview full-stack web application designed to help candidates practice technical and behavioral questions.",
    github: "https://github.com/Doomsday-tech"
  },
  {
    title: "HabitFlow",
    tech: ["React", "JavaScript", "Tailwind"],
    description: "Frontend web application built for tracking worker daily activities, productivity routines, and consistency metrics.",
    github: "https://github.com/Doomsday-tech"
  },
  {
    title: "LawRAG & Constrag",
    tech: ["Python", "Google GenAI SDK", "LlamaIndex"],
    description: "RAG-based legal and construction document assistants leveraging vector search and generative AI models for precise querying.",
    github: "https://github.com/Doomsday-tech"
  },
  {
    title: "Password Security Analyzer",
    tech: ["Python", "Cybersecurity", "Regex"],
    description: "Cybersecurity tool that evaluates password entropy, structural complexity, and resistance against brute-force attacks.",
    github: "https://github.com/Doomsday-tech"
  },
  {
    title: "ReviewShield",
    tech: ["Python", "Scikit-Learn", "NLP"],
    description: "Machine learning classifier designed to detect and filter out fraudulent or fake product reviews automatically.",
    github: "https://github.com/Doomsday-tech"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 sm:px-20 bg-zinc-950 text-zinc-300">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">// ENGINEERING PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Core Architecture <span className="text-cyan-400">.</span></h2>
          <p className="text-zinc-400 max-w-2xl">Primary systems built from the ground up to tackle concurrency, machine learning, and full-stack persistence.</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-900/40 border border-zinc-800 p-8 rounded-xl hover:bg-zinc-900/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <div className="flex gap-3 text-zinc-400">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.link !== project.github && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects or Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects or Works <span className="text-cyan-400">.</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-white">{project.title}</h4>
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                      <FaGithub size={18} />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}