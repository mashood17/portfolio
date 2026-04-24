import { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { HERO_IMAGE_LAYOUT_ID } from '../data/sharedKeys'
import photo from '../assets/mashood.jpeg'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import { useResponsive } from '../hooks/useResponsive'

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/mahammad-mashood', icon: <FaLinkedin /> },
  { label: 'GitHub',    href: 'https://github.com/mashood17', icon: <FaGithub /> },
  { label: 'WhatsApp',  href: 'https://wa.me/917349596313', icon: <FaWhatsapp /> },
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
  const { isMobile } = useResponsive()
  const floatY = useFloat(7, 0.00055)
  const [focused, setFocused] = useState(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const formRef = useRef()

  function handleSubmit(e) {
  e.preventDefault()
  setSending(true)

  emailjs.sendForm(
    'service_9o28mrl',
    'template_91vk28b',
    formRef.current,
    'QQX0pum_hfiITk3OI'
  )
  .then(() => {
    setSending(false)
    setSent(true)
    formRef.current.reset()
  })
  .catch((error) => {
    console.error(error)
    setSending(false)
    alert('Failed to send message')
  })
}

  const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ['start start', 'end end'],
    })

    const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.96])



  return (
    
    <>
      <motion.section
        ref={sectionRef}
        style={{
          width: '100%',
          backgroundColor: 'var(--bg-primary)',
          transition: 'background-color 0.35s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '80px 20px 60px' : '120px 40px 100px',
          position: 'relative',
          overflow: 'hidden',
          scale,
        }}
        id="contact"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE }}
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
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) minmax(0,1.35fr)',
            gap: isMobile ? '40px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* ══════════════════════════════
              LEFT — floating portrait
          ══════════════════════════════ */}
          <motion.div
            style={{
              position: isMobile ? 'relative' : 'sticky',
              top: isMobile ? '0px' : '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
              y: floatY,
              scale: 1.02,
            }}
          >
            {/* Shared image — same layoutId as Hero & About */}
           <motion.div
              layoutId={HERO_IMAGE_LAYOUT_ID}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                maxWidth: isMobile ? '220px' : '340px',
                aspectRatio: '3/4',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(160deg,#1a1a1a,#111)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 6px 18px rgba(0,0,0,0.18)',               position: 'relative',
              }}
            >
              {/* 🔥 IMAGE */}
              <motion.img
                src={photo}
                alt="Profile"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />

              {/* 🔥 SUBTLE OVERLAY (premium touch) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35))',
                  pointerEvents: 'none',
                }}
              />

              {/* 🔥 GLOW EDGE (premium effect) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '28px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 6px 18px rgba(0,0,0,0.18)',                  pointerEvents: 'none',
                }}
              />
            </motion.div>

            {/* Availability badge */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 18px', borderRadius: '999px',
                background: 'var(--input-bg)',
                border: '1px solid var(--card-border)',
                }}
            >
              <div style={{ position: 'relative', width: '7px', height: '7px' }}>
                <span style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--card-border)', opacity: 0.5,
                  animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
                }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent)' }} />
              </div>
              <span style={{ fontSize: '11.5px', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT — content stack
          ══════════════════════════════ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: isMobile ? '24px 18px' : '40px',
              gap: isMobile ? '40px' : '60px',
              borderRadius: '24px',
              background: 'var(--input-bg)',
              border: '1px solid var(--card-border)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 6px 18px rgba(0,0,0,0.18)',          
            }}
          >

            {/* ── Section header ── */}
            <motion.div {...fadeUp(0)} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
            }}>
              

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 58px)',
                  fontWeight: 900, color: 'var(--fg)',
                  letterSpacing: '-0.035em', lineHeight: 0.95,
                  margin: 0, fontFamily: "'Inter', sans-serif",
                }}
              >
                Let's Work{' '}
                <span style={{ color: 'var(--accent)' }}>Together</span>
              </h2>

              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg,var(--accent) 0%,transparent)', borderRadius: '2px' }} />

              <p
                style={{
                  fontSize: '13.5px', lineHeight: 1.85,
                  color: 'var(--text-primary)',
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
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 600 }}>
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
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 600 }}>
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
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 600 }}>
                Send a Message
              </span>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
                  <Field id="name"    label="Name"    type="text"  placeholder="Name"           focused={focused} setFocused={setFocused} />
                  <Field id="email"   label="Email"   type="email" placeholder="Email"    focused={focused} setFocused={setFocused} />
                </div>
                <Field id="subject" label="Subject" type="text"  placeholder="Project inquiry…"    focused={focused} setFocused={setFocused} />
                <Field id="message" label="Message" type="textarea" placeholder="Tell me about your project, idea, or opportunity…" focused={focused} setFocused={setFocused} rows={5} />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={!sent ? {
                    y: -4,
                    scale: 1.02,
                  } : {}}
                  whileTap={!sent ? { scale: 0.97 } : {}}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  style={{
                    marginTop: '6px',
                    padding: '14px 32px',
                    borderRadius: '999px',
                    background: sent ? 'rgba(182,255,59,0.12)' : 'rgba(223, 228, 214, 0.07)',
                    color: 'var(--accent)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: sent
                      ? '1px solid rgba(182,255,59,0.5)'   // softer neon
                      : '1px solid var(--card-border)',    // consistent border,
                    cursor: sending || sent ? 'default' : 'pointer',
                    alignSelf: isMobile ? 'center' : 'flex-start',
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
          backgroundColor: 'var(--card-bg)',
            transition: 'background-color 0.35s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          padding: isMobile ? '0 20px 40px' : '0 40px 52px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1100px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)', marginBottom: '36px' }} />
        <span style={{ fontSize: '12px', color: 'var(--text-primary)' }}>
         <motion.span
            whileHover={{ color: 'var(--accent)' }}
            transition={{ duration: 0.2 }}
          >
            © 2026 Mahammad Mashood
          </motion.span>
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
          Built with precision and passion.
        </span>
        <span style={{
          fontSize: '10px',
          color: 'var(--text-primary)',
          letterSpacing: '0.08em'
        }}>
          Crafted with intent · Designed for impact
        </span>
      </motion.footer>

      <style>{`
        @keyframes ping { 75%,100% { transform:scale(2.2); opacity:0; } }
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px var(--input-bg) inset !important;
          -webkit-text-fill-color: var(--text-primary) !important;
          transition: background-color 5000s ease-in-out 0s;
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
      whileHover={{ x: 4, y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 0',
        borderBottom: '1px solid var(--card-border)',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
          background: 'var(--input-bg)',
          border: '1px solid var(--card-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px',
        }}
      >
        {icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          {label}
        </span>
        <motion.span
          whileHover={{ color: 'var(--text-primary)' }}
          transition={{ duration: 0.18 }}
          style={{
            fontSize: '14px', fontWeight: 600,
            color: 'var(--text-primary)',
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
function SocialLink({ label, href, icon, index }) {
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
      whileHover={{ y: -3, color: 'var(--accent)', boxShadow: '0 2px 6px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.2)' }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '10px 20px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        color: 'var(--text-primary)',
        fontSize: '12.5px',
        fontWeight: 550,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        cursor: 'pointer',
        willChange: 'transform',
        transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
        borderColor: 'var(--card-border)',
        background: 'var(--input-bg)',
        border: '1px solid var(--card-border)',
        }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '14px' }}>{icon}</span>
        {label}
      </span>
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
  const isActive = focused === id   // ✅ REQUIRED

  const isTextarea = type === 'textarea'
  const Tag = isTextarea ? 'textarea' : 'input'

  return (
    <motion.div
      animate={{ scale: isActive ? 1.015 : 1 }}
      transition={{ duration: 0.22 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}
    >
      <label
        htmlFor={id}
        style={{
          fontSize: '10.5px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </label>

      <Tag
        id={id}
        name={id}
        required
        placeholder={placeholder}
        rows={isTextarea ? rows : undefined}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        style={{
          width: '100%',
          background: 'var(--input-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: isTextarea ? '14px 16px' : '12px 16px',
          color: 'var(--text-primary)',
          outline: 'none',

          boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 6px 18px rgba(0,0,0,0.18)',
          transition: 'all 0.2s ease',
        }}
      />
    </motion.div>
  )
}