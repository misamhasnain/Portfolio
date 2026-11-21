import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const VARIANTS = {
  primary: 'bg-brand-gradient text-white shadow-soft hover:shadow-glow',
  secondary: 'glass text-ink hover:border-brand-violet/60',
  ghost: 'text-ink hover:bg-ink/5',
}

const SIZES = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'lg',
  icon: Icon,
  className,
  children,
  ...props
}) {
  const MotionTag = as === 'a' ? motion.a : motion.button

  return (
    <MotionTag
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-shadow',
        'disabled:cursor-not-allowed disabled:opacity-60',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...(as === 'a' ? {} : { type: 'button' })}
      {...props}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </MotionTag>
  )
}
