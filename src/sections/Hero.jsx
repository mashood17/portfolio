import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import photo from '../assets/mashood.jpeg'
import { useTheme } from '../hooks/useTheme'
import { useResponsive } from '../hooks/useResponsive'

const floatingDots = [
  { top: '18%', left: '8%',  size: 6 },
  { top: '72%', left: '4%',  size: 4 },
  { top: '40%', left: '14%', size: 3 },
  { top: '15%', right: '10%', size: 5 },
  { top: '65%', right: '6%', size: 4 },
  { top: '80%', right: '18%', size: 3 },
]

export default function Hero() {
  const { isMobile } = useResponsive()
  const { isDark, toggleTheme } = useTheme()
  const sectionRef = useRef(null)


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const imageY = useTransform(smooth, [0, 0.8], [0, isMobile ? 60 : 120])
  const imageRotate = useTransform(smooth, [0, 0.6], [0, 6])
  const textOpacity = useTransform(smooth, [0, 0.5], [1, 0])
  const textX_left = isMobile
    ? 0
    : useTransform(smooth, [0, 0.5], ['0%', '-18%'])
  const textX_right = isMobile
    ? 0
    : useTransform(smooth, [0, 0.5], ['0%', '18%'])
  const textBlur = useTransform(smooth, [0, 0.35], [0, isMobile ? 0 : 12])
  const dotsOpacity   = useTransform(smooth, [0, 0.4],  [0.5, 0])
  const hiOpacity     = useTransform(smooth, [0, 0.3],  [1, 0])
  const hiScale       = useTransform(smooth, [0, 0.3],  [1, 0.6])
  const toggleOpacity = useTransform(smooth, [0.3, 0.7],[1, 0])
  const glowOpacity = useTransform(smooth, [0, 0.6], [0.03, 0.08])
  const glowScale     = useTransform(smooth, [0, 0.6],  [1, 1.6])
  const imageOpacity = useTransform(smooth, [0, 0.75], [1, 0.15])
  const imageScale = useTransform(smooth, [0, 0.75], [1, 0.88])
  const imageBlur = useTransform(smooth, [0, 0.4], [0, isMobile ? 0 : 6])

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)',
        transition: 'background-color 0.35s ease',
      }}
    >
      <div
        style={{
          position: isMobile ? 'relative' : 'sticky', top: 0, height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: isMobile ? '100px 20px 60px' : '100px 40px 60px', overflow: 'hidden',
        }}
      >
        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
          opacity: 0.035, pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Radial glow */}
        <motion.div style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: glowOpacity, scale: glowScale,
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Floating dots */}
        {floatingDots.map((dot, i) => (
          <motion.div key={i} style={{
            position: 'absolute', top: dot.top, left: dot.left, right: dot.right,
            width: dot.size, height: dot.size, borderRadius: '50%',
            background: 'var(--accent)', opacity: dotsOpacity, zIndex: 1,
          }} />
        ))}

        {/* Hi bubble */}
        <motion.div
        style={{
          position: 'absolute',

          bottom: isMobile ? '280px' : '15%',
          left: isMobile ? '90px' : '35%',

          width: isMobile ? '56px' : '80px',
          height: isMobile ? '56px' : '80px',
          borderRadius: '50%',

          background: 'var(--fg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          fontSize: isMobile ? '26px' : '40px',

          zIndex: 10,

          boxShadow: isDark
            ? '0 0 20px rgba(255,255,255,0.5)'
            : '0 0 20px rgba(0,0,0,0.15)',

          opacity: hiOpacity,
          scale: hiScale,

          transition: 'background 0.35s ease',
        }}
      >
        👋
      </motion.div>

        {/* 3-col grid */}
        <div style={{
          position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px',
          gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr',
          display: isMobile ? 'flex' : 'grid',
          flexDirection: isMobile ? 'column' : undefined,
          justifyItems: isMobile ? 'center' : 'stretch',
          alignItems: isMobile ? 'center' : 'start',
          gap: isMobile ? '32px' : '0px',
          
        }}>
          {/* LEFT */}
          <motion.div style={{
            display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-end',
            paddingRight: isMobile ? '0px' : '32px',
            paddingTop: isMobile ? '0px' : '150px',
            textAlign: isMobile ? 'center' : 'right',
            opacity: textOpacity, x: textX_left,
            filter: useTransform(textBlur, v => `blur(${v}px)`),
            willChange: 'transform, opacity, filter',
          }}>
            <span style={{
              fontSize: '18px', color: 'var(--text-primary)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: '8px', fontWeight: 600,
              transition: 'color 0.35s ease',
            }}>
              Mahammad Mashood
            </span>
            <h1 style={{
              fontSize: '68px', fontWeight: 900,
              color: 'var(--fg)', textTransform: 'uppercase',
              letterSpacing: '-0.04em', lineHeight: 0.88, margin: 0,
              fontFamily: "'Inter', sans-serif", textAlign: isMobile ? 'center' : 'right',
              transition: 'color 0.35s ease',
            }}>
              Full Stack
            </h1>
          </motion.div>

          {/* CENTER: Image — static, no scroll transforms */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '20px', zIndex: 5,
          }}>
            <motion.div
              animate={{ y: isMobile ? [0, -4, 0] : [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: isMobile ? '180px' : 'clamp(220px, 22vw, 300px)', aspectRatio: '3/4',
                borderRadius: '120px', overflow: 'hidden',
                y: imageY,
                rotate: imageRotate,
                border: '1px solid var(--border)',
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


          </div>

          {/* RIGHT */}
          <motion.div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            width: '100%', // ✅ IMPORTANT
            paddingLeft: isMobile ? '0px' : '32px',
            paddingTop: isMobile ? '0px' : '180px',
            textAlign: isMobile ? 'center' : 'left',
            opacity: textOpacity,
            x: textX_right,
            filter: useTransform(textBlur, v => `blur(${v}px)`),
            willChange: 'transform, opacity, filter',
          }}>
            <h1 style={{
              fontSize: '63px',
              fontWeight: 900,
              color: 'var(--fg)',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              width: '100%', 
              textAlign: isMobile ? 'center' : 'left',
              transition: 'color 0.35s ease',
            }}>
              Developer
            </h1>
            
            <div style={{
              width: '48px', height: '2px',
              background: 'linear-gradient(90deg, var(--accent), transparent)',
              borderRadius: '2px', marginTop: '12px',
            }} />
            <p style={{
              marginTop: '20px', fontSize: '12.5px', lineHeight: 1.7,
              color: 'var(--text-primary)', maxWidth: '260px',
              letterSpacing: '0.01em', fontWeight: 400,
              transition: 'color 0.35s ease',
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