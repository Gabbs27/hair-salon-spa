import '../styles/InstagramFeed.css'

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="section instagram-section">
      <div className="container">
        <h2>Follow Us on Instagram</h2>
        <div className="instagram-container">
          {/* Replace with your Instagram Business account ID */}
          <iframe
            src="https://www.instagram.com/gabbsac27/embed"
            className="instagram-frame"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
        <a 
          href="https://www.instagram.com/reflections_salon" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn instagram-btn"
        >
          Follow Us @reflections_salon
        </a>
      </div>
    </section>
  )
} 