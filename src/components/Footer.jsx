import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, stagger, fadeUp } from '../hooks/motion'

const QUICK_LINKS = [
  { label: 'Home',     href: '#'          },
  { label: 'Courses',  href: '#programs'  },
  { label: 'Vehicles', href: '#fleet'     },
  { label: 'About',    href: '#instructor'},
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email.trim()) return
    alert('Subscribed!')
    setEmail('')
  }

  return (
    <footer className="bg-[#080807] border-t border-white/6 px-5 sm:px-8 md:px-12 lg:px-15 pt-14 sm:pt-16 pb-8 sm:pb-10" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-12 mb-10 sm:mb-12">

        {/* Brand */}
        <Reveal className="col-span-2 md:col-span-1">
          <span className="font-mono text-lg sm:text-xl font-bold tracking-[3px] text-gold uppercase" itemProp="name">Infinity</span>
          <p className="text-white/35 text-[12px] sm:text-[13px] leading-[1.8] mt-4 max-w-[280px]" itemProp="description">
            Infinity Motor Training School — where precision meets patience.
            Serving Vasant Kunj, New Delhi since 2022. Rated 4.9★ by 500+ successful learners.
          </p>
          <meta itemProp="telephone" content="+919871141508" />
          <meta itemProp="url" content="https://infinitydrivingschool.com" />
        </Reveal>

        {/* Quick Links */}
        <Reveal delay={0.05}>
          <h4 className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-white/40 mb-4 sm:mb-5 font-medium">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-2.5 list-none p-0 m-0">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}
                   className="text-white/50 no-underline text-[12px] sm:text-[13px]
                              transition-colors duration-300 hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Connect */}
        <Reveal delay={0.1}>
          <h4 className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-white/40 mb-4 sm:mb-5 font-medium">
            Connect
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-2.5 list-none p-0 m-0">
          
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/infinitymotortrainingschool/"
                   className="text-white/50 no-underline text-[12px] sm:text-[13px]
                              transition-colors duration-300 hover:text-gold">
                  Instagram
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919871141508"
                    className="text-white/50 no-underline text-[12px] sm:text-[13px]
                                transition-colors duration-300 hover:text-gold">    
                  Whatsapp
                </a>
          </ul>
        </Reveal>

      </div>

      {/* Bottom bar */}
      <Reveal>
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center
                        gap-2 sm:gap-3 pt-6 sm:pt-7 border-t border-white/6">
          <p className="text-white/25 text-[11px] sm:text-[12px] text-center sm:text-left">
            © 2026 Infinity Motor Training School. All rights reserved. | Registered in Delhi NCR
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
