import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../data/portfolioData'

const QUICK = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Results',      href: '#results' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Contact',      href: '#contact' },
]
const SERVICES_LIST = ['SEO', 'Social Media', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Analytics']
const SOCIALS = [
  { icon: FaLinkedinIn, label: 'LinkedIn',  href: socialLinks.linkedin },
  { icon: FaInstagram,  label: 'Instagram', href: socialLinks.instagram },
  { icon: FaFacebookF,  label: 'Facebook',  href: socialLinks.facebook },
  { icon: FaWhatsapp,   label: 'WhatsApp',  href: `https://wa.me/${personalInfo.whatsapp}` },
]
const goto = href => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(200,241,53,0.07)' }} role="contentinfo">
      <div className="container-custom py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); goto('#home') }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18, textDecoration: 'none' }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#c8f135,#b5de20)', color: '#0a0a0a', fontFamily: 'Orbitron,monospace', fontSize: '0.68rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AF</div>
              <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{personalInfo.name}</span>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 20 }}>
              {personalInfo.role} — helping brands grow through data-driven digital strategy.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(200,241,53,0.06)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,241,53,0.14)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.35)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,241,53,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.12)' }}
                  aria-label={label}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 18, textTransform: 'uppercase' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => { e.preventDefault(); goto(l.href) }}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => { e.target.style.color = 'var(--text-primary)' }}
                    onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 18, textTransform: 'uppercase' }}>Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES_LIST.map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={e => { e.preventDefault(); goto('#services') }}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => { e.target.style.color = 'var(--text-primary)' }}
                    onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'Orbitron,monospace', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 18, textTransform: 'uppercase' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease', wordBreak: 'break-all' }} onMouseEnter={e => { e.target.style.color = 'var(--text-primary)' }} onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}>{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => { e.target.style.color = 'var(--text-primary)' }} onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}>{personalInfo.phone}</a>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingTop: 24, borderTop: '1px solid rgba(200,241,53,0.05)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>© {year} {personalInfo.name}. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.1)', fontSize: '0.72rem' }}>Designed &amp; developed with care.</p>
        </div>
      </div>
    </footer>
  )
}
