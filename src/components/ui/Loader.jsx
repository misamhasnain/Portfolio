import { motion } from 'framer-motion'

// Short splash shown once when the page opens.
export default function Loader() {
  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[100] grid place-items-center bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative grid h-20 w-20 place-items-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-line border-t-brand-violet" />
        <span className="font-display text-2xl font-bold text-gradient">M</span>
      </div>
    </motion.div>
  )
}
