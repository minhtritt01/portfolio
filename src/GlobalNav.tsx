import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import type { Lang } from './i18n'

/**
 * GlobalNav — floating controls for the single-page site: language pill + theme toggle.
 */

function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme')) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
      document.documentElement.classList.toggle('dark', e.matches)
      document.documentElement.classList.toggle('light', !e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = useCallback(() => {
    // Kill all transitions so the switch is instant rather than a staggered fade
    document.documentElement.style.setProperty('--theme-transition', 'none')
    document.querySelectorAll('*').forEach(el => {
      (el as HTMLElement).style.transition = 'none'
    })

    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.style.removeProperty('--theme-transition')
        document.querySelectorAll('*').forEach(el => {
          (el as HTMLElement).style.transition = ''
        })
      })
    })
  }, [isDark])

  return { isDark, toggleTheme }
}

export default function GlobalNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()
  const lang: Lang = pathname === '/vi' ? 'vi' : 'en'

  const switchLang = () => {
    const next = lang === 'en' ? '/vi' : '/'
    navigate(next + window.location.hash)
  }

  return (
    <div className="fixed top-5 right-6 z-50 flex items-center gap-2">
      <button
        onClick={switchLang}
        className="inline-flex items-center justify-center gap-1.5 w-[4.5rem] h-10 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
        aria-label={lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English'}
      >
        {lang === 'en' ? '🇻🇳 VI' : '🇬🇧 EN'}
      </button>
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-4 h-4 text-muted-foreground" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
      </button>
    </div>
  )
}
