import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education & Recognition"
          title="Achievements"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="surface-card h-full p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <Icon name="users" size={22} />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Education
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {portfolio.education.school}
              </h3>
              <p className="mt-2 text-sm text-muted">{portfolio.education.degree}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/85">
                <Icon name="calendar" size={15} className="text-accent" />
                {portfolio.education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {portfolio.achievements.map((achievement) => (
                <li
                  key={achievement.title}
                  className="surface-card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon name={achievement.icon} size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{achievement.title}</p>
                    <p className="mt-1 text-xs text-muted">{achievement.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
