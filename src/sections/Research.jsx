import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

const publications = [
  {
    type: 'Research Paper',
    badge: 'Journal Publication',
    title: '"Job Portal Website"',
    journal: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
    meta: [
      { label: 'Volume', value: '12, Issue 7' },
      { label: 'Published', value: 'July 2025' },
      { label: 'ISSN', value: '2349-5162' },
      { label: 'Impact Factor', value: '7.95' },
    ],
    description:
      'This research paper presents the design and implementation of a web-based job portal system with secure authentication, role-based access, job posting, application management, and document handling. The study focuses on improving usability, efficiency, and scalability in online recruitment platforms.',
    cta: 'Dive into the full paper',
    link: 'https://www.jetir.org/view?paper=JETIRGX06045',
  },
]

export default function Research() {
  return (
    <motion.div style={{ z: 40 }}>
      <section
        id="research"
        style={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: 'var(--bg)',
          transition: 'background-color 0.35s ease',
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

        {/* ── Background glow ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(182,255,59,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '56px',
          }}
        >
          {/* ── Section heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            whileTap={{ scale: 0.98 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'monospace' }}>&lt;</span>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                }}
              >
                RESEARCH
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <h2
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 900,
                  color: 'var(--fg)',
                  letterSpacing: '-0.035em',
                  lineHeight: 0.95,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Research &{' '}
                <span style={{ color: 'var(--accent)' }}>Publications</span>
              </h2>

              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.06em',
                  paddingBottom: '6px',
                }}
              >
                {publications.length} Publication{publications.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--accent), transparent)',
                borderRadius: '2px',
              }}
            />
          </motion.div>

          {/* ── Publication cards ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(120deg, rgba(255,255,255,0.06), transparent 40%)',
              opacity: 0.4,
              pointerEvents: 'none',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {publications.map((pub, i) => (
              <PublicationCard key={i} pub={pub} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function PublicationCard({ pub, index }) {
  const cardRef = useRef(null)

  // ── Magnetic tilt on mouse move ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [1.5, -1.5])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-1.5, 1.5])

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.985 }}
      whileHover={{
        y: -6,                      // ✅ ADD
        scale: 1.01,                // ✅ ADD
        boxShadow: '0 0 0 1px rgba(182,255,59,0.18), 0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(182,255,59,0.06)',
        borderColor: 'rgba(182,255,59,0.18)',
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        background: 'rgba(255,255,255,0.025)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        padding: '48px 52px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
        willChange: 'transform',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Inner top-right corner accent glow ── */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,255,59,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Row 1: type badges ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          style={{
            fontSize: '10.5px',
            color: 'var(--text-primary)',
            background: 'var(--bg)',
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '4px 12px',
            borderRadius: '999px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {pub.type}
        </span>

        <span style={{ color: 'var(--text-primary)', fontSize: '12px' }}>·</span>

        <span
          style={{
            fontSize: '10.5px',
            color: 'var(--accent)',
            background: 'rgba(182,255,59,0.08)',
            border: '1px solid rgba(182,255,59,0.18)',
            padding: '4px 12px',
            borderRadius: '999px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {pub.badge}
        </span>
      </div>

      {/* ── Row 2: Title + Journal ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h3
          style={{
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 800,
            color: 'var(--fg)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'italic',
          }}
        >
          {pub.title}
        </h3>

        <p
          style={{
            fontSize: '13.5px',
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.5,
            letterSpacing: '0.01em',
          }}
        >
          {pub.journal}
        </p>
      </div>

      {/* ── Row 3: Meta chips ── */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {pub.meta.map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '10px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-bg)',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 500,
              }}
            >
              {label}
            </span>
            <span
              style={{
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
              }}
            />
            <span
              style={{
                fontSize: '11.5px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* ── Hairline ── */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(182,255,59,0.12), rgba(255,255,255,0.04) 50%, transparent)',
        }}
      />

      {/* ── Row 4: Description ── */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.85,
          color: 'var(--text-primary)',
          margin: 0,
          maxWidth: '760px',
        }}
      >
        {pub.description}
      </p>

      {/* ── Row 5: CTA ── */}
      <div>
        <CTAButton href={pub.link} label={pub.cta} />
      </div>
    </motion.div>
  )
}

function CTAButton({ href, label }) {
  const arrowX = useMotionValue(0)
  const arrowY = useMotionValue(0)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => { arrowX.set(4); arrowY.set(-4) }}
      onHoverEnd={() => { arrowX.set(0); arrowY.set(0) }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: '0 0 0 1px rgba(182,255,59,0.22), 0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(182,255,59,0.08)',
        borderColor: 'rgba(182,255,59,0.22)',
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        cursor: 'pointer',
        padding: '14px 28px',
        borderRadius: '14px',
        background: 'rgba(182,255,59,0.08)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
        border: '1px solid rgba(182,255,59,0.18)',
        transition: 'background 0.2s, border-color 0.2s',
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: '0 0 0 1px rgba(182,255,59,0.22), 0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(182,255,59,0.08)',
        borderColor: 'rgba(182,255,59,0.22)',
      }}
    >
      {/* Arrow circle */}
      <motion.div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          x: arrowX,
          y: arrowY,
          transition: { type: 'spring', stiffness: 200, damping: 18 },
        }}
      >
        <span
          style={{
            fontSize: '14px',
            color: 'var(--text-primary)',
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          ↗
        </span>
      </motion.div>

      <span
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.03em',
        }}
      >
        {label}
      </span>
    </motion.a>
  )
}