import { Building2, Star, Trophy } from 'lucide-react'
import FadeIn from './FadeIn'

const THEMES = [
  {
    icon: Building2,
    day: 'Day 1 – 2',
    label: 'Summit',
    title: 'The Executive Summit',
    color: 'var(--olive)',
    desc: 'Two days of plenary addresses, technical breakout sessions, and closed-door executive roundtables. Topics span just transition, royalty frameworks, deep-level safety, and water stewardship.',
    points: [
      'Keynote — Prof. Bonang Mohale',
      'DMRE Policy Roundtable',
      'Just Transition Workgroup',
      'CEO Dialogue Series',
    ],
  },
  {
    icon: Star,
    day: 'Night 2',
    label: 'Gala',
    title: 'The Mining House Gala',
    color: 'var(--copper)',
    desc: 'A black-tie evening celebrating the sector\'s leaders, honouring ESG pioneers, and cementing the relationships that define South African mining\'s social compact.',
    points: [
      'ESG Excellence Awards',
      'SAMCA Hall of Fame',
      'Live entertainment',
      'Seated dinner — 320 guests',
    ],
  },
  {
    icon: Trophy,
    day: 'Day 3',
    label: 'Golf',
    title: 'Executive Golf Classic',
    color: 'var(--forest)',
    desc: 'The Sun City Gary Player Country Club hosts the annual scramble — a staple of the SAMCA calendar that pairs industry leaders in an atmosphere of collegial competition.',
    points: [
      'Gary Player Country Club',
      'Shotgun start — 07:30',
      'Sponsored hole challenges',
      'Prize-giving luncheon',
    ],
  },
]

export default function TripleTheme() {
  return (
    <section
      id="agenda"
      style={{ background: 'var(--bone)', padding: '120px 32px' }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="eyebrow">Three Days. One Vision.</div>
            <div className="divider-gold" />
            <h2
              className="serif"
              style={{ fontSize: '2.6rem', color: 'var(--earth)', lineHeight: 1.22, marginBottom: 20 }}
            >
              The Triple-Theme Roadmap
            </h2>
            <p style={{
              color: 'rgba(34,26,24,0.52)', maxWidth: 580, margin: '0 auto',
              lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300,
            }}>
              Each element of the SAMCA programme is engineered for executive engagement —
              from boardroom-level discourse to the 18th green.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}
          className="grid-cols-3"
        >
          {THEMES.map(({ icon: Icon, day, label, title, color, desc, points }, i) => (
            <FadeIn key={label} delay={i * 0.12}>
              <div className="theme-card">
                {/* Card header row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: 32,
                }}>
                  <div style={{
                    width: 52, height: 52,
                    border: `1px solid ${color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={color} strokeWidth={1.5} />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color, fontWeight: 700,
                    }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(34,26,24,0.38)', marginTop: 3 }}>{day}</div>
                  </div>
                </div>

                <h3
                  className="serif"
                  style={{ fontSize: '1.35rem', color: 'var(--earth)', marginBottom: 16, lineHeight: 1.3 }}
                >
                  {title}
                </h3>
                <p style={{
                  color: 'rgba(34,26,24,0.58)', fontSize: '0.87rem',
                  lineHeight: 1.82, marginBottom: 28, fontWeight: 300,
                }}>
                  {desc}
                </p>

                {/* Points */}
                <div style={{ borderTop: '1px solid rgba(34,26,24,0.08)', paddingTop: 24 }}>
                  {points.map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 4, height: 4, background: color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: 'rgba(34,26,24,0.62)' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
