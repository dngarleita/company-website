import { motion } from 'framer-motion'

const phases = [
  {
    step: '01',
    title: 'Discovery and framing',
    description:
      'We align on the operational problem, technical constraints, and decision-makers. The output is a delivery plan your team can evaluate, not a vague recommendation deck.',
  },
  {
    step: '02',
    title: 'Architecture and execution',
    description:
      'We implement in the open: architecture decisions, delivery milestones, and tradeoffs stay visible so your team can follow the reasoning as the system evolves.',
  },
  {
    step: '03',
    title: 'Handover and enablement',
    description:
      'We finish with documentation, walkthroughs, operational guardrails, and direct support for the people who will own the system after launch.',
  },
]

export default function DeliveryProcess() {
  return (
    <section id="delivery-process" className="py-24 md:py-32 bg-neutral-900/30 border-y border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            Delivery Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            What an engagement typically looks like
          </h2>
          <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
            This is the part many consultancy sites skip. We prefer to show how the work is
            structured so buyers know what to expect before the first call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.step}
              className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent" />
              <p className="text-primary-400 font-semibold text-sm">{phase.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-4 text-neutral-300 leading-relaxed">{phase.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
