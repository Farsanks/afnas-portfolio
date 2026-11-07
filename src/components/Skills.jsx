import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const TOOL_LOGOS = [
  'Google Ads', 'Meta Ads', 'GA4', 'Search Console',
  'SEMrush', 'Ahrefs', 'Canva', 'WordPress',
  'Mailchimp', 'HubSpot', 'Google Tag Manager', 'Hotjar',
]

function LogoStrip() {
  const items = [...TOOL_LOGOS, ...TOOL_LOGOS]
  return (
    <div
      className="relative overflow-hidden py-5 mb-16"
      style={{ borderTop: '1px solid rgba(200,241,53,0.08)', borderBottom: '1px solid rgba(200,241,53,0.08)' }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,var(--bg-secondary),transparent)', zIndex: 2 }} aria-hidden="true" />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,var(--bg-secondary),transparent)', zIndex: 2 }} aria-hidden="true" />
      <div className="logo-track flex items-center gap-10 whitespace-nowrap w-max" aria-hidden="true">
        {items.map((tool, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Space Grotesk,sans-serif',
              fontSize: '0.85rem', fontWeight: 600,
              color: 'rgba(200,241,53,0.35)',
              padding: '6px 16px', borderRadius: 999,
              border: '1px solid rgba(200,241,53,0.08)',
              background: 'rgba(200,241,53,0.03)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = skillCategories.map(c => c.category)
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === active)

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Skills and tools"
    >
      <div
        className="blob"
        style={{ width: 400, height: 400, bottom: 0, right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.05) 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle
            label="Expertise"
            title={<>Tools & skills I <span className="gradient-text">master</span>.</>}
            subtitle="A focused toolkit built around what actually moves the needle."
          />
        </motion.div>

        <LogoStrip />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              style={{
                padding: '8px 18px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600,
                fontFamily: 'Space Grotesk,sans-serif', cursor: 'pointer', border: 'none',
                background: active === cat ? 'var(--accent)' : 'rgba(200,241,53,0.06)',
                color: active === cat ? '#0a0a0a' : 'var(--text-secondary)',
                outline: active === cat ? '1px solid var(--accent)' : '1px solid rgba(200,241,53,0.15)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill grids */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat, ci) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card-glass p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 3, height: 22, background: 'var(--accent)', borderRadius: 2, flexShrink: 0, boxShadow: '0 0 8px rgba(200,241,53,0.5)' }} />
                  <h3 style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                    {cat.category}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.05 + si * 0.03 }}
                      className="skill-tag"
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(200,241,53,0.5)', flexShrink: 0 }} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
