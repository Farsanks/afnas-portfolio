import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, TrendingUp, Lightbulb, Wrench, BarChart2, Target } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const ALL_CATS = ['All', ...new Set(projects.map(p => p.category))]

/* ── Case Study Modal ─────────────────────────────────────────────────── */
function Modal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog" aria-modal="true" aria-label={`Case study: ${project.title}`}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(8,8,8,0.93)', backdropFilter: 'blur(20px)' }} />

      <div
        className="modal-panel relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(200,241,53,0.12)', boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'sticky', top: 16, float: 'right', marginRight: 16, zIndex: 10, width: 36, height: 36, borderRadius: 10, border: '1px solid rgba(200,241,53,0.12)', background: 'rgba(200,241,53,0.12)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          aria-label="Close"
        ><X size={15} /></button>

        <div style={{ padding: '28px 28px 36px', paddingTop: 12 }}>
          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--accent)', fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.15em', marginBottom: 10 }}>
              {project.category}
            </span>
            <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.6rem', fontWeight: 800, marginBottom: 6, letterSpacing: '-0.02em' }}>{project.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{project.description}</p>
          </div>

          {/* 4 detail blocks */}
          {[
            { icon: TrendingUp, label: 'Challenge',  text: project.caseStudy.challenge },
            { icon: Lightbulb,  label: 'Strategy',   text: project.caseStudy.strategy },
            { icon: Target,     label: 'Execution',  text: project.caseStudy.execution },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} style={{ marginBottom: 16, padding: '18px 20px', borderRadius: 16, background: 'rgba(18,18,18,0.7)', border: '1px solid rgba(200,241,53,0.12)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Orbitron,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 10, textTransform: 'uppercase' }}>
                <Icon size={13} /> {label}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>{text}</p>
            </div>
          ))}

          {/* Tools */}
          <div style={{ marginBottom: 16, padding: '18px 20px', borderRadius: 16, background: 'rgba(18,18,18,0.7)', border: '1px solid rgba(200,241,53,0.12)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Orbitron,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}>
              <Wrench size={13} /> Tools Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.caseStudy.tools.map(t => (
                <span key={t} style={{ padding: '5px 12px', borderRadius: 999, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div style={{ padding: '18px 20px', borderRadius: 16, background: 'rgba(18,18,18,0.7)', border: '1px solid rgba(200,241,53,0.12)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Orbitron,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 14, textTransform: 'uppercase' }}>
              <BarChart2 size={13} /> Results
              <span style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'Inter,sans-serif', fontSize: '0.65rem', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none' }}>[SAMPLE DATA]</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {project.caseStudy.results.map(r => (
                <div key={r.label} style={{ textAlign: 'center', padding: '14px 8px', borderRadius: 14, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)' }}>
                  <p className="gradient-text font-black text-xl leading-none" style={{ fontFamily: 'Space Grotesk,sans-serif' }}>{r.metric}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.72rem', marginTop: 6 }}>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Project Card ─────────────────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  return (
    <article
      className="portfolio-card card-glass overflow-hidden group relative flex flex-col cursor-pointer"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(project)}
      aria-label={`View case study: ${project.title}`}
      style={{ cursor: 'pointer' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg,#111111 0%,#181818 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.5s ease',
        }} className="group-hover:scale-105">
          {project.image
            ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            : <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900, fontSize: '3rem', color: 'rgba(200,241,53,0.12)', letterSpacing: '-0.03em' }}>{project.category}</span>
          }
        </div>
        <div className="portfolio-overlay" aria-hidden="true" />

        {/* Overlay CTA */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.35s ease' }} className="group-hover:opacity-100" aria-hidden="true">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 12, background: 'var(--accent)', color: '#0a0a0a', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
            View Case Study <ArrowUpRight size={15} />
          </span>
        </div>

        {/* Category */}
        <span style={{ position: 'absolute', top: 12, left: 12, padding: '5px 12px', borderRadius: 999, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--accent)', fontFamily: 'Orbitron,monospace', fontSize: '0.56rem', letterSpacing: '0.13em', backdropFilter: 'blur(8px)' }}>
          {project.category}
        </span>
        {project.featured && (
          <span style={{ position: 'absolute', top: 12, right: 12, padding: '5px 12px', borderRadius: 999, background: 'rgba(10,10,10,0.92)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', fontFamily: 'Orbitron,monospace', fontSize: '0.56rem', letterSpacing: '0.1em', backdropFilter: 'blur(8px)' }}>
            FEATURED
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)', lineHeight: 1.3, transition: 'color 0.2s ease' }} className="group-hover:text-white">
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 14, flexGrow: 1 }}>
          {project.description}
        </p>

        {/* Service tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {project.services.slice(0, 3).map(s => (
            <span key={s} style={{ padding: '3px 10px', borderRadius: 999, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', color: 'rgba(200,241,53,0.12)', fontSize: '0.72rem' }}>{s}</span>
          ))}
        </div>

        {/* Metric */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(200,241,53,0.12)' }}>
          <div>
            <p className="gradient-text font-black text-lg leading-none" style={{ fontFamily: 'Space Grotesk,sans-serif' }}>{project.metric}</p>
            <p style={{ color: 'rgba(200,241,53,0.12)', fontSize: '0.65rem', marginTop: 3 }}>{project.metricNote} · SAMPLE</p>
          </div>
          <ArrowUpRight size={18} style={{ color: 'var(--accent)', transition: 'transform 0.2s ease' }} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  )
}

/* ── Main section ─────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [cat, setCat]         = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)

  return (
    <>
      <section id="portfolio" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }} aria-label="Portfolio">
        <div className="blob" style={{ width: 500, height: 500, top: '10%', right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionTitle
              label="Selected Work"
              title={<>Campaigns built to <span className="gradient-text">drive growth</span>.</>}
              subtitle="Click any card to explore the full case study — challenge, strategy, execution and results."
            />
          </motion.div>

          {/* Filter tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }} role="tablist">
            {ALL_CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} role="tab" aria-selected={cat === c} style={{
                padding: '8px 18px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600,
                fontFamily: 'Space Grotesk,sans-serif', cursor: 'pointer',
                background: cat === c ? 'var(--accent)' : 'rgba(200,241,53,0.12)',
                color: cat === c ? '#0a0a0a' : 'var(--text-secondary)',
                border: `1px solid ${cat === c ? 'var(--accent)' : 'rgba(200,241,53,0.12)'}`,
                transition: 'all 0.2s ease',
              }}>
                {c}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <ProjectCard project={p} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p style={{ marginTop: 28, textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            * All metrics shown are sample data. Replace with real results in portfolioData.js
          </p>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
