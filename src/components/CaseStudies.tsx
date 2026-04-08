import { motion } from 'framer-motion'

const caseStudies = [
  {
    company: 'Northstar Logistics',
    sector: 'Logistics',
    situation:
      'A regional logistics company was relying on spreadsheets, email approvals, and a brittle internal admin tool to coordinate dispatch changes across three countries.',
    work:
      'We rebuilt the operations workflow as a single web platform, introduced role-based approvals, and automated the handoff between dispatch, finance, and customer support.',
    outcome:
      'Dispatch changes that previously took hours to reconcile were handled in minutes, with a full audit trail and a codebase the in-house team could extend after handover.',
    tags: ['Workflow Modernization', 'Internal Tools', 'System Integration'],
  },
  {
    company: 'Harbor Health Group',
    sector: 'Healthcare Operations',
    situation:
      'Their engineering team had inherited a growing set of services with inconsistent deployments, manual release steps, and no reliable rollback path.',
    work:
      'We standardized CI/CD across services, codified infrastructure, and introduced release guardrails, monitoring, and runbooks for the internal platform team.',
    outcome:
      'Releases became predictable instead of high-risk events, and the team gained a delivery workflow they could repeat across products without depending on outside help.',
    tags: ['Cloud & DevOps', 'CI/CD', 'Platform Enablement'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-neutral-900/30 border-y border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            A clearer view of the problems we help solve
          </h2>
          <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
            These short case studies use realistic placeholder details for now, but they
            show the kind of before-and-after story this site should tell more often:
            messy operations, disciplined implementation, and a system the client can own.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.company}
              className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-white font-semibold text-xl">{study.company}</p>
                  <p className="text-primary-400 text-sm mt-1">{study.sector}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
                    Situation
                  </p>
                  <p className="text-neutral-300 leading-relaxed">{study.situation}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
                    What We Changed
                  </p>
                  <p className="text-neutral-300 leading-relaxed">{study.work}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
                    Outcome
                  </p>
                  <p className="text-neutral-200 leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
