import { Link } from 'react-router-dom'
import { Gauge, Layers, ShieldCheck, Wrench, Quote } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons'
import TechnologyGrid from '@/components/ui/TechnologyGrid'
import ServiceCard from '@/components/ui/ServiceCard'
import ProjectCard from '@/components/ui/ProjectCard'
import DemoNotice from '@/components/ui/DemoNotice'
import { technologies, homeStack } from '@/data/technologies'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { lifecycle } from '@/data/lifecycle'
import { img } from '@/lib/site'

const Section = ({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 sm:py-24 ${className}`}>{children}</section>
)

export function TechStackSection() {
  const items = homeStack.map((id) => technologies.find((t) => t.id === id)!).filter(Boolean)
  return (
    <Section className="bg-bg-2/60">
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading eyebrow="Technology stack" title="A modern stack, chosen with purpose" description="We pick proven tools that keep products fast, secure and maintainable — and we know them deeply." />
        </ScrollReveal>
        <ScrollReveal className="mt-12" delay={0.1}>
          <TechnologyGrid items={items} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" />
        </ScrollReveal>
        <ScrollReveal className="mt-12" delay={0.15}>
          <figure className="glass sweep overflow-hidden rounded-2xl p-2 sm:p-3">
            <img src={img.hero} alt="Full stack workspace with floating React, Laravel, TypeScript, Python, AWS and DevOps tiles" width={768} height={265} loading="lazy" decoding="async" className="w-full rounded-xl object-cover" />
          </figure>
        </ScrollReveal>
        <div className="mt-8 text-center"><SecondaryButton to="/technologies">See the full stack</SecondaryButton></div>
      </div>
    </Section>
  )
}

export function ServicesOverview() {
  return (
    <Section>
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading eyebrow="What we do" title="Services built around your product" description="From first prototype to production infrastructure, one team can take you the whole way." />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.filter((s) => s.featured).map((s, i) => (
            <ScrollReveal key={s.slug} delay={(i % 3) * 0.08}><ServiceCard service={s} /></ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center"><SecondaryButton to="/services" arrow>View all 10 services</SecondaryButton></div>
      </div>
    </Section>
  )
}

export function ProductsSection() {
  return (
    <Section className="bg-bg-2/60">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <figure className="glass sweep overflow-hidden rounded-2xl p-2 sm:p-3">
            <img src={img.products} alt="Laptop with code and a phone beside a checklist of React, Laravel, TypeScript, Python, AWS and DevOps" width={763} height={488} loading="lazy" decoding="async" className="aspect-[763/488] w-full rounded-xl object-cover" />
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <SectionHeading align="left" eyebrow="Ideas to digital products" title="We turn your ideas into powerful web and mobile applications" description="Whether you are validating a new idea or modernising an existing system, we shape it into a dependable product — web, mobile, cloud and DevOps handled together." />
          <ul className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold text-ink">
            {['Web', 'Mobile', 'Cloud', 'DevOps'].map((x) => (
              <li key={x} className="flex items-center gap-2 rounded-lg border border-line bg-tint/[0.02] px-4 py-3"><span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />{x}</li>
            ))}
          </ul>
          <div className="mt-8"><PrimaryButton to="/contact" arrow>Discuss your idea</PrimaryButton></div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export function FeaturedProjects() {
  return (
    <Section>
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading eyebrow="Featured work" title="Selected demonstration projects" description="Illustrative examples of the kind of products we build." />
          <DemoNotice>Demo content — these sample projects are illustrative and do not belong to real clients.</DemoNotice>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => <ScrollReveal key={p.slug} delay={i * 0.08}><ProjectCard project={p} /></ScrollReveal>)}
        </div>
        <div className="mt-10 text-center"><SecondaryButton to="/portfolio" arrow>See all projects</SecondaryButton></div>
      </div>
    </Section>
  )
}

export function LifecycleSection() {
  return (
    <Section className="bg-bg-2/60">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <SectionHeading align="left" eyebrow="Our development lifecycle" title="From idea to production, with structure" description="Every project follows a clear five-stage lifecycle — Plan, Develop, Deploy, Monitor and Improve — so what we deliver is robust, scalable and high-performing." />
          <div className="mt-8"><SecondaryButton to="/process" arrow>Explore our process</SecondaryButton></div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <figure className="glass sweep overflow-hidden rounded-2xl p-2 sm:p-3">
            <img src={img.lifecycle} alt="Five-stage development lifecycle: Plan, Develop, Deploy, Monitor, Improve" width={767} height={488} loading="lazy" decoding="async" className="aspect-[767/488] w-full rounded-xl object-cover" />
          </figure>
        </ScrollReveal>
      </div>
    </Section>
  )
}

const benefits = [
  { icon: Gauge, title: 'Performance', text: 'Lean bundles, optimised queries and caching so your product feels instant.' },
  { icon: Layers, title: 'Scalability', text: 'Architecture and infrastructure that grow with your users and your team.' },
  { icon: ShieldCheck, title: 'Security', text: 'Validated input, least-privilege access and regular updates built into every stage.' },
  { icon: Wrench, title: 'Maintainability', text: 'Typed, tested, documented code that is easy to extend long after launch.' },
]

export function BenefitsSection() {
  return (
    <Section>
      <div className="container-x">
        <ScrollReveal><SectionHeading eyebrow="Why Shahzam Solution" title="Engineering that holds up in production" /></ScrollReveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.07} className="h-full">
              <div className="h-full bg-card p-7 transition-colors hover:bg-elevated">
                <b.icon className="size-7 text-accent" aria-hidden="true" strokeWidth={1.7} />
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function ProcessTimeline() {
  return (
    <Section className="bg-bg-2/60">
      <div className="container-x">
        <ScrollReveal><SectionHeading eyebrow="How we work" title="A clear path from plan to improvement" /></ScrollReveal>
        <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-gold/50 to-transparent max-lg:block lg:left-0 lg:right-0 lg:top-5 lg:h-px lg:w-auto lg:bg-gradient-to-r lg:from-gold/50 lg:via-gold/30 lg:to-transparent" />
          {lifecycle.map((s, i) => (
            <li key={s.id} className="relative pl-14 lg:pl-0 lg:pt-14">
              <ScrollReveal delay={i * 0.08}>
                <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-gold/60 bg-bg font-display text-sm font-extrabold text-accent">{s.index}</span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.tagline}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

const sampleTestimonials = [
  'Sample testimonial: a short, specific quote about communication and delivery will appear here.',
  'Sample testimonial: feedback on code quality, reliability and support after launch will appear here.',
  'Sample testimonial: a client reflection on how the project improved their business will appear here.',
]

export function Testimonials() {
  return (
    <Section>
      <div className="container-x">
        <ScrollReveal>
          <SectionHeading eyebrow="Client voices" title="What clients will say about working with us" />
          <DemoNotice>Sample content — placeholder testimonials until genuine client feedback is provided.</DemoNotice>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sampleTestimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <Quote className="size-7 text-accent/70" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/90">{t}</blockquote>
                <figcaption className="mt-6 border-t border-tint/5 pt-4 text-sm text-muted">
                  <span className="font-semibold text-ink">Client name</span> · Role, Company <span className="ml-1 rounded bg-gold/10 px-1.5 py-0.5 text-[0.65rem] font-bold uppercase text-accent">Sample</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function CtaSection({ title = "Let's build something great together", text = 'Tell us about your idea and we will propose a clear, practical way to bring it to life.' }: { title?: string; text?: string }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-elevated to-card px-6 py-14 text-center sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-gold/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-sky/10 blur-3xl" />
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton to="/contact" arrow>Start a Project</PrimaryButton>
              <SecondaryButton to="/portfolio">View our work</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-muted">Prefer to browse first? <Link to="/faq" className="font-semibold text-accent-2 hover:text-accent">Read the FAQ</Link></p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
