import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const projects = [
  {
    id: 1,
    category: 'Full Stack',
    title: 'AuthFlow',
    subtitle: 'Enterprise Auth System',
    description:
      'Production-grade authentication platform with JWT refresh tokens, OAuth2, role-based access control, and real-time session management across distributed services.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    accent: '#B6FF3B',
    bg: 'linear-gradient(135deg, #0a1a00 0%, #0e0e0e 40%, #111800 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B6FF3B' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    link: '#',
  },
  {
    id: 2,
    category: 'Real-time',
    title: 'PulseChat',
    subtitle: 'Real-time Messaging',
    description:
      'Scalable WebSocket-powered messaging system with presence detection, message persistence, end-to-end typing indicators, and sub-100ms delivery latency.',
    tech: ['WebSockets', 'Express', 'MongoDB', 'React'],
    accent: '#3BF0FF',
    bg: 'linear-gradient(135deg, #00101a 0%, #0e0e0e 40%, #001118 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233BF0FF' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    link: '#',
  },
  {
    id: 3,
    category: 'SaaS',
    title: 'Taskflow',
    subtitle: 'Project Management',
    description:
      'Full-featured project management SaaS with Kanban boards, time tracking, team workspaces, Gantt views, and Slack-integrated notifications.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    accent: '#FF6B3B',
    bg: 'linear-gradient(135deg, #1a0800 0%, #0e0e0e 40%, #180800 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B3B' fill-opacity='0.04'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    link: '#',
  },
  {
    id: 4,
    category: 'AI / ML',
    title: 'Synapse',
    subtitle: 'AI Document Intelligence',
    description:
      'LLM-powered document analysis platform that extracts insights, generates summaries, and answers questions across multi-format enterprise knowledge bases.',
    tech: ['Python', 'OpenAI', 'React', 'FastAPI'],
    accent: '#A855F7',
    bg: 'linear-gradient(135deg, #0d0018 0%, #0e0e0e 40%, #100018 100%)',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.04'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    link: '#',
  },
]

function ProjectCard({ project, index, total, scrollYProgress }) {
  const cardStart = index / total
  const cardEnd   = (index + 1) / total

  const rawScale   = useTransform(scrollYProgress, [cardStart - 1/total, cardStart], [0.94, 1])
  const rawOpacity = useTransform(scrollYProgress, [cardStart - 1/total, cardStart], [0, 1])
  const rawY       = useTransform(scrollYProgress, [cardStart - 1/total, cardStart], ['6%', '0%'])

  // push previous cards up + shrink as next card covers them
  const scaleDown  = useTransform(scrollYProgress, [cardStart, cardEnd], [1, 0.92])
  const pushY      = useTransform(scrollYProgress, [cardStart, cardEnd], ['0%', '-4%'])

  const scale   = index === 0
    ? useSpring(scaleDown,  { stiffness: 80, damping: 22 })
    : useSpring(
        useTransform(scrollYProgress,
          [cardStart - 1/total, cardStart, cardEnd],
          [0.94, 1, index < total - 1 ? 0.92 : 1]
        ),
        { stiffness: 80, damping: 22 }
      )

  const opacity = useSpring(
    index === 0 ? scaleDown.get() && rawOpacity : rawOpacity,
    { stiffness: 100, damping: 28 }
  )

  const y = useSpring(
    index === 0 ? pushY : rawY,
    { stiffness: 80, damping: 22 }
  )

  // Parallax for inner content
  const contentY = useTransform(scrollYProgress, [cardStart, cardEnd], ['0%', '-8%'])

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          scale,
          y,
          transformOrigin: 'top center',
          willChange: 'transform',
        }}
      >
        {/* ── Card shell ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: project.bg,
            overflow: 'hidden',
          }}
        >
          {/* Pattern texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: project.pattern,
              zIndex: 0,
            }}
          />

          {/* 50% dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.52)',
              zIndex: 1,
            }}
          />

          {/* Grain */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '128px',
              opacity: 0.04,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Accent corner glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${project.accent}18 0%, transparent 65%)`,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* ── Content ── */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '60px 72px',
              y: contentY,
              willChange: 'transform',
            }}
          >
            {/* Index number — top left */}
            <div
              style={{
                position: 'absolute',
                top: '52px',
                left: '72px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.2em',
                fontFamily: 'monospace',
              }}
            >
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>

            {/* Arrow button — top right */}
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.08, backgroundColor: project.accent }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute',
                top: '44px',
                right: '72px',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: `1px solid rgba(255,255,255,0.15)`,
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '18px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              ↗
            </motion.a>

            {/* Bottom content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Category pill */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: `${project.accent}22`,
                    border: `1px solid ${project.accent}44`,
                    color: project.accent,
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: project.accent,
                    }}
                  />
                  {project.category}
                </span>
              </motion.div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {project.subtitle}
              </div>

              {/* HUGE title */}
              <h2
                style={{
                  fontSize: 'clamp(52px, 8vw, 110px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  textShadow: '0 4px 40px rgba(0,0,0,0.5)',
                }}
              >
                {project.title}
              </h2>

              {/* Divider */}
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  background: project.accent,
                  opacity: 0.6,
                }}
              />

              {/* Bottom row: description + tech */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '40px',
                  flexWrap: 'wrap',
                }}
              >
                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.45)',
                    maxWidth: '480px',
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(255,255,255,0.35)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.03)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const containerRef = useRef(null)
  const total = projects.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="projects" ref={containerRef} style={{ position: 'relative' }}>

      {/* ── Section label — fixed during scroll ── */}
      <div
        style={{
          position: 'sticky',
          top: '50%',
          zIndex: 100,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '36px',
          marginTop: '-20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'monospace' }}>&lt;</span>
            <span
              style={{
                fontSize: '9px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(182,255,59,0.5)',
                fontWeight: 600,
                fontFamily: 'monospace',
              }}
            >
              PROJECTS
            </span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'monospace' }}>/&gt;</span>
          </div>

          {/* Progress dots */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            {projects.map((_, i) => (
              <ScrollDot key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Stacked cards — each 100vh, all sticky ── */}
      <div style={{ height: `${total * 100}vh` }}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

function ScrollDot({ index, total, scrollYProgress }) {
  const start  = index / total
  const end    = (index + 1) / total
  const active = useTransform(scrollYProgress, [start, end], [1, 0])

  return (
    <motion.div
      style={{
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: '#B6FF3B',
        opacity: active,
      }}
    />
  )
}