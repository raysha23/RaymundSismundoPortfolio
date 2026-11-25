import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import Icon from './Icon'

const sectionIds = portfolio.navigation.map((item) => item.href.slice(1))

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-line bg-ink/90 backdrop-blur-xl'
          : 'border-transparent bg-ink/60 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="container-shell flex h-20 items-center justify-between gap-6"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label={`${portfolio.name}, back to home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-bold text-accent transition-colors group-hover:bg-accent/20">
            {portfolio.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-tight text-white">
              {portfolio.name}
            </span>
            <span className="block text-[11px] leading-tight text-muted">
              Full-Stack Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {portfolio.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href.slice(1) ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  active === item.href.slice(1)
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={portfolio.resumeFile}
          download
          className="btn-primary hidden text-xs lg:inline-flex"
        >
          <Icon name="download" size={15} />
          Download CV
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-white lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-ink/95 lg:hidden">
          <ul className="container-shell grid grid-cols-2 gap-1 py-4 sm:grid-cols-3">
            {portfolio.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active === item.href.slice(1)
                      ? 'bg-accent/10 text-accent'
                      : 'text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-shell pb-5">
            <a
              href={portfolio.resumeFile}
              download
              className="btn-primary w-full text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="download" size={16} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
