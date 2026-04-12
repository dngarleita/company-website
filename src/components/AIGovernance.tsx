import { motion } from 'framer-motion'

const safeguards = [
  {
    title: 'Human approval stays in the loop',
    description:
      'We design AI-assisted workflows so critical actions are reviewed, approved, or escalated by the right internal owner before anything consequential happens.',
  },
  {
    title: 'Auditability is part of the build',
    description:
      'Prompts, outputs, routing decisions, and exceptions should be traceable. That matters for operations teams, compliance reviews, and post-incident analysis.',
  },
  {
    title: 'Access is scoped to the job',
    description:
      'AI systems should only touch the data and tools required for the task at hand. We treat permissions and environment boundaries as product requirements, not cleanup work.',
  },
]

export default function AIGovernance() {
  return (
    <section id="ai-governance" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
              AI Governance
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              AI systems still need operational guardrails
            </h2>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              If AI is part of the engagement, we treat governance as part of the product.
              The goal is not to bolt controls on later. It is to design useful automation
              that remains reviewable, supportable, and safe to operate.
            </p>
            <div className="mt-8 rounded-2xl border border-primary-800/40 bg-primary-950/20 p-6">
              <p className="text-sm text-primary-200 leading-relaxed">
                Real examples can replace this later, but the message should stay clear:
                AI workflows are only valuable when the business can trust how they behave.
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {safeguards.map((item, index) => (
              <motion.article
                key={item.title}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-neutral-300 leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
