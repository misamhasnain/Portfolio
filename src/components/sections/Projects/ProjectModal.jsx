import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { setScrollLocked } from '@/utils/scroll'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    setScrollLocked(true)
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      setScrollLocked(false)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        data-lenis-prevent
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-surface p-3 shadow-soft"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="glass absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width="1400"
            height="650"
            className="aspect-video w-full rounded-2xl object-cover object-top"
          />
        )}

        <div className="p-4 sm:p-6">
          <h3 id="project-modal-title" className="font-display text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-3 text-muted">{project.description || 'Details coming soon.'}</p>

          {project.highlights.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {project.tech.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tech.map((name) => (
                <li key={name}>
                  <Badge>{name}</Badge>
                </li>
              ))}
            </ul>
          )}

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  icon={ExternalLink}
                >
                  Live demo
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  as="a"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  icon={FaGithub}
                >
                  Source code
                </Button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
