import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import ClientFit from './components/ClientFit'
import HowWeWork from './components/HowWeWork'
import DeliveryProcess from './components/DeliveryProcess'
import AIGovernance from './components/AIGovernance'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-neutral-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStack />
        <Services />
        <CaseStudies />
        <ClientFit />
        <HowWeWork />
        <DeliveryProcess />
        <WhyUs />
        <AIGovernance />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
