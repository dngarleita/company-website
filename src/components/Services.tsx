import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Software Engineering',
    subtitle: 'Web Applications & Backend Services',
    description:
      'We design, build, and modernize business-critical web applications. Clean architectures, tested code, and smooth integrations with the systems you already run.',
    outcomes: [
      'Well-structured backend services with clear module boundaries',
      'Codebases new developers can onboard to in days, not weeks',
      'Seamless integration with your identity, billing, CRM, or ERP systems',
    ],
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    imageAlt: 'Software engineer',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    subtitle: 'Infrastructure, Automation, Reliability',
    description:
      'We codify your infrastructure, automate your pipelines, and make deployments boring and predictable. Any stack, any cloud.',
    outcomes: [
      'Infrastructure-as-code you can reproduce and audit',
      'CI/CD pipelines that work for every language in your stack',
      'Monitoring and alerting so you see issues before your users do',
    ],
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    imageAlt: 'DevOps engineer',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Enterprise AI Integration',
    subtitle: 'Workflow Productivity',
    description:
      'We plug AI into the real work your teams do every day. Not demos, but production workflows with approvals, logging, and compliance.',
    outcomes: [
      'AI workflows embedded in the tools your teams already use',
      'Measurable reduction in manual, repetitive knowledge work',
      'Full governance: access control, audit trails, and compliance',
    ],
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    imageAlt: 'AI integration specialist',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three capabilities, one partner
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            We cover the full spectrum: backend engineering, infrastructure automation,
            and AI integration. Pick one or combine all three.
          </p>
        </motion.div>

        {/* Service rows */}
        <div className="space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-sm text-primary-400 font-medium mt-1">{service.subtitle}</p>
                <p className="mt-4 text-neutral-400 leading-relaxed">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center mt-0.5 shrink-0">
                        <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-neutral-300 text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>

                {/* Engagement model badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href="#how-we-work" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-primary-700/50 hover:text-primary-400 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    Project Delivery
                  </a>
                  <a href="#how-we-work" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-primary-700/50 hover:text-primary-400 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    Expert Placement
                  </a>
                </div>
              </div>

              {/* Visual card */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  className="relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="p-6 flex items-center gap-4">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-white font-semibold">{service.title} Lead</p>
                      <p className="text-neutral-500 text-sm">Megatherium</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="bg-neutral-950/50 rounded-xl p-4 border border-neutral-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-neutral-500">Ready for projects</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {['Architecture', 'Implementation', 'Handover'].map((phase, j) => (
                          <div key={phase} className="text-center">
                            <motion.div
                              className="h-1.5 bg-primary-500/20 rounded-full overflow-hidden"
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: j * 0.2 }}
                            >
                              <motion.div
                                className="h-full bg-primary-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + j * 0.2 }}
                              />
                            </motion.div>
                            <p className="text-[10px] text-neutral-600 mt-1.5">{phase}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
