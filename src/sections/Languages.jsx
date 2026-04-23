import { motion, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useResponsive } from '../hooks/useResponsive'

const languages = [
  { name: 'English',   level: 'Professional',   pips: 4, tag: 'C1' },
  { name: 'Hindi',     level: 'Conversational', pips: 3, tag: 'B2' },
  { name: 'Kannada',   level: 'Native',         pips: 5, tag: 'L1' },
  { name: 'Malayalam', level: 'Native',         pips: 5, tag: 'L1' },
  { name: 'Tamil',     level: 'Basic',          pips: 1, tag: 'A1' },
]

const EASE = [0.22, 1, 0.36, 1]
const MAX_PIPS = 5

const levelAccent = {
  Native:         'var(--accent)',
  Professional:   'var(--accent)',
  Conversational: 'var(--accent)',
  Basic:          'var(--accent)',
}

const levelOpacity = {
  Native:         1,
  Professional:   0.8,
  Conversational: 0.55,
  Basic:          0.3,
}

export default function Languages() {
  const { isMobile } = useResponsive()
  const { isDark } = useTheme()
  const sectionRef = useRef(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' })

  const bracketColor = 'var(--text-primary)'
  const cardBg       = 'var(--card-bg)'
  const cardBorder   = 'var(--card-border)'
  const cardShadow   = 'var(--accent)'
  const dividerColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'

  return (
    <motion.section
      id="languages"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: EASE }}
      style={{
        width: '100%',
        backgroundColor: 'var(--bg)',
        transition: 'background-color 0.35s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '80px 20px' : '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Grain ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
        opacity: 0.035, pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Subtle glow ── */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '500px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(182,255,59,0.03) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div
        ref={sectionRef}
        style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '700px',
          display: 'flex', flexDirection: 'column', gap: '52px',
        }}
      >
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
            }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: bracketColor, fontSize: '13px', fontFamily: 'monospace', transition: 'color 0.35s ease' }}>&lt;</span>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'monospace' }}>
              LANGUAGES
            </span>
            <span style={{ color: bracketColor, fontSize: '13px', fontFamily: 'monospace', transition: 'color 0.35s ease' }}>/&gt;</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 4.5vw, 56px)', fontWeight: 900,
            color: 'var(--fg)', letterSpacing: '-0.035em', lineHeight: 0.95,
            margin: 0, fontFamily: "'Inter', sans-serif",
            transition: 'color 0.35s ease',
          }}>
            Languages &{' '}
            <span style={{ color: 'var(--accent)' }}>Communication</span>
          </h2>

          <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)', borderRadius: '2px' }} />
        </motion.div>

        {/* ── Card container ── */}
        <div style={{
          borderRadius: '20px',
          background: cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${cardBorder}`,
          boxShadow: cardShadow,
          overflow: 'hidden',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}>
          {languages.map((lang, i) => (
            <LanguageRow
              isMobile={isMobile}
              key={lang.name}
              lang={lang}
              index={i}
              total={languages.length}
              isDark={isDark}
              dividerColor={dividerColor}
              parentInView={isInView}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          style={{
            fontSize: '11px', color: 'var(--fg-muted)',
            letterSpacing: '0.06em', textAlign: 'center',
            margin: 0, transition: 'color 0.35s ease',
          }}
        >
          Proficiency scale: A1 Basic · B2 Conversational · C1 Professional · L1 Native
        </motion.p>
      </div>
    </motion.section>
  )
}

/* ─────────────────────────────
   Pip indicator (replaces bar)
───────────────────────────── */
function PipIndicator({ pips, accent, delay, parentInView, isMobile }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '5px',
      flexShrink: 0,
    }}>
      {Array.from({ length: MAX_PIPS }).map((_, i) => {
        const filled = i < pips
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={parentInView ? {
              opacity: filled ? 1 : 1,
              scale: 1,
            } : { opacity: 0, scale: 0.4 }}
            transition={{
              duration: 0.4,
              ease: EASE,
              delay: delay + i * 0.06,
            }}
            style={{
              width: filled ? '20px' : '8px',
              height: '4px',
              borderRadius: '999px',
              background: filled ? accent : 'transparent',
              border: filled ? 'none' : `1px solid ${accent}`,
              opacity: filled ? 1 : 0.2,
              transition: 'width 0.3s ease, background 0.3s ease',
              flexShrink: 0,
            }}
          />
        )
      })}
    </div>
  )
}

/* ─────────────────────────────
   Language row
───────────────────────────── */
function LanguageRow({ lang, index, total, isDark, dividerColor, parentInView, isMobile }) {
  const isLast  = index === total - 1
  const accent  = levelAccent[lang.level]
  const rowDelay = 0.08 + index * 0.07

  const nameColor   = 'var(--text-primary)'
  const levelColor  = 'var(--text-primary)'
  const tagBg       = 'var(--card-bg)'
  const tagBorder   = 'var(--card-border)'
  const tagColor    = 'var(--text-primary)'

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, ease: EASE, delay: rowDelay }}
      whileHover={{ backgroundColor: isDark ? 'rgba(182,255,59,0.03)' : 'rgba(182,255,59,0.05)' }}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '18px 16px' : '20px 28px',
        gap: isMobile ? '12px' : '20px',
        textAlign: isMobile ? 'center' : 'left',
        transition: 'background-color 0.2s ease',
      }}
    >
      {/* LEFT: dot + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '0 0 auto',
          minWidth: isMobile ? 'auto' : '130px',
          justifyContent: isMobile ? 'center' : 'flex-start', }}>
        {/* Accent dot — size reflects level */}
        <motion.div
          whileHover={{ scale: 1.8 }}
          transition={{ type: 'spring', stiffness: 340, damping: 22 }}
          style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: accent,
            opacity: levelOpacity[lang.level],
            flexShrink: 0,
            boxShadow: `0 0 6px ${accent}60`,
          }}
        />
        <motion.span
          whileHover={{ color: 'var(--text-primary)' }}
          transition={{ duration: 0.15 }}
          style={{
            fontSize: isMobile ? '14px' : '15.5px', fontWeight: 650,
            color: nameColor,
            letterSpacing: '-0.01em',
            fontFamily: "'Inter', sans-serif",
            transition: 'color 0.35s ease',
          }}
        >
          {lang.name}
        </motion.span>
      </div>

      {/* CENTER: pip indicator */}
      <PipIndicator
        pips={lang.pips}
        accent={accent}
        delay={rowDelay}
        parentInView={parentInView}
      />

      {/* RIGHT: level + tag */}
      <div style={{ display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flex: '0 0 auto',
        justifyContent: isMobile ? 'center' : 'flex-end', }}>
        <motion.span
          whileHover={{ color: 'var(--accent)' }}
          transition={{ duration: 0.18 }}
          style={{
            fontSize: '11px', fontWeight: 500,
            color: levelColor,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textAlign: 'right',
            transition: 'color 0.35s ease',
          }}
        >
          {lang.level}
        </motion.span>

        {/* CEFR / tag badge */}
        <span style={{
          fontSize: '10px', fontWeight: 700,
          color: tagColor,
          background: tagBg,
          border: `1px solid ${tagBorder}`,
          padding: '2px 8px', borderRadius: '6px',
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          transition: 'color 0.35s ease, background 0.35s ease',
        }}>
          {lang.tag}
        </span>
      </div>
    </motion.div>
  )
}