import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'var(--bg-secondary)' }} aria-label="Call to action">
      {/* Big radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(200,241,53,0.12) 0%,transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />
      <div className="divider-h absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-h absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="container-custom relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <p style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--accent)', marginBottom: 14, textTransform: 'uppercase' }}>
            Have a project in mind?
          </p>
          <h2 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem,6vw,4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            LET'S <span className="gradient-text">GROW</span> YOUR<br className="hidden md:block" /> BRAND.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 36px', fontFamily: 'Inter,sans-serif' }}>
            Let's discuss how the right digital strategy can help your business reach more people, generate better leads and grow sustainably.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary group"
              style={{ fontSize: '0.95rem', padding: '14px 32px' }}
            >
              Start a Project <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-secondary group"
              style={{ fontSize: '0.95rem', padding: '14px 32px' }}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={17} /> WhatsApp Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
