import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin, Zap, TrendingUp, Users, Award } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useTextScramble } from '../hooks/useTextScramble'
import { personalInfo, heroRoles } from '../data/portfolioData'

/* ── Particle Canvas ─────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W, H, particles = []

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const spawn = () => {
      particles = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.5 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      // draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(57,255,136,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      // draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(57,255,136,${p.a})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    resize(); spawn(); draw()
    window.addEventListener('resize', () => { resize(); spawn() })
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

/* ── Floating tag chip ───────────────────────────────────────────────── */
function FloatingChip({ children, style, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
      style={{
        position: 'absolute',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '7px 14px',
        borderRadius: '999px',
        background: 'rgba(10,10,10,0.92)',
        border: '1px solid rgba(200,241,53,0.12)',
        color: 'var(--accent)',
        fontFamily: 'Space Grotesk,sans-serif',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        backdropFilter: 'blur(12px)',
        whiteSpace: 'nowrap',
        zIndex: 10,
        ...style,
      }}
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)', flexShrink: 0 }} />
        {children}
      </motion.span>
    </motion.div>
  )
}

/* ── Mini metric card ────────────────────────────────────────────────── */
function MiniMetric({ icon: Icon, value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 180 }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        background: 'rgba(18,18,18,0.7)',
        border: '1px solid rgba(200,241,53,0.12)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(200,241,53,0.12)' }}
      >
        <Icon size={15} style={{ color: 'var(--accent)' }} />
      </div>
      <div>
        <p className="text-base font-black leading-none gradient-text" style={{ fontFamily: 'Space Grotesk,sans-serif' }}>{value}</p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)', fontSize: '0.65rem' }}>{label}</p>
      </div>
    </motion.div>
  )
}

/* ── Main Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const { display: scrambledName } = useTextScramble(personalInfo.name.toUpperCase(), 1200)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % heroRoles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="Hero — Afnas Digital Marketing Specialist"
    >
      <ParticleCanvas />

      {/* Ambient blobs */}
      <div className="blob" aria-hidden="true" style={{ width: 600, height: 600, top: '-15%', right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)', opacity: 1 }} />
      <div className="blob" aria-hidden="true" style={{ width: 400, height: 400, bottom: '0%', left: '-8%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)', opacity: 1 }} />

      {/* Ghost word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none hidden lg:flex" aria-hidden="true">
        <span style={{
          fontFamily: 'Space Grotesk,sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(7rem,16vw,14rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(200,241,53,0.12)',
          letterSpacing: '-0.02em',
          userSelect: 'none',
        }}>
          MARKETER
        </span>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-32 lg:py-0 min-h-screen">

          {/* ── LEFT ── */}
          <div className="flex flex-col order-2 lg:order-1">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 18px', borderRadius: 999,
                background: 'rgba(200,241,53,0.12)',
                border: '1px solid rgba(200,241,53,0.12)',
                color: 'var(--accent)',
                fontFamily: 'Orbitron,monospace',
                fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
                AVAILABLE FOR PROJECTS
              </span>
            </motion.div>

            {/* Hi I'm + scrambled name */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="mb-3">
              <p className="text-lg font-medium mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter,sans-serif' }}>Hi, I'm</p>
              {/*
                AFNAS color rule:
                  Index 0 = A → white
                  Index 1 = F → white
                  Index 2 = N → white
                  Index 3 = A → lime (#c8f135)
                  Index 4 = S → lime (#c8f135)
                During scramble, non-resolved chars keep their position's color.
              */}
              <h1
                className="font-black leading-none"
                style={{
                  fontFamily: 'Space Grotesk,sans-serif',
                  fontSize: 'clamp(3.5rem,8vw,6rem)',
                  letterSpacing: '-0.03em',
                  fontVariantNumeric: 'tabular-nums',
                  lineHeight: 1,
                  textShadow: '0 0 40px rgba(200,241,53,0.25)',
                }}
              >
                {scrambledName.split('').map((char, i) => {
                  const isLime = i >= 3   // positions 3 (A) and 4 (S) = lime
                  return (
                    <span
                      key={i}
                      style={{
                        color: isLime ? '#c8f135' : '#ffffff',
                        display: 'inline-block',
                      }}
                    >
                      {char}
                    </span>
                  )
                })}
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="h-10 overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -32, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl md:text-2xl font-semibold"
                  style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk,sans-serif' }}
                  aria-live="polite"
                >
                  {heroRoles[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed max-w-lg mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Location + availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="flex flex-wrap gap-5 mb-8 text-sm"
            >
              <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <MapPin size={13} style={{ color: 'var(--accent)' }} /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                <Zap size={13} /> {personalInfo.availability}
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#portfolio"
                onClick={e => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary group"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <FaWhatsapp size={15} />
                WhatsApp Me
              </a>
            </motion.div>

            {/* Metric pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <MiniMetric icon={Award}      value="2+"  label="Years Exp."  delay={0.7} />
              <MiniMetric icon={TrendingUp} value="25+" label="Projects"    delay={0.8} />
              <MiniMetric icon={Users}      value="15+" label="Clients"     delay={0.9} />
            </motion.div>
          </div>

          {/* ── RIGHT: Portrait ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)',
                transform: 'scale(1.2)', filter: 'blur(30px)',
                borderRadius: '50%',
              }} aria-hidden="true" />

              {/* Portrait card */}
              <div style={{
                position: 'relative',
                width: 'clamp(260px,35vw,360px)',
                height: 'clamp(300px,42vw,440px)',
                borderRadius: 32,
                overflow: 'visible',
                filter: 'drop-shadow(0 0 50px rgba(200,241,53,0.12))',
              }}>
                {/* Dot grid decorations */}
                <div style={{
                  position: 'absolute', top: -16, right: -16, width: 80, height: 80,
                  backgroundImage: 'radial-gradient(circle,rgba(200,241,53,0.12) 1.5px,transparent 1.5px)',
                  backgroundSize: '12px 12px', borderRadius: 12,
                }} aria-hidden="true" />
                <div style={{
                  position: 'absolute', bottom: -16, left: -16, width: 60, height: 60,
                  backgroundImage: 'radial-gradient(circle,rgba(200,241,53,0.12) 1.5px,transparent 1.5px)',
                  backgroundSize: '10px 10px', borderRadius: 10,
                }} aria-hidden="true" />

                {/* Image */}
                <div className="img-placeholder" style={{
                  width: '100%', height: '100%', borderRadius: 32,
                  border: '1px solid rgba(200,241,53,0.12)',
                  overflow: 'hidden', position: 'relative',
                  background: 'linear-gradient(160deg,#111111 0%,#181818 60%,#111111 100%)',
                }}>
                  <img
                    src="/images/profile/afnas.jpg"
                    alt="Afnas — Digital Marketing Specialist"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                  <div style={{
                    display: 'none', position: 'absolute', inset: 0,
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
                  }}>
                    <div style={{
                      width: 80, height: 80, borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(200,241,53,0.12)',
                      border: '2px dashed rgba(200,241,53,0.12)',
                      color: 'var(--accent)', fontFamily: 'Space Grotesk,sans-serif',
                      fontSize: '1.5rem', fontWeight: 900,
                    }}>AF</div>
                    <p style={{ color: 'rgba(200,241,53,0.12)', fontSize: '0.7rem', letterSpacing: '0.1em', textAlign: 'center', padding: '0 24px' }}>
                      Add photo:<br/>/images/profile/afnas.jpg
                    </p>
                  </div>
                  {/* Bottom gradient */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                    background: 'linear-gradient(to top,rgba(10,10,10,0.92),transparent)',
                  }} aria-hidden="true" />
                </div>

                {/* Corner accents */}
                {[
                  { top: 0, left: 0, borderTop: '2px solid rgba(200,241,53,0.12)', borderLeft: '2px solid rgba(200,241,53,0.12)', borderRadius: '32px 0 0 0' },
                  { bottom: 0, right: 0, borderBottom: '2px solid rgba(200,241,53,0.12)', borderRight: '2px solid rgba(200,241,53,0.12)', borderRadius: '0 0 32px 0' },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 48, height: 48, ...s }} aria-hidden="true" />
                ))}

                {/* Floating chips */}
                <FloatingChip style={{ top: -14, left: 16 }} delay={1.0}>SEO</FloatingChip>
                <FloatingChip style={{ top: 24, right: -24 }} delay={1.1}>Google Ads</FloatingChip>
                <FloatingChip style={{ top: '42%', right: -28 }} delay={1.2}>Meta Ads</FloatingChip>
                <FloatingChip style={{ bottom: 24, right: -24 }} delay={1.3}>Analytics</FloatingChip>
                <FloatingChip style={{ bottom: -14, left: 16 }} delay={1.4}>Content</FloatingChip>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                style={{
                  position: 'absolute', left: -28, top: '48%',
                  transform: 'translateY(-50%)',
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', borderRadius: 18,
                  background: 'rgba(10,10,10,0.92)',
                  border: '1px solid rgba(200,241,53,0.12)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: 'rgba(200,241,53,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <TrendingUp size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="gradient-text font-black text-lg leading-none" style={{ fontFamily: 'Space Grotesk,sans-serif' }}>2+</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginTop: 2 }}>Years Exp.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
        aria-label="Scroll to About section"
      >
        <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.55rem', letterSpacing: '0.22em', color: 'var(--text-muted)' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={17} style={{ color: 'var(--accent)' }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
