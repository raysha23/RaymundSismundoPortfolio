import { useEffect } from 'react'
import type { Project } from '../types'
import Icon from './Icon'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

interface DetailListProps {
  title: string
  items: string[]
}

function DetailList({ title, items }: DetailListProps) {
  if (items.length === 0) return null

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="surface-card relative my-8 w-full max-w-3xl overflow-hidden border-line bg-ink"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-ink/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {project.category}
            </p>
            <h2 id="project-modal-title" className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-white"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="space-y-8 px-6 py-7 sm:px-8">
          <p className="text-[15px] leading-relaxed text-white/85">{project.summary}</p>

          <div className="grid gap-8 sm:grid-cols-2">
            <DetailList title="Key functionalities" items={project.functionalities ?? []} />
            <DetailList title="My responsibilities" items={project.responsibilities ?? []} />
            <DetailList title="Key contributions" items={project.contributions ?? []} />
            <DetailList title="Planned functionalities" items={project.planned ?? []} />
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Technologies
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-white/85"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          {project.note && (
            <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-muted">
              {project.note}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
