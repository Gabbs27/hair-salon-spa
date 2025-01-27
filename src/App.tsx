import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Booking } from './components/Booking'
import { Locations } from './components/Locations'
import { InstagramFeed } from './components/InstagramFeed'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero-bg.jpg')` }}>
          <div className="container">
            <h2>Welcome to Luxury and Relaxation</h2>
            <p>Experience the perfect blend of style and serenity</p>
            <button className="btn">Book Appointment</button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Hair Styling</h3>
                <p>Expert cuts, coloring, and styling for all hair types</p>
              </div>
              <div className="service-card">
                <h3>Spa Treatments</h3>
                <p>Rejuvenating facials and body treatments</p>
              </div>
              <div className="service-card">
                <h3>Massage Therapy</h3>
                <p>Relaxing massages for mind and body</p>
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
            <h2>Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>We'd love to hear from you</p>
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
