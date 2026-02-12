import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Booking } from './components/Booking'
import { Locations } from './components/Locations'
import { InstagramFeed } from './components/InstagramFeed'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  const revealRef = useScrollReveal()

  return (
    <div className="app-wrapper" ref={revealRef}>
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url('./hero-bg.jpg')` }} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-label">Santo Domingo & Punta Cana</span>
            <h2>Where <em>Luxury</em> Meets<br />Timeless Beauty</h2>
            <p className="hero-subtitle">
              Experience world-class hair styling, rejuvenating spa treatments,
              and holistic wellness in the heart of the Caribbean.
            </p>
            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary">Book Your Experience</a>
              <a href="#services" className="btn btn-outline" style={{ color: 'var(--color-primary-light)', borderColor: 'rgba(201, 169, 110, 0.5)' }}>Explore Services</a>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section services-section">
          <div className="container">
            <span className="section-label reveal">What We Offer</span>
            <h2 className="reveal">Our Signature Services</h2>
            <p className="section-subtitle reveal">Curated experiences designed to make you look and feel extraordinary</p>
            <div className="services-grid">
              <div className="service-card reveal reveal-delay-1">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7c0-3-2-4-4-4s-4 1-4 4"/>
                    <path d="M12 7c0-3-2-4-4-4S4 4 4 7"/>
                    <path d="M12 7v10"/>
                    <path d="M4 7c0 5 8 10 8 10s8-5 8-10"/>
                    <path d="M8 21h8"/>
                    <path d="M12 17v4"/>
                  </svg>
                </div>
                <h3>Hair Styling</h3>
                <p>Expert cuts, coloring, and bespoke styling crafted for every hair type and personality</p>
                <a href="#menu" className="service-link">View Menu →</a>
              </div>
              <div className="service-card reveal reveal-delay-2">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3>Spa Treatments</h3>
                <p>Rejuvenating facials, body wraps, and luxurious treatments for complete renewal</p>
                <a href="#menu" className="service-link">View Menu →</a>
              </div>
              <div className="service-card reveal reveal-delay-3">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M12 2a2.5 2.5 0 0 0-2.5 2.5"/>
                    <path d="M6 19c0 1.5 2.5 3 6 3s6-1.5 6-3"/>
                  </svg>
                </div>
                <h3>Massage Therapy</h3>
                <p>Therapeutic and relaxation massages that restore balance to mind and body</p>
                <a href="#menu" className="service-link">View Menu →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <Locations />

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <span className="section-label reveal">Get In Touch</span>
            <h2 className="reveal">Book Your Appointment</h2>
            <p className="section-subtitle reveal">Reserve your moment of luxury - we look forward to welcoming you</p>
            <div className="contact-content reveal">
              <div className="contact-info">
                <Booking />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
