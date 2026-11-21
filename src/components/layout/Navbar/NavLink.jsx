import { motion } from 'framer-motion'
import { scrollToTarget } from '@/utils/scroll'
import { cn } from '@/utils/cn'

const VARIANTS = {
  desktop: 'relative rounded-full px-4 py-2 text-sm font-medium',
  mobile: 'rounded-full px-6 py-3 text-2xl font-display font-semibold',
  footer: 'text-sm',
}

export default function NavLink({ link, active = false, variant = 'desktop', onNavigate }) {
  const handleClick = (event) => {
    event.preventDefault()
    onNavigate?.()
    scrollToTarget(link.href)
  }

  return (
    <a
      href={link.href}
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'transition-colors',
        VARIANTS[variant],
        active ? 'text-brand-violet' : 'text-muted hover:text-ink',
      )}
    >
      {variant === 'desktop' && active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-brand-violet/10"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative">{link.label}</span>
    </a>
  )
}
