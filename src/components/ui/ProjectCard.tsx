import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="sweep glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-gold/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-2">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-bg/85 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-bg/85 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted backdrop-blur">
          Demo
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tags.map((t) => (
            <li key={t} className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">{t}</li>
          ))}
        </ul>
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-2 after:absolute after:inset-0 after:content-[''] hover:text-accent"
        >
          View case study<span className="sr-only">: {project.title}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}
