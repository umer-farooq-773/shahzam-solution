import { useEffect } from 'react'

const BASE = 'Shahzam Solution'

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets a unique <title>, meta description and Open Graph tags for the current page. */
export function useSeo(title: string, description: string, image = '/images/full_stack_hero.png') {
  useEffect(() => {
    const full = title === BASE ? title : `${title} | ${BASE}`
    document.title = full
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)
    setMeta('meta[property="og:url"]', 'property', 'og:url', window.location.href)
  }, [title, description, image])
}
