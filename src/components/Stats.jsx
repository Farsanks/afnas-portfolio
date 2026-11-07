import { motion } from 'framer-motion'
import { TrendingUp, FolderOpen, Users, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { stats } from '../data/portfolioData'

const ICONS = [TrendingUp, FolderOpen, Users, Award]

function StatCard({ stat, index, inView }) {
  const numeric = parseInt(stat.value, 10)
  const suffix  = stat.value.replace(/[0-9]/g, '')
  const count   = useCountUp(numeric, 1800, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16,1,0.3,1] }}
      className="card-glass flex flex-col items-center text-center p-8 group relative overflow-hidden"
    >
      {/* Radial hover glow */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0,
        background: 'radial-gradient(circle at 50% 0%,rgba(200,241,53,0.12),transparent 60%)',
        transition: 'opacity 0.4s ease', pointerEvents: 'none',
      }}
        className="group-hover:opacity-100"
      />

      {/* Icon */}
      {(() => {
        const Icon = ICONS[index % ICONS.length]
        return (
          <div style={{
            width: 48, height: 48, borderRadius: 14, marginBottom: 16,
            background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.3s ease',
          }} className="group-hover:scale-110">
            <Icon size={20} style={{ color: 'var(--accent)' }} />
          </div>
        )
      })()}

      {/* Number */}
      <p
        className="gradient-text font-black leading-none mb-2"
        style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(2.8rem,5vw,3.5rem)' }}
        aria-label={`${stat.value} ${stat.label}`}
      >
        {isNaN(numeric) ? stat.value : `${count}${suffix}`}
      </p>

      {/* Divider */}
      <div style={{
        width: 32, height: 1.5, background: 'var(--accent)', borderRadius: 1, marginBottom: 10,
        transition: 'width 0.3s ease',
      }} className="group-hover:w-14" />

      {/* Label */}
      <p style={{
        color: 'var(--text-secondary)',
        fontFamily: 'Orbitron,monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
      }}>
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 relative" style={{ background: 'var(--bg-primary)' }} aria-label="Key statistics">
      <div className="divider-h absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-h absolute bottom-0 left-0 right-0" aria-hidden="true" />
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
