import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Megatherium GmbH took our fragmented legacy PHP system and turned it into something our team actually enjoys working on. The architecture is clean, the tests pass, and onboarding new developers went from three weeks to three days.',
    name: 'Martin Keller',
    role: 'CTO, FinanceFlow GmbH',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    quote:
      'Their DevOps team helped us go from manual Friday-night deployments to fully automated pipelines. We now ship multiple times a day without breaking a sweat. The infrastructure-as-code approach gave us full auditability across all environments.',
    name: 'Sarah Lindqvist',
    role: 'VP Engineering, NordTech Solutions',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    quote:
      'We had AI pilots in three departments, all running differently. Megatherium GmbH unified everything into a single workflow framework with proper governance. Our compliance team is happy, and our staff processes twice the volume with the same headcount.',
    name: 'Thomas Weber',
    role: 'Head of Operations, DataBridge AG',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            Client Stories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Trusted by engineering leaders
          </h2>
          <p className="mt-4 text-neutral-300 text-lg">
            Placeholder testimonials for now, but this section should eventually be backed by
            named clients, case studies, or approved anonymized quotes with specific outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 flex flex-col relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-primary-500/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <p className="text-neutral-300 leading-relaxed text-sm flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-neutral-800"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
