import { useState } from 'react'
import { motion } from 'framer-motion'

const serviceOptions = [
  'Software Engineering',
  'Cloud & DevOps Modernization',
  'Enterprise AI Integration',
  'Multiple / Not sure yet',
]

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's build something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> your team will own</span>
            </h2>
            <p className="mt-5 text-neutral-400 text-lg leading-relaxed">
              Tell us about your project and we'll respond within one business day
              with a tailored proposal. No obligations, no spam.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: '01', text: 'Submit your project details' },
                { icon: '02', text: 'We review and prepare a tailored proposal' },
                { icon: '03', text: 'Kick off with a discovery call' },
              ].map((step, i) => (
                <motion.div
                  key={step.icon}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <span className="w-10 h-10 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center text-sm font-bold shrink-0">
                    {step.icon}
                  </span>
                  <p className="text-neutral-300">{step.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://randomuser.me/api/portraits/women/44.jpg',
                  'https://randomuser.me/api/portraits/men/32.jpg',
                  'https://randomuser.me/api/portraits/women/68.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-neutral-950 object-cover" />
                ))}
              </div>
              <p className="text-sm text-neutral-500">
                Typically respond within <span className="text-neutral-300">one day</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="mt-3 text-neutral-400">
                  We've received your request and will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none"
                    placeholder="What are you looking to build or improve? Any timeline or budget constraints?"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3.5 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Submit Request
                </motion.button>

                <p className="text-xs text-neutral-600 text-center">
                  We'll respond within one business day. No spam, no obligations.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
