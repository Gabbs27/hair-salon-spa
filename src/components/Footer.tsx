import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Reflections Salon & Spa</h3>
          <p>123 Beauty Lane</p>
          <p>Santo Domingo, Dominican Republic</p>
          <p>Phone: (809) 555-0123</p>
        </div>
        
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9am - 8pm</p>
          <p>Saturday: 9am - 6pm</p>
          <p>Sunday: 10am - 4pm</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Reflections Salon & Spa. All rights reserved.</p>
      </div>
    </footer>
  )
} 