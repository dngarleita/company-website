import { useId, useState } from 'react'
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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const statusId = useId()

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  function validate() {
    const nextErrors: Record<string, string> = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your work email.'
    if (!formData.service.trim()) nextErrors.service = 'Please select a service.'
    if (!formData.message.trim()) nextErrors.message = 'Please describe your project.'

    return nextErrors
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }
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
              Start a Conversation
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Bring us the part of your stack
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> your team will own</span>
            </h2>
            <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
              Tell us where delivery is stuck: legacy systems, fragile releases, integration
              work, or an AI workflow that needs proper controls. We will respond with a
              practical next step, not a generic sales sequence.
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
                  <p className="text-neutral-200">{step.text}</p>
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
              <p className="text-sm text-neutral-400">
                Typically respond within <span className="text-neutral-300">one day</span>
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:hello@megatherium.eu"
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 hover:border-primary-700/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300 shrink-0">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-1.07 1.917l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 7.743V7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Email</p>
                    <p className="mt-1 text-white font-medium break-all">hello@megatherium.eu</p>
                  </div>
                </div>
              </a>
              <a
                href="https://linkedin.com/company/megatherium"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 hover:border-primary-700/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2]/15 text-[#78B7F5] shrink-0">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 4.97c0 1.08.87 1.97 1.96 1.97h.02a1.97 1.97 0 1 0 .02-3.94ZM20.75 12.58c0-3.17-1.69-4.65-3.95-4.65-1.82 0-2.63 1-3.08 1.7V8.5h-3.38c.04.75 0 10.5 0 10.5h3.38v-5.87c0-.31.02-.62.11-.84.24-.62.78-1.25 1.69-1.25 1.19 0 1.66.91 1.66 2.24V19h3.38v-6.42ZM20.75 12.58" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">LinkedIn</p>
                    <p className="mt-1 text-white font-medium">Megatherium GmbH</p>
                  </div>
                </div>
              </a>
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
                <p id={statusId} className="mt-3 text-neutral-400" role="status" aria-live="polite">
                  We have recorded your request in this demo flow. Replace this with your real submission workflow later.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 space-y-5">
                <div
                  id={statusId}
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    Object.keys(errors).length > 0
                      ? 'border-amber-700/40 bg-amber-950/30 text-amber-100'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400'
                  }`}
                >
                  {Object.keys(errors).length > 0
                    ? 'Please fix the highlighted fields before submitting.'
                    : 'Prefer not to use the form? Email hello@megatherium.eu or message us on LinkedIn.'}
                </div>

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
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : statusId}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                        errors.name ? 'border-amber-500/70' : 'border-neutral-700'
                      }`}
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-amber-300">
                        {errors.name}
                      </p>
                    )}
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
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : statusId}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                        errors.email ? 'border-amber-500/70' : 'border-neutral-700'
                      }`}
                      placeholder="jane@company.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-amber-300">
                        {errors.email}
                      </p>
                    )}
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
                      aria-describedby={statusId}
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
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'service-error' : statusId}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-neutral-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                        errors.service ? 'border-amber-500/70' : 'border-neutral-700'
                      }`}
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-2 text-sm text-amber-300">
                        {errors.service}
                      </p>
                    )}
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
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : statusId}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-neutral-800/50 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none ${
                      errors.message ? 'border-amber-500/70' : 'border-neutral-700'
                    }`}
                    placeholder="What are you looking to build or improve? Any timeline or budget constraints?"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-amber-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-[1fr_auto] gap-4">
                  <motion.button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3.5 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Discuss Your Project
                  </motion.button>
                  <a
                    href="mailto:hello@megatherium.eu"
                    className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-5 py-3.5 text-neutral-200 font-medium hover:border-primary-700/50 hover:text-white transition-colors"
                  >
                    Email Instead
                  </a>
                </div>

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
