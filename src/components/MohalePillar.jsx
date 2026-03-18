import { ArrowRight, Handshake, Heart, Shield, TrendingUp } from 'lucide-react'
import FadeIn from './FadeIn'

const PILLARS = [
  {
    icon: Handshake,
    title: 'Stakeholder Capitalism',
    body: 'Value creation accountable to workers, communities, and the environment — not shareholders alone.',
  },
  {
    icon: Shield,
    title: 'Ethical Governance',
    body: 'Transparency, anti-corruption, and fiduciary duty as the non-negotiable bedrock of mining legitimacy.',
  },
  {
    icon: TrendingUp,
    title: 'Inclusive Growth',
    body: 'Procurement localisation, skills transfer, and enterprise development as strategic business functions.',
  },
  {
    icon: Heart,
    title: 'Social Compact',
    body: 'Formalising the reciprocal obligations between mining houses, host communities, and the state.',
  },
]

export default function MohalePillar() {
  return (
    <section
      style={{ background: 'var(--earth)', padding: '120px 32px' }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="grid-cols-2"
        >
          {/* Left: copy */}
          <FadeIn>
            <div className="eyebrow">The Mohale Pillar</div>
            <div className="divider-gold-left" />
            <h2
              className="serif"
              style={{ color: 'var(--bone)', fontSize: '2.6rem', lineHeight: 1.22, marginBottom: 28 }}
            >
              Ethical Leadership as<br />
              <em style={{ color: 'var(--copper)' }}>Economic Imperative</em>
            </h2>
            <p style={{
              color: 'rgba(243,242,238,0.62)', lineHeight: 1.9, fontSize: '0.95rem',
              marginBottom: 24, fontWeight: 300,
            }}>
              Prof. Bonang Mohale's philosophy of "Lift as You Rise" is not a platitude —
              it is a structural thesis. In a sector that touches the lives of millions of
              South Africans, the choice between extractive capitalism and stakeholder
              capitalism is the defining governance question of our era.
            </p>
            <p style={{
              color: 'rgba(243,242,238,0.62)', lineHeight: 1.9, fontSize: '0.95rem',
              marginBottom: 44, fontWeight: 300,
            }}>
              SAMCA 2026 is built on this foundation: that sustainable returns, community
              resilience, and environmental stewardship are not competing priorities, but
              mutually reinforcing outcomes of principled corporate leadership.
            </p>
            <button className="btn-primary">
              Read the Charter <ArrowRight size={15} />
            </button>
          </FadeIn>

          {/* Right: pillar cards */}
          <FadeIn delay={0.2}>
            <div>
              {PILLARS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="pillar-card">
                  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 42, height: 42, minWidth: 42,
                      border: '1px solid rgba(159,145,98,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} color="var(--olive)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="serif" style={{
                        color: 'var(--bone)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8,
                      }}>
                        {title}
                      </div>
                      <div style={{
                        color: 'rgba(243,242,238,0.52)', fontSize: '0.84rem', lineHeight: 1.75, fontWeight: 300,
                      }}>
                        {body}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
