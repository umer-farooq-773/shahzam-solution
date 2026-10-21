import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb { label: string; to?: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <li><Link to="/" className="hover:text-accent-2">Home</Link></li>
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 opacity-60" aria-hidden="true" />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-accent-2">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-ink">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
