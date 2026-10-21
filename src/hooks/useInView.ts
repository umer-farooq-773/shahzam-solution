import { useEffect, useRef, useState } from 'react'

/** Reports whether an element is currently on screen (used to pause canvases/WebGL off-screen). */
export function useInView<T extends HTMLElement>(rootMargin = '100px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return { ref, inView }
}
