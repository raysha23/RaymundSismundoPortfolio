import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Professional Background"
          title="Experience"
          description="Hands-on development work for real business operations, plus a structured internship in a professional engineering environment."
        />

        <div className="relative ml-3 border-l border-line pl-8 sm:ml-4 sm:pl-10">
          {portfolio.experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 100} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.05rem] top-2 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-ink text-accent sm:-left-[2.8rem]">
                <Icon name="briefcase" size={13} />
              </span>
              <article className="surface-card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.organization}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                    <Icon name="calendar" size={13} />
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
                  <Icon name="layers" size={13} className="text-accent" />
                  {item.context}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <Icon name="check" size={15} className="mt-0.5 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
