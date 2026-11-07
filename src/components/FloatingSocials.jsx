import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { socialLinks } from '../data/portfolioData'

const ITEMS = [
  { icon: FaLinkedinIn, label:'LinkedIn',  href: socialLinks.linkedin },
  { icon: FaInstagram,  label:'Instagram', href: socialLinks.instagram },
  { icon: FaFacebookF,  label:'Facebook',  href: socialLinks.facebook },
]

export default function FloatingSocials() {
  return (
    <div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3"
      role="complementary" aria-label="Social media links"
    >
      <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom,transparent,rgba(200,241,53,0.12))' }} aria-hidden="true" />
      {ITEMS.map(({ icon: Icon, label, href }) => (
        <a
          key={label} href={href || '#'} target="_blank" rel="noopener noreferrer"
          style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(10,10,10,0.92)', border: '1px solid rgba(200,241,53,0.12)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(12px)', transition: 'all 0.22s ease', textDecoration: 'none' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,241,53,0.12)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.12)'; e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,241,53,0.12)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.92)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(200,241,53,0.12)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          aria-label={label}
        ><Icon size={13} /></a>
      ))}
      <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom,rgba(200,241,53,0.12),transparent)' }} aria-hidden="true" />
    </div>
  )
}
