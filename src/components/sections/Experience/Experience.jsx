import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ExperienceItem from '@/components/sections/Experience/ExperienceItem'
import { experience } from '@/data/experience'
import styles from '@/components/sections/Experience/Experience.module.css'

// Renders nothing until you add real entries to src/data/experience.js
export default function Experience() {
  if (experience.length === 0) return null

  return (
    <SectionWrapper id="experience">
      <SectionHeading eyebrow="Experience" title="Experience" />
      <ol className={`${styles.timeline} mx-auto max-w-3xl`}>
        {experience.map((item, index) => (
          <ExperienceItem key={item.id} item={item} index={index} />
        ))}
      </ol>
    </SectionWrapper>
  )
}
