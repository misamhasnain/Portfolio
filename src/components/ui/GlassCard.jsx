import { cn } from '@/utils/cn'

export default function GlassCard({ className, children, ...props }) {
  return (
    <div className={cn('glass rounded-2xl shadow-soft', className)} {...props}>
      {children}
    </div>
  )
}
