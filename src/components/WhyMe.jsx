import { motion } from 'framer-motion'
import { LineChart, Lightbulb, Users, RefreshCw } from 'lucide-react'
import { whyMe } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const ICON_MAP = { LineChart, Lightbulb, Users, RefreshCw }

export default function WhyMe() {
  return (
    <section id="why-me" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-tertiary)' }} aria-label="Why work with me">
      <div className="blob" style={{ width: 350, height: 350, bottom: 0, left: 0, background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle label="Why Work With Me" title={<>What makes the <span className="gradient-text">difference</span>.</>} subtitle="Beyond execution — the principles behind every project I take on." />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyMe.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || LineChart
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: i * 0.1 }} className="card-glass p-7 group text-center flex flex-col items-center">
                <div style={{ width: 56, height: 56, borderRadius: 18, marginBottom: 18, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, background 0.3s ease' }} className="group-hover:scale-110 group-hover:bg-[rgba(200,241,53,0.12)]">
                  <Icon size={22} style={{ color: 'var(--accent)' }} className="group-hover:drop-shadow-[0_0_8px_rgba(200,241,53,0.12)]" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
