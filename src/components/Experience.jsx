import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react'
import { experience } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function TimelineItem({ job, index, isLast }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16,1,0.3,1] }}
      className="relative pl-14 pb-10"
    >
      {/* Animated vertical line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute', left: 19, top: 36, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom,rgba(200,241,53,0.12),rgba(200,241,53,0.12))',
            transformOrigin: 'top',
          }}
          aria-hidden="true"
        />
      )}

      {/* Glowing dot */}
      <div style={{
        position: 'absolute', left: 10, top: 14, width: 20, height: 20, borderRadius: '50%',
        background: 'var(--bg-primary)', border: '2px solid var(--accent)',
        boxShadow: '0 0 14px rgba(200,241,53,0.12)', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
      </div>

      {/* Card */}
      <article className="card-glass p-6 group" aria-label={`${job.role} at ${job.company}`}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: 4, color: 'var(--text-primary)' }}>
              {job.role}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                <Briefcase size={13} /> {job.company}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                <MapPin size={11} /> {job.location}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-start' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '6px 12px', borderRadius: 10,
              background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)',
              color: 'var(--accent)', fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.08em',
            }}>
              <Calendar size={10} /> {job.period}
            </span>
            <span style={{
              padding: '6px 12px', borderRadius: 10, fontSize: '0.75rem',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              color: 'var(--text-secondary)',
            }}>
              {job.type}
            </span>
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(p => !p)}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: expanded ? 12 : 0 }}
          aria-expanded={expanded}
        >
          <ChevronDown size={14} style={{ transition: 'transform 0.3s ease', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--accent)' }} />
          {expanded ? 'Hide details' : 'Show details'}
        </button>

        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{ overflow: 'hidden' }}
          >
            {job.responsibilities.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8, color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                <span style={{ marginTop: 6, width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, opacity: 0.7 }} />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </article>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }} aria-label="Work experience">
      <div className="blob" style={{ width: 400, height: 400, top: '10%', right: 0, background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-28">
            <SectionTitle label="Experience" title={<>Where I've <span className="gradient-text">grown</span>.</>} />
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              A growing track record of real digital marketing work — from strategy to hands-on execution.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 8 }} aria-hidden="true">
              {[75, 50, 30].map((w, i) => (
                <div key={i} style={{ height: 1.5, width: `${w}%`, background: `rgba(57,255,136,${0.22 - i * 0.06})`, borderRadius: 1 }} />
              ))}
            </div>
          </motion.div>
          <div className="relative">
            {experience.map((job, i) => (
              <TimelineItem key={job.id} job={job} index={i} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
