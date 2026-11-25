import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Portrait from './Portrait'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {portfolio.availability}
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Welcome to my portfolio
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {portfolio.name.split(' ')[0]}
            <br />
            <span className="text-gradient">{portfolio.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-white/90 sm:text-xl">
            {portfolio.role}
          </p>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {portfolio.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Icon name="mapPin" size={16} className="text-accent" />
              {portfolio.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-emerald-400" />
              Open for freelance, collaborations, and opportunities
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects
              <Icon name="arrowRight" size={17} />
            </a>
            <a href={portfolio.resumeFile} download className="btn-outline">
              <Icon name="download" size={17} />
              Download My CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">
              Find me on
            </span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            <ul className="flex items-center gap-2">
              {portfolio.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div className="portrait-frame mx-auto max-w-md">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
              <Portrait
                src={portfolio.portrait}
                alt={portfolio.name}
                initials={portfolio.initials}
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[min(20rem,85%)] -translate-x-1/2 rounded-2xl border border-line bg-surface/95 px-5 py-4 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-[0.16em] text-accent">
              Currently focused on
            </p>
            <p className="mt-1 text-sm text-white">
              React · ASP.NET Core · C# · SQL Server
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
