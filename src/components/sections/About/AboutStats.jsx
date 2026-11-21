import { motion } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'
import { fadeUp, stagger } from '@/animations'

export default function AboutStats({ stats }) {
  return (
    <motion.ul
      className="mt-10 grid gap-4 sm:grid-cols-3"
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.li key={stat.label} variants={fadeUp}>
          <GlassCard className="p-6 text-center">
            <p className="font-display text-4xl font-bold text-gradient">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </GlassCard>
        </motion.li>
      ))}
    </motion.ul>
  )
}
