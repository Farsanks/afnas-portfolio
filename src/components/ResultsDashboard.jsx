import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, BarChart2, Activity } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import SectionTitle from './SectionTitle'

/* All values are SAMPLE / illustrative — not real client data */
const KPI_CARDS = [
  { label: 'Average ROAS', value: 3.8, suffix: 'x', trend: '+18%', up: true, desc: 'Return on Ad Spend across campaigns', color: '#c8f135' },
  { label: 'CTR Improvement', value: 4.2, suffix: '%', trend: '+65%', up: true, desc: 'Click-through rate vs. industry avg.', color: '#b5de20' },
  { label: 'CPC Reduction', value: 38, suffix: '%', trend: '-38%', up: false, positive: true, desc: 'Cost-per-click decrease after optimisation', color: '#c8f135' },
  { label: 'Organic Growth', value: 160, suffix: '%', trend: '+160%', up: true, desc: 'Average organic traffic increase', color: '#d9ff50' },
]

const CHART_BARS = [
  { label: 'Jan', seo: 45, paid: 60 },
  { label: 'Feb', seo: 55, paid: 65 },
  { label: 'Mar', seo: 65, paid: 70 },
  { label: 'Apr', seo: 75, paid: 68 },
  { label: 'May', seo: 85, paid: 80 },
  { label: 'Jun', seo: 95, paid: 88 },
  { label: 'Jul', seo: 100, paid: 92 },
]

const CHANNEL_MIX = [
  { label: 'SEO',           pct: 38, color: '#c8f135' },
  { label: 'Google Ads',    pct: 28, color: '#b5de20' },
  { label: 'Meta Ads',      pct: 20, color: '#c8f135' },
  { label: 'Social Media',  pct: 14, color: '#d9ff50' },
]

function KpiCard({ kpi, inView, index }) {
  const count = useCountUp(kpi.value, 1600, inView)
  const TrendIcon = kpi.up ? TrendingUp : (kpi.positive ? TrendingDown : Minus)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-glass p-6 group relative overflow-hidden"
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0, background: `radial-gradient(circle at 20% 20%,${kpi.color}08,transparent 55%)`, transition: 'opacity 0.4s ease', pointerEvents: 'none' }} className="group-hover:opacity-100" aria-hidden="true" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}>{kpi.label}</p>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '3px 10px', borderRadius: 999,
          background: kpi.positive || kpi.up ? 'rgba(200,241,53,0.12)' : 'rgba(239,68,68,0.1)',
          color: kpi.positive || kpi.up ? 'var(--accent)' : '#f87171',
          fontSize: '0.7rem', fontWeight: 700, fontFamily: 'Space Grotesk,sans-serif',
        }}>
          <TrendIcon size={11} /> {kpi.trend}
        </span>
      </div>

      <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900, fontSize: '2.6rem', lineHeight: 1, letterSpacing: '-0.03em', color: kpi.color, textShadow: `0 0 20px ${kpi.color}40`, marginBottom: 8 }}>
        {count}{kpi.suffix}
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.5 }}>{kpi.desc}</p>

      {/* Mini sparkline */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginTop: 14, height: 28 }} aria-hidden="true">
        {[30,45,40,60,55,75,80,90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={inView ? { height: `${h}%` } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + i * 0.05 }}
            style={{ flex: 1, background: `${kpi.color}35`, borderRadius: 2, minHeight: 2 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function ResultsDashboard() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="results" ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-tertiary)' }} aria-label="Marketing results dashboard">
      <div className="blob" style={{ width: 600, height: 600, top: '-10%', left: '-15%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />

      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle
            label="Results Dashboard"
            title={<>Numbers that <span className="gradient-text">speak for themselves</span>.</>}
            subtitle="Average performance metrics across client campaigns. All figures are sample benchmarks — actual results vary by project."
          />
        </motion.div>

        {/* KPI cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {KPI_CARDS.map((kpi, i) => <KpiCard key={kpi.label} kpi={kpi} inView={inView} index={i} />)}
        </div>

        {/* Bottom row: Bar chart + Channel mix */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">

          {/* Bar chart — Campaign Performance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="card-glass p-7"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div>
                <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.95rem', fontWeight: 700, marginBottom: 2 }}>Campaign Performance</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Traffic index over 7 months (SAMPLE)</p>
              </div>
              <Activity size={20} style={{ color: 'var(--accent)', opacity: 0.6 }} />
            </div>

            {/* Bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 140 }}>
              {CHART_BARS.map((bar, i) => (
                <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', display: 'flex', gap: 3, alignItems: 'flex-end', height: 120 }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${bar.seo}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.06, ease: [0.16,1,0.3,1] }}
                      style={{ flex: 1, background: 'linear-gradient(to top,rgba(200,241,53,0.12),rgba(200,241,53,0.12))', borderRadius: '3px 3px 0 0', minHeight: 4 }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${bar.paid}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.45 + i * 0.06, ease: [0.16,1,0.3,1] }}
                      style={{ flex: 1, background: 'linear-gradient(to top,rgba(181,222,32,0.5),rgba(181,222,32,0.5))', borderRadius: '3px 3px 0 0', minHeight: 4 }}
                    />
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.62rem', fontFamily: 'Orbitron,monospace', letterSpacing: '0.1em' }}>{bar.label}</p>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
              {[{ color: '#c8f135', label: 'SEO / Organic' }, { color: '#b5de20', label: 'Paid Campaigns' }].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{l.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Channel mix */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="card-glass p-7"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div>
                <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.95rem', fontWeight: 700, marginBottom: 2 }}>Channel Mix</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Avg. traffic distribution (SAMPLE)</p>
              </div>
              <BarChart2 size={20} style={{ color: 'var(--accent)', opacity: 0.6 }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CHANNEL_MIX.map((ch, i) => (
                <div key={ch.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 600 }}>{ch.label}</span>
                    <span style={{ fontSize: '0.82rem', color: ch.color, fontWeight: 700 }}>{ch.pct}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(200,241,53,0.12)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${ch.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.16,1,0.3,1] }}
                      style={{ height: '100%', borderRadius: 3, background: `linear-gradient(90deg,${ch.color},${ch.color}80)`, boxShadow: `0 0 8px ${ch.color}40` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 20, fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              * Illustrative data only. Replace with real analytics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
