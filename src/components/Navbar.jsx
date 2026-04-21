import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',     href: '#'          },
  { label: 'Courses',  href: '#programs'  },
  { label: 'Vehicles', href: '#fleet'     },
  { label: 'About',    href: '#instructor'},
  { label: 'Contact',  href: '#booking'   },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on link click
  const handleLink = () => setOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                    px-5 sm:px-8 md:px-12 lg:px-15 py-4
                    transition-all duration-300
                    ${scrolled
                      ? 'bg-dark/98 backdrop-blur-md border-b border-gold/25 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                      : 'bg-dark/95 backdrop-blur-md border-b border-gold/20'
                    }`}
      >
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <img className='lg:w-10 w-8' src="/logo.png" alt="Infinity Motor Training School Logo" loading="eager" />
                    <a href="#" className="font-mono text-lg sm:text-xl font-bold tracking-[3px] text-gold uppercase no-underline z-10">
          Infinity
        </a>
        </div>
        

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 lg:gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-white/70 no-underline text-[12px] lg:text-[13px] tracking-[1.5px]
                           uppercase font-medium transition-colors duration-300 hover:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#booking"
          className="hidden md:inline-flex btn-clip bg-gold text-dark px-5 lg:px-7 py-2.5
                     text-[12px] lg:text-[13px] font-semibold tracking-wide uppercase
                     no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Book Now
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center gap-[5px]
                     w-9 h-9 rounded-sm cursor-pointer bg-transparent border-none z-10"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-gold origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-gold"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-gold origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0        }}
            exit={{    opacity: 0, x: '100%'   }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg flex flex-col
                       pt-20 px-8 pb-10 md:hidden"
          >
            <ul className="flex flex-col gap-2 list-none m-0 p-0 flex-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <a
                    href={href}
                    onClick={handleLink}
                    className="block text-white/80 no-underline text-2xl font-display font-bold
                               py-4 border-b border-white/8 tracking-wide
                               transition-colors duration-200 hover:text-gold"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.35 }}
              href="#booking"
              onClick={handleLink}
              className="btn-clip bg-gold text-dark text-center py-4 text-[14px] font-semibold
                         tracking-widest uppercase no-underline transition-all duration-300
                         hover:bg-gold-light"
            >
              Book Your Slot
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
