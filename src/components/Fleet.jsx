import { motion } from 'framer-motion'
import { Reveal, SectionLabel, stagger, fadeUp } from '../hooks/motion'

const FLEET = [
  {
    image: '/1.png',
    type:  'Available Now',
    name:  'Modern Crossover',
    desc:  'Spacious cabin, excellent visibility and smooth handling — ideal for new learners building confidence.',
  },
  {
    image: '/2.png',
    type:  'Most Popular',
    name:  'Premium Hatchback',
    desc:  'The perfect size for navigating tight city traffic. Responsive controls and agile performance.',
  },
  {
    image: '/3.png',
    type:  'Advanced',
    name:  'Dynamic Compact',
    desc:  'Train on a dynamic, precision vehicle. Excellent for mastering advanced driving and parking skills.',
  },
]

export default function Fleet() {
  return (
    <section id="fleet" className="bg-dark py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <SectionLabel>Our Premium Fleet</SectionLabel>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] lg:text-[52px]
                           font-black text-white leading-[1.15]">
              Drive the Best,<br />Learn the Best
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/40 mt-3 text-sm">
              Learn in the latest modern vehicles equipped with dual controls for absolute safety.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.12)}
        >
          {FLEET.map((car) => (
            <motion.article
              key={car.name}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(200,151,58,0.3)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-dark2 border border-white/6 overflow-hidden"
            >
              <div
                className="h-[160px] sm:h-[180px] flex items-center justify-center
                           text-[50px] sm:text-[60px] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #2c2a25, #1a1814)' }}
              >
                <img src={car.image} alt={`${car.name} training vehicle with dual controls at Infinity Motor Training School`} />
                <span className="absolute top-3 left-3 text-[9px] tracking-[2px] uppercase
                                 bg-gold text-dark px-2.5 py-1 font-bold">
                  {car.type}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-5"
                     style={{ background: 'linear-gradient(transparent, #1A1814)' }} />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-white text-[15px] sm:text-[16px] mb-2">{car.name}</h3>
                <p className="text-white/40 text-[12px] sm:text-[13px] leading-[1.6]">{car.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
