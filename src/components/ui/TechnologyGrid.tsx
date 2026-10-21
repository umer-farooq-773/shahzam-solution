import { motion, useReducedMotion } from 'framer-motion'
import TechnologyIcon from './TechnologyIcon'
import type { Technology } from '@/types'

interface Props {
  items: Technology[]
  showDescription?: boolean
  columns?: string
}

export default function TechnologyGrid({ items, showDescription = false, columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' }: Props) {
  const reduce = useReducedMotion()
  return (
    <ul className={`grid gap-3 sm:gap-4 ${columns}`}>
      {items.map((t) => (
        <motion.li
          key={t.id}
          whileHover={reduce ? undefined : { y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="sweep glass flex flex-col items-start gap-3 rounded-xl p-4 transition-colors hover:border-gold/50 sm:p-5"
        >
          <span className="grid size-12 place-items-center rounded-lg bg-bg/60 ring-1 ring-tint/5">
            <TechnologyIcon tech={t} size={26} />
          </span>
          <div>
            <h3 className="text-[0.95rem] font-bold text-ink">{t.name}</h3>
            {showDescription && <p className="mt-1 text-sm leading-relaxed text-muted">{t.description}</p>}
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
