import { Reveal, stagger, fadeUp } from '../hooks/motion'
import { motion } from 'framer-motion'

const FEATURES = [
  { icon: '🎓', title: 'Certified Trainers',  desc: 'Government licensed instructors with years of experience in professional driving education' },
  { icon: '🛡️', title: 'Safe Learning',       desc: 'Dual-control safety equipped vehicles for peace of mind and maximum safety during training'  },
  { icon: '🌱', title: 'Beginner Friendly',   desc: 'Structured programs designed for all levels of drivers from absolute beginners to advanced'   },
]

export default function FeaturesBar() {
  return (
    <div className="bg-white border-b border-cream2">
      <motion.div
        className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger(0.12)}
      >
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.title}
            variants={fadeUp}
            className={`flex items-start gap-4 p-7 sm:p-9 md:px-10 transition-colors duration-300
                        hover:bg-cream
                        ${i < FEATURES.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-cream2' : ''}`}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-dark rounded-sm
                            flex items-center justify-center text-lg sm:text-xl"
                 aria-hidden="true">
              {f.icon}
            </div>
            <div>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-dark mb-1">{f.title}</h3>
              <p className="text-[12px] sm:text-[13px] text-ink-light leading-[1.6]">{f.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
