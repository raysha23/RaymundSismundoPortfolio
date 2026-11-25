interface ScreenshotProps {
  src?: string
  title: string
}

export default function Screenshot({ src, title }: ScreenshotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={`Screenshot of ${title}`}
        className="h-full w-full object-cover object-top"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Screenshot placeholder for ${title}. Add a real screenshot later.`}
      className="relative h-full w-full overflow-hidden bg-[#0a1120] p-3"
    >
      <div className="flex h-full overflow-hidden rounded-lg border border-line bg-surface/80">
        <div className="hidden w-[22%] flex-col gap-2.5 border-r border-line p-3 sm:flex">
          <span className="mb-2 h-2 w-2/3 rounded-full bg-accent/40" />
          {[70, 55, 80, 60, 75].map((width, index) => (
            <span
              key={index}
              className="h-1.5 rounded-full bg-white/10"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((index) => (
              <div key={index} className="rounded border border-line bg-white/[0.03] p-2">
                <span className="block h-1 w-2/3 rounded bg-white/10" />
                <span className="mt-2 block h-2 w-1/2 rounded bg-accent/30" />
              </div>
            ))}
          </div>
          <div className="mt-3 rounded border border-line bg-white/[0.03] p-2">
            <span className="block h-1 w-1/3 rounded bg-white/10" />
            <div className="mt-3 flex h-10 items-end gap-1.5">
              {[35, 60, 45, 80, 55, 70, 40, 65].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-sm bg-accent/25"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="block h-1.5 rounded bg-white/[0.07]"
                style={{ width: `${90 - index * 15}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="absolute bottom-2 right-2 rounded-md border border-line bg-ink/85 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-muted">
        Screenshot placeholder
      </span>
    </div>
  )
}
