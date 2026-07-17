const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  // gtag.js reads each dataLayer entry as an `arguments` object — pushing a plain
  // array is not equivalent, so keep the canonical snippet's shape.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.('event', name, params)
}
