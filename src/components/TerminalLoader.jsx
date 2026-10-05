import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TerminalLoader({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = `> Initializing system...\n> Loading engineer profile: Aryan Ahire\n> Status: Immediate Joiner // Highly Dedicated\n> Core Philosophy: "I don't just use frameworks; I build the engines."[cite: 12]\n> Accessing background: Distributed systems, backend engineering, and AI pipelines...\n> System Ready. Launching portfolio.`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
        setTimeout(onComplete, 900);
      }
    }, 18);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-start justify-center bg-zinc-950 p-8 sm:p-20 pointer-events-none"
    >
      <div className="font-mono text-emerald-400 text-sm sm:text-base whitespace-pre-wrap leading-relaxed max-w-2xl">
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-emerald-400 align-middle ml-1"
        />
      </div>
    </motion.div>
  );
}