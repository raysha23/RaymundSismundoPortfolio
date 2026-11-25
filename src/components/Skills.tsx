import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Technical Toolkit"
          title="Skills & Technologies"
          description="The tools I use to take an idea from a business requirement to a working, maintainable application."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {portfolio.skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <div className="surface-card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon name={group.icon} size={20} />
                  </span>
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-sm text-white/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
