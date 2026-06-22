import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
