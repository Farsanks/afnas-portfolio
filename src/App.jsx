import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Marquee          from './components/Marquee'
import About            from './components/About'
import Stats            from './components/Stats'
import Services         from './components/Services'
import Skills           from './components/Skills'
import ResultsDashboard from './components/ResultsDashboard'
import Experience       from './components/Experience'
import Certifications   from './components/Certifications'
import Portfolio        from './components/Portfolio'
import Process          from './components/Process'
import WhyMe            from './components/WhyMe'
import Testimonials     from './components/Testimonials'
import VideoPhotography from './components/VideoPhotography'
import ContactCTA       from './components/ContactCTA'
import Contact          from './components/Contact'
import Footer           from './components/Footer'
import FloatingSocials  from './components/FloatingSocials'
import WhatsAppButton   from './components/WhatsAppButton'
import BackToTop        from './components/BackToTop'
import CustomCursor     from './components/CustomCursor'

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Cursor (desktop only, respects reduced-motion) */}
      <CustomCursor />

      {/* Fixed floating UI */}
      <FloatingSocials />
      <WhatsAppButton />
      <BackToTop />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Skills />
        <ResultsDashboard />
        <Experience />
        <Certifications />
        <Portfolio />
        <Process />
        <WhyMe />
        <Testimonials />
        {/* ── Video & Photography — Kerala Cinematic Section ── */}
        <VideoPhotography />
        <ContactCTA />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
