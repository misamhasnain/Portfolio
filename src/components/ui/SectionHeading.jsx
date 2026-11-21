export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-violet">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-gradient" aria-hidden="true" />
      {description && <p className="mt-4 text-muted">{description}</p>}
    </div>
  )
}
