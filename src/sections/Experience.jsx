import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Android App Development using Gen AI',
    company: 'Mind Matrix',
    period: 'Feb 2026 – Present',
    type: 'Internship',
    status: 'current',
    bullets: [
      'Building AI-powered Android application integrating Gemini API for intelligent user interactions and context-aware responses.',
      'Architecting scalable app structure using MVVM pattern with clean separation of data, domain, and presentation layers.',
      'Implementing real-time generative AI features including smart summarization, content generation, and conversational UI flows.',
      'Optimizing API call efficiency with response caching and streaming to reduce latency by over 40%.',
      'Collaborating with cross-functional team to ship bi-weekly feature releases on production-ready Android builds.',
    ],
    tech: ['Kotlin', 'Gemini API', 'MVVM', 'Android SDK', 'Jetpack Compose'],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#0e0e0e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Grain ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.035,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Glow ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,255,59,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '100px',
          alignItems: 'start',
        }}
      >
        {/* ══════════════════════════
            LEFT — Heading
        ══════════════════════════ */}
        <div
          style={{
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Code label */}
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>&lt;</span>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#B6FF3B',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                }}
              >
                EXPERIENCE
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.08)}
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Where I've
            <br />
            <span style={{ color: '#B6FF3B' }}>Worked</span>
          </motion.h2>

          {/* Accent line */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #B6FF3B, transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.16)}
            style={{
              fontSize: '13px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.3)',
              maxWidth: '240px',
              margin: 0,
            }}
          >
            Real-world experience building production systems with modern stacks.
          </motion.p>

          {/* Experience count */}
          <motion.div
            {...fadeUp(0.2)}
            style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '8px' }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              {experiences.length}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              {experiences.length === 1 ? 'Position' : 'Positions'}
            </span>
          </motion.div>
        </div>

        {/* ══════════════════════════
            RIGHT — Cards
        ══════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '4px' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 0 1px rgba(182,255,59,0.2), 0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(182,255,59,0.07)',
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        willChange: 'transform',
        cursor: 'default',
      }}
    >
      {/* ── Card header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Role */}
          <h3
            style={{
              fontSize: '17px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            {exp.role}
          </h3>

          {/* Company + period row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '13px',
                color: '#B6FF3B',
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              {exp.company}
            </span>
            <span
              style={{
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.03em',
              }}
            >
              {exp.period}
            </span>
          </div>
        </div>

        {/* Status + type badges */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
          {exp.status === 'current' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {/* Pulsing dot */}
              <div style={{ position: 'relative', width: '7px', height: '7px' }}>
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: '#B6FF3B',
                    opacity: 0.5,
                    animation: 'ping 1.6s cubic-bezier(0,0,0.2,1) infinite',
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
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Current
              </span>
            </div>
          )}

          <span
            style={{
              fontSize: '10px',
              color: 'rgba(182,255,59,0.7)',
              background: 'rgba(182,255,59,0.08)',
              border: '1px solid rgba(182,255,59,0.15)',
              padding: '3px 10px',
              borderRadius: '999px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {exp.type}
          </span>
        </div>
      </div>

      {/* ── Hairline ── */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(182,255,59,0.15) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
        }}
      />

      {/* ── Bullet points ── */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {exp.bullets.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontSize: '13.5px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {/* Bullet marker */}
            <span
              style={{
                flexShrink: 0,
                marginTop: '8px',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#B6FF3B',
                opacity: 0.7,
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
            style={{
              fontSize: '10.5px',
              color: 'rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '4px 11px',
              borderRadius: '7px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}