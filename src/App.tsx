import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <HowWeWork />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
