import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import FadeIn from './FadeIn'

const TIERS = {
  executive: {
    name: 'Executive',
    price: 'R 48 500',
    accentColor: 'var(--olive)',
    cta: 'Request Invitation',
    features: [
      'Priority seating — Summit & Gala',
      '1-on-1 Executive Roundtable access',
      'VIP Golf Day (Foursome entry)',
      'Curated networking reception (Day 0)',
      'Digital & print delegate pack',
      'Post-summit ESG briefing document',
      'Dedicated concierge support',
    ],
  },
  corporate: {
    name: 'Corporate',
    price: 'R 28 000',
    accentColor: 'var(--copper)',
    cta: 'Register Now',
    features: [
      '4 delegate passes — Summit & Gala',
      'Corporate roundtable participation',
      'Golf Day (2 players)',
      'Branded exhibition stand (3×3 m)',
      'Digital delegate pack',
      'Summit recording access (30 days)',
    ],
  },
  delegate: {
    name: 'Delegate',
    price: 'R 9 800',
    accentColor: 'var(--forest)',
    cta: 'Register Now',
    features: [
      'Full Summit access (2 days)',
      'Gala Dinner seat',
      'Digital programme & materials',
      'Networking app access',
      'Certificate of attendance',
    ],
  },
}

export default function Registration() {
  const [active, setActive] = useState('executive')
  const tier = TIERS[active]

  return (
    <section
      id="registration"
      style={{ background: 'var(--earth)', padding: '120px 32px' }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              color: 'var(--olive)', fontSize: '0.7rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20,
            }}>
              Secure Your Seat
            </div>
            <div style={{ width: 56, height: 2, background: 'var(--olive)', margin: '0 auto 32px' }} />
            <h2
              className="serif"
              style={{ fontSize: '2.6rem', color: 'var(--bone)', lineHeight: 1.22, marginBottom: 20 }}
            >
              Registration & Investment Tiers
            </h2>
            <p style={{
              color: 'rgba(243,242,238,0.48)', maxWidth: 540, margin: '0 auto',
              lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300,
            }}>
              Delegate numbers are limited to preserve the quality of engagement.
              Early commitment is strongly advised.
            </p>
          </div>
        </FadeIn>

        {/* Tab selector */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 48 }}>
            {Object.entries(TIERS).map(([key, t]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  background: active === key ? 'var(--olive)' : 'transparent',
                  border: '1px solid rgba(159,145,98,0.3)',
                  color: active === key ? 'var(--bone)' : 'rgba(243,242,238,0.45)',
                  padding: '12px 30px',
                  fontSize: '0.74rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all 0.25s',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tier cards */}
        <FadeIn delay={0.15}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="grid-cols-3">
            {Object.entries(TIERS).map(([key, t]) => (
              <div
                key={key}
                className={`tier-card${active === key ? ' active' : ''}`}
                onClick={() => setActive(key)}
              >
                {/* Price block */}
                <div style={{
                  borderLeft: `3px solid ${t.accentColor}`,
                  paddingLeft: 20, marginBottom: 32,
                }}>
                  <div style={{
                    fontSize: '0.68rem', letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: t.accentColor,
                    fontWeight: 700, marginBottom: 6,
                  }}>
                    {t.name}
                  </div>
                  <div
                    className="serif"
                    style={{ fontSize: '2rem', color: 'var(--earth)', fontWeight: 700, lineHeight: 1 }}
                  >
                    {t.price}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(34,26,24,0.4)', marginTop: 4 }}>
                    excl. VAT per delegate
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: 32, flex: 1 }}>
                  {t.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                      <Check size={14} color={t.accentColor} style={{ marginTop: 2, flexShrink: 0 }} strokeWidth={2.5} />
                      <span style={{ fontSize: '0.83rem', color: 'rgba(34,26,24,0.68)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="btn-primary"
                  style={{
                    width: '100%', justifyContent: 'center',
                    background: active === key ? 'var(--sunset)' : 'transparent',
                    border: active === key ? 'none' : '1px solid rgba(34,26,24,0.22)',
                    color: active === key ? 'var(--bone)' : 'var(--earth)',
                    marginTop: 'auto',
                  }}
                >
                  {t.cta} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Footnote */}
        <FadeIn delay={0.25}>
          <p style={{
            textAlign: 'center', marginTop: 44,
            color: 'rgba(243,242,238,0.28)', fontSize: '0.8rem', lineHeight: 1.75,
          }}>
            All registrations are subject to SAMCA membership verification.
            Corporate packages require a signed ESG Accord commitment.<br />
            Contact{' '}
            <span style={{ color: 'var(--olive)' }}>registrations@samca.co.za</span>
            {' '}for group bookings and BBBEE verification letters.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
