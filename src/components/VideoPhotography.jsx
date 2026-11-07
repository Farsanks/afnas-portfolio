import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Film, Camera, Scissors, ImagePlay, Clapperboard, Sparkles,
  Play, X, MapPin, Clock, ArrowUpRight, ChevronRight,
  Star, Award, Aperture, Video
} from 'lucide-react'
import {
  creativeServices, creativeWorks, creativeTools,
  creativeStats, creativeProcess
} from '../data/portfolioData'

// ─── High-contrast cinematic palette ─────────────────────────────────
// Backgrounds: pure blacks/dark greys — clearly distinct from each other
// Text: pure white + mid grey — always readable
// Accent: bright amber/gold — punchy and visible
const BG      = '#080808'
const BGSEC   = '#0e0e0e'
const BGCARD  = '#141414'
const BGCARD2 = '#1c1c1c'
const GOLD    = '#f0c040'
const GOLDLT  = '#ffe077'
const GOLDDM  = '#c8961a'
const WHITE   = '#ffffff'
const GREY    = '#bbbbbb'
const GRYDIM  = '#888888'
const GOLDBRD = 'rgba(240,192,64,0.22)'
const GOLDBG  = 'rgba(240,192,64,0.08)'
const GOLDGLOW= 'rgba(240,192,64,0.35)'

const ICON_MAP = { Film, Camera, Scissors, ImagePlay, Clapperboard, Sparkles }

// ── Film grain overlay ────────────────────────────────────────────────
function FilmGrain() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
    }} />
  )
}

// ── Gold divider ──────────────────────────────────────────────────────
function GoldLine() {
  return <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${GOLD},rgba(240,192,64,0.3),transparent)` }} aria-hidden="true" />
}

// ── Section label ─────────────────────────────────────────────────────
function CineLabel({ children, center }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{ width: 28, height: 1.5, background: GOLD }} />
      <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD }}>{children}</span>
      <div style={{ width: 28, height: 1.5, background: GOLD }} />
    </div>
  )
}

// ── Stat pill ─────────────────────────────────────────────────────────
function StatPill({ stat, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '18px 24px', borderRadius: 16, background: BGCARD2, border: `1px solid ${GOLDBRD}`, flex: 1, minWidth: 110 }}
    >
      <p style={{
        fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900,
        fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', lineHeight: 1, marginBottom: 6,
        background: `linear-gradient(135deg,${GOLD},${GOLDLT})`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>{stat.value}</p>
      <p style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.55rem', letterSpacing: '0.16em', color: GRYDIM, textTransform: 'uppercase', textAlign: 'center' }}>{stat.label}</p>
    </motion.div>
  )
}

// ── Service card ──────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] || Film
  const ref = useRef(null)

  const tilt = e => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02,1.02,1.02)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'none' }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      onMouseMove={tilt} onMouseLeave={reset}
      style={{
        background: BGCARD, borderRadius: 20, border: `1px solid ${GOLDBRD}`,
        padding: '28px 24px', position: 'relative', overflow: 'hidden',
        transformStyle: 'preserve-3d', willChange: 'transform', cursor: 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,192,64,0.5)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.6)' }}
    >
      {/* corner glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: 'radial-gradient(circle at top right,rgba(240,192,64,0.06),transparent 70%)', borderRadius: '0 20px 0 0' }} aria-hidden="true" />
      {/* number */}
      <span style={{ position: 'absolute', top: 18, right: 18, fontFamily: 'Orbitron,monospace', fontSize: '0.62rem', fontWeight: 700, color: 'rgba(240,192,64,0.2)', letterSpacing: '0.1em' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      {/* icon */}
      <div style={{ width: 52, height: 52, borderRadius: 14, marginBottom: 18, background: GOLDBG, border: `1px solid ${GOLDBRD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={22} style={{ color: GOLD }} />
      </div>
      <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '1rem', color: WHITE, marginBottom: 10, lineHeight: 1.3 }}>{service.title}</h3>
      <p style={{ color: GREY, fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 16 }}>{service.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {service.tags.map(t => (
          <span key={t} style={{ padding: '4px 12px', borderRadius: 999, background: GOLDBG, border: `1px solid ${GOLDBRD}`, color: GOLD, fontSize: '0.72rem' }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

// ── Work card ─────────────────────────────────────────────────────────
function WorkCard({ work, index, onOpen }) {
  const isVideo = work.type === 'video'
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onClick={() => onOpen(work)}
      style={{
        borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
        background: BGCARD, border: `1px solid ${GOLDBRD}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(240,192,64,0.45)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.7)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = GOLDBRD; e.currentTarget.style.boxShadow = 'none' }}
      role="button" tabIndex={0} aria-label={`View ${work.title}`}
      onKeyDown={e => e.key === 'Enter' && onOpen(work)}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
        <div style={{
          width: '100%', height: '100%',
          background: `linear-gradient(135deg,${BGCARD} 0%,${BGCARD2} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10,
        }}>
          {work.thumbnail
            ? <img src={work.thumbnail} alt={work.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" onError={e => { e.target.style.display = 'none' }} />
            : null
          }
          {isVideo ? <Film size={32} style={{ color: 'rgba(240,192,64,0.3)' }} /> : <Camera size={32} style={{ color: 'rgba(240,192,64,0.3)' }} />}
          <p style={{ color: 'rgba(240,192,64,0.25)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>ADD IMAGE</p>
        </div>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,0.9) 0%,rgba(8,8,8,0.2) 50%,transparent 100%)' }} />
        {/* Play button */}
        {isVideo && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(240,192,64,0.18)', border: `1.5px solid rgba(240,192,64,0.6)`, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
              <Play size={17} style={{ color: GOLD, marginLeft: 3 }} />
            </div>
          </div>
        )}
        {/* Category badge */}
        <span style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', borderRadius: 999, background: 'rgba(8,8,8,0.88)', border: `1px solid ${GOLDBRD}`, color: GOLDLT, fontSize: '0.58rem', fontFamily: 'Orbitron,monospace', letterSpacing: '0.12em', backdropFilter: 'blur(8px)' }}>
          {work.category}
        </span>
        {/* Duration */}
        {isVideo && work.duration && (
          <span style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 8, background: 'rgba(8,8,8,0.88)', color: WHITE, fontSize: '0.7rem', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={10} style={{ color: GOLD }} /> {work.duration}
          </span>
        )}
      </div>
      {/* Body */}
      <div style={{ padding: '18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.95rem', color: WHITE, lineHeight: 1.35 }}>{work.title}</h3>
          <ArrowUpRight size={15} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
          <MapPin size={11} style={{ color: GOLD }} />
          <span style={{ color: GRYDIM, fontSize: '0.75rem' }}>{work.location}</span>
        </div>
        <p style={{ color: GREY, fontSize: '0.8rem', lineHeight: 1.65, marginBottom: 12 }}>{work.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {work.tags.map(t => (
            <span key={t} style={{ padding: '3px 9px', borderRadius: 999, background: GOLDBG, border: `1px solid rgba(240,192,64,0.14)`, color: 'rgba(240,192,64,0.7)', fontSize: '0.68rem' }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

// ── Work modal ────────────────────────────────────────────────────────
function WorkModal({ work, onClose }) {
  const isVideo = work.type === 'video'
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
      onClick={onClose} role="dialog" aria-modal="true" aria-label={work.title}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
        onClick={e => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: 640, maxHeight: '90vh', overflowY: 'auto', borderRadius: 24, background: '#111111', border: `1px solid rgba(240,192,64,0.28)`, boxShadow: '0 40px 100px rgba(0,0,0,0.9)' }}
      >
        <button
          onClick={onClose}
          style={{ position: 'sticky', top: 12, float: 'right', marginRight: 12, zIndex: 10, width: 36, height: 36, borderRadius: 10, background: 'rgba(240,192,64,0.1)', border: `1px solid rgba(240,192,64,0.25)`, color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          aria-label="Close"
        ><X size={15} /></button>
        <div style={{ padding: '16px 28px 32px' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', background: `linear-gradient(135deg,${BGCARD},${BGCARD2})`, marginBottom: 24, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {work.thumbnail && <img src={work.thumbnail} alt={work.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" onError={e => { e.target.style.display = 'none' }} />}
            {isVideo && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(240,192,64,0.2)', border: `2px solid rgba(240,192,64,0.55)`, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                  <Play size={24} style={{ color: GOLD, marginLeft: 4 }} />
                </div>
              </div>
            )}
          </div>
          <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 999, marginBottom: 12, background: GOLDBG, border: `1px solid ${GOLDBRD}`, color: GOLD, fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.15em' }}>{work.category}</span>
          <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: '1.5rem', color: WHITE, marginBottom: 10, letterSpacing: '-0.02em' }}>{work.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 16 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: GREY, fontSize: '0.82rem' }}><MapPin size={13} style={{ color: GOLD }} /> {work.location}</span>
            {work.duration && <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: GREY, fontSize: '0.82rem' }}><Clock size={13} style={{ color: GOLD }} /> {work.duration}</span>}
          </div>
          <p style={{ color: GREY, fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 20 }}>{work.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {work.tags.map(t => (<span key={t} style={{ padding: '6px 14px', borderRadius: 999, background: GOLDBG, border: `1px solid ${GOLDBRD}`, color: GOLDLT, fontSize: '0.8rem' }}>{t}</span>))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Tools strip ───────────────────────────────────────────────────────
function ToolsStrip() {
  const items = [...creativeTools, ...creativeTools]
  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '14px 0', borderTop: `1px solid ${GOLDBRD}`, borderBottom: `1px solid ${GOLDBRD}`, background: 'rgba(240,192,64,0.02)' }} aria-hidden="true">
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to right,${BG},transparent)`, zIndex: 2 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: `linear-gradient(to left,${BG},transparent)`, zIndex: 2 }} />
      <div className="logo-track" style={{ display: 'flex', alignItems: 'center', gap: 32, whiteSpace: 'nowrap', width: 'max-content' }}>
        {items.map((tool, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(240,192,64,0.55)', letterSpacing: '0.06em', padding: '5px 16px', borderRadius: 999, background: 'rgba(240,192,64,0.05)', border: '1px solid rgba(240,192,64,0.1)' }}>{tool}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(240,192,64,0.25)', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Process step ──────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 160 }}
    >
      <div style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: 18, background: 'rgba(240,192,64,0.1)', border: `1.5px solid rgba(240,192,64,0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(240,192,64,0.12)' }}>
        <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.75rem', fontWeight: 800, color: GOLD }}>{step.number}</span>
      </div>
      <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '1rem', color: WHITE, marginBottom: 10 }}>{step.title}</h3>
      <p style={{ color: GREY, fontSize: '0.82rem', lineHeight: 1.65, maxWidth: 200 }}>{step.description}</p>
    </motion.div>
  )
}

// ═════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═════════════════════════════════════════════════════════════════════
export default function VideoPhotography() {
  const [selected,      setSelected]      = useState(null)
  const [activeFilter,  setActiveFilter]  = useState('All')

  const allFilters   = ['All', ...new Set(creativeWorks.map(w => w.category))]
  const filteredWork = activeFilter === 'All' ? creativeWorks : creativeWorks.filter(w => w.category === activeFilter)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <div id="creative" style={{ background: BG, position: 'relative' }}>
        <FilmGrain />

        {/* ══════════════════════════
            HERO
        ══════════════════════════ */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '7rem 0 5rem', background: BG }} aria-label="Video and Photography">

          {/* Background glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%,rgba(240,192,64,0.07) 0%,transparent 55%)', pointerEvents: 'none' }} aria-hidden="true" />

          {/* Film frame corners */}
          {[
            { top: 24, left: 24, borderTop: `2px solid rgba(240,192,64,0.4)`, borderLeft: `2px solid rgba(240,192,64,0.4)`, borderRadius: '10px 0 0 0' },
            { top: 24, right: 24, borderTop: `2px solid rgba(240,192,64,0.4)`, borderRight: `2px solid rgba(240,192,64,0.4)`, borderRadius: '0 10px 0 0' },
            { bottom: 24, left: 24, borderBottom: `2px solid rgba(240,192,64,0.4)`, borderLeft: `2px solid rgba(240,192,64,0.4)`, borderRadius: '0 0 0 10px' },
            { bottom: 24, right: 24, borderBottom: `2px solid rgba(240,192,64,0.4)`, borderRight: `2px solid rgba(240,192,64,0.4)`, borderRadius: '0 0 10px 0' },
          ].map((s, i) => <div key={i} style={{ position: 'absolute', width: 40, height: 40, zIndex: 2, ...s }} aria-hidden="true" />)}

          <div className="container-custom" style={{ position: 'relative', zIndex: 3 }}>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

              {/* Left: text */}
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                  <CineLabel>Visual Storytelling</CineLabel>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem,5.5vw,4rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: WHITE, marginBottom: 8 }}
                >
                  Every Frame,{' '}
                  <span style={{ background: `linear-gradient(135deg,${GOLD},${GOLDLT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    A Story.
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
                >
                  <div style={{ width: 32, height: 1.5, background: GOLD }} />
                  <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: GRYDIM, textTransform: 'uppercase' }}>Kerala Wedding &amp; Creative Films</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.55 }}
                  style={{ color: GREY, fontSize: '1rem', lineHeight: 1.75, maxWidth: 500, marginBottom: 34 }}
                >
                  Cinematic wedding films, candid photography and professional video editing — 
                  preserving the warmth, tradition and emotion of Kerala celebrations in every frame.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.5 }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}
                >
                  <a
                    href="#creative-work"
                    onClick={e => { e.preventDefault(); document.getElementById('creative-work')?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', borderRadius: 999, background: `linear-gradient(135deg,${GOLD},${GOLDDM})`, color: '#080808', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', boxShadow: `0 6px 24px ${GOLDGLOW}`, transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(240,192,64,0.45)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 6px 24px ${GOLDGLOW}` }}
                  >
                    <Play size={15} /> View Our Work
                  </a>
                  <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', borderRadius: 999, background: 'transparent', color: WHITE, fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', border: `1px solid rgba(255,255,255,0.2)`, transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = WHITE; e.currentTarget.style.transform = '' }}
                  >
                    Book a Session <ChevronRight size={15} />
                  </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                  {[{ icon: Star, text: 'Premium Quality' }, { icon: Award, text: 'Kerala Specialists' }, { icon: Aperture, text: '4K Production' }].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <Icon size={13} style={{ color: GOLD }} />
                      <span style={{ color: GRYDIM, fontSize: '0.8rem', fontFamily: 'Space Grotesk,sans-serif' }}>{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: decorative frame */}
              <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: 24, border: `1px solid ${GOLDBRD}`, overflow: 'hidden', aspectRatio: '4/3', background: `linear-gradient(160deg,${BGCARD} 0%,${BGCARD2} 100%)` }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: GOLDBG, border: `1px dashed rgba(240,192,64,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Video size={32} style={{ color: 'rgba(240,192,64,0.5)' }} />
                    </div>
                    <p style={{ color: 'rgba(240,192,64,0.45)', fontSize: '0.75rem', fontFamily: 'Orbitron,monospace', letterSpacing: '0.14em', textAlign: 'center', padding: '0 24px' }}>SHOWREEL COMING SOON</p>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', textAlign: 'center' }}>Add embed video in VideoPhotography.jsx</p>
                  </div>
                  {/* Film perforations */}
                  {[{ left: 0 }, { right: 0 }].map((pos, pi) => (
                    <div key={pi} style={{ position: 'absolute', top: 0, bottom: 0, width: 22, ...pos }} aria-hidden="true">
                      {[...Array(7)].map((_, i) => <div key={i} style={{ width: 12, height: 14, borderRadius: 2, margin: '9px auto', background: 'rgba(240,192,64,0.06)', border: '1px solid rgba(240,192,64,0.12)' }} />)}
                    </div>
                  ))}
                  {/* Corner marks */}
                  {[
                    { top: 12, left: 28, borderTop: `1.5px solid rgba(240,192,64,0.45)`, borderLeft: `1.5px solid rgba(240,192,64,0.45)` },
                    { top: 12, right: 28, borderTop: `1.5px solid rgba(240,192,64,0.45)`, borderRight: `1.5px solid rgba(240,192,64,0.45)` },
                    { bottom: 12, left: 28, borderBottom: `1.5px solid rgba(240,192,64,0.45)`, borderLeft: `1.5px solid rgba(240,192,64,0.45)` },
                    { bottom: 12, right: 28, borderBottom: `1.5px solid rgba(240,192,64,0.45)`, borderRight: `1.5px solid rgba(240,192,64,0.45)` },
                  ].map((s, i) => <div key={i} style={{ position: 'absolute', width: 18, height: 18, ...s }} aria-hidden="true" />)}
                </div>

                {/* Floating chips */}
                {[
                  { text: '50+ Weddings', emoji: '🎬', top: -14, left: 20 },
                  { text: '4K Quality',   emoji: '✨', top: '42%', right: -20 },
                  { text: 'Kerala Style', emoji: '🌴', bottom: -14, right: 36 },
                ].map(({ text, emoji, ...pos }) => (
                  <motion.div
                    key={text}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                    style={{ position: 'absolute', ...pos, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, background: 'rgba(8,8,8,0.95)', border: `1px solid ${GOLDBRD}`, backdropFilter: 'blur(12px)', fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.72rem', fontWeight: 600, color: GOLDLT, whiteSpace: 'nowrap', zIndex: 4 }}
                  >
                    <span>{emoji}</span> {text}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.55 }} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 48 }}>
              {creativeStats.map((stat, i) => <StatPill key={stat.label} stat={stat} delay={0.6 + i * 0.08} />)}
            </motion.div>
          </div>
        </section>

        <GoldLine />

        {/* ══════════════════════════
            SERVICES
        ══════════════════════════ */}
        <section style={{ padding: '6rem 0', background: BGSEC, position: 'relative' }} aria-label="Creative services">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: 48 }}>
              <CineLabel>What We Offer</CineLabel>
              <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.025em', color: WHITE, lineHeight: 1.2, maxWidth: 560 }}>
                Crafted for{' '}
                <span style={{ background: `linear-gradient(135deg,${GOLD},${GOLDLT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Kerala celebrations</span>
                {' '}&amp; beyond.
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {creativeServices.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
            </div>
          </div>
        </section>

        <GoldLine />
        <ToolsStrip />
        <GoldLine />

        {/* ══════════════════════════
            WORK GRID
        ══════════════════════════ */}
        <section id="creative-work" style={{ padding: '6rem 0', background: BG, position: 'relative' }} aria-label="Portfolio work">
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', filter: 'blur(100px)', background: 'rgba(240,192,64,0.04)', pointerEvents: 'none' }} aria-hidden="true" />
          <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: 38 }}>
              <CineLabel>Our Work</CineLabel>
              <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.025em', color: WHITE, lineHeight: 1.2, marginBottom: 8 }}>
                Stories told{' '}
                <span style={{ background: `linear-gradient(135deg,${GOLD},${GOLDLT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in frames</span>.
              </h2>
              <p style={{ color: GREY, fontSize: '0.95rem', maxWidth: 480, lineHeight: 1.7 }}>
                Click any card to see details. Add your real thumbnails at /public/images/creative/
              </p>
            </motion.div>

            {/* Filter tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }} role="tablist">
              {allFilters.map(f => (
                <button
                  key={f} onClick={() => setActiveFilter(f)} role="tab" aria-selected={activeFilter === f}
                  style={{ padding: '7px 18px', borderRadius: 999, fontSize: '0.8rem', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, cursor: 'pointer', background: activeFilter === f ? `linear-gradient(135deg,${GOLD},${GOLDDM})` : GOLDBG, color: activeFilter === f ? '#080808' : GREY, border: `1px solid ${activeFilter === f ? GOLD : GOLDBRD}`, transition: 'all 0.2s ease' }}
                >
                  {f}
                </button>
              ))}
            </div>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredWork.map((w, i) => (
                  <motion.div key={w.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                    <WorkCard work={w} index={i} onOpen={setSelected} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <p style={{ marginTop: 24, textAlign: 'center', fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>
              * Replace thumbnails at /public/images/creative/work-1.jpg → work-6.jpg
            </p>
          </div>
        </section>

        <GoldLine />

        {/* ══════════════════════════
            PROCESS
        ══════════════════════════ */}
        <section style={{ padding: '6rem 0', background: BGSEC }} aria-label="Our process">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 52 }}>
              <CineLabel center>How We Work</CineLabel>
              <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.025em', color: WHITE, lineHeight: 1.2 }}>
                From booking to{' '}
                <span style={{ background: `linear-gradient(135deg,${GOLD},${GOLDLT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>beautiful delivery</span>.
              </h2>
            </motion.div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 2.5rem', justifyContent: 'center' }}>
              {creativeProcess.map((step, i) => <ProcessStep key={step.number} step={step} index={i} />)}
            </div>
          </div>
        </section>

        <GoldLine />

        {/* ══════════════════════════
            CTA BANNER
        ══════════════════════════ */}
        <section style={{ padding: '5rem 0', background: BG, position: 'relative', overflow: 'hidden' }} aria-label="Book a session">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(240,192,64,0.06) 0%,transparent 60%)', pointerEvents: 'none' }} aria-hidden="true" />
          <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
              <CineLabel center>Ready to Begin?</CineLabel>
              <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.4rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: WHITE, marginBottom: 16 }}>
                Let's capture your{' '}
                <span style={{ background: `linear-gradient(135deg,${GOLD},${GOLDLT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>most beautiful moments</span>.
              </h2>
              <p style={{ color: GREY, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 34px' }}>
                Book your wedding film or photography session — Kerala and beyond. Limited slots available each season.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 30px', borderRadius: 999, background: `linear-gradient(135deg,${GOLD},${GOLDDM})`, color: '#080808', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.925rem', textDecoration: 'none', boxShadow: `0 6px 28px ${GOLDGLOW}`, transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(240,192,64,0.45)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 6px 28px ${GOLDGLOW}` }}
                >
                  <Sparkles size={15} /> Book a Session
                </a>
                <a
                  href={`https://wa.me/919778249640?text=${encodeURIComponent("Hi, I'd like to book a wedding film/photography session.")}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 30px', borderRadius: 999, background: 'transparent', color: WHITE, fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, fontSize: '0.925rem', textDecoration: 'none', border: `1px solid rgba(255,255,255,0.2)`, transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = WHITE; e.currentTarget.style.transform = '' }}
                  aria-label="WhatsApp for booking"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
