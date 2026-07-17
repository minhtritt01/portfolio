import { useEffect } from 'react'
import type { Lang } from './i18n'

const SITE_URL = 'https://phanminhtri.dev'

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

/** Keeps title, description, canonical and hreflang in sync with the active language. */
export function useHomeSeo({ lang, title, description }: { lang: Lang; title: string; description: string }) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    document.documentElement.lang = lang

    const path = lang === 'vi' ? '/vi' : '/'
    setLink('canonical', SITE_URL + path)
    setLink('alternate', SITE_URL + '/', 'en')
    setLink('alternate', SITE_URL + '/vi', 'vi')
    setLink('alternate', SITE_URL + '/', 'x-default')
  }, [lang, title, description])
}
