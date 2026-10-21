import { useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, Code2, CloudUpload, Activity, TrendingUp, Check } from 'lucide-react'
import { lifecycle } from '@/data/lifecycle'
import { img } from '@/lib/site'

const icons = [Lightbulb, Code2, CloudUpload, Activity, TrendingUp]

const CX = 250, CY = 250, R_OUT = 205, R_IN = 120, GAP = 3.5, DEPTH = 12

const rad = (d: number) => (d * Math.PI) / 180
const pt = (r: number, a: number) => [CX + r * Math.cos(rad(a)), CY + r * Math.sin(rad(a))]

function arc(i: number) {
  const a0 = -90 + i * 72 + GAP / 2
  const a1 = -90 + (i + 1) * 72 - GAP / 2
  const [x0, y0] = pt(R_OUT, a0), [x1, y1] = pt(R_OUT, a1)
  const [x2, y2] = pt(R_IN, a1), [x3, y3] = pt(R_IN, a0)
  return `M${x0},${y0} A${R_OUT},${R_OUT} 0 0 1 ${x1},${y1} L${x2},${y2} A${R_IN},${R_IN} 0 0 0 ${x3},${y3} Z`
}
const mid = (i: number) => -90 + i * 72 + 36

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16)
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(v + (amt < 0 ? v * amt : (255 - v) * amt))))
  return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`
}

function Detail({ index }: { index: number }) {
  const s = lifecycle[index]
  const Icon = icons[index]
  return (
    <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center gap-4">
        <span className="grid size-14 place-items-center rounded-xl text-on-accent" style={{ background: s.color }}>
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Stage {s.index} of 5</p>
          <h3 className="text-3xl font-extrabold text-ink">{s.title}</h3>
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-accent-2">{s.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-ink/90">
            <Check className="mt-0.5 size-4 shrink-0" style={{ color: s.color }} aria-hidden="true" />{p}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function LifecycleDiagram() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  const onKey = (i: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i) }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setActive((i + 1) % 5) }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); setActive((i + 4) % 5) }
  }

  return (
    <div>
      {/* Desktop / tablet: 3D-inspired interactive ring */}
      <div className="hidden items-center gap-10 md:grid md:grid-cols-[minmax(0,26rem)_1fr] lg:grid-cols-[minmax(0,30rem)_1fr] lg:gap-16">
        <svg viewBox="-20 -20 540 560" role="group" aria-label="Development lifecycle diagram. Select a stage to read about it." className="mx-auto w-full overflow-visible">
          <defs>
            {lifecycle.map((s, i) => (
              <linearGradient key={s.id} id={`lc-g-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={shade(s.color, 0.28)} />
                <stop offset="100%" stopColor={shade(s.color, -0.2)} />
              </linearGradient>
            ))}
            <radialGradient id="lc-core" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#1b2b45" /><stop offset="100%" stopColor="#0b1422" />
            </radialGradient>
            <filter id="lc-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="9" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ground shadow */}
          <ellipse cx={CX} cy={CY + 232} rx="190" ry="20" fill="#000" opacity="0.35" />

          {lifecycle.map((s, i) => {
            const a = mid(i)
            const isActive = active === i
            const dx = Math.cos(rad(a)) * (isActive ? 14 : 0)
            const dy = Math.sin(rad(a)) * (isActive ? 14 : 0)
            const [ix, iy] = pt((R_OUT + R_IN) / 2, a)
            const Icon = icons[i]
            return (
              <motion.g
                key={s.id}
                role="button"
                tabIndex={0}
                aria-label={`Stage ${s.index}: ${s.title}. ${s.tagline}`}
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                onKeyDown={onKey(i)}
                animate={{ x: dx, y: dy - (isActive ? 4 : 0) }}
                transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 18 }}
                style={{ cursor: 'pointer', outline: 'none' }}
                className="lc-seg focus-visible:[&>path:last-of-type]:stroke-white"
              >
                {/* extrusion */}
                <path d={arc(i)} transform={`translate(0 ${DEPTH})`} fill={shade(s.color, -0.55)} />
                <path d={arc(i)} transform={`translate(0 ${DEPTH / 2})`} fill={shade(s.color, -0.4)} />
                {/* top face */}
                <path
                  d={arc(i)}
                  fill={`url(#lc-g-${i})`}
                  stroke={isActive ? '#fff' : 'rgba(255,255,255,0.12)'}
                  strokeWidth={isActive ? 2 : 1}
                  filter={isActive ? 'url(#lc-glow)' : undefined}
                  opacity={isActive ? 1 : 0.82}
                />
                <g transform={`translate(${ix - 14} ${iy - 34})`} style={{ pointerEvents: 'none' }}>
                  <Icon width={28} height={28} stroke="#fff" strokeWidth={1.8} />
                </g>
                <text x={ix} y={iy + 14} textAnchor="middle" fill="#fff" fontSize="14.5" fontWeight="800" fontFamily="Manrope, sans-serif" style={{ pointerEvents: 'none' }}>
                  {s.index}. {s.title}
                </text>
              </motion.g>
            )
          })}

          {/* core */}
          <circle cx={CX} cy={CY + 6} r="92" fill="#000" opacity="0.35" />
          <circle cx={CX} cy={CY} r="92" fill="url(#lc-core)" stroke="rgba(255,176,0,0.35)" strokeWidth="1.5" />
          <image href={img.logoStackedLight} x={CX - 62} y={CY - 66} width="124" height="124" preserveAspectRatio="xMidYMid meet" />
        </svg>

        <div className="glass min-h-[22rem] rounded-2xl p-7 lg:p-9" aria-live="polite">
          <AnimatePresence mode="wait"><Detail index={active} /></AnimatePresence>
          <div className="mt-7 flex gap-2" role="group" aria-label="Choose a lifecycle stage">
            {lifecycle.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show stage ${s.index}: ${s.title}`}
                aria-pressed={active === i}
                className={`h-2 flex-1 rounded-full transition-all ${active === i ? 'opacity-100' : 'opacity-35 hover:opacity-70'}`}
                style={{ background: s.color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: clean vertical timeline */}
      <ol className="relative space-y-4 md:hidden">
        <span aria-hidden="true" className="absolute bottom-4 left-[1.65rem] top-4 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
        {lifecycle.map((s, i) => {
          const Icon = icons[i]
          const isActive = active === i
          return (
            <li key={s.id} className="relative pl-16">
              <span className="absolute left-0 top-0 grid size-[3.3rem] place-items-center rounded-xl text-on-accent" style={{ background: s.color }}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <button type="button" aria-expanded={isActive} onClick={() => setActive(i)} className={`glass w-full rounded-xl p-4 text-left transition-colors ${isActive ? 'border-gold/50' : ''}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Stage {s.index}</span>
                <span className="block text-lg font-bold text-ink">{s.title}</span>
                <span className="block text-sm text-accent-2">{s.tagline}</span>
                {isActive && (
                  <span className="mt-3 block text-sm leading-relaxed text-muted">
                    {s.description}
                    <span className="mt-3 block space-y-1.5">
                      {s.points.map((p) => (
                        <span key={p} className="flex items-start gap-2 text-ink/90"><Check className="mt-0.5 size-4 shrink-0" style={{ color: s.color }} aria-hidden="true" />{p}</span>
                      ))}
                    </span>
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
