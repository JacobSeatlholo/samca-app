import { Linkedin, Mail, Mountain, Phone } from 'lucide-react'

const FOOTER_COLS = [
  { head: 'Summit', links: ['Programme', 'Speakers', 'Roundtables', 'Workshops'] },
  { head: 'Organisation', links: ['About SAMCA', 'ESG Charter', 'Membership', 'Media'] },
  { head: 'Contact', links: ['General Enquiries', 'Sponsorship', 'Media Accreditation', 'Venue & Travel'] },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--earth-dark)',
      padding: '72px 48px 36px',
      borderTop: '1px solid rgba(159,145,98,0.1)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}
          className="grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 34, height: 34, background: 'var(--olive)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Mountain size={16} color="var(--bone)" strokeWidth={1.5} />
              </div>
              <div>
                <div
                  className="serif"
                  style={{ color: 'var(--bone)', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.07em' }}
                >
                  SAMCA
                </div>
                <div style={{ color: 'var(--olive)', fontSize: '0.56rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Annual Summit 2026
                </div>
              </div>
            </div>
            <p style={{
              color: 'rgba(243,242,238,0.3)', fontSize: '0.83rem',
              lineHeight: 1.8, fontWeight: 300, maxWidth: 280, marginBottom: 24,
            }}>
              South African Mining Committees Association. Advancing ethical, sustainable,
              and inclusive mining leadership since 1994.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Linkedin, Mail, Phone].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 36, height: 36, cursor: 'pointer',
                    border: '1px solid rgba(159,145,98,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(159,145,98,0.55)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(159,145,98,0.22)'}
                >
                  <Icon size={15} color="rgba(243,242,238,0.42)" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map(({ head, links }) => (
            <div key={head}>
              <div style={{
                color: 'var(--olive)', fontSize: '0.68rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                fontWeight: 700, marginBottom: 20,
              }}>
                {head}
              </div>
              {links.map(link => (
                <div
                  key={link}
                  style={{
                    color: 'rgba(243,242,238,0.32)', fontSize: '0.83rem',
                    marginBottom: 10, cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'rgba(243,242,238,0.7)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(243,242,238,0.32)'}
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(243,242,238,0.06)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ color: 'rgba(243,242,238,0.22)', fontSize: '0.73rem' }}>
            © 2026 SAMCA. All rights reserved. Registered under the Companies Act No. 71 of 2008.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Engagement', 'POPIA Notice'].map(l => (
              <span
                key={l}
                style={{ color: 'rgba(243,242,238,0.22)', fontSize: '0.72rem', cursor: 'pointer' }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
