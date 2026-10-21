import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface P { x: number; y: number; vx: number; vy: number }

// Dark values are the original colours; light uses a deeper gold so nodes stay visible on a pale background.
const PALETTE = {
  dark: { line: '255,176,0', lineAlpha: 0.1, dot: 'rgba(255,194,71,0.55)' },
  light: { line: '185,129,0', lineAlpha: 0.22, dot: 'rgba(185,129,0,0.5)' },
}
const readPalette = () => (document.documentElement.getAttribute('data-theme') === 'light' ? PALETTE.light : PALETTE.dark)

/**
 * Low-intensity canvas of drifting gold nodes joined by faint circuit-style lines.
 * Pauses when the tab is hidden or the element is off-screen, and renders a single
 * static frame when the user prefers reduced motion.
 */
export default function ParticleField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, raf = 0, visible = true
    let pts: P[] = []
    let pal = readPalette()
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(46, Math.max(18, (w * h) / 26000)))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        if (!reduce) {
          a.x += a.vx; a.y += a.vy
          if (a.x < 0 || a.x > w) a.vx *= -1
          if (a.y < 0 || a.y > h) a.vy *= -1
        }
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(${pal.line},${pal.lineAlpha * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        ctx.fillStyle = pal.dot
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.4, 0, Math.PI * 2); ctx.fill()
      }
    }

    const loop = () => {
      if (visible && !document.hidden) draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    draw()
    if (!reduce) raf = requestAnimationFrame(loop)

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)
    const ro = new ResizeObserver(() => { resize(); draw() })
    ro.observe(canvas)

    // Re-colour (without resetting the particles) when the theme changes.
    const mo = new MutationObserver(() => { pal = readPalette(); draw() })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); mo.disconnect() }
  }, [reduce])

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
