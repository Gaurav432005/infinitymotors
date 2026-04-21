import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const AVATARS = ['A', 'R', 'V', 'M']

export default function Hero() {
  return (
    <section role="banner" className="min-h-screen bg-dark grid md:grid-cols-2 items-center
                        px-5 sm:px-8 md:px-12 lg:px-15 pt-28 sm:pt-32 pb-16 sm:pb-20
                        gap-12 md:gap-16 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(200,151,58,0.08) 0%, transparent 60%)' }}
      />

      {/* ── LEFT ── */}
      <div className="relative z-10">
        <motion.div {...fadeUp(0.1)}
          className="flex items-center gap-3 text-gold text-[10px] sm:text-[11px]
                     tracking-[4px] uppercase font-semibold mb-5">
          <span className="w-8 h-px bg-gold flex-shrink-0" />
          Premium Driving Education
        </motion.div>

        <motion.h1 {...fadeUp(0.25)}
          className="font-display text-4xl sm:text-5xl md:text-[58px] lg:text-[68px]
                     leading-[1.08] text-white font-black mb-5 sm:mb-6">
          Learn Driving<br />
          with <em className="text-gold not-italic">Confidence</em>
        </motion.h1>

        <motion.p {...fadeUp(0.4)}
          className="text-white/55 text-sm sm:text-base leading-[1.8]
                     max-w-[420px] mb-8 sm:mb-10">
          Experience professional coaching with Vipin Choudhary. Master the roads of
          Vasant Kunj in premium modern vehicles. Rated 4.9★ by 500+ successful learners.
        </motion.p>

        <motion.div {...fadeUp(0.52)}
          className="flex gap-3 sm:gap-4 items-center mb-10 sm:mb-14 flex-wrap">
          <a
            href="#booking"
            className="btn-clip bg-gold text-dark px-6 sm:px-8 py-3 text-[12px] sm:text-[13px]
                       font-semibold tracking-wide uppercase no-underline transition-all
                       duration-300 hover:bg-gold-light hover:-translate-y-0.5"
            aria-label="Book a driving lesson at Infinity Motor Training School"
          >
            Book Now
          </a>
          <a
            href="tel:9871141508"
            className="text-white border border-white/40 px-6 sm:px-8 py-3 text-[12px] sm:text-[13px]
                       font-medium tracking-wide uppercase no-underline transition-all
                       duration-300 hover:border-gold hover:text-gold"
            aria-label="Call Infinity Motor Training School at 9871141508"
          >
            Call Now
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.65)}
          className="flex items-center gap-3 border-t border-white/10 pt-6 sm:pt-7">
          <div className="flex">
            {AVATARS.map((l) => (
              <span
                key={l}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-mid border-2 border-dark
                           flex items-center justify-center text-gold font-bold text-xs
                           -ml-2.5 first:ml-0"
                aria-hidden="true"
              >
                {l}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-[12px] sm:text-[13px] leading-[1.5]">
            Trusted by <span className="text-white font-semibold">500+ successful learners</span><br />
            in Delhi and NCR region
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT ── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0  }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="hidden md:block relative"
      >
        <div className="rounded-sm overflow-hidden border border-gold/20 relative">
          <div
            className="w-full h-[380px] lg:h-[420px] flex items-center justify-center
                       relative overflow-hidden text-[80px] lg:text-[100px] "
            style={{ background: 'linear-gradient(135deg, #1a1814 0%, #2c2a25 50%, #1a1814 100%)' }}
          >
            <img src="/hero.png" alt="Professional driving instructor teaching a student in premium vehicle at Infinity Motor Training School" loading="eager" />
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-5 left-5 flex items-center gap-3.5
                       bg-dark/90 backdrop-blur-md border border-gold/30 p-4 rounded-sm"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gold rounded-sm flex items-center
                            justify-center text-xl flex-shrink-0">
              🕐
            </div>
            <div className="text-white">
              <small className="text-[10px] tracking-[2px] uppercase text-white/40 block">Class Schedule</small>
              <strong className="text-sm font-semibold">8:00 AM – 5:00 PM</strong>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
