import { motion } from 'framer-motion'
import { MapPin, Briefcase, Download, CheckCircle2, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const highlights = [
  { icon: MapPin,       text: 'Based in Kerala, India' },
  { icon: Briefcase,    text: personalInfo.availability },
  { icon: CheckCircle2, text: 'Focused on Measurable Results' },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="About Afnas"
    >
      <div className="blob" style={{ width: 500, height: 500, top: '-10%', right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image col */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="relative"
          >
            {/* Offset border */}
            <div style={{
              position: 'absolute', top: -12, left: -12, right: 12, bottom: 12,
              border: '1px solid rgba(200,241,53,0.12)', borderRadius: 28,
            }} aria-hidden="true" />

            {/* Photo */}
            <div className="img-placeholder" style={{
              width: '100%', aspectRatio: '4/5', borderRadius: 28,
              border: '1px solid rgba(200,241,53,0.12)', overflow: 'hidden',
              background: 'linear-gradient(135deg,#111111 0%,#181818 50%,#111111 100%)',
              position: 'relative',
            }}>
              <img
                src="/images/profile/afnas-about.jpg"
                alt="Afnas — Digital Marketing Specialist in Kerala"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                loading="lazy"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div style={{ display: 'none', position: 'absolute', inset: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(200,241,53,0.12)', border: '2px dashed rgba(200,241,53,0.12)', color: 'var(--accent)', fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.2rem', fontWeight: 900 }}>AF</div>
                <p style={{ color: 'rgba(200,241,53,0.12)', fontSize: '0.7rem', textAlign: 'center', padding: '0 20px' }}>Place photo at<br/>/public/images/profile/afnas-about.jpg</p>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(10,10,10,0.8),transparentram($m) "rgba(13,13,13,$($m.Groups[1].Value))" ,transparent)' }} aria-hidden="true" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 220 }}
              style={{
                position: 'absolute', bottom: -24, right: -20,
                padding: '16px 22px', borderRadius: 20,
                background: 'rgba(10,10,10,0.92)',
                border: '1px solid rgba(200,241,53,0.12)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
              }}
            >
              <p className="gradient-text font-black text-3xl leading-none" style={{ fontFamily: 'Space Grotesk,sans-serif' }}>2+</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginTop: 4, letterSpacing: '0.05em' }}>Years in<br/>Digital Marketing</p>
            </motion.div>
          </motion.div>

          {/* Content col */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
          >
            <SectionTitle
              label="About Me"
              title={<>Strategy. Creativity.<br /><span className="gradient-text">Measurable growth.</span></>}
            />

            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.bio}
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Whether it's scaling organic traffic through SEO, cutting cost-per-lead on paid campaigns, or building a social presence that converts — every project I take on starts with a clear strategy and ends with numbers that matter.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={14} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.resume} download className="btn-primary group" aria-label="Download CV">
                <Download size={15} /> Download CV
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-secondary group"
              >
                Work With Me <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <p style={{ marginTop: 10, fontSize: '0.65rem', color: 'rgba(200,241,53,0.12)' }}>* Place your CV PDF at /public/Afnas-CV.pdf</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
