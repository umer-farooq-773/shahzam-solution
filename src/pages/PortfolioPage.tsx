import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '@/components/ui/PageHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import DemoNotice from '@/components/ui/DemoNotice'
import { CtaSection } from '@/components/sections/HomeSections'
import { projectCategories, projects } from '@/data/projects'
import { useSeo } from '@/lib/useSeo'

export default function PortfolioPage() {
  useSeo('Portfolio', 'Demonstration projects showing the kind of web apps, mobile experiences, APIs and cloud systems Shahzam Solution builds.')
  const [cat, setCat] = useState<(typeof projectCategories)[number]>('All')
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat])

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        crumbs={[{ label: 'Portfolio' }]}
        title={<>Work that shows <span className="text-gold-gradient">how we build</span></>}
        description="A selection of demonstration projects. Each one illustrates an approach, architecture and level of polish you can expect."
      />
      <section className="pb-12">
        <div className="container-x">
          <DemoNotice>Demo content — these are illustrative sample projects, not work for real clients.</DemoNotice>
          <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap justify-center gap-2">
            {projectCategories.map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${cat === c ? 'border-gold bg-gold text-on-accent' : 'border-line text-muted hover:border-gold/60 hover:text-ink'}`}>
                {c}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status" aria-live="polite">{list.length} projects shown</p>
          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaSection title="Have a project like these in mind?" />
    </>
  )
}
