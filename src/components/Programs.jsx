import { motion } from 'framer-motion'
import { Reveal, SectionLabel, stagger, fadeUp } from '../hooks/motion'

const PROGRAMS = [
  {
    tag:      'Fast Track',
    title:    '7-Day Intensive',
    desc:     'Perfect for those with basic knowledge looking to polish their skills and gain road-confidence quickly. Comprehensive curriculum covering urban driving, parking, and defensive techniques.',
    duration: '1 Hour Daily',
    format:   '1-on-1 Training',
  },
  {
    tag:      'Comprehensive',
    title:    '14-Day Foundation',
    desc:     'Our most popular course for absolute beginners. We cover everything from basics to complex manoeuvres. Perfect for building a strong foundation in safe driving practices.',
    duration: '1 Hour Daily',
    format:   '1-on-1 Training',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Reveal className="flex justify-center">
            <div className="flex items-center gap-3 text-gold text-[11px] tracking-[4px] uppercase font-semibold mb-3.5">
              <span className="w-6 h-px bg-gold" /> Training Programs
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] lg:text-[52px]
                           font-black text-dark leading-[1.15]">
              Bespoke courses designed<br className="hidden sm:block" /> for every learner
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5 sm:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.15)}
        >
          {PROGRAMS.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative border border-cream2 bg-cream p-8 sm:p-10 overflow-hidden"
            >
              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />

              <span className="inline-block text-[10px] tracking-[2px] uppercase bg-dark text-gold
                               px-3 py-1 mb-5 font-semibold">
                {p.tag}
              </span>
              <h3 className="font-display text-[22px] sm:text-[26px] font-bold text-dark mb-3">{p.title}</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-light leading-[1.7] mb-7">{p.desc}</p>

              <div className="grid grid-cols-2 gap-4 mb-7">
                <div>
                  <small className="text-[10px] tracking-[2px] uppercase text-ink-light block mb-1">Duration</small>
                  <strong className="text-[13px] sm:text-[14px] font-semibold text-dark">{p.duration}</strong>
                </div>
                <div>
                  <small className="text-[10px] tracking-[2px] uppercase text-ink-light block mb-1">Format</small>
                  <strong className="text-[13px] sm:text-[14px] font-semibold text-dark">{p.format}</strong>
                </div>
              </div>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold
                           text-gold uppercase tracking-wide no-underline transition-all duration-300
                           group-hover:gap-4"
                aria-label={`View details for ${p.title} driving course`}
              >
                View Course Details →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
