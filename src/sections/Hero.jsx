import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import photo from '../assets/mashood.jpeg'


const floatingDots = [
  { top: '18%', left: '8%',  size: 6 },
  { top: '72%', left: '4%',  size: 4 },
  { top: '40%', left: '14%', size: 3 },
  { top: '15%', right: '10%', size: 5 },
  { top: '65%', right: '6%', size: 4 },
  { top: '80%', right: '18%', size: 3 },
]

export default function Hero() {
  const [isDark, setIsDark] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.body.style.background = isDark ? '#0e0e0e' : '#ffffff'
    document.body.style.color      = isDark ? '#ffffff' : '#000000'
  }, [isDark])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // ── Text fades out on scroll (kept) ──
  const textOpacity  = useTransform(smooth, [0, 0.35], [1, 0])
  const textX_left   = useTransform(smooth, [0, 0.5],  ['0%', '-18%'])
  const textX_right  = useTransform(smooth, [0, 0.5],  ['0%', '18%'])
  const textBlur     = useTransform(smooth, [0, 0.35], [0, 12])

  // ── Dots + Hi bubble fade ──
  const dotsOpacity   = useTransform(smooth, [0, 0.4], [0.5, 0])
  const hiOpacity     = useTransform(smooth, [0, 0.3], [1, 0])
  const hiScale       = useTransform(smooth, [0, 0.3], [1, 0.6])
  const toggleOpacity = useTransform(smooth, [0.2, 0.5], [1, 0])

  // ── Glow ──
  const glowOpacity = useTransform(smooth, [0, 0.6], [0.04, 0.14])
  const glowScale   = useTransform(smooth, [0, 0.6], [1, 1.6])

  const bg = isDark ? '#0e0e0e' : '#ffffff'
  const fg = isDark ? '#ffffff' : '#000000'

  const imageOpacity = useTransform(smooth, [0, 0.4], [1, 0])
    const imageScale   = useTransform(smooth, [0, 0.4], [1, 0.92])
    const imageBlur    = useTransform(smooth, [0, 0.4], [0, 6])

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', background: bg }}
    >
      <div
        style={{
          position: 'sticky', top: 0, height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '100px 40px 60px', overflow: 'hidden',
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

        {/* ── Radial glow ── */}
        <motion.div
          style={{
            position: 'absolute', top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(182,255,59,1) 0%, transparent 70%)',
            opacity: glowOpacity, scale: glowScale,
            pointerEvents: 'none', zIndex: 0,
          }}
        />

        {/* ── Floating dots ── */}
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute', top: dot.top, left: dot.left, right: dot.right,
              width: dot.size, height: dot.size, borderRadius: '50%',
              background: '#B6FF3B', opacity: dotsOpacity, zIndex: 1,
            }}
          />
        ))}

        {/* ── Hi bubble ── */}
        <motion.div
          style={{
            position: 'absolute', bottom: '15%', left: '35%',
            width: '80px', height: '80px', borderRadius: '50%',
            background: isDark ? '#ffffff' : '#000000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '40px', zIndex: 10,
            boxShadow: isDark ? '0 0 20px rgba(255,255,255,0.5)' : '0 0 20px rgba(0,0,0,0.15)',
            opacity: hiOpacity, scale: hiScale,
          }}
        >
          👋
        </motion.div>

        {/* ── 3-column grid ── */}
        <div
          style={{
            position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px',
            display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'start',
          }}
        >
          {/* ── LEFT ── */}
          <motion.div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
              paddingRight: '32px', paddingTop: '150px',
              opacity: textOpacity, x: textX_left,
              filter: useTransform(textBlur, v => `blur(${v}px)`),
              willChange: 'transform, opacity, filter',
            }}
          >
            <span style={{
              fontSize: '18px', color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.5)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: '8px', fontWeight: 600,
            }}>
              Mahammad Mashood
            </span>
            <h1 style={{
              fontSize: 'clamp(72px, 5vw, 120px)', fontWeight: 900, color: fg,
              textTransform: 'uppercase', letterSpacing: '-0.04em',
              lineHeight: 0.88, margin: 0, fontFamily: "'Inter', sans-serif", textAlign: 'right',
            }}>
              Full Stack
            </h1>
          </motion.div>

          {/* ── CENTER: Image — NO scroll transforms, stays fixed ── */}
          <div
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '20px',
              zIndex: 5,
            }}
          >
            <motion.div
              style={{
                width: 'clamp(220px, 22vw, 300px)',
                aspectRatio: '3/4',
                borderRadius: '120px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(160deg,#1a1a1a,#111)',
                position: 'relative',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(182,255,59,0.06)',
                opacity: imageOpacity,
                scale: imageScale,
                filter: useTransform(imageBlur, v => `blur(${v}px)`),
              }}
            >
              <img
                src={photo}
                alt="Mahammad Mashood"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </motion.div>

            {/* Toggle */}
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: toggleOpacity }}>
              <span style={{
                fontSize: '11px',
                color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.5)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={() => setIsDark(!isDark)}
                style={{
                  width: '40px', height: '22px', borderRadius: '11px',
                  background: isDark ? 'rgba(255,255,255,0.1)' : '#B6FF3B',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer', position: 'relative',
                  transition: 'background 0.25s ease', flexShrink: 0, outline: 'none',
                }}
              >
                <div style={{
                  position: 'absolute', top: '3px',
                  left: isDark ? '3px' : '21px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: isDark ? 'rgba(255,255,255,0.6)' : '#0e0e0e',
                  transition: 'left 0.25s cubic-bezier(0.22,1,0.36,1)',
                }} />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <motion.div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              paddingLeft: '32px', paddingTop: '180px',
              opacity: textOpacity, x: textX_right,
              filter: useTransform(textBlur, v => `blur(${v}px)`),
              willChange: 'transform, opacity, filter',
            }}
          >
            <h1 style={{
              fontSize: 'clamp(72px, 5vw, 120px)', fontWeight: 900, color: fg,
              textTransform: 'uppercase', letterSpacing: '-0.04em',
              lineHeight: 0.88, margin: 0, fontFamily: "'Inter', sans-serif",
            }}>
              Developer
            </h1>
            <div style={{
              width: '48px', height: '2px',
              background: 'linear-gradient(90deg, #B6FF3B, transparent)',
              borderRadius: '2px', marginTop: '12px',
            }} />
            <p style={{
              marginTop: '20px', fontSize: '12.5px', lineHeight: 1.7,
              color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.5)',
              maxWidth: '260px', letterSpacing: '0.01em', fontWeight: 400,
            }}>
              Building intelligent, scalable web applications from the ground up — JWT-secured APIs,
              real-time systems, and pixel-perfect UI engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}