import { Navigate, useParams } from 'react-router-dom'
import { Clock } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import BlogCard from '@/components/ui/BlogCard'
import DemoNotice from '@/components/ui/DemoNotice'
import { CtaSection } from '@/components/sections/HomeSections'
import { formatDate, getPost, posts } from '@/data/blog'
import { useSeo } from '@/lib/useSeo'

export default function BlogDetailPage() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  useSeo(post?.title ?? 'Article not found', post?.excerpt ?? 'This article could not be found.', post?.image)
  if (!post) return <Navigate to="/404" replace />

  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3)

  return (
    <>
      <article className="pt-[calc(4.5rem+3rem)] sm:pt-[calc(4.5rem+4.5rem)]">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{post.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="inline-flex items-center gap-1"><Clock className="size-4" aria-hidden="true" />{post.readingMinutes} min read</span>
            </p>
            <DemoNotice>Demo article — sample content for layout purposes.</DemoNotice>
          </div>
          <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-line">
            <img src={post.image} alt={post.imageAlt} decoding="async" className="aspect-[16/8] w-full object-cover" />
          </figure>
          <div className="prose-article mx-auto mt-12 max-w-3xl">
            {post.body.map((s, i) => (
              <section key={i}>
                {s.heading && <h2>{s.heading}</h2>}
                {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="mt-20" aria-labelledby="related-h">
        <div className="container-x">
          <h2 id="related-h" className="mb-8 text-2xl font-extrabold">Related articles</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
