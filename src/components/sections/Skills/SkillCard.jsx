import { motion } from 'framer-motion'

// One skill chip
export default function SkillCard({ name }) {
  return (
    <motion.li
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className="rounded-xl border border-line bg-surface/80 px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand-violet/60 hover:text-brand-violet"
    >
      {name}
    </motion.li>
  )
}
