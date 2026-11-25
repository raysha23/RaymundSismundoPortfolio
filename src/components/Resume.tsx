import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const resumeSections = [
  'Professional Introduction',
  'Technical Skills',
  'Work Experience',
  'Internship Experience',
  'Featured Projects',
  'Education & Achievements',
  'Contact Information',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Résumé"
          title="My CV"
          description="A concise overview of my experience, technical skills, projects, and education."
        />

        <Reveal>
          <div className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[230px_1fr] lg:items-center">
            <div className="document-preview mx-auto w-full max-w-[230px]">
              <div className="flex h-full flex-col p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                  <Icon name="fileText" size={24} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-red-400">
                  PDF Document
                </p>
                <p className="mt-2 break-words text-sm font-semibold leading-snug text-white">
                  Raymund-Sismundo-Resume.pdf
                </p>
                <div className="mt-5 space-y-2" aria-hidden="true">
                  {[90, 70, 80, 60, 85, 65].map((width, index) => (
                    <span
                      key={index}
                      className="block h-1.5 rounded-full bg-white/10"
                      style={{ width: `${width}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Raymund-Sismundo-Resume.pdf
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                The résumé includes my professional introduction, technical skills,
                work and internship experience, featured projects, education,
                achievements, and contact details.
              </p>

              <ul className="mt-5 grid gap-2 text-xs text-muted sm:grid-cols-2">
                {resumeSections.map((section) => (
                  <li key={section} className="inline-flex items-center gap-2">
                    <Icon name="check" size={14} className="text-accent" />
                    {section}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={portfolio.resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  <Icon name="external" size={16} />
                  View My CV
                </a>
                <a
                  href={portfolio.resumeFile}
                  download
                  className="btn-outline text-sm"
                >
                  <Icon name="download" size={16} />
                  Download CV
                </a>
              </div>

              <p className="mt-5 text-xs text-muted">
                Placeholder PDF reference — replace{' '}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-white/80">
                  public/resume/Raymund-Sismundo-Resume.pdf
                </code>{' '}
                with your résumé file.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
