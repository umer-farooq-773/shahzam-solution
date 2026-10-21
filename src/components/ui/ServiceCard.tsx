import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Service } from '@/types'

interface Props {
  service: Service
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: Props) {
  const reduce = useReducedMotion()
  const Icon = service.icon
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="sweep glass group relative flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-gold/50 sm:p-7"
    >
      <span className="mb-5 grid size-12 place-items-center rounded-xl bg-gold/10 text-accent ring-1 ring-gold/25 transition group-hover:bg-gold group-hover:text-on-accent">
        <Icon className="size-6" aria-hidden="true" strokeWidth={1.8} />
      </span>
      <h3 className="text-xl font-bold leading-snug text-ink">{service.title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{detailed ? service.description : service.short}</p>

      {detailed && (
        <ul className="mt-5 space-y-2">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-ink/90">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-2 after:absolute after:inset-0 after:content-[''] hover:text-accent"
      >
        Learn More<span className="sr-only"> about {service.title}</span>
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </motion.article>
  )
}
