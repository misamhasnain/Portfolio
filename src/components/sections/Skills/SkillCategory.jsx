import { motion } from 'framer-motion'
import { Code, Database, Globe, Server, Sparkles, Wrench } from 'lucide-react'
import TiltCard from '@/components/ui/TiltCard'
import SkillCard from '@/components/sections/Skills/SkillCard'
import { fadeUp } from '@/animations'

const ICONS = {
  Languages: Code,
  'Web Development': Globe,
  'Backend & APIs': Server,
  Databases: Database,
  Tools: Wrench,
}

export default function SkillCategory({ category, items }) {
  const Icon = ICONS[category] ?? Sparkles

  return (
    <motion.div variants={fadeUp} className="h-full">
      <TiltCard max={6} className="h-full">
        <div className="glass h-full rounded-2xl p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-3" style={{ transform: 'translateZ(24px)' }}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white">
              <Icon size={20} aria-hidden="true" />
            </span>
            <h3 className="font-display text-lg font-semibold">{category}</h3>
          </div>
          <ul className="flex flex-wrap gap-2" style={{ transform: 'translateZ(14px)' }}>
            {items.map((name) => (
              <SkillCard key={name} name={name} />
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  )
}
