import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Portrait from './Portrait'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-shell">
        <SectionHeading eyebrow="About Me" title="A developer who understands the business side" />

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="surface-card p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Portrait
                  src={portfolio.portrait}
                  alt={portfolio.name}
                  initials={portfolio.initials}
                />
              </div>
              <div className="flex items-center justify-between px-3 pb-1 pt-4 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <Icon name="mapPin" size={14} className="text-accent" />
                  Cebu, Philippines
                </span>
                <span>{portfolio.initials} / Portfolio</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              {portfolio.about.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? 'text-xl font-medium text-white' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                What I focus on
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {portfolio.characteristics.map((characteristic) => (
                  <li
                    key={characteristic}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-white/85"
                  >
                    <Icon name="check" size={14} className="text-accent" />
                    {characteristic}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
