import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/sections/Projects/ProjectCard'
import ProjectFilter from '@/components/sections/Projects/ProjectFilter'
import ProjectModal from '@/components/sections/Projects/ProjectModal'
import { projects } from '@/data/projects'
import styles from '@/components/sections/Projects/Projects.module.css'

// Filter options come from the data: "All" plus any technology used by 2 or more projects.
function buildFilterOptions() {
  const counts = {}
  projects.forEach((project) => {
    project.tech.forEach((name) => {
      counts[name] = (counts[name] || 0) + 1
    })
  })
  return ['All', ...Object.keys(counts).filter((name) => counts[name] >= 2)]
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(null)
  const options = useMemo(buildFilterOptions, [])
  const closeModal = useCallback(() => setSelectedId(null), [])

  const visible = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter))
  const selected = projects.find((project) => project.id === selectedId)

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects"
        description="Hover or tap a card to explore. Open it for more details."
      />

      <ProjectFilter options={options} value={filter} onChange={setFilter} />

      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} onOpen={setSelectedId} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </SectionWrapper>
  )
}
