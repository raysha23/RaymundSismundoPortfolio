import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </Reveal>
  )
}
