export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-12" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
          <span className="text-lg font-bold text-white">Megatherium GmbH</span>
        </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm">
            <a href="#services" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Services
            </a>
            <a href="#client-fit" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Client Fit
            </a>
            <a href="#delivery-process" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Process
            </a>
            <a href="#results" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Results
            </a>
            <a href="#testimonials" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://linkedin.com/company/megatherium"
              target="_blank"
              rel="noreferrer"
              aria-label="Megatherium GmbH on LinkedIn"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-400 transition-colors text-sm"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 4.97c0 1.08.87 1.97 1.96 1.97h.02a1.97 1.97 0 1 0 .02-3.94ZM20.75 12.58c0-3.17-1.69-4.65-3.95-4.65-1.82 0-2.63 1-3.08 1.7V8.5h-3.38c.04.75 0 10.5 0 10.5h3.38v-5.87c0-.31.02-.62.11-.84.24-.62.78-1.25 1.69-1.25 1.19 0 1.66.91 1.66 2.24V19h3.38v-6.42ZM20.75 12.58" />
              </svg>
              <span>Megatherium GmbH</span>
            </a>
          </div>
        </div>

        <p className="mt-8 pt-6 border-t border-neutral-800/50 text-neutral-600 text-sm text-center">
          &copy; {new Date().getFullYear()} Megatherium GmbH. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
