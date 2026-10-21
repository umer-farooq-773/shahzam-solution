import PageHeader from '@/components/ui/PageHeader'
import LifecycleDiagram from '@/components/sections/LifecycleDiagram'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { CtaSection } from '@/components/sections/HomeSections'
import { img } from '@/lib/site'
import { useSeo } from '@/lib/useSeo'

export default function ProcessPage() {
  useSeo('Development Process', 'Our five-stage software development lifecycle: Plan, Develop, Deploy, Monitor and Improve.', img.lifecycle)
  return (
    <>
      <PageHeader
        eyebrow="Development process"
        crumbs={[{ label: 'Process' }]}
        title={<>A lifecycle built for <span className="text-gold-gradient">dependable delivery</span></>}
        description="From idea to production, we follow five clear stages. Select a stage to see what happens and what you can expect."
      />
      <section className="pb-20">
        <div className="container-x"><ScrollReveal><LifecycleDiagram /></ScrollReveal></div>
      </section>
      <section className="pb-12">
        <div className="container-x">
          <ScrollReveal>
            <figure className="glass overflow-hidden rounded-3xl p-2 sm:p-3">
              <img src={img.lifecycle} alt="Lifecycle at a glance: 1 Plan, 2 Develop, 3 Deploy, 4 Monitor, 5 Improve" width={767} height={488} loading="lazy" decoding="async" className="mx-auto aspect-[767/488] w-full max-w-4xl rounded-2xl object-cover" />
              <figcaption className="px-3 py-4 text-center text-sm text-muted">Our development lifecycle at a glance.</figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
