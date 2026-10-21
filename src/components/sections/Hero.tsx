import { motion, useReducedMotion } from 'framer-motion'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons'
import ParticleField from '@/components/animations/ParticleField'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[4.5rem]">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(33,184,255,0.10),transparent_55%),radial-gradient(ellipse_at_20%_60%,rgba(255,176,0,0.09),transparent_55%)]" />
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10"><ParticleField /></div>

      <div className="container-x grid min-h-[calc(100dvh-4.5rem)] items-center gap-6 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-16">
        <div>
          <motion.p {...item(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-gold/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" /> Full stack solutions
          </motion.p>
          <h1 id="hero-title" className="text-[2.75rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span {...item(1)} className="block">Build.</motion.span>
            <motion.span {...item(2)} className="block text-gold-gradient">Deploy.</motion.span>
            <motion.span {...item(3)} className="block">Grow.</motion.span>
          </h1>
          <motion.p {...item(4)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We engineer powerful digital experiences through modern web technologies, intelligent software architecture, and reliable cloud infrastructure.
          </motion.p>
          <motion.div {...item(5)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/contact" arrow>Start a Project</PrimaryButton>
            <SecondaryButton to="/services">Explore Our Services</SecondaryButton>
          </motion.div>
        </div>

        <motion.div {...item(3)} className="min-w-0">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
