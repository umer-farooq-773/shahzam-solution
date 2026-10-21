import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { formatDate } from '@/data/blog'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="sweep glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-gold/50">
      <div className="aspect-[16/9] overflow-hidden bg-bg-2">
        <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span className="rounded-md bg-gold/10 px-2 py-0.5 font-bold uppercase tracking-wider text-accent">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" />{post.readingMinutes} min read</span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-ink">
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-[''] hover:text-accent-2">{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      </div>
    </article>
  )
}
