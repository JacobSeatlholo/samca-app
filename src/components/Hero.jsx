import { ArrowRight, Calendar, ChevronDown } from 'lucide-react'

const STATS = [
  ['340+', 'Executive Delegates'],
  ['48', 'Industry Speakers'],
  ['3', 'Curated Events'],
  ['12', 'ESG Commitments'],
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: `
          linear-gradient(160deg, rgba(34,26,24,0.89) 0%, rgba(52,67,39,0.74) 50%, rgba(34,26,24,0.93) 100%),
          url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1800&q=80') center/cover no-repeat
        `,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 32px 80px',
        position: 'relative',
      }}
    >
      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239F9162' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{ maxWidth: 920, position: 'relative', zIndex: 1 }}>
        {/* Date badge */}
        <div
          className="hero-animate"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(159,145,98,0.16)',
            border: '1px solid rgba(159,145,98,0.38)',
            padding: '8px 22px', marginBottom: 44,
            animationDelay: '0s',
          }}
        >
          <Calendar size={12} color="var(--olive)" />
          <span style={{
            color: 'var(--olive)', fontSize: '0.7rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
          }}>
            25 – 27 August 2026 &nbsp;·&nbsp; Sun City, North West Province
          </span>
        </div>

        {/* Headline */}
        <h1
          className="serif hero-title hero-animate"
          style={{
            fontSize: '4rem', lineHeight: 1.13, color: 'var(--bone)',
            fontWeight: 700, marginBottom: 32,
            textShadow: '0 2px 40px rgba(34,26,24,0.35)',
            animationDelay: '0.15s', opacity: 0,
          }}
        >
          The Social Compact<br />
          <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>for a Sustainable</em><br />
          Mining Future
        </h1>

        {/* Sub */}
        <p
          className="hero-animate"
          style={{
            color: 'rgba(243,242,238,0.72)', fontSize: '1.05rem', lineHeight: 1.85,
            maxWidth: 640, margin: '0 auto 52px', fontWeight: 300,
            animationDelay: '0.3s', opacity: 0,
          }}
        >
          South Africa's foremost gathering of mining executives, policymakers,
          and ESG leaders — convened to forge the ethical and economic architecture
          of the sector's next decade.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate"
          style={{
            display: 'flex', gap: 16, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 72,
            animationDelay: '0.45s', opacity: 0,
          }}
        >
          <button className="btn-primary">
            Request Executive Invitation <ArrowRight size={15} />
          </button>
          <button className="btn-ghost">Download Programme</button>
        </div>

        {/* Stats row */}
        <div
          className="hero-animate"
          style={{
            display: 'flex', gap: 56, justifyContent: 'center',
            flexWrap: 'wrap', animationDelay: '0.6s', opacity: 0,
          }}
        >
          {STATS.map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: '2.1rem', color: 'var(--copper)', fontWeight: 700, lineHeight: 1 }}>
                {num}
              </div>
              <div style={{
                fontSize: '0.68rem', color: 'rgba(243,242,238,0.5)',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 6,
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-bounce"
        style={{ position: 'absolute', bottom: 36, left: '50%' }}
      >
        <ChevronDown size={22} color="rgba(243,242,238,0.35)" />
      </div>
    </section>
  )
}
