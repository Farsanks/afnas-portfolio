import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function WhatsAppButton() {
  const href = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent("Hi Afnas, I'd like to discuss a digital marketing project.")}`
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="pulse-ring" style={{ position: 'relative', width: 56, height: 56, borderRadius: '50%', background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FaWhatsapp size={24} color="#fff" />
      </div>
    </a>
  )
}
