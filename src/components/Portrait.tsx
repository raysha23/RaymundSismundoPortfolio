interface PortraitProps {
  src?: string
  alt: string
  initials: string
  className?: string
}

export default function Portrait({
  src,
  alt,
  initials,
  className = '',
}: PortraitProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Portrait placeholder for ${alt}. Add your photograph in src/data/portfolio.ts.`}
      className={`flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.28),transparent_65%)] ${className}`}
    >
      <span className="text-6xl font-semibold tracking-tight text-white/90 sm:text-7xl">
        {initials}
      </span>
      <span className="mt-3 rounded-full border border-line bg-surface/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted">
        Portrait placeholder
      </span>
    </div>
  )
}
