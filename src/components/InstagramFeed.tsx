import '../styles/InstagramFeed.css'

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="section instagram-section">
      <div className="container">
        <h2>Follow Us on Instagram</h2>
        <div className="instagram-container">
          {/* Replace with your Instagram Business account ID */}
          <iframe
            src="https://www.instagram.com/codewithgabo/embed"
            className="instagram-frame"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
        <a 
          href="https://www.instagram.com/codewithgabo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn instagram-btn"
        >
          Follow Us @codewithgabo
        </a>
      </div>
    </section>
  )
} 