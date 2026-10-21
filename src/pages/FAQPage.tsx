import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { CtaSection } from '@/components/sections/HomeSections'
import { faqCategories, faqs } from '@/data/faq'
import { useSeo } from '@/lib/useSeo'

export default function FAQPage() {
  useSeo('FAQ', 'Answers about our development process, technologies, timelines, maintenance, security, communication and pricing.')
  const [cat, setCat] = useState<(typeof faqCategories)[number]>('All')
  const items = cat === 'All' ? faqs : faqs.filter((f) => f.category === cat)

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        crumbs={[{ label: 'FAQ' }]}
        title={<>Frequently asked <span className="text-gold-gradient">questions</span></>}
        description="Straightforward answers about how we work. If yours is not here, just ask."
      />
      <section className="pb-12">
        <div className="container-x max-w-3xl">
          <div role="group" aria-label="Filter questions by topic" className="mb-8 flex flex-wrap gap-2">
            {faqCategories.map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${cat === c ? 'border-gold bg-gold text-on-accent' : 'border-line text-muted hover:border-gold/60 hover:text-ink'}`}>{c}</button>
            ))}
          </div>
          <FAQAccordion key={cat} items={items} />
        </div>
      </section>
      <CtaSection title="Still have a question?" text="Send us a message and we will get back to you with a clear answer." />
    </>
  )
}
