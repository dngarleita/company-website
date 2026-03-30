export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-lg font-bold text-white">Megatherium</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm">
            <a href="#services" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Services
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

          {/* Copyright */}
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Megatherium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
