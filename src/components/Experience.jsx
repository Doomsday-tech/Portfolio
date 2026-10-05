import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 sm:px-20 bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">// PROFESSIONAL TRACK RECORD</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Where I've contributed.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border-l border-zinc-800 pl-6 ml-2 space-y-12"
        >
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-zinc-950" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">EduSkills Foundation</h3>
              <span className="font-mono text-xs text-cyan-400">Jan 2026 – Mar 2026 // Remote</span>
            </div>
            <p className="text-sm font-mono text-zinc-400 mb-4">Virtual Intern (AI/ML)</p>

            <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed list-disc list-inside">
              <li>Built and trained predictive machine learning models using Python, Pandas, and Scikit-Learn to analyze complex datasets.</li>
              <li>Cleaned raw data and engineered targeted features to significantly improve model accuracy and operational reliability.</li>
              <li>Gained hands-on experience in data preprocessing, model evaluation, and deploying analytics pipelines through structured simulations.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}