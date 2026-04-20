import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, SectionLabel, stagger, fadeUp } from '../hooks/motion'

/* ── Config ──────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '919871141508' // country code + number, no +

const TIME_SLOTS = [
  '8:00 AM – 9:00 AM',
  '9:00 AM – 10:00 PM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '1:00 PM – 2:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',

]

const COURSES = ['7-Day Intensive', '14-Day Foundation']

const CONTACT_CARDS = [
  { label: '📞 Direct Call',    value: '9871141508',               sub: null },
  { label: '✉️ Drop Us a Mail', value: 'vipinchoudhary5528@gmail.com', sub: null },
  { label: '📍 Find Us',        value: 'Vasant Kunj, New Delhi',  sub: 'Near the community centre, South-West Delhi' },
]

/* ── Field Styles (shared) ───────────────────────────────────── */
const fieldCls = `
  bg-white/6 border border-white/10 text-white px-4 py-3.5
  font-sans text-[14px] outline-none transition-colors duration-300
  focus:border-gold placeholder:text-white/20 w-full
`.trim()

/* ── Helpers ─────────────────────────────────────────────────── */
function buildWhatsAppURL({ name, phone, course, date, slot }) {
  const msg = [
    `Hello! I'd like to book a driving lesson at Infinity Motor Training School.`,
    ``,
    `*Name:* ${name || '—'}`,
    `*Phone:* ${phone || '—'}`,
    `*Course:* ${course || '—'}`,
    `*Start Date:* ${date || '—'}`,
    `*Time Slot:* ${slot}`,
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

/* ── Component ───────────────────────────────────────────────── */
const INIT = { name: '', phone: '', course: '', date: '', slot: TIME_SLOTS[0] }

export default function Booking() {
  const [form, setForm] = useState(INIT)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert('Please fill in your name and phone number.')
      return
    }
    window.open(buildWhatsAppURL(form), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="booking" className="bg-dark py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-15">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px]
                      gap-12 md:gap-16 items-start">

        {/* ── Form ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger(0.1)}
        >
          <SectionLabel>Start Your Journey</SectionLabel>

          <motion.h2 variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-[44px] lg:text-[48px]
                       text-white font-black mb-4 leading-[1.1]">
            Book Your<br />First Lesson
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/50 mb-8 sm:mb-10 text-sm sm:text-base">
            Fill in your details and preferred slot — we'll connect on WhatsApp instantly.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={fieldCls}
                />
              </Field>
              <Field label="Phone Number">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9XXXXXXXXX"
                  type="tel"
                  className={fieldCls}
                />
              </Field>
            </div>

            {/* Course */}
            <Field label="Course Preference">
              <div className="relative">
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={`${fieldCls} pr-10`}
                >
                  <option value="" style={{ background: '#1A1814' }}>Select a program</option>
                  {COURSES.map((c) => (
                    <option key={c} style={{ background: '#1A1814' }}>{c}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">▾</span>
              </div>
            </Field>

            {/* Date + Slot */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Preferred Start Date">
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className={fieldCls}
                />
              </Field>
              <Field label="Preferred Time Slot">
                <div className="relative">
                  <select
                    name="slot"
                    value={form.slot}
                    onChange={handleChange}
                    className={`${fieldCls} pr-10`}
                  >
                    {TIME_SLOTS.map((s) => (
                      <option key={s} style={{ background: '#1A1814' }}>{s}</option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">▾</span>
                </div>
              </Field>
            </div>

            {/* Submit → WhatsApp */}
          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{ y: -2, backgroundColor: '#E8B84B' }}
            whileTap={{ scale: 0.97 }}
            className="btn-clip bg-gold text-dark px-8 sm:px-10 py-4 text-[13px] sm:text-[14px]
                       font-semibold tracking-wide uppercase w-fit cursor-pointer border-none
                       flex items-center gap-2.5 transition-colors duration-300"
            aria-label="Submit booking form and contact via WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Contact Card ── */}
        <Reveal delay={0.2}>
          <div className="bg-dark2 border border-gold/20 p-8 sm:p-10">
            <h3 className="font-display text-xl sm:text-2xl text-white mb-7 sm:mb-8">Contact Details</h3>
            {CONTACT_CARDS.map((c, i, arr) => (
              <div
                key={c.label}
                className={`${i < arr.length - 1 ? 'mb-6 pb-6 border-b border-white/6' : ''}`}
              >
                <small className="text-[10px] tracking-[2px] uppercase text-gold block mb-1.5">
                  {c.label}
                </small>
                <strong className="text-white text-[14px] sm:text-[16px] font-medium block break-all">
                  {c.value}
                </strong>
                {c.sub && <p className="text-white/40 text-[12px] sm:text-[13px] mt-1">{c.sub}</p>}
              </div>
            ))}

            {/* WhatsApp quick link */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-2.5 text-[13px] font-semibold text-gold
                         no-underline tracking-wide uppercase transition-opacity duration-300 hover:opacity-70"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Small helper component for form fields ─────────────────── */
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-white/40 font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
