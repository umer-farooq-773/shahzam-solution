import Hero from '@/components/sections/Hero'
import {
  TechStackSection, ServicesOverview, ProductsSection, FeaturedProjects, LifecycleSection,
  BenefitsSection, ProcessTimeline, Testimonials, CtaSection,
} from '@/components/sections/HomeSections'
import { useSeo } from '@/lib/useSeo'

export default function HomePage() {
  useSeo('Shahzam Solution', 'Shahzam Solution builds web applications, mobile apps, custom software, cloud infrastructure, APIs and DevOps pipelines with React, Laravel, TypeScript, Python and AWS.')
  return (
    <>
      <Hero />
      <TechStackSection />
      <ServicesOverview />
      <ProductsSection />
      <FeaturedProjects />
      <LifecycleSection />
      <BenefitsSection />
      <ProcessTimeline />
      <Testimonials />
      <CtaSection />
    </>
  )
}
