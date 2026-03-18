import { useState, useEffect } from 'react'
import { Mountain } from 'lucide-react'

const NAV_LINKS = ['Agenda', 'Speakers', 'ESG Hub', 'Registration']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(34,26,24,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(159,145,98,0.18)' : 'none',
        transition: 'all 0.4s ease',
        height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
      }}
      className="nav-pad"
    >
      {/* Logo */}
<img 
  src="/favicon.svg" 
  alt="SAMCA Logo" 
  style={{ width: 38, height: 38, objectFit: 'contain' }} 
/>
      
        <div>
          <div className="serif" style={{ color: 'var(--bone)', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1.1 }}>
            SAMCA
          </div>
          <div style={{ color: 'var(--olive)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Annual Summit 2026
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div className="hide-mobile" style={{ display: 'flex', gap: 36 }}>
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className="nav-link"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="btn-primary hide-mobile" style={{ padding: '10px 24px', fontSize: '0.72rem' }}>
        Request Invitation
      </button>

      {/* Mobile hamburger */}
      <button
        className="show-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 8, color: 'var(--bone)',
        }}
        aria-label="Toggle menu"
      >
        <div style={{ width: 22, height: 2, background: 'var(--bone)', marginBottom: 5, transition: '0.2s' }} />
        <div style={{ width: 22, height: 2, background: 'var(--bone)', marginBottom: 5 }} />
        <div style={{ width: 14, height: 2, background: 'var(--bone)' }} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'rgba(34,26,24,0.98)',
          borderBottom: '1px solid rgba(159,145,98,0.2)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '0.9rem' }}
            >
              {link}
            </a>
          ))}
          <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Request Invitation
          </button>
        </div>
      )}
    </nav>
  )
}
