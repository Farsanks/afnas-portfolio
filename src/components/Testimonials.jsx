import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }} aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: 'var(--accent)', fontSize: 14 }}>★</span>
      ))}
    </div>
  )
}

function Avatar({ t }) {
  const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return t.avatar
    ? <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(200,241,53,0.12)', flexShrink: 0 }} />
    : (
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(200,241,53,0.12)', border: '2px solid rgba(200,241,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
        {initials}
      </div>
    )
}

function Card({ t }) {
  return (
    <article className="card-glass p-8 flex flex-col h-full" style={{ minHeight: 280 }}>
      <Quote size={28} style={{ color: 'rgba(200,241,53,0.12)', marginBottom: 16, flexShrink: 0 }} />
      <Stars />
      <blockquote style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, flexGrow: 1, marginBottom: 24, fontStyle: 'italic' }}>
        "{t.quote}"
      </blockquote>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(200,241,53,0.12)' }}>
        <Avatar t={t} />
        <div>
          <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 2 }}>{t.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const prev = () => setCur(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCur(i => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }} aria-label="Client testimonials">
      <div className="blob" style={{ width: 400, height: 400, top: 0, right: 0, background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center' }}>
          <SectionTitle label="Testimonials" title={<>What <span className="gradient-text">clients say</span>.</>} subtitle="Replace placeholder testimonials with real client feedback in portfolioData.js" center />
        </motion.div>

        {/* Mobile/tablet slider */}
        <div className="lg:hidden">
          <div style={{ overflow: 'hidden', borderRadius: 20 }}>
            <AnimatePresence mode="wait">
              <motion.div key={cur} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <Card t={testimonials[cur]} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28 }}>
            <button onClick={prev} style={{ width: 40, height: 40, borderRadius: 12, border: '1px solid rgba(200,241,53,0.12)', background: 'rgba(200,241,53,0.12)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Previous">
              <ChevronLeft size={17} />
            </button>
            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 22 : 8, height: 8, borderRadius: 4, background: i === cur ? 'var(--accent)' : 'rgba(200,241,53,0.12)', transition: 'all 0.3s ease', border: 'none', cursor: 'pointer' }} aria-label={`Go to ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} style={{ width: 40, height: 40, borderRadius: 12, border: '1px solid rgba(200,241,53,0.12)', background: 'rgba(200,241,53,0.12)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Next">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Desktop 3-col */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: i * 0.1 }}>
              <Card t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
