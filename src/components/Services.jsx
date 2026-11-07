import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, Share2, TrendingUp, Target, FileText, BarChart2, Mail, Layers, ArrowUpRight } from 'lucide-react'
import { services } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const ICON_MAP = { Search, Share2, TrendingUp, Target, FileText, BarChart2, Mail, Layers }

function TiltCard({ service, index }) {
  const cardRef = useRef(null)
  const Icon = ICON_MAP[service.icon] || Search

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -8
    const rotY = ((x - cx) / cx) * 8
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16,1,0.3,1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-glass group flex flex-col p-7 relative overflow-hidden"
      style={{ minHeight: 260, transition: 'transform 0.2s ease, border-color 0.3s ease, box-shadow 0.3s ease', transformStyle: 'preserve-3d', willChange: 'transform' }}
      aria-label={service.title}
    >
      {/* Number badge */}
      <span style={{
        position: 'absolute', top: 20, right: 20,
        fontFamily: 'Orbitron,monospace', fontSize: '0.65rem', fontWeight: 700,
        color: 'rgba(200,241,53,0.12)', letterSpacing: '0.1em',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Radial background glow */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0,
        background: 'radial-gradient(circle at 10% 10%,rgba(200,241,53,0.12),transparent 55%)',
        transition: 'opacity 0.4s ease', pointerEvents: 'none',
      }} className="group-hover:opacity-100" aria-hidden="true" />

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14, marginBottom: 20,
        background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        transition: 'background 0.3s ease, transform 0.3s ease',
      }} className="group-hover:bg-[rgba(200,241,53,0.14)] group-hover:scale-110">
        <Icon size={20} style={{ color: 'var(--accent)' }} className="group-hover:drop-shadow-[0_0_8px_rgba(200,241,53,0.7)]" />
      </div>

      <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)', transition: 'color 0.2s ease', lineHeight: 1.3 }} className="group-hover:text-white">
        {service.title}
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 18, flexGrow: 1 }}>
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
        {service.tags.map(tag => (
          <span key={tag} className="skill-tag" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>

      {/* Arrow link */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 'auto' }}>
        <span style={{ color: 'rgba(200,241,53,0.12)', fontSize: '0.75rem', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600, transition: 'color 0.2s ease' }} className="group-hover:text-white">
          Learn more
        </span>
        <ArrowUpRight size={14} style={{ color: 'var(--accent)', transition: 'transform 0.2s ease' }} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-tertiary)' }} aria-label="Services">
      <div className="blob" style={{ width: 500, height: 500, top: 0, left: '-15%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle
            label="What I Do"
            title={<>Services built to <span className="gradient-text">perform</span>.</>}
            subtitle="From organic visibility to paid conversions — strategies designed for measurable impact."
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => <TiltCard key={s.id} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
