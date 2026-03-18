import { BarChart3, Leaf, Users } from 'lucide-react'
import FadeIn from './FadeIn'

const PILLARS = [
  {
    icon: Leaf,
    title: 'Decarbonisation',
    body: 'Pathways to Scope 1, 2 & 3 emission reduction across the value chain — from pit to port. Working sessions address hydrogen, battery electric vehicles, and renewable-powered processing.',
    stat: 'Net Zero 2040',
    sub: 'SAMCA Member Target',
  },
  {
    icon: Users,
    title: 'Community Resilience',
    body: 'Structured frameworks for Social and Labour Plan accountability, Local Economic Development reporting, and community benefit-sharing agreements that move beyond compliance.',
    stat: '82%',
    sub: 'SLP Compliance Target',
  },
  {
    icon: BarChart3,
    title: 'Transparency & Disclosure',
    body: 'Adoption of GRI, TCFD, and TNFD reporting frameworks as industry standard. SAMCA\'s governance working group will release binding disclosure guidelines at the 2026 summit.',
    stat: 'TCFD Aligned',
    sub: 'All Member Reporting',
  },
]

export default function ESGHub() {
  return (
    <section
      id="esg-hub"
      style={{ background: 'var(--forest)', padding: '120px 32px' }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{
              color: 'var(--copper)', fontSize: '0.7rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20,
            }}>
              ESG & Governance Hub
            </div>
            <div style={{ width: 56, height: 2, background: 'var(--copper)', margin: '0 auto 32px' }} />
            <h2
              className="serif"
              style={{ fontSize: '2.6rem', color: 'var(--bone)', lineHeight: 1.22, marginBottom: 20 }}
            >
              Our Commitments to<br />
              <em style={{ color: 'var(--copper)' }}>People and Planet</em>
            </h2>
            <p style={{
              color: 'rgba(243,242,238,0.58)', maxWidth: 600, margin: '0 auto',
              lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300,
            }}>
              SAMCA 2026 is a carbon-neutral convening. Every sponsorship tier carries a
              mandatory ESG disclosure obligation aligned to the ICMM Performance Expectations.
            </p>
          </div>
        </FadeIn>

        {/* Pillar cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginBottom: 2 }}
          className="grid-cols-3"
        >
          {PILLARS.map(({ icon: Icon, title, body, stat, sub }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className="esg-card">
                <Icon size={28} color="var(--copper)" strokeWidth={1.5} style={{ marginBottom: 24 }} />
                <h3
                  className="serif"
                  style={{ color: 'var(--bone)', fontSize: '1.25rem', marginBottom: 16, fontWeight: 700 }}
                >
                  {title}
                </h3>
                <p style={{
                  color: 'rgba(243,242,238,0.58)', fontSize: '0.87rem',
                  lineHeight: 1.82, marginBottom: 32, fontWeight: 300,
                }}>
                  {body}
                </p>
                <div className="esg-stat">
                  <div
                    className="serif"
                    style={{ color: 'var(--copper)', fontSize: '1.6rem', fontWeight: 700 }}
                  >
                    {stat}
                  </div>
                  <div style={{
                    color: 'rgba(243,242,238,0.42)', fontSize: '0.68rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4,
                  }}>
                    {sub}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ESG Accord callout */}
        <FadeIn delay={0.2}>
          <div style={{
            border: '1px solid rgba(243,242,238,0.1)',
            background: 'rgba(243,242,238,0.04)',
            padding: '44px 52px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
            marginTop: 2,
          }}
            className="grid-cols-2"
          >
            <div>
              <div style={{
                color: 'var(--copper)', fontSize: '0.68rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 12,
              }}>
                Signed Commitments
              </div>
              <h3
                className="serif"
                style={{ color: 'var(--bone)', fontSize: '1.4rem', marginBottom: 14, fontWeight: 700 }}
              >
                The SAMCA 2026 ESG Accord
              </h3>
              <p style={{
                color: 'rgba(243,242,238,0.52)', fontSize: '0.87rem',
                lineHeight: 1.82, fontWeight: 300, maxWidth: 580,
              }}>
                Every delegate organisation commits to publishing a verified ESG progress report
                within 12 months of the summit. The Accord is witnessed by the DMRE and audited
                by an independent panel of three civil society representatives.
              </p>
            </div>
            <div style={{ textAlign: 'center', minWidth: 160 }}>
              <div
                className="serif"
                style={{ color: 'var(--copper)', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1 }}
              >
                47
              </div>
              <div style={{
                color: 'rgba(243,242,238,0.42)', fontSize: '0.68rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 8,
              }}>
                Signatories to Date
              </div>
              <button style={{
                marginTop: 20, background: 'transparent',
                border: '1px solid rgba(212,164,124,0.45)',
                color: 'var(--copper)', padding: '10px 22px',
                fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                cursor: 'pointer', fontWeight: 700, fontFamily: 'Lato, sans-serif',
                transition: 'border-color 0.2s',
              }}>
                Sign the Accord
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
