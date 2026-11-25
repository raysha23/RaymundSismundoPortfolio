import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import type { Project } from '../types'
import Icon from './Icon'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import Screenshot from './Screenshot'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of systems and applications I have developed — from real business deployments to academic work in progress."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="surface-card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent/40">
                <div className="aspect-[16/9] border-b border-line">
                  <Screenshot src={project.screenshot} title={project.title} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2.5 text-lg font-semibold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
                      >
                        {technology}
                      </li>
                    ))}
                    {project.technologies.length > 5 && (
                      <li className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted">
                        +{project.technologies.length - 5} more
                      </li>
                    )}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-accent transition-colors hover:text-white"
                  >
                    View Details
                    <Icon name="arrowUpRight" size={16} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
