import { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import { HERO_IMAGE_LAYOUT_ID } from '../data/sharedKeys'

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/mahammad-mashood' },
  { label: 'GitHub',    href: 'https://github.com/mashoodrenja17' },
  { label: 'WhatsApp',  href: 'https://wa.me/917349596313' },
]

// ── Slow floating animation via rAF ──
function useFloat(range = 10, speed = 0.0008) {
  const y = useMotionValue(0)
  const t = useRef(0)
  useAnimationFrame((time) => {
    t.current = time
    y.set(Math.sin(time * speed) * range)
  })
  return y
}

export default function Contact() {
  const floatY = useFloat(7, 0.00055)
  const [focused, setFocused] = useState(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1600)
  }

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{
          width: '100%',
          background: '#0e0e0e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 40px 100px',
          position: 'relative',
          overflow: 'hidden',
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

        {/* ── Glow ── */}
        <div
          style={{
            position: 'absolute', top: '40%', left: '28%',
            transform: 'translate(-50%,-50%)',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(182,255,59,0.04) 0%, transparent 70%)',
            pointerEvents: 'none', zIndex: 0,
          }}
        />

        <div
          style={{
            position: 'relative', zIndex: 2,
            width: '100%', maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.35fr)',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* ══════════════════════════════
              LEFT — floating portrait
          ══════════════════════════════ */}
          <motion.div
            style={{
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
              y: floatY,
            }}
          >
            {/* Shared image — same layoutId as Hero & About */}
            <motion.div
              layoutId={HERO_IMAGE_LAYOUT_ID}
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '3/4',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(160deg,#1a1a1a,#111)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(182,255,59,0.05)',
              }}
            >
              {/*
                Replace with your photo:
                import photo from '../assets/mashood.jpg'
                <img src={photo} alt="Mahammad Mashood"
                  style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center'}} />
              */}
              <div
                style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '12px',
                  background: 'linear-gradient(160deg,#1c1c1c,#141414)',
                }}
              >
                <div
                  style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: 'rgba(182,255,59,0.08)',
                    border: '2px dashed rgba(182,255,59,0.18)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '26px',
                  }}
                >
                  📷
                </div>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Add your photo
                </span>
              </div>
            </motion.div>

            {/* Availability badge */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 18px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{ position: 'relative', width: '7px', height: '7px' }}>
                <span style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: '#B6FF3B', opacity: 0.5,
                  animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
                }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT — content stack
          ══════════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

            {/* ── Section header ── */}
            <motion.div {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>&lt;</span>
                <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B6FF3B', fontWeight: 600, fontFamily: 'monospace' }}>
                  CONNECT
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', fontFamily: 'monospace' }}>/&gt;</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 58px)',
                  fontWeight: 900, color: '#ffffff',
                  letterSpacing: '-0.035em', lineHeight: 0.95,
                  margin: 0, fontFamily: "'Inter', sans-serif",
                }}
              >
                Let's Work{' '}
                <span style={{ color: '#B6FF3B' }}>Together</span>
              </h2>

              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg,#B6FF3B,transparent)', borderRadius: '2px' }} />

              <p
                style={{
                  fontSize: '13.5px', lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.35)',
                  maxWidth: '420px', margin: 0, fontWeight: 400,
                }}
              >
                I'm always interested in hearing about new opportunities,
                collaborations, or simply having a conversation about
                technology and innovation.
              </p>
            </motion.div>

            {/* ── Block 1: Get in Touch ── */}
            <motion.div {...fadeUp(0.08)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>
                Get in Touch
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {/* Email */}
                <ContactItem
                  icon="📧"
                  label="Email"
                  value="mashoodrenja17@gmail.com"
                  href="mailto:mashoodrenja17@gmail.com"
                  isLink
                />
                {/* Phone */}
                <ContactItem
                  icon="📞"
                  label="Phone"
                  value="+91 7349596313"
                  href="tel:+917349596313"
                />
              </div>
            </motion.div>

            {/* ── Hairline ── */}
            <motion.div
              {...fadeUp(0.12)}
              style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)' }}
            />

            {/* ── Block 2: Social Links ── */}
            <motion.div {...fadeUp(0.14)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>
                Find me online
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                {socials.map((s, i) => (
                  <SocialLink key={s.label} {...s} index={i} />
                ))}
              </div>
            </motion.div>

            {/* ── Hairline ── */}
            <motion.div
              {...fadeUp(0.16)}
              style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)' }}
            />

            {/* ── Block 3: Form ── */}
            <motion.div {...fadeUp(0.18)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>
                Send a Message
              </span>

              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <Field id="name"    label="Name"    type="text"  placeholder="Mahammad"           focused={focused} setFocused={setFocused} />
                  <Field id="email"   label="Email"   type="email" placeholder="you@example.com"    focused={focused} setFocused={setFocused} />
                </div>
                <Field id="subject" label="Subject" type="text"  placeholder="Project inquiry…"    focused={focused} setFocused={setFocused} />
                <Field id="message" label="Message" type="textarea" placeholder="Tell me about your project, idea, or opportunity…" focused={focused} setFocused={setFocused} rows={5} />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={!sent ? { y: -3, boxShadow: '0 0 0 1px rgba(182,255,59,0.35), 0 12px 32px rgba(182,255,59,0.12)' } : {}}
                  whileTap={!sent ? { scale: 0.97 } : {}}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  style={{
                    marginTop: '6px',
                    padding: '14px 32px',
                    borderRadius: '999px',
                    background: sent ? 'rgba(182,255,59,0.12)' : '#B6FF3B',
                    color: sent ? '#B6FF3B' : '#0e0e0e',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: sent ? '1px solid rgba(182,255,59,0.3)' : 'none',
                    cursor: sending || sent ? 'default' : 'pointer',
                    alignSelf: 'flex-start',
                    outline: 'none',
                    opacity: sending ? 0.7 : 1,
                    transition: 'background 0.3s ease, color 0.3s ease, opacity 0.2s ease',
                  }}
                >
                  {sent ? '✓ Message sent' : sending ? 'Sending…' : 'Send Message →'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════
          Footer
      ══════════════════════════════ */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        style={{
          width: '100%',
          background: '#0e0e0e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          padding: '0 40px 52px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1100px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', marginBottom: '36px' }} />
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>
          © 2026 Mahammad Mashood
        </span>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.1)', letterSpacing: '0.04em' }}>
          Built with precision and passion.
        </span>
      </motion.footer>

      <style>{`
        @keyframes ping { 75%,100% { transform:scale(2.2); opacity:0; } }
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #151515 inset !important;
          -webkit-text-fill-color: rgba(255,255,255,0.75) !important;
        }
      `}</style>
    </>
  )
}

/* ─────────────────────────────────────────
   ContactItem
───────────────────────────────────────── */
function ContactItem({ icon, label, value, href, isLink }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 0',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
          background: 'rgba(182,255,59,0.05)',
          border: '1px solid rgba(182,255,59,0.09)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px',
        }}
      >
        {icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          {label}
        </span>
        <motion.span
          whileHover={{ color: isLink ? '#B6FF3B' : '#ffffff' }}
          transition={{ duration: 0.18 }}
          style={{
            fontSize: '14px', fontWeight: 600,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '-0.01em',
            textDecoration: isLink ? 'underline' : 'none',
            textDecorationColor: 'rgba(182,255,59,0)',
            textUnderlineOffset: '3px',
            transition: 'text-decoration-color 0.2s',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}
        >
          {value}
        </motion.span>
      </div>
    </motion.a>
  )
}

/* ─────────────────────────────────────────
   SocialLink
───────────────────────────────────────── */
function SocialLink({ label, href, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE, delay: index * 0.07 }}
      whileHover={{ y: -3, color: '#B6FF3B' }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '9px 18px',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        color: 'rgba(255,255,255,0.45)',
        fontSize: '12.5px',
        fontWeight: 550,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        cursor: 'pointer',
        willChange: 'transform',
        transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
        borderColor: hovered ? 'rgba(182,255,59,0.15)' : 'rgba(255,255,255,0.06)',
        background: hovered ? 'rgba(182,255,59,0.04)' : 'rgba(255,255,255,0.02)',
      }}
    >
      {label}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.18, ease: EASE }}
        style={{ fontSize: '11px', display: 'inline-block' }}
      >
        ↗
      </motion.span>
    </motion.a>
  )
}

/* ─────────────────────────────────────────
   Field — input + textarea
───────────────────────────────────────── */
function Field({ id, label, type, placeholder, focused, setFocused, rows }) {
  const isActive = focused === id
  const isTextarea = type === 'textarea'
  const Tag = isTextarea ? 'textarea' : 'input'

  return (
    <motion.div
      animate={{ scale: isActive ? 1.008 : 1 }}
      transition={{ duration: 0.22, ease: EASE }}
      style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}
    >
      <label
        htmlFor={id}
        style={{
          fontSize: '10.5px',
          color: isActive ? 'rgba(182,255,59,0.7)' : 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
          letterSpacing: '0.13em',
          fontWeight: 600,
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        type={isTextarea ? undefined : type}
        placeholder={placeholder}
        rows={isTextarea ? rows : undefined}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        style={{
          width: '100%',
          background: '#151515',
          border: `1px solid ${isActive ? 'rgba(182,255,59,0.35)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: '12px',
          padding: isTextarea ? '14px 16px' : '12px 16px',
          fontSize: '13.5px',
          color: 'rgba(255,255,255,0.75)',
          outline: 'none',
          resize: isTextarea ? 'vertical' : undefined,
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.6,
          transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
          boxShadow: isActive
            ? '0 0 0 3px rgba(182,255,59,0.07), 0 0 16px rgba(182,255,59,0.04)'
            : '0 0 0 0px transparent',
          caretColor: '#B6FF3B',
        }}
      />

      <style>{`
        #${id}::placeholder { color: rgba(255,255,255,0.18); }
      `}</style>
    </motion.div>
  )
}