import { motion } from 'framer-motion'
import { Reveal, stagger, fadeUp } from '../hooks/motion'

const TESTIMONIALS = [
  {
    text:    "Infinity Motor Driving School is hands-down the best choice for new drivers. The cars are kept in impeccable condition, making the learning process smooth and safe. My trainer was incredibly friendly and patient, creating a stress-free environment that built my confidence quickly. Their professional approach and personalized tips truly set them apart. I highly recommend them for anyone seeking a top-tier driving experience!",
    name:    'Shubam',
    initial: 'S',
    rating:  5,
  },
  {
    text:    'Driving training was excellent. Mr. Vipin Kumar is a very patient, skilled, and professional instructor. His teaching method is clear and confidence-building. I had a great learning experience with Infinity Motor Training School.',
    name:    'Sandeep Patel',
    initial: 'S',
    rating:  5,
  },
  {
    text:    'My experience to infinity motor training is very good. The person is very polite and gentle and teaches very well . From day 1 when i have joined the driving classes I did so many mistakes .from day 2 also same mistake but my teacher tell my mistakes where I doing. Who build my confidence. Now I can smoothly drive a car without any fear. Thank you teacher once again',
    name:    'Neha Giri',
    initial: 'N',
    rating:  5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Reveal className="flex justify-center">
            <div className="flex items-center gap-3 text-gold text-[11px] tracking-[4px] uppercase font-semibold mb-3.5">
              <span className="w-6 h-px bg-gold" /> Student Stories
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] lg:text-[52px]
                           font-black text-dark leading-[1.15]">
              What our students say
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.12)}
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-cream border border-cream2 p-7 sm:p-9"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="text-gold text-[14px] tracking-[2px] mb-4" aria-label={`${t.rating} star rating`}>★★★★★</div>
              <p className="text-[13px] sm:text-[14px] leading-[1.8] text-ink italic mb-6 sm:mb-7" itemProp="reviewBody">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark text-gold
                                flex items-center justify-center text-sm sm:text-base
                                font-bold flex-shrink-0"
                     aria-hidden="true">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[13px] sm:text-[14px] font-semibold text-dark" itemProp="author">{t.name}</div>
               </div>
              </div>
              <meta itemProp="ratingValue" content={t.rating} />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
