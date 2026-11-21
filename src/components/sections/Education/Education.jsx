import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import EducationItem from '@/components/sections/Education/EducationItem'
import { education } from '@/data/education'
import styles from '@/components/sections/Education/Education.module.css'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading eyebrow="Education" title="Education & training" />
      <ol className={`${styles.timeline} mx-auto max-w-3xl`}>
        {education.map((item, index) => (
          <EducationItem key={item.id} item={item} index={index} />
        ))}
      </ol>
    </SectionWrapper>
  )
}
