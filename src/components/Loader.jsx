import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-14 w-14">
          <span className="absolute inset-0 rounded-2xl border-2 border-white/10" />
          <motion.span
            className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-accent-blue border-r-accent-cyan"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-slate-400"
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  )
}
