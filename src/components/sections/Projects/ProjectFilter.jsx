import { cn } from '@/utils/cn'

export default function ProjectFilter({ options, value, onChange }) {
  if (options.length < 2) return null

  return (
    <div role="group" aria-label="Filter projects by technology" className="mb-10 flex flex-wrap justify-center gap-2">
      {options.map((option) => {
        const selected = option === value
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option)}
            className={cn(
              'h-10 rounded-full px-4 text-sm font-medium transition',
              selected
                ? 'bg-brand-gradient text-white shadow-soft'
                : 'glass text-muted hover:border-brand-violet/60 hover:text-ink',
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
