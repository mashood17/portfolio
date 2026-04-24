import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useResponsive } from '../hooks/useResponsive'



const experiences = [
  {
    role: 'Android App Development using Gen AI',
    company: 'Mind Matrix',
    period: 'Feb 2026 – Present',
    type: 'Internship',
    status: 'current',
    bullets: [
      'Building Android applications using Java/Kotlin in Android Studio, implementing UI components and activity lifecycle management in a project-based environment.',
      'Leveraging GenAI tools (GitHub Copilot, Gemini) to accelerate development workflows and improve code quality across assigned modules.',
      'Collaborating via Git-based version control and structured peer debugging practices.',
    ],
    tech: ['Kotlin', 'Java', 'Gemini', 'GitHub Copilot', 'Android Studio', 'Git'],
  },
]

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

export default function Experience() {
  const { isMobile } = useResponsive()
  const { isDark } = useTheme()

  const mutedText   = 'var(--text-primary)'
  const bracketColor = 'var(--text-primary)'

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: EASE }}
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'var(--bg)',
        transition: 'background-color 0.35s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '80px 20px' : '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Grain ── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
          opacity: 0.035, pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ── Glow ── */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '35%', overflow: 'hidden',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,255,59,0.04) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
          opacity: 0.35, filter: 'blur(40px)',
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: isMobile ? '40px' : '100px',
          alignItems: 'start',
        }}
      >
        {/* ══════════════════════════
            LEFT — Heading
        ══════════════════════════ */}
        <div
          style={{
            position: isMobile ? 'relative' : 'sticky',
            top: isMobile ? 'auto' : '120px',
            display: 'flex', flexDirection: 'column', gap: '24px',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
        

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.08)}
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
              color: 'var(--fg)', letterSpacing: '-0.035em', lineHeight: 0.95,
              margin: 0, fontFamily: "'Inter', sans-serif",
              transition: 'color 0.35s ease',
            }}
          >
            Where I've
            <br />
            <span style={{ color: 'var(--accent)' }}>Worked</span>
          </motion.h2>

          {/* Accent line */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              width: '48px', height: '2px',
              background: 'linear-gradient(90deg, var(--accent), transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.16)}
            style={{
              fontSize: '13px', lineHeight: 1.8,
              color: mutedText, maxWidth: isMobile ? '100%' : '240px', margin: 0,
              transition: 'color 0.35s ease',
            }}
          >
            Real-world experience building production systems with modern stacks.
          </motion.p>

          {/* Count */}
          <motion.div
            {...fadeUp(0.2)}
            style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '8px' }}
          >
            <span style={{ fontSize: '36px', fontWeight: 900, color: 'var(--fg)', letterSpacing: '-0.04em', lineHeight: 1, transition: 'color 0.35s ease' }}>
              {experiences.length}
            </span>
            <span style={{ fontSize: '11px', color: mutedText, textTransform: 'uppercase', letterSpacing: '0.12em', transition: 'color 0.35s ease' }}>
              {experiences.length === 1 ? 'Position' : 'Positions'}
            </span>
          </motion.div>
        </div>

        {/* ══════════════════════════
            RIGHT — Cards
        ══════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '4px' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              isDark={isDark}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      <style>{`@keyframes ping { 75%,100% { transform:scale(2.2); opacity:0; } }`}</style>
    </motion.section>
  )
}

function ExperienceCard({ exp, index, isDark, isMobile }) {
  const cardBg      = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'
  const cardBorder  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'
  const periodColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)'
  const dotColor    = 'var(--accent)'
  const currentColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const bulletColor = 'var(--text-primary)'
  const chipColor   = 'var(--accent)'
  const chipBg      = 'var(--tech-bg)'
  const chipBorder  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'
  const boxShadow = isDark
    ? '0 10px 40px rgba(0,0,0,0.4)'
    : '0 10px 40px rgba(0,0,0,0.08)'

    
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{
        backgroundImage: `
          linear-gradient(
            120deg,
            transparent 40%,
            rgba(255,255,255,0.025),
            transparent 70%
          )
        `,
        x: 2,
        y: -10,
        scale: 1.02,
        rotate: 0.2,
        borderColor: 'var(--accent)',
        boxShadow: isDark
          ? `
            0 0 0 1px rgba(182,255,59,0.25),
            0 30px 80px rgba(0,0,0,0.6),
            0 0 60px rgba(182,255,59,0.08)
          `
          : `
            0 0 0 1px rgba(182,255,59,0.4),
            0 30px 80px rgba(0,0,0,0.12),
            0 0 60px rgba(182,255,59,0.12)
          `,
      }}
      style={{
        
        position: 'relative',
        overflow: 'hidden',
        background: cardBg,
        backdropFilter: isMobile ? 'blur(10px)' : 'blur(28px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${cardBorder}`,
        borderRadius: '20px',
        padding: isMobile ? '24px 18px' : '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        boxShadow,
        willChange: 'transform',
        cursor: 'default',
        transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.25s ease',
      }}
    >
      {/* ── Card header ── */}
     <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 80% 20%, var(--accent)15, transparent 60%)`,
        opacity: 0.35,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        borderRadius: '20px',
        zIndex: 0,
        transformOrigin: 'center',
      }}
    />
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Role */}
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--fg)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.3, transition: 'color 0.35s ease' }}>
            {exp.role}
          </h3>

          {/* Company + period */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.01em' }}>
              {exp.company}
            </span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: dotColor, flexShrink: 0, transition: 'background 0.35s ease' }} />
            <span style={{ fontSize: '12px', color: periodColor, letterSpacing: '0.03em', transition: 'color 0.35s ease' }}>
              {exp.period}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
          {exp.status === 'current' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ position: 'relative', width: '7px', height: '7px' }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent)', opacity: 0.5, animation: 'ping 1.6s cubic-bezier(0,0,0.2,1) infinite' }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontSize: '10px', color: currentColor, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.35s ease' }}>
                Current

              </span>
            </div>
          )}
          <span style={{ fontSize: '10px', color: 'rgba(182,255,59,0.8)', background: 'rgba(182,255,59,0.08)', border: '1px solid rgba(182,255,59,0.18)', padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            {exp.type}
          </span>
        </div>
      </div>

      {/* ── Hairline ── */}
      <div style={{ height: '1px', background: isDark ? 'linear-gradient(90deg, rgba(182,255,59,0.15), rgba(255,255,255,0.025) 50%, transparent)' : 'linear-gradient(90deg, rgba(182,255,59,0.3), rgba(0,0,0,0.04) 50%, transparent)', transition: 'background 0.35s ease' }} />

      {/* ── Bullets ── */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {exp.bullets.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13.5px', lineHeight: 1.75, color: bulletColor, transition: 'color 0.35s ease' }}
          >
            <span
              style={{
                flexShrink: 0,
                marginTop: '8px',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
            />
            {point}
          </motion.li>
        ))}
      </ul>

      {/* ── Tech chips ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
        {exp.tech.map((t) => (
          <span
            key={t}
            className="premium-hover"
            style={{
              '--hover-accent': 'var(--accent)',

              fontSize: '10.5px',
              color: 'var(--accent)',
              background: 'var(--tech-bg)',
              border: '1px solid var(--tech-border)',

              padding: '5px 12px',
              borderRadius: '999px',

              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}