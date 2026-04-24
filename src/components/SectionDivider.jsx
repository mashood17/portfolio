import { motion } from 'framer-motion'
import { useResponsive } from '../hooks/useResponsive'

export default function SectionDivider() {
  const { isMobile } = useResponsive()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.025), transparent)',
        backgroundColor: 'var(--bg)',
        transition: 'background-color 0.35s ease',
        padding: isMobile ? '40px 20px' : '88px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* ── Left accent block ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            transformOrigin: 'left',
            width: isMobile ? '32px' : '48px',
            height: '2px',
            borderRadius: '2px',
            background: 'var(--accent)',
            flexShrink: 0,
          }}
        />

        {/* ── Main line — left-weighted fade ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          style={{
            transformOrigin: 'left',
            flex: 1,
            height: '1px',
          }}
        />

        {/* ── Right side: section marker text ── */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          {/* Three stacked micro-lines (like a rhythm marker) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {[1, 0.5, 0.25].map((opacity, i) => (
              <div
                key={i}
                style={{
                  width: isMobile ? `${16 - i * 4}px` : `${24 - i * 6}px`,
                  height: '1.5px',
                  borderRadius: '2px',
                  background: 'var(--accent)',
                  opacity,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}