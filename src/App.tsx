import { useState, useEffect, useCallback, useMemo, useReducer, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, ExternalLink, Briefcase, Code, Globe, Bot, Zap, BadgeCheck, FolderGit2, Sparkles, Download, Github, Package, Calendar, UserCheck, SkipForward, List } from 'lucide-react'
import { translations, seo, type Lang } from './i18n'
import { useHomeSeo } from './use-seo'

import heroImage from './assets/heroImage.png'
import skyjoy from './assets/portfolio/skyjoy.webp'
import sfi from './assets/portfolio/sfi.png'
import syrup from './assets/portfolio/syrup.png'
import teampower from './assets/portfolio/teampower.png'
import ail from './assets/portfolio/ailglobal.png'
import onskyHealth from './assets/portfolio/onskyHealth.webp'
import qvCar from './assets/portfolio/qvCar.webp'
import skycare from './assets/portfolio/skycare.webp'
import spotifyFlutter from './assets/portfolio/spotify_flutter.png'
import dashboard from './assets/portfolio/dashboard.png'

import flutter from './assets/flutter.png'
import dart from './assets/dart.png'
import bloc from './assets/bloc.png'
import riverpod from './assets/riverpod.png'
import firebase from './assets/firebase.png'
import javaAndroid from './assets/android.png'
import kotlinIcon from './assets/Kotlin_Icon.png'
import providerIcon from './assets/flutter_favorite.png'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import reactImage from './assets/react.png'
import tailwind from './assets/tailwind.png'
import redux from './assets/redux.png'
import materialui from './assets/material-ui.png'
import node from './assets/node.png'
import mongodb from './assets/mongodb.png'
import reactquery from './assets/react-query.png'
import github from './assets/github.png'
import formilk from './assets/formilk.png'
import jenkinsIcon from './assets/jenkins.svg'
import fastlaneIcon from './assets/fastlane.svg'
import mqttIcon from './assets/Mqtt-hor.svg.png'
import claudeIcon from './assets/Claude-ai-icon.svg.png'
import chatgptIcon from './assets/chatgpt-logo-png.webp'
import cursorIcon from './assets/cursor-ai.png'
import antigravityIcon from './assets/antigravity-icon__full-color.png'


function LinkedInLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
  )
}

function useHydrated() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return hydrated
}

function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { ref: setRef, isInView }
}


// ---------------------------------------------------------------------------
// GridSnakes — subtle animated trails on the dot grid (hero only)
// ---------------------------------------------------------------------------
const GRID = 24                // matches CSS dot grid size
const SNAKE_COUNT = 3
const SNAKE_LENGTH = 8         // dots per trail
const TICK_MS = 180            // movement speed (lower = faster)
const DIRS: [number, number][] = [[1,0],[-1,0],[0,1],[0,-1]]

function GridSnakes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    const resize = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize snakes at random grid positions
    const cols = () => Math.floor(canvas.width / GRID)
    const rows = () => Math.floor(canvas.height / GRID)

    type Snake = { trail: [number, number][]; dir: [number, number] }
    const snakes: Snake[] = Array.from({ length: SNAKE_COUNT }, () => {
      const x = Math.floor(Math.random() * cols())
      const y = Math.floor(Math.random() * rows())
      return { trail: [[x, y]], dir: DIRS[Math.floor(Math.random() * 4)] }
    })

    const tick = () => {
      const c = cols()
      const r = rows()

      for (const snake of snakes) {
        // 30% chance to turn
        if (Math.random() < 0.3) {
          snake.dir = DIRS[Math.floor(Math.random() * 4)]
        }
        const [hx, hy] = snake.trail[snake.trail.length - 1]
        let nx = hx + snake.dir[0]
        let ny = hy + snake.dir[1]

        // Wrap around edges
        if (nx < 0) nx = c - 1
        if (nx >= c) nx = 0
        if (ny < 0) ny = r - 1
        if (ny >= r) ny = 0

        snake.trail.push([nx, ny])
        if (snake.trail.length > SNAKE_LENGTH) snake.trail.shift()
      }

      // Draw
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const snake of snakes) {
        for (let i = 0; i < snake.trail.length; i++) {
          const [gx, gy] = snake.trail[i]
          const alpha = ((i + 1) / snake.trail.length) * 0.5
          ctx.beginPath()
          ctx.arc(gx * GRID + GRID / 2, gy * GRID + GRID / 2, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 217, 255, ${alpha})`
          ctx.fill()
        }
      }
    }

    let interval: ReturnType<typeof setInterval> | null = null
    const start = () => { if (!interval) interval = setInterval(tick, TICK_MS) }
    const stop = () => { if (interval) { clearInterval(interval); interval = null } }

    // Only animate when canvas is in viewport AND tab is visible
    const io = new IntersectionObserver(
      entries => { entries[0].isIntersecting && document.visibilityState === 'visible' ? start() : stop() },
      { threshold: 0 },
    )
    io.observe(canvas)

    const onVisibility = () => { document.visibilityState === 'visible' && canvas.getBoundingClientRect().top < window.innerHeight ? start() : stop() }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" />
}


function useTypewriterRotation(roles: readonly string[], { typeSpeed = 80, deleteSpeed = 60, pauseAfterType = 2000, pauseAfterDelete = 300 } = {}) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(roles[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const currentRole = roles[roleIndex]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType)
    } else if (isDeleting && displayText === '') {
      // Finished deleting — move to next role and start typing
      timeout = setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setIsDeleting(false)
      }, pauseAfterDelete)
    } else if (isDeleting) {
      // Deleting word by word (ctrl+backspace style)
      timeout = setTimeout(() => {
        const words = displayText.trimEnd().split(' ')
        words.pop()
        setDisplayText(words.length > 0 ? words.join(' ') + ' ' : '')
      }, deleteSpeed)
    } else {
      // Typing character by character
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return { displayText, roleIndex, isDeleting }
}

const HOME_TOC_SECTIONS = [
  { id: 'experience', en: 'Experience', vi: 'Kinh nghiệm' },
  { id: 'projects', en: 'Projects', vi: 'Dự án' },
  { id: 'tech', en: 'Skills & Stack', vi: 'Kỹ năng' },
  { id: 'contact', en: 'Contact', vi: 'Liên hệ' },
] as const

function HomeToc({ lang }: { lang: Lang }) {
  const [hasRevealed, setHasRevealed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [tocOpen, setTocOpen] = useState(false)

  // Show when #experience top reaches viewport, hide when user scrolls above it
  useEffect(() => {
    const check = () => {
      const trigger = document.getElementById('experience')
      if (!trigger) return
      const show = trigger.getBoundingClientRect().top <= 100
      setVisible(show)
      if (show && !hasRevealed) setHasRevealed(true)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [hasRevealed])

  // Track active section — last section whose top has scrolled past 40% of viewport
  // At page bottom, force last section as active
  useEffect(() => {
    if (!hasRevealed) return
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (atBottom) {
        setActiveId(HOME_TOC_SECTIONS[HOME_TOC_SECTIONS.length - 1].id)
        return
      }
      const threshold = window.innerHeight * 0.4
      let current = ''
      for (const s of HOME_TOC_SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= threshold) current = s.id
      }
      if (current) setActiveId(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [hasRevealed])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    setTocOpen(false)
    const isLast = id === HOME_TOC_SECTIONS[HOME_TOC_SECTIONS.length - 1].id
    const top = isLast
      ? document.documentElement.scrollHeight - window.innerHeight
      : el.getBoundingClientRect().top + window.scrollY - 96
    requestAnimationFrame(() => { window.scrollTo({ top, behavior: 'instant' }) })
  }, [])

  const activeIdx = HOME_TOC_SECTIONS.findIndex(s => s.id === activeId)

  const lastIdx = HOME_TOC_SECTIONS.length - 1
  // Progress as fraction between first and last dot (0 to 1)
  const progressFrac = activeIdx >= 0 ? activeIdx / lastIdx : 0

  const tocNav = (
    <nav aria-label="Table of contents" className="relative">
      {/* Vertical track — spans from first dot center to last dot center */}
      <div className="absolute left-[5.5px] top-[14px] w-px bg-border" style={{ height: 'calc(100% - 28px)' }} />
      {/* Animated progress fill */}
      <motion.div
        className="absolute left-[5.5px] top-[14px] w-px bg-primary origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: progressFrac }}
        style={{ height: 'calc(100% - 28px)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      <ul className="relative space-y-1">
        {HOME_TOC_SECTIONS.map((section, i) => {
          const isActive = activeId === section.id
          const isPast = i <= activeIdx
          return (
            <li key={section.id} className="flex items-center gap-3">
              <motion.span
                className={`relative z-10 w-3 h-3 rounded-full border-2 shrink-0 transition-colors duration-300 ${
                  isActive ? 'border-primary bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]'
                  : isPast ? 'border-primary/50 bg-card'
                  : 'border-border bg-card'
                }`}
                animate={isActive ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <button
                onClick={() => scrollTo(section.id)}
                className={`text-left text-[13px] tracking-wide py-1 transition-all duration-300 ${
                  isActive ? 'text-primary font-semibold translate-x-0.5'
                  : isPast ? 'text-foreground/70'
                  : 'text-muted-foreground/60 hover:text-foreground/80'
                }`}
              >
                {section[lang]}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop: sticky sidebar */}
          <motion.div
            initial={hasRevealed ? { opacity: 0, x: -12 } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden 2xl:block fixed top-24 left-[max(1rem,calc(50%-46rem))] w-48 max-h-[calc(100vh-8rem)] overflow-visible z-30"
          >
            {tocNav}
          </motion.div>

          {/* Mobile / narrow desktop: floating button + drawer */}
          <motion.button
            initial={hasRevealed ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setTocOpen(o => !o)}
            className="2xl:hidden fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
            aria-label="Toggle table of contents"
          >
            <List className="w-5 h-5" />
          </motion.button>
          {tocOpen && (
            <>
              <div className="2xl:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={() => setTocOpen(false)} />
              <div className="2xl:hidden fixed bottom-20 right-6 z-50 w-64 max-h-[70vh] overflow-y-auto bg-card border border-border rounded-xl shadow-xl p-4">
                {tocNav}
              </div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  )
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [detected, setDetected] = useState(false)
  const hydrated = useHydrated()
  const wasAboveFold = useRef(false)

  useEffect(() => {
    if (!ref) return

    // IntersectionObserver instead of getBoundingClientRect (avoids forced reflow).
    // First callback fires immediately for visible elements → above-fold detection.
    let firstCallback = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (firstCallback) {
          firstCallback = false
          if (entry.isIntersecting) wasAboveFold.current = true
          setDetected(true)
        }
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return (
    <motion.div
      ref={setRef}
      initial={false}
      animate={
        !hydrated || !detected
          ? false  // Pre-hydration / pre-detection: preserve SSR DOM state
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 40 }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parsea texto con marcadores de highlight:
// *texto* = Tipo B: gradiente durante typewriter (frase activa), luego normal
// +texto+ = Tipo C: normal durante typewriter, gradiente en encendido final
// **texto** = gradiente siempre (permanent) + slow typing
type ParsedHighlights = {
  clean: string
  ranges: [number, number][]          // backward compat
  typewriterRanges: [number, number][] // *texto* - Tipo B: gradiente solo durante typewriter
  finalRanges: [number, number][]      // +texto+ - Tipo C: gradiente solo en encendido final
  permanentRanges: [number, number][]  // **texto** - siempre gradiente
  slowRanges: [number, number][]       // para typing lento
}

function parseHighlights(text: string): ParsedHighlights {
  const typewriterRanges: [number, number][] = []  // Tipo B: *texto*
  const finalRanges: [number, number][] = []       // Tipo C: +texto+
  const permanentRanges: [number, number][] = []   // **texto**
  const slowRanges: [number, number][] = []
  let clean = ''
  let i = 0

  while (i < text.length) {
    // Check for ** (permanent highlight + slow)
    if (text[i] === '*' && text[i + 1] === '*') {
      const start = clean.length
      i += 2
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '*')) {
        clean += text[i]
        i++
      }
      permanentRanges.push([start, clean.length])
      slowRanges.push([start, clean.length])
      i += 2
    }
    // Check for + (Tipo C: gradiente solo en encendido final)
    // Si +digit (ej: +15), mostrar como "15+" (convención internacional)
    else if (text[i] === '+') {
      const nextIsDigit = /\d/.test(text[i + 1] || '')
      const start = clean.length
      i++ // skip opening +
      if (nextIsDigit) {
        // Leer dígitos primero, luego añadir + después (15+ en vez de +15)
        while (i < text.length && /\d/.test(text[i])) {
          clean += text[i]
          i++
        }
        clean += '+'
      }
      while (i < text.length && text[i] !== '+') {
        clean += text[i]
        i++
      }
      finalRanges.push([start, clean.length])
      i++ // skip closing +
    }
    // Check for single * (Tipo B: gradiente solo durante typewriter)
    else if (text[i] === '*') {
      const start = clean.length
      i++
      while (i < text.length && text[i] !== '*') {
        clean += text[i]
        i++
      }
      typewriterRanges.push([start, clean.length])
      i++
    } else {
      clean += text[i]
      i++
    }
  }

  // For backward compatibility
  const ranges: [number, number][] = [...permanentRanges]
  return { clean, ranges, typewriterRanges, finalRanges, permanentRanges, slowRanges }
}

// Renderiza texto con rangos destacados y soporte para transición
// Tipos de highlight:
// - typewriter (Tipo B): gradiente durante typewriter, luego normal
// - final (Tipo C): normal durante typewriter, gradiente en encendido final
// - permanent: siempre gradiente
function renderHighlightedText(
  text: string,
  _ranges: [number, number][],  // kept for API compatibility
  options?: {
    dimmed?: boolean           // texto atenuado (después del typewriter)
    finalReveal?: boolean      // Tipo C se enciende con gradiente
    revealed?: boolean         // resto del texto se enciende
    typewriterRanges?: [number, number][]  // Tipo B
    finalRanges?: [number, number][]       // Tipo C
    permanentRanges?: [number, number][]
    highlightsActive?: boolean // gradiente activo durante typewriter
  }
) {
  const {
    dimmed = false,
    finalReveal = false,
    revealed = false,
    typewriterRanges = [],
    finalRanges = [],
    permanentRanges = [],
    highlightsActive = false
  } = options || {}

  // Build a map of character positions to their highlight type
  type HighlightType = 'typewriter' | 'final' | 'permanent' | null
  const charTypes: HighlightType[] = new Array(text.length).fill(null)

  typewriterRanges.forEach(([start, end]) => {
    for (let i = start; i < end && i < text.length; i++) charTypes[i] = 'typewriter'
  })
  finalRanges.forEach(([start, end]) => {
    for (let i = start; i < end && i < text.length; i++) charTypes[i] = 'final'
  })
  permanentRanges.forEach(([start, end]) => {
    for (let i = start; i < end && i < text.length; i++) charTypes[i] = 'permanent'
  })

  // Opacity states - SEPARADOS para cada tipo
  // Texto normal y Tipo B: atenuados, luego quedan en segundo plano (opacity-50)
  const textOpacity = dimmed ? (revealed ? 'opacity-50' : 'opacity-15') : 'opacity-100'
  // Tipo C: atenuados hasta que finalReveal=true (se encienden ANTES que el resto)
  const isFinalLowOpacity = dimmed && !finalReveal

  // UN SOLO TIMING para TODO - sincronización perfecta
  const timing = 'duration-[2500ms] ease-in-out'

  // If no special ranges, render as plain text
  if (typewriterRanges.length === 0 && finalRanges.length === 0 && permanentRanges.length === 0) {
    return (
      <span className={`text-muted-foreground transition-opacity ${timing} ${textOpacity}`}>
        {text}
      </span>
    )
  }

  // Group consecutive characters by type
  const parts: React.ReactNode[] = []
  let currentType: HighlightType = charTypes[0]
  let currentStart = 0

  // Per-word inline-grid so highlighted text can wrap naturally on narrow screens.
  // Each word shows its slice of the full-phrase gradient via background-size/position.
  const pushHighlightWords = (
    seg: string, baseKey: number, showGradient: boolean, normalOpacity: string
  ) => {
    const gOp = showGradient ? 'opacity-100' : 'opacity-0'
    const totalLen = seg.length
    let charPos = 0
    seg.split(/( +)/).forEach((word, wIdx) => {
      if (!word) return
      if (/^ +$/.test(word)) {
        parts.push(<span key={`${baseKey}s${wIdx}`}>{word}</span>)
        charPos += word.length
      } else {
        const wordFrac = word.length / totalLen
        const startFrac = charPos / totalLen
        // Continuous gradient: size spans full phrase, position shows this word's slice
        const bgSize = wordFrac >= 1 ? 100 : 100 / wordFrac
        const bgPos = wordFrac >= 1 ? 0 : startFrac * 100 / (1 - wordFrac)
        parts.push(
          <span key={`${baseKey}w${wIdx}`} className="inline-grid">
            <span
              className={`col-start-1 row-start-1 font-medium transition-opacity ${timing} ${gOp}`}
              style={{
                backgroundImage: 'linear-gradient(to right, hsl(var(--gradient-from)), hsl(var(--gradient-to)))',
                backgroundSize: `${bgSize}% 100%`,
                backgroundPosition: `${bgPos}% 0`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >{word}</span>
            <span className={`col-start-1 row-start-1 text-muted-foreground transition-opacity ${timing} ${normalOpacity}`}>{word}</span>
          </span>
        )
        charPos += word.length
      }
    })
  }

  for (let i = 1; i <= text.length; i++) {
    const type = i < text.length ? charTypes[i] : null
    if (type !== currentType || i === text.length) {
      const segment = text.slice(currentStart, i)
      if (segment) {
        if (currentType === null) {
          // Plain text - dims then stays as background context
          parts.push(
            <span
              key={currentStart}
              className={`text-muted-foreground transition-opacity ${timing} ${textOpacity}`}
            >
              {segment}
            </span>
          )
        } else if (currentType === 'typewriter') {
          // Tipo B: gradiente SOLO durante typewriter (highlightsActive), luego texto normal
          const showGradient = highlightsActive
          pushHighlightWords(segment, currentStart, showGradient,
            showGradient ? 'opacity-0' : textOpacity)
        } else if (currentType === 'final') {
          // Tipo C: normal durante typewriter, gradiente en encendido final (finalReveal)
          const showGradient = finalReveal
          pushHighlightWords(segment, currentStart, showGradient,
            showGradient ? 'opacity-0' : isFinalLowOpacity ? 'opacity-15' : 'opacity-100')
        } else {
          // permanent: siempre gradiente (mientras no esté revealed)
          const showGradient = !revealed
          pushHighlightWords(segment, currentStart, showGradient,
            showGradient ? 'opacity-0' : 'opacity-100')
        }
      }
      currentStart = i
      currentType = type
    }
  }

  return parts
}

// Typewriter reflexivo con fases: contexto → reflexiones (se borran) → hook final
type Phase = 'idle' | 'context' | 'pause-after-context' | 'reflection' | 'pause-before-delete' | 'deleting' | 'hook' | 'complete'

type TypewriterState = {
  phase: Phase
  displayText: string
  contextComplete: boolean
  currentReflection: number
  completedHookLines: string[][]
  currentHookParagraph: number
  currentHookLine: number
}

type TypewriterAction =
  | { type: 'START' }
  | { type: 'TICK'; char: string }
  | { type: 'PHASE_CHANGE'; phase: Phase }
  | { type: 'CONTEXT_COMPLETE' }
  | { type: 'CLEAR_TEXT' }
  | { type: 'DELETE_WORD' }
  | { type: 'NEXT_REFLECTION' }
  | { type: 'COMPLETE_HOOK_LINE'; text: string }
  | { type: 'NEXT_HOOK_LINE' }
  | { type: 'NEXT_HOOK_PARAGRAPH' }
  | { type: 'SKIP_TO_COMPLETE'; allHookLines: string[][] }
  | { type: 'RESET' }

const initialTypewriterState: TypewriterState = {
  phase: 'idle',
  displayText: '',
  contextComplete: false,
  currentReflection: 0,
  completedHookLines: [],
  currentHookParagraph: 0,
  currentHookLine: 0,
}

function typewriterReducer(state: TypewriterState, action: TypewriterAction): TypewriterState {
  switch (action.type) {
    case 'START':
      return { ...state, phase: 'context' }
    case 'TICK':
      return { ...state, displayText: state.displayText + action.char }
    case 'PHASE_CHANGE':
      return { ...state, phase: action.phase }
    case 'CONTEXT_COMPLETE':
      return { ...state, contextComplete: true }
    case 'CLEAR_TEXT':
      return { ...state, displayText: '' }
    case 'DELETE_WORD': {
      const trimmed = state.displayText.trimEnd()
      const lastSpace = trimmed.lastIndexOf(' ')
      return { ...state, displayText: lastSpace === -1 ? '' : state.displayText.slice(0, lastSpace + 1) }
    }
    case 'NEXT_REFLECTION':
      return { ...state, currentReflection: state.currentReflection + 1, displayText: '', phase: 'reflection' }
    case 'COMPLETE_HOOK_LINE': {
      const newCompleted = [...state.completedHookLines]
      if (!newCompleted[state.currentHookParagraph]) newCompleted[state.currentHookParagraph] = []
      newCompleted[state.currentHookParagraph][state.currentHookLine] = action.text
      return { ...state, completedHookLines: newCompleted }
    }
    case 'NEXT_HOOK_LINE':
      return { ...state, currentHookLine: state.currentHookLine + 1, displayText: '' }
    case 'NEXT_HOOK_PARAGRAPH':
      return { ...state, currentHookParagraph: state.currentHookParagraph + 1, currentHookLine: 0, displayText: '' }
    case 'SKIP_TO_COMPLETE':
      return {
        ...state,
        phase: 'complete',
        contextComplete: true,
        completedHookLines: action.allHookLines,
        displayText: '',
      }
    case 'RESET':
      return initialTypewriterState
    default:
      return state
  }
}

const STORY_SEEN_KEY = 'story-animation-seen-v1'

function ReflectiveTypewriter({
  context,
  reflections,
  hookParagraphs,
  className = '',
  dimmed = false,
  finalReveal = false,
  revealed = false,
  onComplete,
  skipRef,
  onStart
}: {
  context: string
  reflections: readonly string[]
  hookParagraphs: readonly (readonly string[])[]
  className?: string
  dimmed?: boolean
  finalReveal?: boolean
  revealed?: boolean
  onComplete?: () => void
  skipRef?: React.MutableRefObject<(() => void) | null>
  onStart?: () => void
}) {
  const [state, dispatch] = useReducer(typewriterReducer, initialTypewriterState)
  const { phase, displayText, contextComplete, currentReflection, completedHookLines, currentHookParagraph, currentHookLine } = state

  const { ref, isInView } = useInView(0.5)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  // Parse context for highlights
  const parsedContext = useMemo(() => parseHighlights(context), [context])

  // Parse hook lines for highlights
  const parsedHookLines = useMemo(() =>
    hookParagraphs.flatMap(p => [...p]).map(parseHighlights),
    [hookParagraphs]
  )

  // Build all hook lines for skip functionality
  const allHookLinesComplete = useMemo(() => {
    const result: string[][] = []
    let flatIdx = 0
    for (let p = 0; p < hookParagraphs.length; p++) {
      result[p] = []
      for (let l = 0; l < hookParagraphs[p].length; l++) {
        result[p][l] = parsedHookLines[flatIdx]?.clean || ''
        flatIdx++
      }
    }
    return result
  }, [hookParagraphs, parsedHookLines])

  // Skip to complete function
  const skipToComplete = useCallback(() => {
    abortRef.current?.abort()
    dispatch({ type: 'SKIP_TO_COMPLETE', allHookLines: allHookLinesComplete })
    sessionStorage.setItem(STORY_SEEN_KEY, 'true')
    onComplete?.()
  }, [allHookLinesComplete, onComplete])

  // Expose skipToComplete to parent via ref
  useEffect(() => {
    if (skipRef) skipRef.current = skipToComplete
  }, [skipRef, skipToComplete])

  // Check sessionStorage on mount - skip if already seen
  useEffect(() => {
    const seen = sessionStorage.getItem(STORY_SEEN_KEY)
    if (seen && phase === 'idle') {
      skipToComplete()
    }
  }, []) // Only on mount

  // Reset and cancel on language change
  useEffect(() => {
    abortRef.current?.abort()
    abortRef.current = new AbortController()
    dispatch({ type: 'RESET' })

    // Check if already seen after reset
    const seen = sessionStorage.getItem(STORY_SEEN_KEY)
    if (seen) {
      dispatch({ type: 'SKIP_TO_COMPLETE', allHookLines: allHookLinesComplete })
    }
  }, [context, reflections, hookParagraphs, allHookLinesComplete])

  // Start when in view
  useEffect(() => {
    if (isInView && phase === 'idle') {
      dispatch({ type: 'START' })
      onStart?.()
    }
  }, [isInView, phase, onStart])

  // Click to skip handler
  useEffect(() => {
    if (phase === 'complete' || phase === 'idle') return

    const handleClick = () => {
      skipToComplete()
    }

    const container = containerRef.current
    container?.addEventListener('click', handleClick)

    return () => container?.removeEventListener('click', handleClick)
  }, [phase, skipToComplete])

  // Typing delay function
  const getTypingDelay = useCallback((char: string, prevChar: string) => {
    let delay = 40
    if (/[.,!?;:—]/.test(char)) delay += 120 + Math.random() * 100
    else if (char === ' ') delay += 20 + Math.random() * 30
    else if (prevChar === ' ') delay += 25 + Math.random() * 20
    else if (/[áéíóúñü¿¡]/i.test(char)) delay += 30 + Math.random() * 20
    delay += (Math.random() - 0.5) * 20
    return Math.max(25, delay)
  }, [])

  // Main animation effect
  useEffect(() => {
    if (phase === 'idle' || phase === 'complete') return

    const signal = abortRef.current?.signal

    // Phase: context (use clean text without markers)
    if (phase === 'context') {
      const cleanContext = parsedContext.clean
      if (displayText === cleanContext) {
        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'PHASE_CHANGE', phase: 'pause-after-context' })
        }, 100)
        return () => clearTimeout(timer)
      } else {
        const nextChar = cleanContext[displayText.length]
        const prevChar = displayText.length > 0 ? cleanContext[displayText.length - 1] : ''
        const delay = getTypingDelay(nextChar, prevChar)
        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'TICK', char: nextChar })
        }, delay)
        return () => clearTimeout(timer)
      }
    }

    // Phase: pause after context
    if (phase === 'pause-after-context') {
      dispatch({ type: 'CONTEXT_COMPLETE' })
      const timer = setTimeout(() => {
        if (signal?.aborted) return
        dispatch({ type: 'CLEAR_TEXT' })
        dispatch({ type: 'PHASE_CHANGE', phase: 'reflection' })
      }, 800)
      return () => clearTimeout(timer)
    }

    // Phase: reflection (typing)
    if (phase === 'reflection') {
      const currentText = reflections[currentReflection]
      if (displayText === currentText) {
        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'PHASE_CHANGE', phase: 'pause-before-delete' })
        }, 600)
        return () => clearTimeout(timer)
      } else {
        const nextChar = currentText[displayText.length]
        const prevChar = displayText.length > 0 ? currentText[displayText.length - 1] : ''
        const delay = getTypingDelay(nextChar, prevChar)
        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'TICK', char: nextChar })
        }, delay)
        return () => clearTimeout(timer)
      }
    }

    // Phase: pause before delete
    if (phase === 'pause-before-delete') {
      const timer = setTimeout(() => {
        if (signal?.aborted) return
        dispatch({ type: 'PHASE_CHANGE', phase: 'deleting' })
      }, 400)
      return () => clearTimeout(timer)
    }

    // Phase: deleting (word by word, like Alt+Backspace)
    if (phase === 'deleting') {
      if (displayText === '') {
        if (currentReflection < reflections.length - 1) {
          dispatch({ type: 'NEXT_REFLECTION' })
        } else {
          dispatch({ type: 'PHASE_CHANGE', phase: 'hook' })
        }
      } else {
        const delay = 80 + Math.random() * 40
        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'DELETE_WORD' })
        }, delay)
        return () => clearTimeout(timer)
      }
    }

    // Phase: hook
    if (phase === 'hook') {
      const flatIndex = (() => {
        let idx = 0
        for (let p = 0; p < currentHookParagraph; p++) idx += hookParagraphs[p].length
        return idx + currentHookLine
      })()
      const { clean: currentText } = parsedHookLines[flatIndex]

      if (displayText === currentText) {
        dispatch({ type: 'COMPLETE_HOOK_LINE', text: currentText })

        const isLastLine = currentHookLine >= hookParagraphs[currentHookParagraph].length - 1
        const isLastParagraph = currentHookParagraph >= hookParagraphs.length - 1

        if (isLastLine && isLastParagraph) {
          const timer = setTimeout(() => {
            if (signal?.aborted) return
            dispatch({ type: 'PHASE_CHANGE', phase: 'complete' })
            sessionStorage.setItem(STORY_SEEN_KEY, 'true')
            onComplete?.()
          }, 600)
          return () => clearTimeout(timer)
        } else if (isLastLine) {
          const timer = setTimeout(() => {
            if (signal?.aborted) return
            dispatch({ type: 'NEXT_HOOK_PARAGRAPH' })
          }, 800)
          return () => clearTimeout(timer)
        } else {
          const timer = setTimeout(() => {
            if (signal?.aborted) return
            dispatch({ type: 'NEXT_HOOK_LINE' })
          }, 500)
          return () => clearTimeout(timer)
        }
      } else {
        const nextCharIndex = displayText.length
        const nextChar = currentText[nextCharIndex]
        const prevChar = nextCharIndex > 0 ? currentText[nextCharIndex - 1] : ''

        const { slowRanges } = parsedHookLines[flatIndex]
        const isInSlowRange = slowRanges.some(([start, end]) => nextCharIndex >= start && nextCharIndex < end)

        const textSoFar = currentText.slice(0, nextCharIndex)
        const isAfterSentenceEnd = prevChar === '.' && nextChar === ' ' && textSoFar.includes('negocio')

        let delay = getTypingDelay(nextChar, prevChar)

        if (isAfterSentenceEnd) {
          delay = 800
        } else if (isInSlowRange) {
          delay = delay * 4 + 80
        }

        const timer = setTimeout(() => {
          if (signal?.aborted) return
          dispatch({ type: 'TICK', char: nextChar })
        }, delay)
        return () => clearTimeout(timer)
      }
    }
  }, [phase, displayText, context, reflections, currentReflection, hookParagraphs, parsedHookLines, currentHookParagraph, currentHookLine, getTypingDelay, onComplete])

  const showCursor = phase !== 'complete' && phase !== 'idle'

  // Helper to get parsed highlights for hook line
  const getHookParsed = (pIdx: number, lIdx: number): ParsedHighlights => {
    let flatIdx = 0
    for (let p = 0; p < pIdx; p++) flatIdx += hookParagraphs[p].length
    return parsedHookLines[flatIdx + lIdx] || { clean: '', fadeOutRanges: [], permanentRanges: [], fadeInRanges: [], slowRanges: [] }
  }

  // Combine refs
  const setRefs = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node
    ref(node)
  }, [ref])

  return (
    <div
      ref={setRefs}
      className={`${className} min-h-[7rem] md:min-h-[8rem] ${phase !== 'complete' && phase !== 'idle' ? 'cursor-pointer' : ''}`}
      title={phase !== 'complete' && phase !== 'idle' ? 'Click to skip' : undefined}
    >
      {/* Context line */}
      <span className="md:block md:-mb-1">
        {phase === 'context' ? (
          <>
            {renderHighlightedText(displayText, [], {
              dimmed,
              finalReveal,
              revealed,
              typewriterRanges: parsedContext.typewriterRanges,
              finalRanges: parsedContext.finalRanges,
              permanentRanges: parsedContext.permanentRanges,
              highlightsActive: true, // gradiente activo durante typewriter del context
            })}
            {showCursor && <span className="ml-0.5 inline-block text-primary" style={{ animation: 'blink 0.6s step-end infinite' }}>|</span>}
          </>
        ) : contextComplete ? (
          <>
            {renderHighlightedText(parsedContext.clean, [], {
              dimmed,
              finalReveal,
              revealed,
              typewriterRanges: parsedContext.typewriterRanges,
              finalRanges: parsedContext.finalRanges,
              permanentRanges: parsedContext.permanentRanges,
              highlightsActive: false, // ya no estamos en el context, gradiente apagado
            })}
            {phase === 'pause-after-context' && (
              <span className="ml-0.5 inline-block text-primary" style={{ animation: 'blink 0.6s step-end infinite' }}>|</span>
            )}
          </>
        ) : null}
      </span>{' '}

      {/* Reflection line (becomes the hook line) */}
      {(phase === 'reflection' || phase === 'pause-before-delete' || phase === 'deleting') && (
        <p className="mb-1">
          <span className="text-gradient-theme">{displayText}</span>
          {showCursor && <span className="ml-0.5 inline-block text-primary" style={{ animation: 'blink 0.6s step-end infinite' }}>|</span>}
        </p>
      )}

      {/* Hook paragraphs */}
      {/* Hook paragraphs: pIdx=0 inline on mobile (flows with context), block on desktop */}
      {(phase === 'hook' || phase === 'complete') && hookParagraphs.map((paragraph, pIdx) => {
        const Tag = pIdx === 0 ? 'span' : 'p'
        const wrapperClass = pIdx === 0
          ? "md:block md:mb-4"
          : "mt-4 md:mt-0"
        return (
          <Tag key={pIdx} className={wrapperClass}>
            {paragraph.map((_, lIdx) => {
              const parsed = getHookParsed(pIdx, lIdx)
              const isCurrentLine = pIdx === currentHookParagraph && lIdx === currentHookLine
              const isCompleted = completedHookLines[pIdx]?.[lIdx] !== undefined

              // Unificar renderizado para permitir transiciones CSS suaves
              // El texto a mostrar: completado > actual (displayText) > vacío
              const textToShow = isCompleted
                ? completedHookLines[pIdx][lIdx]
                : (isCurrentLine && phase === 'hook')
                  ? displayText
                  : ''

              // Tipo B highlights activos SOLO mientras se escribe esta línea
              const highlightsActive = isCurrentLine && phase === 'hook'

              // Solo renderizar si hay texto o es la línea actual
              if (!textToShow && !isCurrentLine) return null

              return (
                <span key={lIdx} className={lIdx > 0 ? "md:block md:-mt-1" : ""}>
                  {lIdx > 0 && <span className="md:hidden"> </span>}
                  {renderHighlightedText(textToShow, [], {
                    dimmed,
                    finalReveal,
                    revealed,
                    typewriterRanges: parsed.typewriterRanges,
                    finalRanges: parsed.finalRanges,
                    permanentRanges: parsed.permanentRanges,
                    highlightsActive,
                  })}
                  {isCurrentLine && phase === 'hook' && showCursor && (
                    <span className="ml-0.5 inline-block text-primary" style={{ animation: 'blink 0.6s step-end infinite' }}>|</span>
                  )}
                </span>
              )
            })}
          </Tag>
        )
      })}
    </div>
  )
}

// Sección de historia con typewriter y animaciones
function StorySection({ t }: { t: (typeof translations)[Lang] }) {
  const [typewriterComplete, setTypewriterComplete] = useState(false)
  const [textDimmed, setTextDimmed] = useState(false)
  const [finalReveal, setFinalReveal] = useState(false)  // Tipo C se enciende con gradiente
  const [textRevealed, setTextRevealed] = useState(false) // Resto del texto se enciende
  const [animationStarted, setAnimationStarted] = useState(false)
  const [scrollSkipped, setScrollSkipped] = useState(false)
  const skipRef = useRef<(() => void) | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Reset states when language changes
  useEffect(() => {
    // Check if animation was already seen (skip case)
    const seen = sessionStorage.getItem(STORY_SEEN_KEY)
    if (seen) {
      setTypewriterComplete(true)
      setTextDimmed(true)
      setFinalReveal(true)
      setTextRevealed(true)
    } else {
      setTypewriterComplete(false)
      setTextDimmed(false)
      setFinalReveal(false)
      setTextRevealed(false)
      setAnimationStarted(false)
      setScrollSkipped(false)
    }
  }, [t])

  // Transition sequence: dim → finalReveal (Tipo C gradient) → revealed (rest)
  const sequenceStartedRef = useRef(false)

  useEffect(() => {
    // Reset ref when language changes
    sequenceStartedRef.current = false
  }, [t])

  useEffect(() => {
    if (!typewriterComplete || sequenceStartedRef.current) return
    sequenceStartedRef.current = true

    // Secuencia de animación post-typewriter:
    // 1. Esperar a que Tipo B (Construir) termine de desvanecerse (~2.5s transición)
    // 2. Dimmed: todo se atenúa
    // 3. FinalReveal: Tipo C se enciende con gradiente (+15 años + sistemas)
    // 4. Revealed: resto del texto se enciende, Tipo C MANTIENE gradiente

    // Step 1: Dim everything (2500ms - espera a que Tipo B haya perdido gradiente)
    const dimTimer = setTimeout(() => {
      setTextDimmed(true)
    }, 2500)

    // Step 2: Tipo C se enciende con gradiente (4500ms - contenido adicional ya visible)
    const finalRevealTimer = setTimeout(() => {
      setFinalReveal(true)
    }, 4500)

    // Step 3: Resto del texto se enciende (8000ms - Tipo C tuvo tiempo de brillar)
    const revealTimer = setTimeout(() => {
      setTextRevealed(true)
    }, 8000)

    return () => {
      clearTimeout(dimTimer)
      clearTimeout(finalRevealTimer)
      clearTimeout(revealTimer)
    }
  }, [typewriterComplete])

  // Scroll-past-as-skip: si el usuario scrollea pasando la sección, auto-skip
  useEffect(() => {
    if (typewriterComplete) return
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setScrollSkipped(true)
          skipRef.current?.()
        }
      },
      { threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [typewriterComplete])

  return (
    <section ref={sectionRef} id="about" className="relative py-16 md:py-24">
      {/* Vignette horizontal: tapa puntos en el centro, se ven en los bordes */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(90deg, transparent 0%, hsl(var(--background)) 25%, hsl(var(--background)) 75%, transparent 100%)',
      }} />
      {/* Fade vertical: transparente arriba → fondo sólido abajo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Hook emocional con typewriter reflexivo + botón skip */}
        <div className="relative pb-12">
          <ReflectiveTypewriter
            context={t.story.context}
            reflections={t.story.reflections}
            hookParagraphs={t.story.hookParagraphs}
            dimmed={textDimmed}
            finalReveal={finalReveal}
            revealed={textRevealed}
            className="font-display text-lg md:text-2xl leading-relaxed text-center max-w-3xl mx-auto"
            onComplete={() => setTypewriterComplete(true)}
            skipRef={skipRef}
            onStart={() => setAnimationStarted(true)}
          />

          {/* Botón skip — posición absoluta debajo del texto, en el padding reservado */}
          <AnimatePresence>
            {animationStarted && !typewriterComplete && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => skipRef.current?.()}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-muted-foreground border border-border/50 bg-card backdrop-blur-sm cursor-pointer hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-colors duration-200"
              >
                <SkipForward className="w-3.5 h-3.5" />
                {t.story.skipButton}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Contenido que aparece después del typewriter - expansión suave (instantánea si scroll-skip) */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={typewriterComplete
            ? { height: 'auto', opacity: 1 }
            : { height: 0, opacity: 0 }
          }
          transition={scrollSkipped
            ? { duration: 0 }
            : {
                height: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.4, delay: 0.1 }
              }
          }
          style={{ overflow: 'hidden' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: typewriterComplete ? 0.1 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className={`text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto transition-opacity duration-[2500ms] ease-in-out ${textDimmed ? (textRevealed ? 'opacity-50' : 'opacity-15') : 'opacity-100'}`}>
              {t.story.why}
            </p>
          </motion.div>

          <div className="mt-6 text-center max-w-3xl mx-auto">
            {t.story.seeking.map((line, i) => {
              // Spotlight: lines 0 and 2 light up with finalReveal, line 1 stays as background
              const isSpotlit = i === 0 || i === 2
              const dimOpacity = textDimmed
                ? (isSpotlit ? (finalReveal ? 'opacity-100' : 'opacity-15') : (textRevealed ? 'opacity-50' : 'opacity-15'))
                : 'opacity-100'

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: typewriterComplete ? 0.3 + i * 0.2 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`transition-opacity duration-[2500ms] ease-in-out ${dimOpacity} ${
                    i === 2
                      ? 'font-display text-lg md:text-2xl font-bold text-gradient-theme leading-snug'
                      : i === 1
                        ? 'font-display text-lg md:text-2xl text-muted-foreground leading-snug'
                        : 'font-display text-lg md:text-2xl font-bold text-foreground leading-snug'
                  }`}
                >
                  {line}
                </motion.p>
              )
            })}
          </div>

          {/* Burbujas de navegación - delays sincronizados */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: typewriterComplete ? 0.9 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`flex flex-wrap justify-center gap-3 mt-10 mb-12 transition-opacity duration-[2500ms] ease-in-out ${textDimmed && !textRevealed ? 'opacity-15' : 'opacity-100'}`}
          >
          {t.story.nav.map((item) => {
            const icons: Record<string, React.ReactNode> = {
              briefcase: <Briefcase className="w-4 h-4" />,
              folder: <FolderGit2 className="w-4 h-4" />,
              mail: <Mail className="w-4 h-4" />,
              bot: <Bot className="w-4 h-4" />
            }
            const isHighlight = 'highlight' in item && item.highlight
            const handleClick = (e: React.MouseEvent) => {
              if (item.href === '#chat') {
                e.preventDefault()
                window.dispatchEvent(new Event('openChat'))
              }
            }
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={isHighlight
                  ? "flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-theme text-white border border-transparent hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 active:brightness-95 transition-all duration-200 text-sm font-medium shadow-lg shadow-primary/25"
                  : "flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-sm font-medium"
                }
              >
                {icons[item.icon]}
                {item.label}
              </a>
            )
          })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Projects — screenshots + links live here; copy lives in i18n
// ---------------------------------------------------------------------------
type ProjectCategory = keyof (typeof translations)['en']['projects']['categories']
type ProjectKey = keyof (typeof translations)['en']['projects']['descriptions']

type Project = {
  key: ProjectKey
  title: string
  category: ProjectCategory
  src: string
  tags: string[]
  padded?: boolean
  demo?: string
  code?: string
  android?: string
  ios?: string
}

const PROJECTS: Project[] = [
  { key: 'SkyJoy', title: 'SkyJoy', category: 'Mobile App', src: skyjoy, padded: true, tags: ['Flutter', 'BLoC', 'Firebase', 'Clean Arch'], android: 'https://play.google.com/store/apps/details?id=loyalty.skyjoy.vn&hl=vi', ios: 'https://apps.apple.com/vn/app/skyjoy/id1658311716' },
  { key: 'Smart Form Interface', title: 'Smart Form Interface', category: 'Mobile / Web / Desktop', src: sfi, tags: ['Flutter', 'BLoC', 'Clean Arch', 'CI/CD'], android: 'https://play.google.com/store/apps/details?id=vn.com.quocviet.spvb.eforms', ios: 'https://apps.apple.com/us/app/smart-form-interface/id6737530804' },
  { key: 'Syrup Mixing', title: 'Syrup Mixing', category: 'Mobile / Web / Desktop', src: syrup, tags: ['Flutter', 'BLoC', 'Zebra Scanner'], android: 'https://play.google.com/store/apps/details?id=vn.quocviet.syrupmixingscanner', ios: 'https://testflight.apple.com/join/CKZt3XsR' },
  { key: 'TeamPower', title: 'TeamPower', category: 'Web App', src: teampower, tags: ['Next.js', 'API'], demo: 'https://teampowervn.com/' },
  { key: 'Ail Global', title: 'Ail Global', category: 'Web App', src: ail, tags: ['HTML', 'CSS', 'JavaScript', 'API'], demo: 'https://ailglobal.net/' },
  { key: 'OnSky Health', title: 'OnSky Health', category: 'Mobile App', src: onskyHealth, padded: true, tags: ['Flutter', 'Firebase', 'Real-time Systems'], android: 'https://play.google.com/store/apps/details?id=com.onskyinc.smartiot.healthandhome&hl=en', ios: 'https://apps.apple.com/us/app/onsky-health/id1502053185' },
  { key: 'QV Car', title: 'QV Car', category: 'Mobile App', src: qvCar, tags: ['Flutter', 'BLoC', 'Firebase'], android: 'https://play.google.com/store/apps/details?id=vn.com.quocviet.vn.qv_car_management.qv_car_management&hl=en', ios: 'https://apps.apple.com/us/app/qv-car-booking/id6742679566' },
  { key: 'SkyCare', title: 'SkyCare', category: 'Mobile App', src: skycare, padded: true, tags: ['Flutter', 'Firebase', 'Real-time Systems'], android: 'https://play.google.com/store/apps/details?id=com.onskyheath.skycare&hl=en', ios: 'https://apps.apple.com/vn/app/onsky-skycare/id6504265548?l=vi' },
  { key: 'Spotify Flutter', title: 'Spotify Flutter', category: 'Mobile App', src: spotifyFlutter, tags: ['Flutter', 'Firebase', 'Cross-platform'], demo: 'https://spotify-minhtritt01.web.app/', code: 'https://github.com/minhtritt01/spotify-flutter' },
  { key: 'Dashboard', title: 'Dashboard', category: 'Web App', src: dashboard, tags: ['React', 'Charts', 'Material UI'], demo: 'https://dashboard-shoppy-minhtri.netlify.app/', code: 'https://github.com/minhtritt01/dashboard-shoppy' },
]

// ---------------------------------------------------------------------------
// Tech stack — icons live here; category + badge labels live in i18n
// ---------------------------------------------------------------------------
type TechCategoryKey = keyof (typeof translations)['en']['tech']['categories']
type TechBadgeKey = keyof (typeof translations)['en']['tech']['badges']

type TechCategory = {
  key: TechCategoryKey
  items: { src: string; title: string; badge?: TechBadgeKey }[]
}

const TECH_CATEGORIES: TechCategory[] = [
  { key: 'Mobile', items: [
    { src: flutter, title: 'Flutter' }, { src: dart, title: 'Dart' }, { src: bloc, title: 'BLoC' },
    { src: riverpod, title: 'Riverpod' }, { src: firebase, title: 'Firebase' },
    { src: javaAndroid, title: 'Java Android' }, { src: kotlinIcon, title: 'Kotlin' }, { src: providerIcon, title: 'Provider' },
  ] },
  { key: 'Frontend', items: [
    { src: html, title: 'HTML' }, { src: css, title: 'CSS' }, { src: javascript, title: 'JavaScript' },
    { src: reactImage, title: 'React' }, { src: tailwind, title: 'Tailwind' },
    { src: redux, title: 'Redux' }, { src: materialui, title: 'Material UI' },
  ] },
  { key: 'Tools & Backend', items: [
    { src: node, title: 'Node.js' }, { src: mongodb, title: 'MongoDB' }, { src: reactquery, title: 'React Query' },
    { src: github, title: 'GitHub' }, { src: formilk, title: 'Formik' },
    { src: jenkinsIcon, title: 'Jenkins' }, { src: fastlaneIcon, title: 'Fastlane' }, { src: mqttIcon, title: 'MQTT' },
  ] },
  { key: 'AI Tools', items: [
    { src: claudeIcon, title: 'Claude', badge: 'Architecture & Logic' },
    { src: chatgptIcon, title: 'ChatGPT', badge: 'Debugging & Ideas' },
    { src: cursorIcon, title: 'Cursor AI', badge: 'Refactoring' },
    { src: antigravityIcon, title: 'Antigravity', badge: 'Workflows' },
  ] },
]

const SOCIALS = [
  { href: 'https://github.com/minhtritt01', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/minhtritt01/', label: 'LinkedIn', Icon: LinkedInLogo },
]

function App() {
  const location = useLocation()
  const lang: Lang = location.pathname === '/vi' ? 'vi' : 'en'
  const t = translations[lang]
  const hydrated = useHydrated()
  const { displayText: roleText, roleIndex } = useTypewriterRotation(t.greetingRoles)

  useHomeSeo({ lang, title: seo[lang].title, description: seo[lang].description })

  return (
    <main className="min-h-screen bg-background bg-[length:24px_24px] [background-image:radial-gradient(circle,hsl(var(--dot-grid))_1px,transparent_1px)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      >
        {t.skipToContent}
      </a>

      <HomeToc lang={lang} />

      {/* Hero */}
      <header id="main-content" className="relative overflow-hidden">
        <GridSnakes />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute top-0 right-[max(0px,calc(50%-40rem))] w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 hidden sm:block animate-[hero-glow_8s_ease-in-out_infinite]" style={{ backgroundColor: 'hsl(var(--hero-orb-primary))' }} />
        <div className="absolute bottom-0 left-[max(0px,calc(50%-40rem))] w-[550px] h-[550px] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 hidden sm:block animate-[hero-glow_11s_ease-in-out_infinite_reverse]" style={{ backgroundColor: 'hsl(var(--hero-orb-accent))' }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <motion.div
              initial={hydrated ? { opacity: 0, scale: 0.8 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-theme-30 blur-xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 md:backdrop-blur-sm border border-white/20 shadow-2xl" />
                <div className="absolute inset-2 rounded-full bg-gradient-theme-50 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={heroImage} alt={t.name} className="w-full h-full object-cover" width={192} height={192} fetchPriority="high" />
                  </div>
                </div>
              </div>
              <motion.div
                initial={hydrated ? { scale: 0 } : false}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-theme flex items-center justify-center shadow-lg border-2 border-background"
              >
                <BadgeCheck className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={hydrated ? { opacity: 0, x: -20 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <p className="text-lg text-muted-foreground mb-2">{t.hero.welcome}</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                {t.greeting} <span className="text-gradient-theme">{t.name}</span>
                <br />
                <span className="text-foreground">{hydrated ? roleText : t.greetingRoles[0]}</span>
                {hydrated && <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 rounded-sm translate-y-[2px]" style={{ animation: 'blink 1s step-end infinite' }} />}
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">{t.hero.bio}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                {t.pillLabels.map((label, i) => (
                  <span
                    key={label}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                      hydrated && i === roleIndex
                        ? 'border border-primary bg-primary/15 text-foreground scale-105'
                        : 'border border-primary/30 bg-background/80 text-muted-foreground'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#projects" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-theme text-white border border-transparent hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 active:brightness-95 transition-all duration-200 text-sm font-medium shadow-lg shadow-primary/25">
                  <FolderGit2 className="w-4 h-4" />
                  {t.hero.viewWork}
                </a>
                <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-sm font-medium">
                  <Mail className="w-4 h-4" />
                  {t.hero.hireMe}
                </a>
                <a href="/PhanMinhTri_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-sm font-medium">
                  <Download className="w-4 h-4" />
                  {t.hero.resume}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About — storytelling typewriter */}
      <StorySection t={t} />

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24 bg-muted/30" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 2000px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              {t.experience.title}
            </h2>
            <p className="text-muted-foreground mb-12 pl-13">{t.experience.subtitle}</p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.05}>
            <div className="grid grid-cols-3 gap-3 mb-12 max-w-2xl">
              {t.stats.map((s) => (
                <div key={s.label} className="p-4 sm:p-6 rounded-2xl bg-card border border-border text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient-theme">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {t.experience.jobs.map((job, i) => (
              <AnimatedSection key={job.company} delay={0.1 + i * 0.1}>
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{job.company}</h3>
                      <p className="text-primary font-medium">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="badge px-3 py-1 bg-primary/10 text-primary border border-primary/20">
                          {t.experience.current}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {job.projects.map((p) => (
                      <div key={p.name} className="pl-4 border-l-2 border-border">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                          <h4 className="font-medium text-foreground">{p.name}</h4>
                          <span className="text-sm text-muted-foreground">{p.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                        {p.bullets.length > 0 && (
                          <ul className="space-y-1.5 mb-3">
                            {p.bullets.map((b, bi) => (
                              <li key={bi} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                <Zap className="w-3.5 h-3.5 text-accent shrink-0 mt-1" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 2500px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h2 className="font-display text-2xl font-semibold flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FolderGit2 className="w-5 h-5 text-primary" />
                </div>
                {t.projects.title}
              </h2>
              <a
                href="https://github.com/minhtritt01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                minhtritt01
              </a>
            </div>
            <p className="text-muted-foreground mb-12 pl-13">{t.projects.subtitle}</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <AnimatedSection key={p.key} delay={0.05 + (i % 3) * 0.05}>
                <div className="h-full flex flex-col rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-200 overflow-hidden group">
                  {/* Screenshots assume a light backdrop — intentionally theme-independent */}
                  <div className={`bg-slate-100 overflow-hidden ${p.padded ? 'p-4' : ''}`}>
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className={`w-full h-44 group-hover:scale-105 transition-transform duration-500 ${p.padded ? 'object-contain' : 'object-cover object-top'}`}
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                      <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                      <span className="badge px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 text-xs whitespace-nowrap">
                        {t.projects.categories[p.category]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {t.projects.descriptions[p.key]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {p.demo && <ProjectLink href={p.demo} icon={<ExternalLink className="w-3.5 h-3.5" />} label={t.projects.demo} />}
                      {p.code && <ProjectLink href={p.code} icon={<Github className="w-3.5 h-3.5" />} label={t.projects.code} />}
                      {p.android && <ProjectLink href={p.android} icon={<Package className="w-3.5 h-3.5" />} label={t.projects.android} />}
                      {p.ios && <ProjectLink href={p.ios} icon={<Package className="w-3.5 h-3.5" />} label={t.projects.ios} />}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Stack */}
      <section id="tech" className="py-16 md:py-24 bg-muted/30" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1500px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              {t.tech.title}
            </h2>
            <p className="text-muted-foreground mb-12 pl-13">{t.tech.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {TECH_CATEGORIES.map((cat, i) => (
              <AnimatedSection key={cat.key} delay={0.05 + i * 0.05}>
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-200">
                  <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    {t.tech.categories[cat.key]}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 border border-border hover:border-accent/30 transition-colors group"
                      >
                        <img src={item.src} alt={item.title} loading="lazy" className="w-8 h-8 object-contain" />
                        <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] text-center text-accent leading-tight">
                            {t.tech.badges[item.badge]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="relative py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(var(--background)) 25%, hsl(var(--background)) 75%, transparent 100%)',
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground mb-2">{t.contact.subtitle}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t.contact.intro}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 active:brightness-95 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                {t.contact.getInTouch}
              </a>
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{t.email}</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" />{t.location}</span>
              <span className="flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5" />{t.availability}</span>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t.name}
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </main>
  )
}

function ProjectLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
    >
      {icon}
      {label}
    </a>
  )
}

export default App
