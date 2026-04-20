import { motion } from 'framer-motion'
import { Reveal, SectionLabel, stagger, fadeUp, slideLeft, slideRight } from '../hooks/motion'

const POINTS = [
  'Personalised 1-on-1 Attention',
  'Patient & Calm Instructor Environment',
  'Comprehensive Road Rule Training',
]

export default function Philosophy() {
  return (
    <section className="bg-cream py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* ── Collage ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={slideLeft}
          className="relative h-[360px] sm:h-[440px] md:h-[480px]"
        >
          <div
            className="absolute left-0 top-0 w-[68%] h-[55%] sm:h-[62%] rounded-sm overflow-hidden border border-black/8"
            style={{ background: 'linear-gradient(135deg, #2c2a25, #1a1814)' }}
          >
            <div className="w-full h-full flex items-center justify-center text-[40px] sm:text-[50px] opacity-60">
              <img src="/2.png" alt="2.png" />
            </div>
          </div>
          <div
            className="absolute right-0 bottom-0 w-[58%] h-[52%] sm:h-[58%] rounded-sm overflow-hidden border border-black/8"
            style={{ background: 'linear-gradient(135deg, #1a1814, #2c2a25)' }}
          >
            <div className="w-full h-full flex items-center justify-center text-[40px] sm:text-[50px] opacity-60">
              <img src="1.png" alt="1.png" />
            </div>
          </div>

          {/* Years badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-[6%] sm:right-[8%] top-1/2 -translate-y-1/2 z-10
                       bg-gold text-dark text-center px-4 py-4 sm:py-5"
          >
            <span className="font-display text-4xl sm:text-5xl font-black leading-none block">4+</span>
            <small className="text-[9px] sm:text-[10px] tracking-[1.5px] uppercase font-semibold leading-tight block mt-1">
              Years of Professional<br />Excellence
            </small>
          </motion.div>
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.1)}
        >
          <SectionLabel>Our Approach</SectionLabel>

          <motion.h2 variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-[48px] lg:text-[52px]
                       font-black leading-[1.15] text-dark mb-5">
            The Precision<br />Philosophy
          </motion.h2>

          <motion.p variants={fadeUp} className="text-ink-light text-sm sm:text-base leading-[1.9] mb-4">
            Infinity Motor Training School isn't just about passing a test — it's about mastering
            the art of safe driving. Led by <strong className="text-ink">Vipin Choudhary</strong>,
            our school is renowned for a uniquely calm and methodical teaching style that builds genuine confidence.
          </motion.p>

          <motion.p variants={fadeUp} className="text-ink-light text-sm sm:text-base leading-[1.9] mb-8">
            We believe that a relaxed mind is the best learner. Our sessions are designed to
            eliminate the anxiety of modern traffic, replacing it with calculated confidence
            and technical precision. Every lesson is tailored to your unique learning style.
          </motion.p>

          <motion.ul variants={fadeUp} className="flex flex-col gap-3 list-none p-0 m-0">
            {POINTS.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-[13px] sm:text-[14px] font-medium text-ink">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gold text-dark rounded-full flex items-center
                                 justify-center text-xs font-bold flex-shrink-0">✓</span>
                {pt}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
