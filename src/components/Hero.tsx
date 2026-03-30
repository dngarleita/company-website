import { motion } from 'framer-motion'

const teamImages = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/90.jpg',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Animated background - CSS animations for GPU compositing */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] animate-[orb-drift-1_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px] animate-[orb-drift-2_12s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We build software
              <br />
              your team will
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                actually maintain
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From backend services and APIs to cloud automation and AI-powered workflows,
              we deliver production-ready systems that solve real business problems.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="text-neutral-400 hover:text-white px-7 py-3.5 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                See how we work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex -space-x-3 shrink-0">
                {teamImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-neutral-950 object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-medium">Trusted by engineering teams</p>
                <p className="text-neutral-500">across Europe</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[500px]">
              {/* Main card */}
              <div className="absolute top-8 left-4 right-4 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 shadow-2xl animate-[float-up_5s_ease-in-out_infinite]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-neutral-600 font-mono">deployment.yml</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <p><span className="text-primary-400">deploy</span>:</p>
                  <p className="pl-4"><span className="text-neutral-500">stage:</span> <span className="text-primary-300">production</span></p>
                  <p className="pl-4"><span className="text-neutral-500">environment:</span> <span className="text-primary-300">live</span></p>
                  <p className="pl-4"><span className="text-neutral-500">status:</span> <span className="text-green-400">&#10003; passing</span></p>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute bottom-16 left-0 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-xl p-5 shadow-2xl w-56 animate-[float-down_4s_ease-in-out_1s_infinite]">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Deployment Frequency</p>
                <p className="text-2xl font-bold text-white">12x</p>
                <p className="text-sm text-primary-400">faster releases</p>
              </div>

              {/* Notification card */}
              <div className="absolute bottom-8 right-0 bg-neutral-900/80 backdrop-blur border border-primary-800/30 rounded-xl p-4 shadow-2xl w-64 animate-[float-up_6s_ease-in-out_2s_infinite]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Pipeline succeeded</p>
                    <p className="text-xs text-neutral-500 mt-0.5">All 47 tests passing, deployed to prod</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[float-down_2s_ease-in-out_infinite]">
        <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
