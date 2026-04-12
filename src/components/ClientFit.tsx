import { motion } from 'framer-motion'

const fitProfiles = [
  {
    title: 'Best fit',
    points: [
      'Teams modernizing internal platforms, line-of-business systems, or backend workflows',
      'Engineering leaders who need delivery support without creating long-term cleanup debt',
      'Organizations that want handover-ready code, documentation, and operational clarity',
    ],
  },
  {
    title: 'Usually not a fit',
    points: [
      'Projects looking only for strategy decks without implementation ownership',
      'Teams that need a large-volume outsourcing vendor instead of senior specialist support',
      'Initiatives without an internal owner or decision-maker available during delivery',
    ],
  },
]

const qualifiers = [
  'Typical engagements start with a short discovery and scoping phase before full delivery begins.',
  'We work best when there is a named internal stakeholder, a concrete operational problem, and room to act on findings quickly.',
  'If the scope is still unclear, we can use a structured discovery sprint to turn ambiguity into a delivery plan.',
]

export default function ClientFit() {
  return (
    <section id="client-fit" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
              Client Fit
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              The teams we help most
            </h2>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed max-w-2xl">
              The fastest-moving engagements usually share the same shape: a real systems problem,
              an internal owner, and a need to improve delivery without replacing the whole organization.
            </p>
          </div>

          <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 md:p-8">
            <p className="text-xs text-primary-300 uppercase tracking-[0.2em] font-semibold">
              Qualification Notes
            </p>
            <div className="mt-4 space-y-4">
              {qualifiers.map((qualifier) => (
                <p key={qualifier} className="text-neutral-300 leading-relaxed">
                  {qualifier}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {fitProfiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white">{profile.title}</h3>
              <ul className="mt-6 space-y-4">
                {profile.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-400 shrink-0" />
                    <span className="text-neutral-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
