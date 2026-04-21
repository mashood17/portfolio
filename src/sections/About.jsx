import { motion } from 'framer-motion'
import { HERO_IMAGE_LAYOUT_ID } from '../data/sharedKeys'
import photo from '../assets/mashood.jpeg';


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  return (
    <section
      id="about"
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

      {/* ── Accent glow — left side ── */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,255,59,0.05) 0%, transparent 70%)',
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
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* ══════════════════════════════
            LEFT — Text content
        ══════════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Code-style title */}
          <motion.div {...fadeUp(0)}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '16px',
              }}
            >
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
                ABOUT ME
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Who Am I?
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(182,255,59,0.4) 0%, transparent 100%)',
              width: '80px',
            }}
          />

          {/* Name tag */}
          <motion.div {...fadeUp(0.15)}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '5px 12px',
                borderRadius: '999px',
              }}
            >
              Mahammad Mashood
            </span>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontSize: '15px',
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '460px',
              margin: 0,
              fontWeight: 400,
            }}
          >
            I'm a{' '}
            <span style={{ color: '#ffffff', fontWeight: 600 }}>full-stack developer</span>{' '}
            specializing in building scalable, real-world applications with strong{' '}
            <span style={{ color: '#B6FF3B', fontWeight: 500 }}>backend architecture</span> and
            refined{' '}
            <span style={{ color: '#B6FF3B', fontWeight: 500 }}>frontend experiences</span>.
          </motion.p>

          {/* Location pill */}
          <motion.div
            {...fadeUp(0.25)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ fontSize: '14px' }}>📍</span>
            <span
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.04em',
              }}
            >
              Based in Karnataka, India
            </span>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            {...fadeUp(0.3)}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}
          >
            {[
              { value: '2+', label: 'Years Building' },
              { value: '15+', label: 'Projects Shipped' },
              { value: 'Full', label: 'Stack Dev' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  minWidth: '90px',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#B6FF3B',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════
            RIGHT — Shared image
        ══════════════════════════════ */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Decorative ring behind image */}
          <div
            style={{
              position: 'absolute',
              width: '340px',
              height: '440px',
              borderRadius: '130px',
              border: '1px solid rgba(182,255,59,0.08)',
              transform: 'rotate(-4deg)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '420px',
              borderRadius: '120px',
              border: '1px solid rgba(255,255,255,0.04)',
              transform: 'rotate(3deg)',
              pointerEvents: 'none',
            }}
          />

          {/* ── THE SHARED IMAGE — layoutId matches Hero exactly ── */}
          <motion.div
            layoutId={HERO_IMAGE_LAYOUT_ID}
            style={{
                width: 'clamp(240px, 24vw, 320px)',
                aspectRatio: '3/4',
                borderRadius: '120px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(160deg, #1a1a1a 0%, #111 100%)',
                position: 'relative',
                boxShadow: '0 32px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(182,255,59,0.08)',
            }}
            >
            <img
                src={photo}
                alt="Mahammad Mashood"
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                }}
            />
            </motion.div>

          {/* Accent dot — decorative ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '8%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#B6FF3B',
              boxShadow: '0 0 12px rgba(182,255,59,0.6)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '6%',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#B6FF3B',
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </section>
  )
}