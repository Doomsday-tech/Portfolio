import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain, FaShieldAlt, FaRocket, FaBuilding } from "react-icons/fa";

const highlights = [
  {
    title: "4th Year Computer Engineering",
    description: "Currently in my final year at Savitribai Phule Pune University, deeply immersed in backend architecture and systems engineering.",
    icon: <FaGraduationCap className="text-cyan-400 text-xl" />
  },
  {
    title: "Architectural AI Startup",
    description: "Founded and built an AI-powered compliance platform utilizing Python backend logic and SQLite FTS5 search grounded in real building regulations.",
    icon: <FaBuilding className="text-cyan-400 text-xl" />
  },
  {
    title: "Full-Stack & Systems",
    description: "Building resilient software from the metal up—ranging from concurrent multi-threaded Java databases to scalable web applications.",
    icon: <FaCode className="text-cyan-400 text-xl" />
  },
  {
    title: "AI & Machine Learning",
    description: "Leveraging Python, Scikit-Learn, and LLM orchestration (RAG pipelines) to build practical automation and diagnostic tools.",
    icon: <FaBrain className="text-cyan-400 text-xl" />
  },
  {
    title: "Cyber Security Focus",
    description: "Pursuing an Honours Specialization in Cyber Security, analyzing threats, and building secure authentication workflows.",
    icon: <FaShieldAlt className="text-cyan-400 text-xl" />
  },
  {
    title: "Immediate Joiner",
    description: "Fully dedicated, proactive, and ready to bring immediate engineering impact to a high-growth tech team.",
    icon: <FaRocket className="text-cyan-400 text-xl" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 sm:px-20 bg-zinc-950 text-zinc-300">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">// SYSTEM PROFILE & STORY</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 mb-6">Driven by code. Built for scale.</h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            I am a builder at heart. Rather than settling for high-level abstractions, I prefer understanding how things operate under the hood—whether that means implementing a custom Write-Ahead Log for a distributed database or bootstrapping an architectural compliance startup. I thrive on complex engineering challenges and am available to join immediately with absolute dedication to the craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}