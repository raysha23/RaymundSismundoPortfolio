import { portfolio } from '../data/portfolio'
import Icon from './Icon'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                {portfolio.initials}
              </span>
              <div>
                <p className="font-semibold text-white">{portfolio.name}</p>
                <p className="text-xs text-muted">Full-Stack Developer | Freelance Software Developer</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted">{portfolio.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted">
              {portfolio.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5">
              {portfolio.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Icon name={social.icon} size={15} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {portfolio.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, Tailwind CSS and Vite.</p>
        </div>
      </div>
    </footer>
  )
}
