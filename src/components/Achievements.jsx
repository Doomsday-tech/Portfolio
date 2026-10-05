import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaShieldAlt, FaCloud, FaLaptopCode } from "react-icons/fa";

const achievementsList = [
  {
    title: "AWS Certified Cloud Practitioner",
    category: "Cloud Certification",
    description: "Validated foundational enterprise cloud computing skills, including AWS core services and deployment architecture.",
    icon: <FaCloud className="text-cyan-400" />
  },
  {
    title: "Cybersecurity Virtual Forage (Deloitte)",
    category: "Industry Simulation",
    description: "Investigated simulated cyber breaches by analyzing forensic data logs to pinpoint root causes and mitigate risks.",
    icon: <FaShieldAlt className="text-cyan-400" />
  },
  {
    title: "Data Visualization Virtual Intern (Tata Group)",
    category: "Industry Simulation",
    description: "Presented complex datasets through interactive dashboards and generated strategic insights for business growth.",
    icon: <FaLaptopCode className="text-cyan-400" />
  },
  {
    title: "Hackathon Finalist (IIIT Delhi)",
    category: "Competitive Programming",
    description: "Ranked in Top 10 of 2,500+ teams by co-developing technical architecture for high-concurrency simulation platforms.",
    icon: <FaAward className="text-cyan-400" />
  },
  {
    title: "Student Researcher (SPPU)",
    category: "Academic Research",
    description: "Presented a technical seminar and research paper on 'Smart Pricing Prediction' using machine learning (92% accuracy).",
    icon: <FaCertificate className="text-cyan-400" />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-8 sm:px-20 bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">// RECOGNITIONS & CREDENTIALS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Milestones along the way.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg mb-4">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wide">{item.category}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}