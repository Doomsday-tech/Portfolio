import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-zinc-950 text-zinc-300 flex items-center px-8 sm:px-20 relative overflow-hidden pt-20">
      
      {/* Background glow effect */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-900/15 blur-[140px] rounded-full" />
      
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1 rounded-full">
              ● Available for Immediate Joining
            </span>
            <span className="font-mono text-xs text-zinc-500">
              Pune, India
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">
            Aryan Ahire <span className="text-cyan-400">.</span>
            <br />
            <span className="text-zinc-400 text-3xl sm:text-5xl">I build core engines from scratch.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
            I am a 4th-year Computer Engineering student driven by a deep need to understand how systems work under the hood. Whether I am architecting a multi-threaded distributed database in Java, training machine learning models to auto-scale cloud infrastructure, or engineering full-stack platforms, I write resilient, production-ready code with absolute dedication.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-cyan-500/20"
            >
              Explore Architecture
            </a>
            
            <a 
              href="/Aryan%20Ahire%20Resume.pdf" 
              download="Aryan_Ahire_Resume.pdf"
              className="px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <FaFileDownload className="text-cyan-400" /> Download Resume
            </a>

            <div className="flex gap-4 text-xl text-zinc-400 ml-2">
              <a href="https://github.com/Doomsday-tech" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aryan-ahire-424684292" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
              <a href="mailto:aryanahire462@gmail.com" className="hover:text-cyan-400 transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}