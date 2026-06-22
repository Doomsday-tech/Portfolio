import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/data'

const contactDetails = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'aryan-ahire-424684292',
    href: profile.linkedin,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'Doomsday-tech',
    href: profile.github,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('loading')

    // Simulate submission. Replace with an API call or form service
    // (e.g. Formspree, EmailJS) for production use.
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1400)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-section">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let&apos;s build something great together."
          description="Have an opportunity, project idea, or just want to connect? My inbox is always open."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 glass-card p-6 sm:p-8 space-y-5"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-blue group-hover:text-accent-cyan group-hover:border-accent-blue/40 transition-all duration-300 shrink-0">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300 truncate">
                      {value}
                    </p>
                  </div>
                </div>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block rounded-xl"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-accent-blue/50 focus:bg-white/[0.05]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-accent-blue/50 focus:bg-white/[0.05]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-accent-blue/50 focus:bg-white/[0.05] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' && (
                <span className="h-4 w-4 rounded-full border-2 border-navy/40 border-t-navy animate-spin" />
              )}
              {status === 'success' && <FaCheckCircle />}
              {status === 'idle' && <FaPaperPlane />}
              {status === 'loading'
                ? 'Sending...'
                : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-accent-cyan"
              >
                Thanks for reaching out — I&apos;ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
