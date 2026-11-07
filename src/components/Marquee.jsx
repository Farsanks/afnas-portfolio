const ITEMS = [
  'SEO', 'SOCIAL MEDIA', 'GOOGLE ADS', 'META ADS',
  'CONTENT STRATEGY', 'ANALYTICS', 'BRAND STRATEGY',
  'EMAIL MARKETING', 'PPC', 'CONVERSION RATE',
  'LEAD GENERATION', 'COPYWRITING',
]

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '13px 0',
        background: '#0d0d0d',
        borderTop: '1px solid rgba(200,241,53,0.2)',
        borderBottom: '1px solid rgba(200,241,53,0.2)',
      }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#0a0a0a,transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#0a0a0a,transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div
        className="marquee-track"
        style={{ display: 'flex', alignItems: 'center', gap: 0, whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {track.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {/* Text */}
            <span style={{
              fontFamily: 'Orbitron,monospace',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#c8f135',          /* bright lime — fully visible */
              padding: '0 22px',
            }}>
              {item}
            </span>
            {/* Separator dot */}
            <span style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: 'rgba(200,241,53,0.45)',
              flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  )
}
