import { motion } from 'framer-motion'

const languages = [
  { name: 'English',   level: 'Professional',    strength: 90 },
  { name: 'Kannada',   level: 'Native',          strength: 100 },
  { name: 'Malayalam', level: 'Native',          strength: 100 },
  { name: 'Hindi',     level: 'Conversational',  strength: 65 },
  { name: 'Tamil',     level: 'Basic',           strength: 30 },
]

const EASE = [0.22, 1, 0.36, 1]

// Level → accent opacity so Native pops, Basic stays muted
const levelColor = {
  Native:           'rgba(182,255,59,0.9)',
  Professional:     'rgba(182,255,59,0.65)',
  Conversational:   'rgba(255,255,255,0.38)',
  Basic:            'rgba(255,255,255,0.22)',
}

export default function Languages() {
  return (
    <section
      id="languages"
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

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '680px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        {/* ══════════════════
            Heading
        ══════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
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
              LANGUAGES
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
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
            Languages &{' '}
            <span style={{ color: '#B6FF3B' }}>Communication</span>
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
            Language rows
        ══════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {languages.map((lang, i) => (
            <LanguageRow key={lang.name} lang={lang} index={i} total={languages.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LanguageRow({ lang, index, total }) {
  const isLast = index === total - 1

  return (
    <motion.div
      // ── Scroll: sequential fade-in ──
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}

      // ── Hover: tint + lift ──
      whileHover={{ backgroundColor: 'rgba(182,255,59,0.03)' }}

      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 18px',
        borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.05)',
        borderRadius: '10px',
        cursor: 'default',
        willChange: 'background-color',
        transition: 'background-color 0.22s ease',
        gap: '24px',
      }}
    >
      {/* ── Left: dot + language name ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '0 0 auto' }}>
        {/* Animated presence dot */}
        <motion.div
          whileHover={{ scale: 1.6, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: levelColor[lang.level] ?? 'rgba(255,255,255,0.2)',
            opacity: lang.level === 'Native' || lang.level === 'Professional' ? 0.85 : 0.4,
            flexShrink: 0,
          }}
        />

        {/* Language name */}
        <motion.span
          whileHover={{ color: '#ffffff' }}
          transition={{ duration: 0.18 }}
          style={{
            fontSize: '16px',
            fontWeight: 650,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '-0.01em',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {lang.name}
        </motion.span>
      </div>

      {/* ── Center: animated bar ── */}
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '1px',
          overflow: 'hidden',
          position: 'relative',
          minWidth: '40px',
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 + 0.15 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${lang.strength}%`,
            background: levelColor[lang.level] ?? 'rgba(255,255,255,0.2)',
            borderRadius: '1px',
            transformOrigin: 'left',
            opacity: 0.7,
          }}
        />
      </div>

      {/* ── Right: level label ── */}
      <motion.span
        whileHover={{ color: levelColor[lang.level] }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          flex: '0 0 auto',
          textAlign: 'right',
          minWidth: '110px',
        }}
      >
        {lang.level}
      </motion.span>
    </motion.div>
  )
}