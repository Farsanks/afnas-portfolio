import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const CONTACT_ITEMS = [
  { icon: Mail,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: Phone,  label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone.replace(/\s/g,'')}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
]

const SOCIALS = [
  { icon: FaLinkedinIn, label: 'LinkedIn',  href: socialLinks.linkedin },
  { icon: FaInstagram,  label: 'Instagram', href: socialLinks.instagram },
  { icon: FaFacebookF,  label: 'Facebook',  href: socialLinks.facebook },
  { icon: FaWhatsapp,   label: 'WhatsApp',  href: `https://wa.me/${personalInfo.whatsapp}` },
]

function validate(f) {
  const e = {}
  if (!f.name.trim())                         e.name    = 'Name is required.'
  if (!f.email.trim())                        e.email   = 'Email is required.'
  else if (!/\S+@\S+\.\S+/.test(f.email))    e.email   = 'Enter a valid email.'
  if (!f.subject.trim())                      e.subject = 'Subject is required.'
  if (f.message.trim().length < 20)           e.message = 'At least 20 characters.'
  return e
}

const INPUT_STYLE = {
  width: '100%', padding: '12px 16px', borderRadius: 12, fontSize: '0.875rem',
  background: 'rgba(10,10,10,0.92)', color: 'var(--text-primary)',
  fontFamily: 'Inter,sans-serif', outline: 'none', transition: 'border-color 0.2s ease',
}

function Field({ label, id, error, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label htmlFor={id} style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: 6 }}>{label}</label>
      <input
        id={id} {...props}
        style={{ ...INPUT_STYLE, border: `1px solid ${error ? '#ef4444' : focused ? 'rgba(200,241,53,0.12)' : 'rgba(200,241,53,0.12)'}` }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-describedby={error ? `${id}-err` : undefined}
        aria-invalid={!!error}
      />
      {error && <p id={`${id}-err`} style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5, fontSize: '0.75rem', color: '#f87171' }}><AlertCircle size={12} />{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm]     = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    const body = `Name: ${form.name}\nPhone: ${form.phone || 'N/A'}\n\n${form.message}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setStatus('success')
    setForm({ name:'', email:'', phone:'', subject:'', message:'' })
    setTimeout(() => setStatus('idle'), 6000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }} aria-label="Contact Afnas">
      <div className="blob" style={{ width: 500, height: 500, bottom: '-10%', right: '-10%', background: 'radial-gradient(circle,rgba(200,241,53,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionTitle label="Let's Connect" title={<>Ready to grow your <span className="gradient-text">brand</span>?</>} subtitle="Have a project in mind or want to discuss strategy? Let's talk." />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 items-start">

          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 16, background: 'rgba(18,18,18,0.7)', border: '1px solid rgba(200,241,53,0.12)' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={15} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: 2 }}>{label}</p>
                    {href
                      ? <a href={href} style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>{value}</a>
                      : <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-secondary)', marginBottom: 14, fontFamily: 'Orbitron,monospace' }}>Follow me</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href || '#'} target="_blank" rel="noopener noreferrer"
                  style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,241,53,0.12)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,241,53,0.12)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.12)' }}
                  aria-label={label}
                ><Icon size={15} /></a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div style={{ padding: '36px', borderRadius: 24, background: 'rgba(18,18,18,0.7)', border: '1px solid rgba(200,241,53,0.12)' }}>
              {status === 'success'
                ? (
                  <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                    <CheckCircle2 size={48} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>Message sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your email client opened with the message. I'll get back to you shortly.</p>
                  </div>
                )
                : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                      <Field label="Full Name *"      id="name"    name="name"    type="text"  placeholder="Your name"         value={form.name}    onChange={handleChange} error={errors.name}    autoComplete="name" />
                      <Field label="Email Address *"  id="email"   name="email"   type="email" placeholder="your@email.com"    value={form.email}   onChange={handleChange} error={errors.email}   autoComplete="email" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                      <Field label="Phone"   id="phone"   name="phone"   type="tel"  placeholder="+91 XXXXX XXXXX" value={form.phone}   onChange={handleChange} error={errors.phone}   autoComplete="tel" />
                      <Field label="Subject *" id="subject" name="subject" type="text" placeholder="How can I help?" value={form.subject} onChange={handleChange} error={errors.subject} />
                    </div>
                    <div style={{ marginBottom: 22 }}>
                      <label htmlFor="message" style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: 6 }}>Message *</label>
                      <textarea
                        id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Tell me about your project, goals, and budget..."
                        style={{ ...INPUT_STYLE, resize: 'none', border: `1px solid ${errors.message ? '#ef4444' : 'rgba(200,241,53,0.12)'}` }}
                        onFocus={e => e.target.style.borderColor = 'rgba(200,241,53,0.12)'}
                        onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(200,241,53,0.12)'}
                        aria-invalid={!!errors.message} aria-describedby={errors.message ? 'msg-err' : undefined}
                      />
                      {errors.message && <p id="msg-err" style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5, fontSize: '0.75rem', color: '#f87171' }}><AlertCircle size={12} />{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center group" style={{ fontSize: '0.95rem', padding: '14px 0' }}>
                      <Send size={15} className="group-hover:translate-x-0.5 transition-transform" /> Send Message
                    </button>
                    <p style={{ marginTop: 10, textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                      Uses mailto. Connect Formspree or EmailJS for server-side sending.
                    </p>
                  </form>
                )
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
