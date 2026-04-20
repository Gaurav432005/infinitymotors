import { motion } from 'framer-motion'
import { Reveal, SectionLabel, stagger, fadeUp, slideLeft, slideRight } from '../hooks/motion'

const STATS = [
  { icon: '🏆', label: 'Expert Experience', value: '4+ Years coaching students across all age groups across India.' },
  { icon: '📍', label: 'Calm Methodology',  value: 'Teaching method crafted from years of trial and first-hand experience.' },
]

export default function Instructor() {
  return (
    <section id="instructor" className="bg-cream2 py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr]
                      gap-12 md:gap-16 lg:gap-20 items-center">

        {/* ── Photo ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={slideLeft}
          className="relative"
        >
          <div
            className="w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center
                       justify-center text-[80px] sm:text-[100px] lg:text-[120px]
                       relative overflow-hidden rounded-sm"
            style={{ background: 'linear-gradient(160deg, #2c2a25 0%, #1a1814 100%)' }}
          >
            👨‍🏫
            <div
              className="absolute bottom-0 left-0 right-0 h-20 sm:h-24"
              style={{ background: 'linear-gradient(transparent, #EDE8DF)' }}
            />
          </div>
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.1)}
        >
          <SectionLabel>Meet Your Mentor</SectionLabel>

          <motion.h2 variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-[44px] lg:text-[52px]
                       font-black text-dark leading-[1.15] mb-0">
            Vipin Choudhary
          </motion.h2>

          <motion.blockquote variants={fadeUp}
            className="font-display text-lg sm:text-xl italic text-ink-light border-l-[3px]
                       border-gold pl-5 sm:pl-6 my-6 sm:my-7 leading-[1.7] m-0">
            "Patience is the foundation of a safe driver."
          </motion.blockquote>

          <motion.div variants={fadeUp}
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 mb-7 sm:mb-9">
            {STATS.map((s) => (
              <div key={s.label} className="p-4 sm:p-5 bg-white border border-cream2">
                <small className="text-[10px] tracking-[2px] uppercase text-ink-light block mb-1">
                  {s.icon} {s.label}
                </small>
                <strong className="text-[13px] sm:text-[14px] font-semibold text-dark leading-snug block">
                  {s.value}
                </strong>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-gold text-base sm:text-[18px] tracking-[2px]" aria-hidden="true">★★★★★</span>
            <p className="text-[12px] sm:text-[13px] text-ink-light">
              <strong className="text-dark">4.9 Rating</strong> · Licensed Instructor · RTO Certified
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
