import { motion } from 'framer-motion'

const skillGroups = [
  {
    icon: '⬡',
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
  },
  {
    icon: '◈',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'WebSockets'],
  },
  {
    icon: '▦',
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    icon: '◎',
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'AWS S3'],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

function SkillPill({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 * index }}
      whileHover={{
        color: '#B6FF3B',
        borderColor: 'rgba(182,255,59,0.35)',
        boxShadow: '0 0 16px rgba(182,255,59,0.12)',
        x: 4,
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 14px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.025)',
        color: 'rgba(255,255,255,0.55)',
        fontSize: '12.5px',
        letterSpacing: '0.03em',
        fontWeight: 450,
        cursor: 'default',
        transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
        willChange: 'transform',
      }}
    >
      {/* Dot indicator */}
      <span
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'currentColor',
          opacity: 0.5,
          flexShrink: 0,
        }}
      />
      {name}
    </motion.div>
  )
}

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      {...fadeUp(0.1 * groupIndex)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingBottom: '32px',
        borderBottom: groupIndex < skillGroups.length - 1
          ? '1px solid rgba(255,255,255,0.05)'
          : 'none',
      }}
    >
      {/* Group header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          style={{
            fontSize: '15px',
            color: '#B6FF3B',
            opacity: 0.8,
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {group.icon}
        </span>
        <span
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.4)',
            fontWeight: 600,
          }}
        >
          {group.title}
        </span>

        {/* Hairline from title to edge */}
        <div
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
            marginLeft: '4px',
          }}
        />
      </div>

      {/* Skill pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {group.skills.map((skill, i) => (
          <SkillPill key={skill} name={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
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

      {/* ── Subtle right glow ── */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-100px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,255,59,0.04) 0%, transparent 70%)',
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
          gridTemplateColumns: '1fr 1.4fr',
          gap: '100px',
          alignItems: 'start',
        }}
      >
        {/* ══════════════════════════
            LEFT — Heading block
        ══════════════════════════ */}
        <div
          style={{
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          {/* Code label */}
          <motion.div {...fadeUp(0)}>
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
                SKILLS
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            {...fadeUp(0.08)}
            style={{
              fontSize: 'clamp(42px, 5vw, 68px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Tech
            <br />
            <span style={{ color: '#B6FF3B' }}>Stack</span>
          </motion.h2>

          {/* Accent line */}
          <motion.div
            {...fadeUp(0.14)}
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #B6FF3B, transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.18)}
            style={{
              fontSize: '13px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.35)',
              maxWidth: '260px',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Tools and technologies I use to ship production-grade applications
            from API to interface.
          </motion.p>

          {/* Count badge */}
          <motion.div
            {...fadeUp(0.22)}
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '6px',
              marginTop: '8px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              {skillGroups.reduce((acc, g) => acc + g.skills.length, 0)}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              Technologies
            </span>
          </motion.div>
        </div>

        {/* ══════════════════════════
            RIGHT — Skill groups
        ══════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '6px' }}>
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} group={group} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}