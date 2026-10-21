import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '@/components/ui/PageHeader'
import TechnologyGrid from '@/components/ui/TechnologyGrid'
import TechnologyIcon from '@/components/ui/TechnologyIcon'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { CtaSection } from '@/components/sections/HomeSections'
import { technologies, techCategories } from '@/data/technologies'
import { useSeo } from '@/lib/useSeo'

export default function TechnologiesPage() {
  useSeo('Technology Stack', 'The technologies Shahzam Solution uses: React, TypeScript, Laravel, PHP, Python, AWS, Docker, CI/CD, MySQL, PostgreSQL and Redis.')
  const [selected, setSelected] = useState(technologies[0].id)
  const current = technologies.find((t) => t.id === selected)!

  return (
    <>
      <PageHeader
        eyebrow="Technology stack"
        crumbs={[{ label: 'Technologies' }]}
        title={<>Tools we trust to build <span className="text-gold-gradient">reliable software</span></>}
        description="A focused, modern stack across frontend, backend, cloud and data — chosen for maturity, performance and long-term maintainability."
      />

      {/* Interactive explorer */}
      <section className="pb-20">
        <div className="container-x">
          <ScrollReveal>
            <div className="glass grid gap-6 rounded-3xl p-5 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
              <div role="group" aria-label="Select a technology" className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
                {technologies.map((t) => (
                  <button key={t.id} type="button" onClick={() => setSelected(t.id)} aria-pressed={selected === t.id} aria-label={t.name}
                    className={`grid aspect-square min-h-12 place-items-center rounded-xl border transition ${selected === t.id ? 'border-gold bg-gold/10 shadow-[0_0_24px_-6px_rgba(255,176,0,0.5)]' : 'border-line bg-bg/50 hover:border-gold/50'}`}>
                    <TechnologyIcon tech={t} size={28} />
                  </button>
                ))}
              </div>
              <div aria-live="polite" className="flex min-h-40 items-center rounded-2xl bg-bg/60 p-6">
                <AnimatePresence mode="wait">
                  <motion.div key={current.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{current.category}</span>
                    <h2 className="mt-2 flex items-center gap-3 text-3xl font-extrabold"><TechnologyIcon tech={current} size={34} />{current.name}</h2>
                    <p className="mt-3 text-muted">{current.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {techCategories.map((cat, i) => (
        <section key={cat} className={`py-16 ${i % 2 === 0 ? 'bg-bg-2/60' : ''}`} aria-labelledby={`cat-${i}`}>
          <div className="container-x">
            <ScrollReveal><SectionHeading as="h2" align="left" title={<span id={`cat-${i}`}>{cat}</span>} /></ScrollReveal>
            <ScrollReveal className="mt-8" delay={0.05}>
              <TechnologyGrid items={technologies.filter((t) => t.category === cat)} showDescription columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
            </ScrollReveal>
          </div>
        </section>
      ))}
      <p className="container-x mt-8 text-center text-xs text-muted">Logos are official marks supplied by the open-source Simple Icons set; AWS, CI/CD and REST APIs use neutral icons.</p>
      <CtaSection />
    </>
  )
}
