import PageHeader from '@/components/ui/PageHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { CtaSection } from '@/components/sections/HomeSections'
import { services } from '@/data/services'
import { img } from '@/lib/site'
import { useSeo } from '@/lib/useSeo'

export default function ServicesPage() {
  useSeo('Services', 'Web and mobile development, custom software, AWS cloud, DevOps and CI/CD, APIs, Laravel and Python backends, React frontends, databases and maintenance.', img.services)
  return (
    <>
      <PageHeader
        eyebrow="Services"
        crumbs={[{ label: 'Services' }]}
        title={<>Everything you need to <span className="text-gold-gradient">ship and scale</span></>}
        description="Ten focused services that cover the full journey — from product design and development to cloud, automation and long-term care."
      />
      <section className="pb-12">
        <div className="container-x grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={(i % 3) * 0.06} className="h-full">
              <ServiceCard service={s} detailed />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="container-x">
          <ScrollReveal>
            <figure className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-card md:grid-cols-[0.9fr_1.1fr]">
              <img src={img.services} alt="Laptop displaying Shahzam Solution with floating icons for web development, mobile apps, desktop apps, custom software, cloud and DevOps, and API integration" width={826} height={941} loading="lazy" decoding="async" className="h-full max-h-[34rem] w-full object-cover" />
              <figcaption className="p-8 sm:p-12">
                <h2 className="text-3xl font-extrabold">Smart solutions for a digital tomorrow</h2>
                <p className="mt-4 leading-relaxed text-muted">Not sure which service fits? Describe what you are trying to achieve and we will recommend the simplest path to get there.</p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
