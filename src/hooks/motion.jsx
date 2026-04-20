import { motion } from 'framer-motion'

/* ─── Animation Variants ─────────────────────────────────────── */

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const stagger = (delay = 0.1) => ({
  visible: { transition: { staggerChildren: delay } },
})

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

/* ─── Reusable Reveal Wrapper ────────────────────────────────── */
// Wraps any content and reveals it on scroll using IntersectionObserver (via Framer Motion viewport)

export function Reveal({ children, variants = fadeUp, delay = 0, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible?.transition, delay } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section Label (gold tag used in every section) ─────────── */
export function SectionLabel({ children }) {
  return (
    <Reveal className="flex items-center gap-3 text-gold text-[11px] tracking-[4px] uppercase font-semibold mb-3.5">
      <span className="w-6 h-px bg-gold flex-shrink-0" />
      {children}
    </Reveal>
  )
}
