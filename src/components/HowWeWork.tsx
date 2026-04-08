import { motion } from 'framer-motion'

const models = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Project Delivery',
    subtitle: 'We build it for you',
    description:
      'Our team takes full ownership of your project from discovery to production. You get a dedicated squad with a clear scope, timeline, and deliverables. We handle architecture, implementation, testing, and handover.',
    features: [
      'Dedicated project team with a technical lead',
      'Fixed scope and transparent milestones',
      'Full delivery: architecture through deployment',
      'Knowledge transfer and documentation included',
    ],
    bestFor: 'Greenfield builds, system modernizations, and well-defined initiatives where you want a turnkey solution.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Expert Placement',
    subtitle: 'We embed experts in your team',
    description:
      'We place senior engineers and specialists directly into your team as contractors. They work within your processes, tools, and codebase, bringing deep expertise where you need it most.',
    features: [
      'Senior-level engineers vetted for your stack',
      'Seamless integration into your existing workflows',
      'Flexible engagement: scale up or down as needed',
      'Long-term availability and continuity',
    ],
    bestFor: 'Capacity gaps, specialized skill needs, or teams that want to move faster without a lengthy hiring process.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 md:py-32 bg-neutral-900/30 border-y border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Two ways to work with us
          </h2>
          <p className="mt-4 text-neutral-300 text-lg">
            Some clients need an accountable delivery partner. Others need senior operators
            embedded inside their team. We support both without forcing a one-size-fits-all model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 md:p-10 hover:border-primary-700/40 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center mb-5">
                  {model.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                <p className="text-primary-400 font-medium text-sm mt-1">{model.subtitle}</p>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {model.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center mt-0.5 shrink-0">
                        <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">Best for</p>
                  <p className="text-sm text-neutral-400">{model.bestFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-neutral-400 text-sm mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Not sure which model is right? We often combine both: starting with a project phase
          and then transitioning to embedded experts for ongoing evolution.
        </motion.p>
      </div>
    </section>
  )
}
