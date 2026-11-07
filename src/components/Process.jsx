import { motion } from 'framer-motion'
import { Compass, Map, Zap, BarChart2 } from 'lucide-react'
import { processSteps } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const ICON_MAP = { Compass, Map, Zap, BarChart2 }

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }} aria-label="How I work">
      <div className="blob" style={{ width: 400, height: 400, top: 0, right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionTitle
            label="How I Work"
            title={<>A process built for <span className="gradient-text">consistent results</span>.</>}
            subtitle="Every engagement follows a structured approach that removes guesswork and focuses on outcomes."
            center
          />
        </motion.div>

        {/* Desktop: horizontal with connecting line */}
        <div style={{ position: 'relative' }}>
          {/* Animated connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute', top: 40, left: '10%', right: '10%', height: 1,
              background: 'linear-gradient(90deg,transparent,rgba(200,241,53,0.12) 20%,rgba(200,241,53,0.12) 80%,transparent)',
              transformOrigin: 'left',
              display: 'none',
            }}
            className="lg:block"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Compass
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.13 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div style={{
                    position: 'relative', width: 80, height: 80, borderRadius: 22, marginBottom: 20, zIndex: 2,
                    background: 'var(--bg-primary)', border: '1px solid rgba(200,241,53,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 0 6px var(--bg-secondary)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }} className="group-hover:scale-105 group-hover:shadow-[0_0_0_6px_var(--bg-secondary),0_0_20px_rgba(200,241,53,0.2)]">
                    {/* Number */}
                    <span style={{
                      position: 'absolute', top: -10, right: -10,
                      width: 26, height: 26, borderRadius: 8,
                      background: 'var(--accent)', color: '#0a0a0a',
                      fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {step.number}
                    </span>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(200,241,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} className="group-hover:bg-[rgba(200,241,53,0.12)]">
                      <Icon size={22} style={{ color: 'var(--accent)' }} />
                    </div>
                  </div>

                  <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, transition: 'color 0.2s ease' }} className="group-hover:text-white">
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
