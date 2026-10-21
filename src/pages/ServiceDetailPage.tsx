import { Navigate, useParams, Link } from 'react-router-dom'
import { Check, PackageCheck } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ServiceCard from '@/components/ui/ServiceCard'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons'
import { CtaSection } from '@/components/sections/HomeSections'
import { getService, services } from '@/data/services'
import { useSeo } from '@/lib/useSeo'

export default function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = getService(slug)
  useSeo(service?.title ?? 'Service not found', service?.description ?? 'This service could not be found.')
  if (!service) return <Navigate to="/404" replace />

  const Icon = service.icon
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow="Service"
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
        title={service.title}
        description={service.description}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton to="/contact" arrow>Discuss this service</PrimaryButton>
          <SecondaryButton to="/portfolio">See sample projects</SecondaryButton>
        </div>
      </PageHeader>

      <section className="pb-20">
        <div className="container-x grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <div className="glass h-full rounded-2xl p-7 sm:p-9">
              <span className="grid size-14 place-items-center rounded-xl bg-gold/10 text-accent ring-1 ring-gold/25"><Icon className="size-7" aria-hidden="true" strokeWidth={1.7} /></span>
              <h2 className="mt-6 text-2xl font-extrabold">Key capabilities</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-ink/90"><Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />{c}</li>
                ))}
              </ul>
              <h2 className="mt-9 flex items-center gap-2 text-2xl font-extrabold"><PackageCheck className="size-6 text-accent" aria-hidden="true" />What you receive</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-ink/90"><Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />{c}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <aside className="glass h-full rounded-2xl p-7 sm:p-9" aria-label="Technologies for this service">
              <h2 className="text-xl font-extrabold">Typical technologies</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.stack.map((t) => <li key={t} className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-sm font-medium text-accent-2">{t}</li>)}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">Final choices always depend on your goals, team and existing systems. <Link to="/technologies" className="font-semibold text-accent-2 hover:text-accent">See our full stack →</Link></p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <h2 className="mb-8 text-2xl font-extrabold">Related services</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((s) => <ServiceCard key={s.slug} service={s} />)}</div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
