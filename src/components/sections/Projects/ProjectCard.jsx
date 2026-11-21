import { ExternalLink, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import TiltCard from '@/components/ui/TiltCard'
import Badge from '@/components/ui/Badge'
import styles from '@/components/sections/Projects/Projects.module.css'

const MAX_TECH = 4

// Interactive 3D card: tilts with the mouse and shows layered depth.
export default function ProjectCard({ project, onOpen }) {
  const extra = project.tech.length - MAX_TECH

  return (
    <TiltCard max={8} className="h-full">
      <article
        className="glass flex h-full flex-col rounded-2xl p-2 shadow-soft"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="aspect-video overflow-hidden rounded-xl"
          style={{ transform: 'translateZ(26px)' }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width="1400"
              height="650"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <Layers size={40} />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4" style={{ transform: 'translateZ(16px)' }}>
          <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>

          <p className="mt-2 line-clamp-3 text-sm text-muted">
            {project.description || 'Details coming soon.'}
          </p>

          {project.tech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tech.slice(0, MAX_TECH).map((name) => (
                <li key={name}>
                  <Badge>{name}</Badge>
                </li>
              ))}
              {extra > 0 && (
                <li>
                  <Badge>+{extra}</Badge>
                </li>
              )}
            </ul>
          )}

          <div className="mt-auto flex items-center gap-2 pt-5">
            <button
              type="button"
              onClick={() => onOpen(project.id)}
              className="h-10 flex-1 rounded-full bg-brand-gradient px-4 text-sm font-semibold text-white transition hover:shadow-glow"
            >
              View details
            </button>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-brand-violet/60 hover:text-brand-violet"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo (opens in a new tab)`}
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-brand-violet/60 hover:text-brand-violet"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  )
}
