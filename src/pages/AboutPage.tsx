import { Check, Eye, Target } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import TechnologyIcon from '@/components/ui/TechnologyIcon'
import DemoNotice from '@/components/ui/DemoNotice'
import { CtaSection } from '@/components/sections/HomeSections'
import { technologies } from '@/data/technologies'
import { expertise, journey, mission, philosophy, values, vision } from '@/data/about'
import { img } from '@/lib/site'
import { useSeo } from '@/lib/useSeo'
import { useTheme } from '@/components/theme/ThemeProvider'

export default function AboutPage() {
  useSeo('About Us', 'Learn about Shahzam Solution — our mission, engineering philosophy, values and technical expertise.', img.workspace)
  const { theme } = useTheme()
  const orbit = technologies.filter((t) => t.iconKey).slice(0, 10)

  return (
    <>
      <PageHeader
        eyebrow="About us"
        crumbs={[{ label: 'About' }]}
        title={<>Engineers who care about <span className="text-gold-gradient">the craft</span></>}
        description="Shahzam Solution is a software development company building web, mobile and cloud products — with an emphasis on clarity, quality and long-term maintainability."
      />

      <section className="pb-20">
        <div className="container-x">
          <ScrollReveal>
            <figure className="overflow-hidden rounded-3xl border border-line shadow-soft">
              <img src={img.workspace} alt="Developer workspace with a laptop showing Laravel code, a Shahzam Solution logo wall, notebook and mug" width={1672} height={941} decoding="async" className="aspect-[16/9] w-full object-cover" />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="pb-24">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {[{ icon: Target, label: 'Our mission', text: mission }, { icon: Eye, label: 'Our vision', text: vision }].map((b, i) => (
            <ScrollReveal key={b.label} delay={i * 0.1} className="h-full">
              <div className="glass h-full rounded-2xl p-8 sm:p-10">
                <b.icon className="size-8 text-accent" aria-hidden="true" strokeWidth={1.6} />
                <h2 className="mt-5 text-2xl font-extrabold">{b.label}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{b.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Philosophy — editorial layout */}
      <section className="bg-bg-2/60 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="Engineering philosophy" title="How we think about building software" description="A few principles guide every decision we make on a project." />
          </ScrollReveal>
          <ol className="space-y-10">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <li className="flex gap-6 border-t border-line pt-8">
                  <span className="font-display text-5xl font-extrabold leading-none text-accent/30" aria-hidden="true">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-x">
          <ScrollReveal><SectionHeading eyebrow="Company values" title="What we stand for" /></ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.07} className="h-full">
                <div className="glass sweep h-full rounded-2xl p-6">
                  <v.icon className="size-7 text-accent" aria-hidden="true" strokeWidth={1.7} />
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise + ecosystem */}
      <section className="bg-bg-2/60 py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading align="left" eyebrow="Technical expertise" title="Depth across the full stack" />
            <ul className="mt-8 space-y-3">
              {expertise.map((e) => (
                <li key={e} className="flex items-start gap-3 text-ink/90"><Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />{e}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div role="img" aria-label="Technology ecosystem: technologies orbiting the Shahzam Solution logo" className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
              <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-line" />
              <div aria-hidden="true" className="absolute inset-[26%] rounded-full border border-line/60" />
              <img src={theme === 'light' ? img.logoStackedColor : img.logoStackedLight} alt="" width={400} height={400} className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2" />
              <div aria-hidden="true" className="eco-orbit absolute inset-0">
                {orbit.map((t, i) => {
                  const a = (i / orbit.length) * Math.PI * 2
                  const r = i % 2 ? 31 : 40
                  return (
                    <span key={t.id} className="absolute grid size-11 place-items-center rounded-xl border border-line bg-card shadow-soft" style={{ left: `calc(50% + ${Math.cos(a) * r}% - 1.375rem)`, top: `calc(50% + ${Math.sin(a) * r}% - 1.375rem)` }}>
                      <span className="eco-counter grid place-items-center"><TechnologyIcon tech={t} size={22} /></span>
                    </span>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeading eyebrow="Our journey" title="Where we have been, and where we are going" />
            <DemoNotice>Placeholder timeline — replace with real milestones in src/data/about.ts.</DemoNotice>
          </ScrollReveal>
          <ol className="relative mx-auto mt-14 max-w-3xl space-y-10 before:absolute before:bottom-2 before:left-[0.95rem] before:top-2 before:w-px before:bg-gradient-to-b before:from-gold/60 before:to-transparent sm:before:left-1/2">
            {journey.map((j, i) => (
              <li key={i} className="relative pl-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:pl-0">
                <span className="absolute left-0 top-1 size-[1.9rem] rounded-full border-2 border-gold bg-bg sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
                <ScrollReveal className={i % 2 ? 'sm:col-start-2' : 'sm:text-right'}>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">{j.year}</p>
                  <h3 className="mt-1 text-xl font-bold">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{j.text}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection title="Have a project in mind?" text="We would love to hear about it. Let us discuss how we can help." />
    </>
  )
}
