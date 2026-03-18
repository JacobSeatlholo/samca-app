import { Users } from 'lucide-react'
import FadeIn from './FadeIn'

const SPEAKERS = [
  { name: 'Prof. Bonang Mohale', role: 'Chancellor, University of the Free State', keynote: true },
  { name: 'Noluthando Gosa', role: 'CEO, Minerals Council South Africa', keynote: false },
  { name: 'Dr. Marius Kloppers', role: 'Independent Mining Strategist', keynote: false },
  { name: 'Zanele Mavuso', role: 'Director-General, DMRE', keynote: false },
]

export default function Speakers() {
  return (
    <section
      id="speakers"
      style={{ background: 'var(--bone)', padding: '120px 32px' }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="grid-cols-2"
        >
          {/* Left: copy */}
          <FadeIn>
            <div className="eyebrow">Faculty 2026</div>
            <div className="divider-gold-left" />
            <h2
              className="serif"
              style={{ fontSize: '2.6rem', color: 'var(--earth)', lineHeight: 1.22, marginBottom: 24 }}
            >
              The Voices That<br />
              <em style={{ color: 'var(--olive)' }}>Shape the Sector</em>
            </h2>
            <p style={{
              color: 'rgba(34,26,24,0.52)', lineHeight: 1.85,
              fontSize: '0.95rem', fontWeight: 300, marginBottom: 20,
            }}>
              Our faculty represents the full arc of South African mining's stakeholder
              universe — from C-suite to community leader, regulator to researcher.
            </p>
            <p style={{
              color: 'rgba(34,26,24,0.52)', lineHeight: 1.85,
              fontSize: '0.95rem', fontWeight: 300,
            }}>
              The 2026 programme features 48 speakers across 14 plenary and breakout
              sessions, with an emphasis on unscripted executive dialogue.
            </p>
          </FadeIn>

          {/* Right: speaker cards */}
          <FadeIn delay={0.18}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {SPEAKERS.map(({ name, role, keynote }) => (
                <div
                  key={name}
                  style={{
                    border: keynote ? '1px solid var(--olive)' : '1px solid rgba(34,26,24,0.1)',
                    padding: '24px 20px',
                    background: keynote ? 'rgba(159,145,98,0.06)' : 'transparent',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44,
                    background: keynote ? 'var(--olive)' : 'rgba(34,26,24,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Users
                      size={18}
                      color={keynote ? 'var(--bone)' : 'rgba(34,26,24,0.35)'}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div
                    className="serif"
                    style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--earth)', marginBottom: 6, lineHeight: 1.35 }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(34,26,24,0.48)', lineHeight: 1.5, fontWeight: 300 }}>
                    {role}
                  </div>
                  {keynote && (
                    <div style={{
                      marginTop: 12, fontSize: '0.62rem',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: 'var(--olive)', fontWeight: 700,
                    }}>
                      Keynote Speaker
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
