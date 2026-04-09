import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How do I know which engagement model is right for us?',
    answer:
      'It depends on how much ownership you want to keep. If you have a clear project scope and want us to deliver end-to-end, go with Project Delivery. If you need to strengthen your existing team with specific expertise, Expert Placement is the better fit. We often combine both: a project phase to set up the architecture, followed by embedded experts for ongoing development.',
  },
  {
    question: 'What does a typical engagement timeline look like?',
    answer:
      'For project delivery, most engagements start with a 1-2 week discovery phase, followed by iterative development in 2-week sprints. A mid-sized project typically runs 3-6 months. For expert placement, we can usually have someone embedded in your team within days.',
  },
  {
    question: 'Do you work with clients outside of Europe?',
    answer:
      'Yes. While most of our clients are based in Europe, we work with teams globally. Our experts are experienced in remote collaboration across time zones and are comfortable working asynchronously when needed.',
  },
  {
    question: 'How do you handle knowledge transfer?',
    answer:
      'Every engagement includes structured knowledge transfer. This means pair programming sessions, documented architecture decisions, runbooks, and dedicated onboarding support for your team. Our goal is that your team can fully own and extend the system after we hand over.',
  },
  {
    question: 'What if our tech stack isn\'t listed on your site?',
    answer:
      'Our engineering team has broad experience across many languages, frameworks, and platforms. The technologies highlighted on our site reflect our deepest expertise, but we regularly take on projects involving other stacks. Reach out and we\'ll let you know if we\'re a good fit.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'For project delivery, we typically work with fixed-price milestones based on a defined scope. For expert placement, we offer daily rates. We always provide a transparent quote before any commitment, and there are no hidden fees.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const answerId = useId()

  return (
    <div className="border-b border-neutral-800">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span className="text-white font-medium pr-8 group-hover:text-primary-400 transition-colors">
          {question}
        </span>
        <motion.svg
          className="w-5 h-5 text-neutral-500 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-400 leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Common questions
          </h2>
          <p className="mt-4 text-neutral-300 text-lg">
            The questions below address the concerns most teams raise before bringing in an
            outside delivery partner: fit, speed, handover, and pricing clarity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-neutral-400 text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
