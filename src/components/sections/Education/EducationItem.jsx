import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { transitions } from '@/animations'

export default function EducationItem({ item, index }) {
  return (
    <motion.li
      className="relative pb-10 last:pb-0"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...transitions.base, delay: index * 0.05 }}
    >
      <span className="absolute -left-[3.15rem] top-5 grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
        <GraduationCap size={16} aria-hidden="true" />
      </span>
      <GlassCard className="p-5 sm:p-6">
        <Badge>{item.period}</Badge>
        <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 text-muted">{item.institution}</p>
        {item.note && <p className="mt-2 text-sm text-brand-violet">{item.note}</p>}
      </GlassCard>
    </motion.li>
  )
}
