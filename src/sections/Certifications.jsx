import { motion } from 'framer-motion'

const certifications = [
  {
    icon: '🎓',
    title: 'Data Structures using C Programming',
    issuer: 'Ethnotech Academic Solutions',
    date: 'Jun 2023',
  },
  {
    icon: '🎓',
    title: 'DBMS using SQL',
    issuer: 'Ethnotech Academic Solutions',
    date: 'Aug 2023',
  },
  {
    icon: '🎓',
    title: 'NodeJS',
    issuer: 'IBM',
    date: 'Dec 2024',
  },
  {
    icon: '🎓',
    title: 'Cloud Computing',
    issuer: 'Certiport',
    date: 'May 2025',
  },
  {
    icon: '🎓',
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Sept 2025',
  },
  {
    icon: '🎓',
    title: 'DevOps',
    issuer: 'IBM',
    date: 'Sept 2025',
  },
]

const EASE = [0.22, 1, 0.36, 1]

// Grid container — staggered children on scroll
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

// Individual card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export default function Certifications() {
  return (
    <section
      id="certifications"
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

      {/* ── Glow ── */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '560px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(182,255,59,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        {/* ══════════════════
            Heading
        ══════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.62, ease: EASE }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* Code label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}
            >
              &lt;
            </span>
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
              CERTIFICATIONS
            </span>
            <span
              style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}
            >
              /&gt;
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Certifications &{' '}
            <span style={{ color: '#B6FF3B' }}>Professional Development</span>
          </h2>

          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #B6FF3B, transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Count */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '4px' }}>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              {certifications.length}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              Credentials earned
            </span>
          </div>
        </motion.div>

        {/* ══════════════════
            Responsive grid
        ══════════════════ */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CertCard({ cert }) {
  return (
    <motion.div
      variants={cardVariants}

      // ── Hover: scale + lift + neon glow ──
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow:
          '0 0 0 1px rgba(182,255,59,0.14), 0 16px 40px rgba(0,0,0,0.4), 0 0 24px rgba(182,255,59,0.05)',
        borderColor: 'rgba(182,255,59,0.15)',
        backgroundColor: 'rgba(255,255,255,0.035)',
      }}
      transition={{
        // Hover responds quickly, separate from scroll-in
        scale:           { type: 'spring', stiffness: 260, damping: 26 },
        y:               { type: 'spring', stiffness: 260, damping: 26 },
        boxShadow:       { duration: 0.24, ease: EASE },
        borderColor:     { duration: 0.24, ease: EASE },
        backgroundColor: { duration: 0.24, ease: EASE },
      }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        willChange: 'transform, box-shadow',
        cursor: 'default',
      }}
    >
      {/* ── Icon + title ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        {/* Icon bubble */}
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(182,255,59,0.06)',
            border: '1px solid rgba(182,255,59,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            flexShrink: 0,
          }}
        >
          {cert.icon}
        </div>

        <h3
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0,
            letterSpacing: '-0.015em',
            lineHeight: 1.35,
            paddingTop: '2px',
          }}
        >
          {cert.title}
        </h3>
      </div>

      {/* ── Hairline ── */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, rgba(182,255,59,0.08), rgba(255,255,255,0.04) 60%, transparent)',
        }}
      />

      {/* ── Issuer + date ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.01em',
          }}
        >
          {cert.issuer}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Tiny calendar dot */}
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#B6FF3B',
              opacity: 0.5,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Issued: {cert.date}
          </span>
        </div>
      </div>
    </motion.div>
  )
}