import { Navigate, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import DemoNotice from '@/components/ui/DemoNotice'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { CtaSection } from '@/components/sections/HomeSections'
import { getProject, projects } from '@/data/projects'
import { useSeo } from '@/lib/useSeo'

export default function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  useSeo(project ? `${project.title} (Demo)` : 'Project not found', project?.summary ?? 'This project could not be found.', project?.image)
  if (!project) return <Navigate to="/404" replace />

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).concat(projects.filter((p) => p.slug !== project.slug && p.category !== project.category)).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        crumbs={[{ label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
        title={project.title}
        description={project.description}
      >
        <DemoNotice>Demo project — illustrative content, not a real client engagement.</DemoNotice>
      </PageHeader>

      <section className="pb-16">
        <div className="container-x">
          <ScrollReveal>
            <figure className="overflow-hidden rounded-3xl border border-line shadow-soft">
              <img src={project.image} alt={project.imageAlt} decoding="async" className="aspect-[16/9] w-full object-cover" />
            </figure>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <ScrollReveal><h2 className="text-2xl font-extrabold">The challenge</h2><p className="mt-3 leading-relaxed text-muted">{project.challenge}</p></ScrollReveal>
              <ScrollReveal><h2 className="text-2xl font-extrabold">The approach</h2><p className="mt-3 leading-relaxed text-muted">{project.solution}</p></ScrollReveal>
              <ScrollReveal>
                <h2 className="text-2xl font-extrabold">Design goals</h2>
                <ul className="mt-4 space-y-3">{project.outcomes.map((o) => <li key={o} className="flex items-start gap-3 text-ink/90"><Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />{o}</li>)}</ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <aside className="glass rounded-2xl p-7" aria-label="Project details">
                <h2 className="text-lg font-extrabold">Technologies</h2>
                <ul className="mt-4 flex flex-wrap gap-2">{project.tags.map((t) => <li key={t} className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-sm text-accent-2">{t}</li>)}</ul>
                <h2 className="mt-7 text-lg font-extrabold">Category</h2>
                <p className="mt-2 text-muted">{project.category}</p>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <h2 className="mb-8 text-2xl font-extrabold">More demo projects</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
