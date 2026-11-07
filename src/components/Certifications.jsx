import { motion } from 'framer-motion'
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="flip-container"
      style={{ height: 240 }}
      aria-label={`${cert.title} by ${cert.issuer}`}
    >
      <div className="flip-inner" style={{ height: '100%' }}>

        {/* Front */}
        <div className="flip-front card-glass flex flex-col items-center justify-center p-7 text-center gap-4">
          <div style={{
            width: 60, height: 60, borderRadius: 18,
            background: `${cert.color}15`,
            border: `1px solid ${cert.color}35`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Award size={26} style={{ color: cert.color }} />
          </div>
          <div>
            <p style={{
              fontFamily: 'Space Grotesk,sans-serif',
              fontSize: '0.75rem', fontWeight: 600,
              color: cert.color, marginBottom: 6,
              letterSpacing: '0.05em',
            }}>
              {cert.issuer}
            </p>
            <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
              {cert.title}
            </h3>
          </div>
          <span style={{
            padding: '4px 12px', borderRadius: 999,
            background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)',
            color: 'var(--accent)', fontFamily: 'Orbitron,monospace',
            fontSize: '0.58rem', letterSpacing: '0.15em',
          }}>
            {cert.year}
          </span>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.08em' }}>HOVER TO VERIFY →</p>
        </div>

        {/* Back */}
        <div className="flip-back flex flex-col items-center justify-center p-7 text-center gap-5"
          style={{
            background: `linear-gradient(135deg,${cert.color}10 0%,rgba(10,10,10,0.92) 100%)`,
            border: `1px solid ${cert.color}25`,
          }}
        >
          <CheckCircle2 size={32} style={{ color: cert.color }} />
          <div>
            <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.8rem', fontWeight: 600, color: cert.color, marginBottom: 4 }}>{cert.issuer}</p>
            <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{cert.title}</p>
          </div>
          {cert.credentialUrl && cert.credentialUrl !== '#' ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '8px 18px', background: cert.color, color: '#0a0a0a' }}
              aria-label={`Verify ${cert.title}`}
            >
              <ExternalLink size={13} /> Verify Credential
            </a>
          ) : (
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
              Add credential URL in portfolioData.js
            </span>
          )}
        </div>

      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }} aria-label="Certifications">
      <div className="blob" style={{ width: 400, height: 400, bottom: 0, left: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle
            label="Certifications"
            title={<>Verified <span className="gradient-text">expertise</span>.</>}
            subtitle="Hover each card to verify the credential. Real certifications replace placeholders."
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
        </div>
      </div>
    </section>
  )
}
