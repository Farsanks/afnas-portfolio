export default function SectionTitle({ label, title, subtitle, center = false }) {
  return (
    <div style={{ marginBottom: 52, textAlign: center ? 'center' : 'left' }}>
      {label && (
        <div className="section-label" style={{ justifyContent: center ? 'center' : 'flex-start' }}>
          {label}
        </div>
      )}
      <h2 style={{ fontSize:'clamp(1.85rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          marginTop: 16, fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)',
          maxWidth: 600, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
