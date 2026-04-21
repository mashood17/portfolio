import { motion } from 'framer-motion'

const education = [
  {
    icon: '🎓',
    degree: 'B.E. in Computer Science Engineering',
    institution: 'Srinivas Institute of Technology, Mangalore',
    duration: '2022 – 2026',
    bullets: [
      'Strong foundation in software engineering concepts.',
      'Hands-on experience with full-stack and AI-based projects.',
      'Actively involved in technical and academic activities.',
    ],
  },
  {
    icon: '📘',
    degree: 'Class XII – Science (PCMB)',
    institution: 'St. Philomena PU College, Puttur',
    duration: '2020 – 2022',
    bullets: [
      'Strong fundamentals in Mathematics and Science.',
      'Developed early interest in programming.',
    ],
  },
  {
    icon: '🏫',
    degree: 'Class X',
    institution: 'St. Philomena High School, Puttur',
    duration: '2019 – 2020',
    bullets: [
      'Built strong academic foundation.',
      'Participated in school-level activities.',
    ],
  },
]

// Premium cubic-bezier — slow deceleration, no bounce
const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.62, ease: EASE, delay },
})

export default function Education() {
  return (
    <section
      id="education"
      style={{
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

      {/* ── Subtle center glow ── */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(182,255,59,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '760px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        {/* ══════════════════
            Section heading
        ══════════════════ */}
        <motion.div
          {...fadeUp(0)}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
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
              EDUCATION
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Education &{' '}
            <span style={{ color: '#B6FF3B' }}>Academics</span>
          </h2>

          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #B6FF3B, transparent)',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* ══════════════════
            Cards — staggered
        ══════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {education.map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ item, index }) {
  return (
    <motion.div
      // ── 1. Sequential scroll reveal: each card waits for the previous ──
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{
        duration: 0.72,
        ease: EASE,
        delay: index * 0.12,   // 0s · 0.12s · 0.24s — gentle cascade
      }}

      // ── 2. Hover: lift + neon glow ──
      whileHover={{
        y: -5,
        boxShadow: '0 0 0 1px rgba(182,255,59,0.16), 0 12px 40px rgba(0,0,0,0.35), 0 0 28px rgba(182,255,59,0.06)',
        borderColor: 'rgba(182,255,59,0.16)',
        backgroundColor: 'rgba(255,255,255,0.035)',
      }}

      // ── 3. Smooth transition: same cubic-bezier, unhurried ──
      transition={{
        duration: 0.72,
        ease: EASE,
        delay: index * 0.12,
        // Hover overrides get their own fast-response spring
        hover: {
          y: { type: 'spring', stiffness: 220, damping: 28 },
          boxShadow: { duration: 0.28, ease: EASE },
          borderColor: { duration: 0.28, ease: EASE },
          backgroundColor: { duration: 0.28, ease: EASE },
        },
      }}

      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '32px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        willChange: 'transform, box-shadow',
        cursor: 'default',
      }}
    >
      {/* ── Header: icon + degree + duration ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          {/* Icon bubble */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(182,255,59,0.06)',
              border: '1px solid rgba(182,255,59,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              flexShrink: 0,
              marginTop: '1px',
            }}
          >
            {item.icon}
          </div>

          {/* Degree + institution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <h3
              style={{
                fontSize: '15.5px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              {item.degree}
            </h3>
            <span
              style={{
                fontSize: '12.5px',
                color: 'rgba(255,255,255,0.38)',
                letterSpacing: '0.01em',
              }}
            >
              {item.institution}
            </span>
          </div>
        </div>

        {/* Duration pill */}
        <span
          style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '4px 12px',
            borderRadius: '999px',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
            alignSelf: 'flex-start',
            marginTop: '2px',
          }}
        >
          {item.duration}
        </span>
      </div>

      {/* ── Hairline ── */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, rgba(182,255,59,0.1), rgba(255,255,255,0.04) 50%, transparent)',
        }}
      />

      {/* ── Bullets — stagger within card ── */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {item.bullets.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.48,
              ease: EASE,
              delay: index * 0.12 + i * 0.07,  // card delay + bullet offset
            }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.42)',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                marginTop: '7px',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: '#B6FF3B',
                opacity: 0.6,
              }}
            />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}