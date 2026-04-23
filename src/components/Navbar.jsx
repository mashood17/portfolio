import { motion } from 'framer-motion'
import photo from '../assets/mashood2.jpeg'
import { useResponsive } from '../hooks/useResponsive'
import { useTheme } from '../hooks/useTheme'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useResponsive()
  const { isDark, toggleTheme } = useTheme()
  return (
        <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-3">      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '6px' : '2px',
          padding: isMobile ? '10px 10px' : '6px 8px',
          maxWidth: isMobile ? '95%' : '700px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          width: 'fit-content',
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
              width: isMobile ? '38px' : '50px',
              height: isMobile ? '38px' : '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '.5px solid rgba(255,255,255,0.15)',
              flexShrink: 0,
              background: 'linear-gradient(135deg, #B6FF3B22, #B6FF3B55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: 'var(--accent)',
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
          <div style={{
            display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '5px' }}>
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
              {!isMobile && (
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
            )}
            </span>
          </div>
        </div>

        {/* ── CENTER: Nav Links ── */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
            alignItems: 'center',
            gap: isMobile ? '0px' : '2px',
            overflowX: isMobile ? 'auto' : 'visible',
            maxWidth: isMobile ? '160px' : 'none',
            }}>
          {navLinks.map(({ label, href }) => (
            <NavLink key={label} href={href} label={label} isMobile={isMobile} />
          ))}
        </div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            paddingRight: '6px',
          }}>
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              style={{
                width: isMobile ? '40px' : '36px',
                height: isMobile ? '40px' : '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                background: isDark
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(0,0,0,0.05)',

                border: '1px solid rgba(255,255,255,0.12)',
                cursor: 'pointer',
                fontSize: '16px',

                transition: 'all 0.25s ease',
              }}
            >
              {isDark ? '🌙' : '☀️'}
            </motion.button>
             
          </div>
          
              
        {/* Resume Button (Secondary Premium CTA) */}
        <motion.a
          href="/Mahammad_Mashood_FullStackDeveloper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          style={{
            minWidth: isMobile ? '90px' : 'auto',
            flexShrink: 0,
            minHeight: isMobile ? '42px' : '36px',
            padding: isMobile ? '8px 14px' : '7px 16px',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.04)',
            color: '#C9A84C',
            border: '1px solid rgba(255,255,255,0.12)',
            fontWeight: 600,
            fontSize: isMobile ? '12px' : '12.5px',
            whiteSpace: 'nowrap',
            borderRadius: '9999px',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            lineHeight: 1,
            transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.border = '1px solid rgba(182,255,59,0.4)'
            e.currentTarget.style.boxShadow = '0 0 12px rgba(182,255,59,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Resume ↓
        </motion.a>

        {/* Contact Button (Primary CTA) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              minHeight: isMobile ? '42px' : '36px',
              padding: isMobile ? '8px 14px' : '7px 16px',
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.04)',
              color: '#C9A84C',
              border: '1px solid rgba(255,255,255,0.12)',
              fontWeight: 600,
              fontSize: isMobile ? '11.5px' : '12.5px',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              lineHeight: 1,
              transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            Contact
          </motion.a>
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '18px',
                color: 'white',
                cursor: 'pointer',
                flexShrink: 0, // ✅ important
              }}
            >
              ☰
            </motion.button>
          )}
        </motion.nav>
          {isMobile && menuOpen && (
  <>
    {/* BACKDROP */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setMenuOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(10px)',
        zIndex: 998,
      }}
    />

    {/* FULLSCREEN MENU */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        gap: '28px',
      }}
    >

      {/* CLOSE */}
      <button
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.06)',
          color: 'white',
          fontSize: '18px',
        }}
      >
        ✕
      </button>

      {/* BRAND (PREMIUM TOUCH) */}
      <div style={{
        fontSize: '12px',
        letterSpacing: '0.25em',
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '10px',
      }}>
        NAVIGATION
      </div>

      {/* LINKS */}
      {navLinks.map(({ label, href }, i) => (
        <motion.a
          key={label}
          href={href}
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i }}
          style={{
            fontSize: '28px',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '-0.02em',

            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {label}
        </motion.a>
      ))}

      {/* EXTRA CTA (VERY PREMIUM) */}
      <motion.a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: '20px',
          padding: '10px 18px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
          color: '#C9A84C',
          fontWeight: 700,
          border: 'none',
          boxShadow: '0 6px 20px rgba(182,255,59,0.35)',
          textDecoration: 'none',
          fontSize: '13px',
          letterSpacing: '0.08em',
        }}
      >
        CONTACT
      </motion.a>

    </motion.div>
  </>
)}                   
          {/* Ping keyframe injected inline */}
          <style>{`
            @keyframes ping {
              75%, 100% { transform: scale(2); opacity: 0; }
            }
          `}</style>
      </div>
  )
}

function NavLink({ href, label, isMobile }) {
  return (
    <motion.a
      href={href}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
      whileTap={{ scale: 0.97 }}
      style={{
        fontSize: isMobile ? '12.5px' : '13px',
        padding: isMobile ? '8px 12px' : '7px 13px',
        minHeight: isMobile ? '40px' : '34px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 450,
        borderRadius: '9999px',
        textDecoration: 'none',
        borderBottom: 'none',      // ✅ kills underline
        outline: 'none',
        boxShadow: 'none',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </motion.a>
  )
}