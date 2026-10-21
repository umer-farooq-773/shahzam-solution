import { lazy, Suspense, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import ErrorBoundary, { hasWebGL } from '@/components/three/ErrorBoundary'
import { useInView } from '@/hooks/useInView'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { img } from '@/lib/site'

const HeroScene = lazy(() => import('@/components/three/HeroScene'))

/** Static fallback: the supplied full-stack hero artwork (used when WebGL is unavailable or fails). */
function StaticFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <img
        src={img.hero}
        alt="Floating development workspace showing React, Laravel, TypeScript, Python, AWS and DevOps"
        width={768}
        height={265}
        className="w-full rounded-2xl border border-line object-cover shadow-soft"
      />
    </div>
  )
}

export default function HeroVisual() {
  const reduce = useReducedMotion()
  const compact = useMediaQuery('(max-width: 767px)')
  const { ref, inView } = useInView<HTMLDivElement>()
  const [webgl, setWebgl] = useState<boolean | null>(null)
  useEffect(() => setWebgl(hasWebGL()), [])

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Interactive 3D illustration of React, Laravel, TypeScript, Python, AWS and DevOps tiles orbiting a glowing core"
      className="relative mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none"
    >
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-gold/10 blur-3xl" />
      {webgl === false ? (
        <StaticFallback />
      ) : webgl ? (
        <ErrorBoundary fallback={<StaticFallback />}>
          <Suspense fallback={<div className="grid h-full place-items-center"><div className="size-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" /></div>}>
            <HeroScene paused={!inView} still={!!reduce} compact={compact} />
          </Suspense>
        </ErrorBoundary>
      ) : null}
    </div>
  )
}
