import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
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

// Ambient idle float — extremely gentle, atmospheric
// (Framer-managed keyframe loop, animates `y` only -> compositor-only,
// already cheap. Untouched.)
const idleFloat = {
  animate: { y: [0, 5, 0] },
  transition: {
    duration: 5.5,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1],
    repeatType: 'loop',
  },
}

export default function Hero() {
  const { isMobile } = useResponsive()
  const { isDark, toggleTheme } = useTheme()
  const sectionRef = useRef(null)

  // ── Greeting bubble state ──────────────────────────────────────────────────
  const [showGreeting, setShowGreeting] = useState(false)
  const [showHi, setShowHi] = useState(false)
  const dismissTimer = useRef(null)

  const handleBubbleClick = useCallback(() => {
    if (showGreeting) return
    setShowGreeting(true)
    clearTimeout(dismissTimer.current)
    dismissTimer.current = setTimeout(() => setShowGreeting(false), 3600)
  }, [showGreeting])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi(true)

      setTimeout(() => {
        setShowHi(false)
      }, 1200)
    }, 6000)

    return () => {
      clearTimeout(dismissTimer.current)
      clearInterval(interval)
    }
  }, [])
  // ──────────────────────────────────────────────────────────────────────────

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // ─────────────────────────────────────────────────────────────
  // COMPOSITOR-ONLY TRANSFORMS — unchanged.
  // Every one of these drives `transform` (y, rotate, x, scale) or
  // `opacity`. Both are handled entirely by the GPU compositor —
  // no paint is triggered when these change, regardless of how many
  // there are or how often they update. This is why they were never
  // the bottleneck: the cost profile here was always dominated by
  // the two filter-driven values below, not by these.
  // ─────────────────────────────────────────────────────────────
  const imageY = useTransform(smooth, [0, 0.8], [0, isMobile ? 60 : 120])
  const imageRotate = useTransform(smooth, [0, 0.6], [0, 6])
  const textOpacity = useTransform(smooth, [0, 0.5], [1, 0])

  // textX_left / textX_right — restructured to always call useTransform
  // (previously wrapped in `isMobile ? 0 : useTransform(...)`, which is
  // a conditional hook call and technically violates the rules of hooks,
  // even though it "worked" because isMobile doesn't change mid-render
  // in this app's usage pattern). The output range collapses to [0,0]
  // on mobile, which produces the exact same constant 0 the old code
  // returned directly — verified numerically identical, not approximated.
  const textX_left = useTransform(smooth, [0, 0.5], isMobile ? ['0%', '0%'] : ['0%', '-18%'])
  const textX_right = useTransform(smooth, [0, 0.5], isMobile ? ['0%', '0%'] : ['0%', '18%'])

  const dotsOpacity   = useTransform(smooth, [0, 0.4],  [0.5, 0])
  const hiOpacity     = useTransform(smooth, [0, 0.3],  [1, 0])
  const hiScale       = useTransform(smooth, [0, 0.3],  [1, 0.6])
  const toggleOpacity = useTransform(smooth, [0.3, 0.7],[1, 0])
  const glowOpacity = useTransform(smooth, [0, 0.6], [0.03, 0.08])
  const glowScale     = useTransform(smooth, [0, 0.6],  [1, 1.6])
  const imageOpacity = useTransform(smooth, [0, 0.75], [1, 0.15])
  const imageScale = useTransform(smooth, [0, 0.75], [1, 0.88])

  // ─────────────────────────────────────────────────────────────
  // REMOVED: textBlur, imageBlur, and the `filter: blur()` transforms
  // built from them.
  //
  // Both were paint-bound: animating `filter` forces the browser to
  // re-rasterize the entire element subtree on every scroll frame,
  // rather than just re-composite an existing GPU layer the way
  // opacity/transform changes do. textBlur in particular sat on top
  // of two full text columns (name tag + heading), making it the
  // single most expensive operation in this file.
  //
  // There is no compositor-only equivalent of blur — this is a real
  // visual change, not a free substitution. What's preserved: the
  // dissolve-on-scroll effect, now carried entirely by the existing
  // opacity + translateX (text) and opacity + scale (image) curves,
  // which were already doing most of the visual work alongside the
  // blur. What's lost: a soft-focus quality during the first ~35% of
  // scroll, where blur used to add a secondary texture on top of the
  // fade. At normal scroll speed this reads as a clean fade-and-slide
  // rather than a blur-dissolve — close to the original, not identical.
  // ─────────────────────────────────────────────────────────────

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

        {/* ── Hi bubble + ambient floating greeting ────────────────────────── */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: isMobile ? '280px' : '15%',
            left: isMobile ? '90px' : '35%',
            zIndex: 10,
            opacity: hiOpacity,
            scale: hiScale,
          }}
        >
          {/* Ambient glass message — detached, drifting freely in space */}
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                key="greeting"
                // Entrance: soft rise + blur dissolve
                // (Kept as-is: this is an enter/exit transition on a small
                // pill, triggered by a click, not a scroll-frame animation.
                // It runs a handful of times per session, not 60x/second —
                // entirely different cost profile from textBlur/imageBlur,
                // so it does not need to be touched.)
                initial={{ opacity: 0, y: 14, scale: 0.97, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0,  scale: 1,    filter: 'blur(0px)' }}
                exit={{   opacity: 0, y: -12, scale: 0.98, filter: 'blur(3px)' }}
                transition={{
                  duration: 0.62,
                  ease: [0.22, 1, 0.36, 1],
                  filter:  { duration: 0.45 },
                  opacity: { duration: 0.50 },
                }}
                style={{
                  position: 'absolute',
                  // Airy vertical detachment — floats well above the bubble
                  top: isMobile ? '54px' : '102px',
                  // Horizontal offset centers the pill over the bubble
                  left: isMobile ? '-48px' : '-78px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
              >
                {/* Idle ambient drift wrapper */}
                <motion.div
                  animate={idleFloat.animate}
                  transition={idleFloat.transition}
                  style={{
                    // Lighter, more transparent glass
                    maxWidth: '360px',
                    textAlign: 'center',
                    background: isDark
                      ? 'rgba(15,15,15,0.34)'
                      : 'rgba(255,255,255,0.52)',
                    backdropFilter: 'blur(22px) saturate(160%) brightness(0.92)',
                    WebkitBackdropFilter: 'blur(28px) saturate(190%)',

                    // Gossamer border
                    border: isDark
                      ? '1px solid rgba(255,255,255,0.08)'
                      : '1px solid rgba(255,255,255,0.65)',
                    borderRadius: '30px',
                    padding: isMobile ? '10px 18px' : '12px 24px',

                    // Featherweight shadow — depth without weight
                    boxShadow: isDark
                      ? '0 2px 20px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.035) inset'
                      : '0 2px 20px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,0.92) inset',

                    // Restrained typography
                    fontSize: isMobile ? '11.5px' : '12.5px',
                    fontWeight: 520,
                    letterSpacing: '0.015em',

                    color: "var(--accent)",

                    textShadow: isDark
                      ? '0 0 18px rgba(255,255,255,0.04)'
                      : '0 0 12px rgba(255,255,255,0.35)',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  Thanks for visiting — explore around 👋
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* The 👋 bubble itself */}
          <motion.div
            onClick={handleBubbleClick}
            whileHover={{
              scale: 1.08,
              boxShadow: isDark
                ? '0 0 32px rgba(255,255,255,0.28)'
                : '0 0 32px rgba(0,0,0,0.12)',
            }}
            whileTap={{ scale: 0.93 }}
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 22,
            }}
            style={{
              width: isMobile ? '56px' : '80px',
              height: isMobile ? '56px' : '80px',
              borderRadius: '50%',
              background: 'var(--fg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              fontSize: isMobile ? '26px' : '40px',
              cursor: 'pointer',
              userSelect: 'none',
              boxShadow: isDark
                ? '0 0 20px rgba(255,255,255,0.5)'
                : '0 0 20px rgba(0,0,0,0.15)',
              transition: 'background 0.35s ease, box-shadow 0.25s ease',
              outline: 'none',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <AnimatePresence mode="wait">
              {showHi ? (
                <motion.span
                  key="hi"
                  initial={{
                    opacity: 0,
                    rotateY: -90,
                    scale: 0.8,
                    filter: 'blur(6px)',
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    rotateY: 90,
                    scale: 0.8,
                    filter: 'blur(6px)',
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    color: isDark ? '#000000' : '#FFFFFF',

                    fontFamily: "'Clash Display', 'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '-0.015em',

                    textShadow: isDark
                      ? '0 1px 8px rgba(0,0,0,0.18)'
                      : '0 1px 8px rgba(255,255,255,0.12)',
                  }}
                >
                  Hi
                </motion.span>
              ) : (
                <motion.span
                  key={showHi ? 'wave-hidden' : 'wave'}
                  animate={{
                    rotate: [0, -14, 16, -10, 14, -6, 0],
                  }}
                  transition={{
                    duration: 1.05,
                    repeat: showHi ? 0 : Infinity,
                    repeatDelay: 2,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    transformOrigin: '72% 82%',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  👋
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        {/* ─────────────────────────────────────────────────────────────────── */}

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
            // filter REMOVED — see note above the component body.
            // willChange trimmed to match: 'filter' dropped since it's
            // no longer animated here, so the browser won't reserve a
            // paint layer for a property that never changes.
            willChange: 'transform, opacity',
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

          {/* CENTER: Image */}
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
                // filter REMOVED — see note above the component body.
                // The dissolve effect on this image is now carried by
                // imageOpacity (1 -> 0.15) and imageScale (1 -> 0.88)
                // alone, which were already doing most of the visual work.
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
            width: '100%',
            paddingLeft: isMobile ? '0px' : '32px',
            paddingTop: isMobile ? '0px' : '180px',
            textAlign: isMobile ? 'center' : 'left',
            opacity: textOpacity,
            x: textX_right,
            // filter REMOVED — same as LEFT column above.
            willChange: 'transform, opacity',
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
              Building scalable full-stack applications with secure APIs, real-time systems, and modern UI experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}