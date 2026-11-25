import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="What I Do"
          title="Services"
          description="From a simple business website to a full management system — I build software that fits the way your team actually works."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="surface-card group h-full p-6 transition-colors hover:border-accent/40">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-6 block h-px w-full bg-gradient-to-r from-accent/40 to-transparent" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
