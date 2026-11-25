import { useState, type ChangeEvent, type FormEvent } from 'react'
import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: ContactForm = { name: '', email: '', subject: '', message: '' }

const contactOptions = [
  { label: 'Email', icon: 'mail' as const, getHref: () => `mailto:${portfolio.email}`, value: portfolio.email },
  { label: 'Facebook', icon: 'facebook' as const, getHref: () => portfolio.facebook, value: 'Message me on Facebook' },
  { label: 'GitHub', icon: 'github' as const, getHref: () => portfolio.github, value: 'github.com/raysha23' },
]

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (field: keyof ContactForm) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setSent(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have a Project in Mind? Let's Build Something Together."
          description="Whether you need a business website, a custom management system, or want to collaborate on a software project, I'd be happy to connect."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="surface-card h-full p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-white">Contact options</h3>
              <ul className="mt-6 space-y-3">
                {contactOptions.map((option) => (
                  <li key={option.label}>
                    <a
                      href={option.getHref()}
                      target={option.label === 'Email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-accent/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                        <Icon name={option.icon} size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                          {option.label}
                        </span>
                        <span className="block truncate text-sm text-white group-hover:text-accent">
                          {option.value}
                        </span>
                      </span>
                      <Icon
                        name="arrowUpRight"
                        size={16}
                        className="ml-auto shrink-0 text-muted group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm text-muted">
                <p className="font-medium text-white">{portfolio.availability}</p>
                <p className="mt-1">
                  Currently based in Cebu, Philippines and open to remote work.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Send a message</h3>
              <p className="mt-2 text-sm text-muted">
                Fill in the details below and I&apos;ll get back to you.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Full Name
                  <input
                    className="field-input"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </label>
                <label className="field-label">
                  Email Address
                  <input
                    className="field-input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                </label>
              </div>

              <label className="field-label mt-5">
                Subject
                <input
                  className="field-input"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={update('subject')}
                  required
                />
              </label>

              <label className="field-label mt-5">
                Message
                <textarea
                  className="field-input min-h-36 resize-y"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={update('message')}
                  required
                />
              </label>

              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                <Icon name="send" size={17} />
                Send Message
              </button>

              {sent && (
                <p
                  role="status"
                  className="mt-5 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                >
                  Thanks for reaching out! This demo form is not connected to a
                  backend yet — please email me directly at {portfolio.email}.
                </p>
              )}

              <p className="mt-5 text-xs text-muted">
                UI ready for backend or email integration. Connect a service such as
                Formspree, Resend, or a serverless API when deploying.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
