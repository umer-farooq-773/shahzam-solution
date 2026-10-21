import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Search } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import BlogCard from '@/components/ui/BlogCard'
import DemoNotice from '@/components/ui/DemoNotice'
import { CtaSection } from '@/components/sections/HomeSections'
import { blogCategories, formatDate, posts } from '@/data/blog'
import { useSeo } from '@/lib/useSeo'

export default function BlogPage() {
  useSeo('Blog', 'Technical articles on React, Laravel, TypeScript, Python, AWS, software architecture and DevOps from Shahzam Solution.')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const featured = posts.find((p) => p.featured) ?? posts[0]
  const filtering = q.trim() !== '' || cat !== 'All'

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    return posts.filter((p) => (cat === 'All' || p.category === cat) && (!term || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(term)))
  }, [q, cat])
  const list = filtering ? results : posts.filter((p) => p.slug !== featured.slug)

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        crumbs={[{ label: 'Blog' }]}
        title={<>Notes from the <span className="text-gold-gradient">engineering desk</span></>}
        description="Practical articles on building, shipping and running modern software."
      />
      <section className="pb-12">
        <div className="container-x">
          <DemoNotice>Demo content — these sample articles will be replaced with real posts.</DemoNotice>

          {!filtering && (
            <article className="sweep glass group relative mt-10 grid overflow-hidden rounded-3xl transition-colors hover:border-gold/50 md:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
                <img src={featured.image} alt={featured.imageAlt} decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured · {featured.category}</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                  <Link to={`/blog/${featured.slug}`} className="after:absolute after:inset-0 after:content-[''] hover:text-accent-2">{featured.title}</Link>
                </h2>
                <p className="mt-3 text-muted">{featured.excerpt}</p>
                <p className="mt-5 flex flex-wrap items-center gap-x-4 text-sm text-muted">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span className="inline-flex items-center gap-1"><Clock className="size-4" aria-hidden="true" />{featured.readingMinutes} min read</span>
                </p>
              </div>
            </article>
          )}

          <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
                  className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${cat === c ? 'border-gold bg-gold text-on-accent' : 'border-line text-muted hover:border-gold/60 hover:text-ink'}`}>{c}</button>
              ))}
            </div>
            <div className="relative w-full lg:max-w-xs">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input id="blog-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…"
                className="min-h-11 w-full rounded-lg border border-line bg-bg/70 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
            </div>
          </div>

          <p className="sr-only" role="status" aria-live="polite">{list.length} articles shown</p>
          {list.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
          ) : (
            <div className="glass mt-8 rounded-2xl p-10 text-center">
              <p className="font-semibold">No articles match your search.</p>
              <button type="button" onClick={() => { setQ(''); setCat('All') }} className="mt-3 text-sm font-semibold text-accent-2 hover:text-accent">Clear filters</button>
            </div>
          )}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
