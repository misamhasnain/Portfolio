import { motion } from 'framer-motion'
import { fadeUp } from '@/animations'
import { cn } from '@/utils/cn'

export default function SectionWrapper({ id, className, reveal = true, children }) {
  return (
    <section id={id} className={cn('relative px-4 py-20 sm:px-6 md:py-28 lg:px-8', className)}>
      {reveal ? (
        <motion.div
          className="mx-auto w-full max-w-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      )}
    </section>
  )
}
