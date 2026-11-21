import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillCategory from '@/components/sections/Skills/SkillCategory'
import { stagger } from '@/animations'
import { skills } from '@/data/skills'
import styles from '@/components/sections/Skills/Skills.module.css'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical skills"
        description="The languages, frameworks, databases and tools I work with."
      />
      <motion.div
        className={styles.grid}
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((group) => (
          <SkillCategory key={group.category} category={group.category} items={group.items} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
