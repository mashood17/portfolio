import { HERO_IMAGE_LAYOUT_ID } from '../data/sharedKeys'
import photo from '../assets/mashood.jpeg';
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { useResponsive } from '../hooks/useResponsive'



const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
    const { isMobile } = useResponsive()
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0.5, 1], [1, 0])
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  return (
    <section
      id="about"
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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '28px' : '80px',
          alignItems: 'center',
        }}
      >
        {/* ══════════════════════════════
            LEFT — Text content
        ══════════════════════════════ */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: isMobile ? 'center' : 'flex-start',
        }}>

          <motion.div {...fadeUp(0)}>

            <h2
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 900,
                color: 'var(--fg)',
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
                fontSize: '18px', color: 'var(--text-primary)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: 'rgba(115, 115, 115, 0.1)',
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
            onViewportEnter={(e) => {
                e.target.classList.add('motion-visible')
            }}
            style={{
              fontSize: '15px',
              lineHeight: 1.85,
              color: 'var(--text-primary)',
              maxWidth: isMobile ? '100%' : '460px',
              margin: 0,
              fontWeight: 400,
              textAlign: isMobile ? 'center' : 'justify',
            }}
          >
           I'm a{' '}
          <span className="fixed-highlight">full-stack developer</span>{' '}
          specializing in React and Flask, with a track record of independently building and shipping real-time web applications from scratch.

          <br /><br />

          I'm comfortable owning the full stack — JWT-secured APIs, WebSockets, PostgreSQL, and UI systems down to the component level.

          <br /><br />

          Built and deployed 3 production projects, published a research paper, and consistently ship ideas to production.
            <br /><br />

            <span style={{ opacity: 0.7 }}>
            Based in Mangaluru, Karnataka.
            </span>

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
                color: 'var(--text-primary)',
                letterSpacing: '0.04em',
              }}
            >
              Based in Karnataka, India
            </span>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            {...fadeUp(0.3)}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px', color:"var(--fg-muted", }}
          >
            {[
              { value: '1+', label: 'Years Building' },
              { value: '3+', label: 'Projects Deployed' },
              { value: 'Full', label: 'Stack Dev' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'var(--text-primary)',
                  padding: '14px 20px',
                  background: 'rgba(115, 115, 115, 0.1)',
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
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    color: 'var(--text-primary)',
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
          ref={ref}
          style={{
            display: isMobile ? 'none' : 'flex',
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
            initial={false}
            style={{
                y,
                opacity,
                scale,
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
              background: 'var(--accent)',
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
              background: 'var(--accent)',
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </section>
  )
}