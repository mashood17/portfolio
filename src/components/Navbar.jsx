import { motion } from 'framer-motion'
import photo from '../assets/mashood2.jpeg'


const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#blogs' },
]

export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          padding: '6px 8px 6px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pointerEvents: 'auto',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          width: 'fit-content',
          maxWidth: '700px',
        }}
      >
        {/* ── LEFT: Avatar + Status ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '6px',
            paddingRight: '14px',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            marginRight: '6px',
            flexShrink: 0,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '.5px solid rgba(255,255,255,0.15)',
              flexShrink: 0,
              background: 'linear-gradient(135deg, #B6FF3B22, #B6FF3B55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#B6FF3B',
              fontWeight: 700,
            }}
          >
           <motion.img
                src={photo}
                alt="avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                />

          </div>

          {/* Status text + dot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {/* Pulsing green dot */}
            <div style={{ position: 'relative', width: '7px', height: '7px', flexShrink: 0 }}>
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: '#22c55e',
                }}
              />
            </div>
            <span
              style={{
                fontSize: '11.5px',
                color: 'rgba(255,255,255,0.65)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
                fontWeight: 400,
              }}
            >
              Available for work
            </span>
          </div>
        </div>

        {/* ── CENTER: Nav Links ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {navLinks.map(({ label, href }) => (
            <NavLink key={label} href={href} label={label} />
          ))}
        </div>

        {/* ── RIGHT: Contact Button ── */}
        <div style={{ paddingLeft: '8px', flexShrink: 0 }}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#0e0e0e',
              fontSize: '12.5px',
              fontWeight: 600,
              padding: '7px 16px',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              lineHeight: 1,
            }}
          >
            Contact
          </motion.a>
        </div>
      </motion.nav>

      {/* Ping keyframe injected inline */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function NavLink({ href, label }) {
  return (
    <motion.a
      href={href}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
      transition={{ duration: 0.15 }}
      style={{
        display: 'inline-block',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '13px',
        fontWeight: 450,
        padding: '7px 13px',
        borderRadius: '9999px',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: 'color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
    >
      {label}
    </motion.a>
  )
}