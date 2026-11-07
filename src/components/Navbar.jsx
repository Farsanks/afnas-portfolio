import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { personalInfo } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Results',    href: '#results' },
  { label: 'Work',       href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Creative',   href: '#creative',   highlight: true },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')
  const progress = useScrollProgress()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const goto = useCallback((href) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        style={{
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,241,53,0.1)' : 'none',
        }}
        role="banner"
      >
        <nav className="container-custom flex items-center justify-between" aria-label="Main navigation">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); goto('#home') }}
            className="flex items-center gap-2.5 group"
            aria-label="Afnas — back to home"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,241,53,0.4)]"
              style={{
                background: 'linear-gradient(135deg,#c8f135,#b5de20)',
                color: '#0a0a0a',
                fontFamily: 'Orbitron,monospace',
                letterSpacing: '0.04em',
              }}
            >
              AF
            </div>
            <div className="hidden sm:block">
              <span className="block text-base font-bold leading-none" style={{ fontFamily: 'Space Grotesk,sans-serif', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {personalInfo.name}
              </span>
              <span className="block text-xs leading-none mt-0.5" style={{ color: 'var(--accent)', fontFamily: 'Orbitron,monospace', fontSize: '0.55rem', letterSpacing: '0.15em' }}>
                DIGITAL MARKETER
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7" role="list">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              const isCreative = link.highlight
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); goto(link.href) }}
                    className="relative text-sm font-medium py-1 group flex items-center gap-1.5"
                    style={{
                      color: isActive
                        ? (isCreative ? '#d4a843' : 'var(--accent)')
                        : isCreative ? '#a07830' : 'var(--text-secondary)',
                      fontFamily: 'Inter,sans-serif',
                      transition: 'color 200ms ease',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = isCreative ? '#d4a843' : 'var(--text-primary)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = isActive
                        ? (isCreative ? '#d4a843' : 'var(--accent)')
                        : isCreative ? '#a07830' : 'var(--text-secondary)'
                    }}
                  >
                    {/* Gold dot for Creative link */}
                    {isCreative && (
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                        background: isActive ? '#d4a843' : '#a07830',
                        boxShadow: isActive ? '0 0 6px rgba(212,168,67,0.7)' : 'none',
                        transition: 'all 0.2s ease',
                      }} />
                    )}
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                      style={{
                        background: isCreative ? '#d4a843' : 'var(--accent)',
                        width: isActive ? '100%' : '0%',
                        boxShadow: isActive
                          ? isCreative ? '0 0 8px rgba(212,168,67,0.5)' : '0 0 8px rgba(200,241,53,0.5)'
                          : 'none',
                      }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); goto('#contact') }}
              className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5 group"
            >
              Let's Talk
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <button
              onClick={() => setMenuOpen(p => !p)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: menuOpen ? 'rgba(200,241,53,0.12)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,241,53,0.18)',
                color: 'var(--accent)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(24px)' }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative ml-auto w-full max-w-xs h-full flex flex-col pt-24 px-8 pb-10"
              style={{ borderLeft: '1px solid rgba(200,241,53,0.08)' }}
            >
              <nav aria-label="Mobile navigation links">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const id = link.href.replace('#', '')
                    const isActive = activeSection === id
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ x: 24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <a
                          href={link.href}
                          onClick={e => { e.preventDefault(); goto(link.href) }}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200"
                          style={{
                            color: isActive
                              ? (link.highlight ? '#d4a843' : 'var(--accent)')
                              : link.highlight ? '#a07830' : 'var(--text-primary)',
                            background: isActive
                              ? (link.highlight ? 'rgba(212,168,67,0.08)' : 'rgba(200,241,53,0.06)')
                              : 'transparent',
                            fontFamily: 'Space Grotesk,sans-serif',
                          }}
                        >
                          <span
                            style={{
                              width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                              background: link.highlight
                                ? (isActive ? '#d4a843' : 'rgba(212,168,67,0.3)')
                                : (isActive ? 'var(--accent)' : 'rgba(200,241,53,0.3)'),
                              boxShadow: isActive && link.highlight ? '0 0 6px rgba(212,168,67,0.6)' : 'none',
                            }}
                          />
                          {link.label}
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>
              <div className="mt-auto pt-8 border-t" style={{ borderColor: 'rgba(200,241,53,0.08)' }}>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); goto('#contact') }}
                  className="btn-primary w-full justify-center py-4"
                >
                  Let's Talk <ArrowRight size={15} />
                </a>
                <p className="mt-4 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                  {personalInfo.email}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
