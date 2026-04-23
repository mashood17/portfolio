import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import campusImg from '../assets/campusloop.png'
import gitImg from '../assets/gitinsight.png'
import aiImg from '../assets/aihub.png'
import raceImg from '../assets/racezone2.png'
import { useResponsive } from '../hooks/useResponsive'


const projects = [
  {
    id: 1,
    category: 'Full Stack',
    title: 'CampusLoop',
    subtitle: 'Real-time Campus Communication',
    description:
      'Replaced fragmented WhatsApp-based communication with a structured real-time platform. Secured 20+ REST endpoints with JWT token rotation. Load tested at 50 concurrent users — 72ms avg response, 23+ RPS, 0% failure rate.',
    tech: ['React', 'Flask', 'PostgreSQL', 'WebSockets', 'JWT'],
    accent: 'var(--accent)',
    darkBg: 'linear-gradient(135deg, #0a1a00 0%, #0e0e0e 40%, #111800 100%)',
    lightBg: 'linear-gradient(135deg, #e8f5d0 0%, #f5f5f5 40%, #edf5d8 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B6FF3B' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    stats: ['72ms avg response', '23+ RPS', '0% failure'],
    codeLink: 'https://github.com/mashood17/campus_loop',
    liveLink: 'https://campus-loop-pi.vercel.app',
    image: campusImg,
  },
  {
    id: 2,
    category: 'Analytics',
    title: 'GitInsight',
    subtitle: 'GitHub Developer Analytics',
    description:
      'Full-stack analytics platform with a custom developer scoring algorithm — classifies developers as Beginner, Intermediate, or Advanced based on weighted repos, stars, and followers. Validated by benchmarking against known profiles.',
    tech: ['Python', 'Flask', 'JavaScript', 'Chart.js', 'GitHub API'],
    accent: '#3BF0FF',
    darkBg: 'linear-gradient(135deg, #00101a 0%, #0e0e0e 40%, #001118 100%)',
    lightBg: 'linear-gradient(135deg, #d0f0f5 0%, #f5f5f5 40%, #d8f0f5 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233BF0FF' fill-opacity='0.06' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    stats: ['Custom scoring algo', 'Beginner → Advanced', 'Profile benchmarking'],
    codeLink: 'https://github.com/mashood17/gitinsight',
    liveLink: 'https://gitinsight-lake.vercel.app',
    image: gitImg,
  },
  {
    id: 3,
    category: 'AI Platform',
    title: 'Student AI Hub',
    subtitle: 'AI Productivity Platform',
    description:
      'Sole frontend developer on a team project. Built 7+ React modules: AI code generator, debugger, chatbot, doc summarizer, resume analyzer, roadmap generator, and task manager. Integrated 4 LLM providers with dynamic model switching.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'LLaMA', 'Cerebras'],
    accent: '#A855F7',
    darkBg: 'linear-gradient(135deg, #0d0018 0%, #0e0e0e 40%, #100018 100%)',
    lightBg: 'linear-gradient(135deg, #ede0f5 0%, #f5f5f5 40%, #f0e8f5 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.07'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    stats: ['7+ React modules', '4 LLM providers', 'Dynamic model switching'],
    codeLink: 'https://github.com/mashood17/student-ai-hub',
    liveLink: 'https://frontend-k5qm.onrender.com',
    image: aiImg,
  },
  {
    id: 4,
    category: 'Real-time',
    title: 'RaceZone',
    subtitle: 'RC Racing Display System',
    description:
      'Premium real-time RC racing platform with dual-screen architecture (TV display + admin panel). Instant leaderboard updates via WebSockets, JWT-secured APIs, and live race controls. F1-style UI with lap tracking and podium system.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'JWT'],
    accent: '#FF6B3B',
    darkBg: 'linear-gradient(135deg, #1a0800 0%, #0e0e0e 40%, #180800 100%)',
    lightBg: 'linear-gradient(135deg, #f5e0d8 0%, #f5f5f5 40%, #f5ddd0 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B3B' fill-opacity='0.07'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    stats: ['Dual-screen arch', 'Live leaderboard', 'F1-style UI'],
    codeLink: 'https://github.com/mashood17/racezone',
    liveLink: 'https://racezone.vercel.app/',
    image: raceImg,
  },
]

function ProjectCard({ project, index, total, scrollYProgress, isDark, isMobile }) {
  const cardStart = index / total
  const cardEnd   = (index + 1) / total

  const rawScale = useTransform(scrollYProgress, [cardStart - 1 / total, cardStart], [0.94, 1])
  const rawY     = useTransform(scrollYProgress, [cardStart - 1 / total, cardStart], ['6%', '0%'])
  const exitScale = useTransform(scrollYProgress, [cardStart, cardEnd], [1, index < total - 1 ? 0.91 : 1])
  const exitY     = useTransform(scrollYProgress, [cardStart, cardEnd], ['0%', index < total - 1 ? '-3%' : '0%'])

  const combinedScale = useTransform(scrollYProgress, (v) => {
    if (index === 0) return exitScale.get()
    return v < cardStart ? rawScale.get() : exitScale.get()
  })
  const combinedY = useTransform(scrollYProgress, (v) => {
    if (index === 0) return exitY.get()
    return v < cardStart ? rawY.get() : exitY.get()
  })

  const scale = useSpring(combinedScale, { stiffness: 72, damping: 22 })
  const y     = useSpring(combinedY,     { stiffness: 72, damping: 22 })

  const brightness = useTransform(scrollYProgress, [cardStart, cardEnd], [1, index < total - 1 ? 0.7 : 1])
  const contentY   = useTransform(scrollYProgress, [cardStart, cardEnd], ['0%', '-6%'])

  // ── Theme-derived values ──
  const cardBg      = isDark ? project.darkBg      : project.lightBg
  const overlayBg   = isDark ? 'rgba(0,0,0,0.32)' : 'rgba(255,255,255,0.45)'
  const indexColor  = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.25)'
  const btnBorder   = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'
  const btnBg       = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
  const btnColor    = 'var(--accent)'
  const liveBg      = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const liveColor   = 'var(--accent)'

  // ─────────────────────────────────────────────────────────────
  // MOBILE CARD: completely self-contained, flow layout, no sticky
  // Root problem was position:absolute inset:0 inside a height-less
  // container — everything collapsed to 0px on mobile.
  // ─────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          background: cardBg,
          marginBottom: '32px',
          transition: 'background 0.35s ease',
        }}
      >
        {/* Pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: project.pattern, zIndex: 0 }} />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute', inset: 0, background: overlayBg, zIndex: 1,
            transition: 'background 0.35s ease',
          }}
        />

        {/* Grain */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px', opacity: 0.04, zIndex: 2, pointerEvents: 'none',
          }}
        />

        {/* Accent glows */}
        <div
          style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: '360px', height: '360px', borderRadius: '50%',
            background: `radial-gradient(circle, ${project.accent}14 0%, transparent 65%)`,
            zIndex: 2, pointerEvents: 'none',
          }}
        />

        {/* Content — normal block flow so height is driven by content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '28px 20px 32px' }}>

          {/* Top row: index + buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', color: indexColor, letterSpacing: '0.2em', fontFamily: 'monospace' }}>
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '7px 13px', borderRadius: '999px',
                  border: `1px solid ${btnBorder}`,
                  background: btnBg, backdropFilter: 'blur(8px)',
                  color: btnColor, fontSize: '11px', fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.04em',
                }}
              >
                ⌘ Code
              </motion.a>

              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '7px 13px', borderRadius: '999px',
                  background: liveBg,
                  border: `1px solid ${btnBorder}`,
                  backdropFilter: 'blur(8px)',
                  color: liveColor, fontSize: '11px', fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.04em',
                }}
              >
                ↗ Live
              </motion.a>
            </div>
          </div>

          {/* Category pill */}
          <div style={{ marginBottom: '10px' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 12px', borderRadius: '999px',
                background: `${project.accent}1a`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
                fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: project.accent }} />
              {project.category}
            </span>
          </div>

          {/* Subtitle */}
          <div style={{ fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
            {project.subtitle}
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: '38px', fontWeight: 900,
              color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 0.9,
              margin: '0 0 12px 0',
            }}
          >
            {project.title}
          </h2>

          {/* Accent rule */}
          <div style={{ width: '36px', height: '1px', background: project.accent, opacity: 0.7, marginBottom: '14px' }} />

          {/* Screenshot */}
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '12px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
              boxShadow: isDark
                ? '0 20px 60px rgba(0,0,0,0.7)'
                : '0 12px 40px rgba(0,0,0,0.15)',
              marginBottom: '18px',
              display: 'block',
            }}
          />

          {/* Description */}
          <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
            {project.description}
          </p>

          {/* Tech pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '16px' }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: '5px 11px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: 'var(--accent)',
                  background: 'var(--tech-bg)',
                  border: '1px solid var(--tech-border)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '7px',
              paddingLeft: '10px',
              borderLeft: `2px solid ${project.accent}`,
            }}
          >
            {project.stats.map((stat) => (
              <span
                key={stat}
                style={{
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  background: 'var(--tech-bg)',
                  border: '1px solid var(--tech-border)',
                }}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // DESKTOP CARD: unchanged from original
  // ─────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          width: '100%', height: '100%',
          scale,
          y,
          filter: useTransform(brightness, v => `brightness(${v})`),
          transformOrigin: 'top center',
          willChange: 'transform, filter',
          transition: 'filter 0.3s ease',
        }}
      >
        {/* Card shell */}
        <div
          style={{
            position: 'relative', width: '100%', height: '100%',
            background: cardBg, overflow: 'hidden',
            transition: 'background 0.35s ease',
          }}
        >
          {/* Pattern */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: project.pattern, zIndex: 0 }} />

          {/* Overlay */}
          <div
            style={{
              position: 'absolute', inset: 0, background: overlayBg, zIndex: 1,
              transition: 'background 0.35s ease',
            }}
          />

          {/* Grain */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '128px', opacity: 0.04, zIndex: 2, pointerEvents: 'none',
            }}
          />

          {/* Accent glows */}
          <div
            style={{
              position: 'absolute', bottom: '-80px', left: '-80px',
              width: '500px', height: '500px', borderRadius: '50%',
              background: `radial-gradient(circle, ${project.accent}14 0%, transparent 65%)`,
              zIndex: 2, pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute', top: '-100px', right: '-100px',
              width: '400px', height: '400px', borderRadius: '50%',
              background: `radial-gradient(circle, ${project.accent}08 0%, transparent 65%)`,
              zIndex: 2, pointerEvents: 'none',
            }}
          />

          {/* Main content */}
          <motion.div
            style={{
              position: 'absolute', inset: 0, zIndex: 10,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: '52px 72px 56px',
              y: contentY, willChange: 'transform',
            }}
          >
            {/* TOP ROW */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '11px', color: indexColor, letterSpacing: '0.2em', fontFamily: 'monospace', transition: 'color 0.35s ease' }}>
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, borderColor: project.accent, color: project.accent }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '999px',
                    border: `1px solid ${btnBorder}`,
                    background: btnBg, backdropFilter: 'blur(8px)',
                    color: btnColor, fontSize: '12px', fontWeight: 600,
                    textDecoration: 'none', letterSpacing: '0.04em',
                    transition: 'color 0.2s, border-color 0.2s, background 0.35s ease',
                    cursor: 'pointer',
                  }}
                >
                  ⌘ Code
                </motion.a>

                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, background: project.accent, color: '#0e0e0e' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '999px',
                    background: liveBg,
                    border: `1px solid ${btnBorder}`,
                    backdropFilter: 'blur(8px)',
                    color: liveColor, fontSize: '12px', fontWeight: 600,
                    textDecoration: 'none', letterSpacing: '0.04em',
                    transition: 'background 0.2s, color 0.2s, border-color 0.35s ease',
                    cursor: 'pointer',
                  }}
                >
                  ↗ Live Demo
                </motion.a>
              </div>
            </div>

            {/* BOTTOM BLOCK */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'end' }}>

              {/* LEFT: TEXT */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                maxWidth: '620px',
              }}>
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '5px 12px', borderRadius: '999px', width: 'fit-content',
                    background: `${project.accent}1a`,
                    border: `1px solid ${project.accent}40`,
                    color: project.accent,
                    fontSize: '10.5px', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: project.accent }} />
                  {project.category}
                </motion.span>

                <div style={{ fontSize: '12px', color: 'var(--text-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {project.subtitle}
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 900,
                    color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 0.88,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h2>

                <div style={{ width: '40px', height: '1px', background: project.accent, opacity: 0.7 }} />

                <p
                  style={{
                    fontSize: '13.5px', lineHeight: 1.75, color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="premium-hover"
                      style={{
                        '--hover-accent': project.accent,
                        padding: '6px 12px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: 'var(--accent)',
                        background: 'var(--tech-bg)',
                        border: '1px solid var(--tech-border)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stats inside left col on desktop */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginTop: '12px',
                    borderLeft: `2px solid ${project.accent}`,
                    paddingLeft: '10px',
                  }}
                >
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="premium-hover"
                      style={{
                        '--hover-accent': project.accent,
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        background: 'var(--tech-bg)',
                        border: '1px solid var(--tech-border)',
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: SCREENSHOT */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.12,
                    y: -8,
                    boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 50px ${project.accent}`,
                    filter: 'brightness(1.1)',
                    rotate: 0.8,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '240px',
                    maxWidth: '360px',
                    borderRadius: '14px',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                    backdropFilter: 'blur(6px)',
                    objectFit: 'cover',
                    boxShadow: isDark
                      ? '0 30px 80px rgba(0,0,0,0.8)'
                      : '0 20px 60px rgba(0,0,0,0.2)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const { isMobile } = useResponsive()
  const { isDark } = useTheme()
  const containerRef = useRef(null)
  const total = projects.length

  const { scrollYProgress } = useScroll(
    isMobile
      ? { target: containerRef, offset: ['start end', 'end start'] }
      : { target: containerRef, offset: ['start start', 'end end'] }
  )

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{ position: 'relative', transition: 'background 0.35s ease' }}
    >
      {/* Section header */}
      <div
        style={{
          position: 'relative', zIndex: 0,
          padding: isMobile ? '60px 20px 40px' : '100px 72px 60px',
          backgroundColor: 'var(--bg)',
          display: 'flex', flexDirection: 'column', gap: '16px',
          transition: 'background-color 0.35s ease',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'var(--fg-muted)', fontSize: '13px', fontFamily: 'monospace' }}>&lt;</span>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'monospace' }}>
            PROJECTS
          </span>
          <span style={{ color: 'var(--fg-muted)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 900,
            color: 'var(--fg)', letterSpacing: '-0.035em', lineHeight: 0.92,
            margin: 0, fontFamily: "'Inter', sans-serif",
            transition: 'color 0.35s ease',
          }}
        >
          Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
        </h2>

        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)', borderRadius: '2px' }} />

        <p style={{ fontSize: '13.5px', lineHeight: 1.75, color: 'var(--fg-muted)', maxWidth: '460px', margin: 0, transition: 'color 0.35s ease' }}>
          These selected projects reflect my ability to design and build real-world, scalable systems.
        </p>
      </div>

      {/* Progress dots — desktop only */}
      {!isMobile && (
        <div
          style={{
            position: 'sticky', top: '50%', zIndex: 100, pointerEvents: 'none',
            display: 'flex', justifyContent: 'flex-end',
            paddingRight: '32px', marginTop: '-12px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            {projects.map((_, i) => (
              <ScrollDot key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      )}

      {/* Cards */}
      {isMobile ? (
        // Mobile: simple vertical stack with padding, no scroll tricks
        <div style={{ padding: '0 16px 48px' }}>
          {projects.map((project, i) => (
            <ProjectCard
              isMobile={true}
              key={project.id}
              project={project}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
              isDark={isDark}
            />
          ))}
        </div>
      ) : (
        // Desktop: sticky scroll stack, unchanged
        <div style={{ height: `${total * 100}vh` }}>
          {projects.map((project, i) => (
            <ProjectCard
              isMobile={false}
              key={project.id}
              project={project}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
              isDark={isDark}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function ScrollDot({ index, total, scrollYProgress }) {
  const start  = index / total
  const end    = (index + 1) / total
  const active = useTransform(scrollYProgress, [start, Math.min(start + 0.05, end)], [0.25, 1])

  return (
    <motion.div
      style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: active }}
    />
  )
}