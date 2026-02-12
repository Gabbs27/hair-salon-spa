import { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileNavOpen])

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsMobileNavOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo-link" onClick={handleLinkClick}>
          <h1 className="logo">Aurelia</h1>
        </a>

        <button
          className={`hamburger ${isMobileNavOpen ? 'active' : ''}`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {isMobileNavOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileNavOpen(false)} />
        )}

        <nav className={`nav ${isMobileNavOpen ? 'nav-open' : ''}`}>
          <ul>
            <li className="dropdown" ref={dropdownRef}>
              <a href="#menu" onClick={handleMenuClick}>
                The Menu
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </a>
              {isMenuOpen && (
                <div className="dropdown-content">
                  <a href="./menus/hair-services.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    <span className="dropdown-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 7c0-3-2-4-4-4s-4 1-4 4"/><path d="M12 7c0-3-2-4-4-4S4 4 4 7"/><path d="M12 7v10"/><path d="M4 7c0 5 8 10 8 10s8-5 8-10"/></svg>
                    </span>
                    Hair Services
                  </a>
                  <a href="./menus/spa-services.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    <span className="dropdown-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
                    </span>
                    Spa Services
                  </a>
                  <a href="./menus/nail-services.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    <span className="dropdown-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/></svg>
                    </span>
                    Nail Services
                  </a>
                  <a href="./menus/beauty-packages.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    <span className="dropdown-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </span>
                    Beauty Packages
                  </a>
                </div>
              )}
            </li>
            <li><a href="#locations" onClick={handleLinkClick}>Locations</a></li>
            <li><a href="#instagram" onClick={handleLinkClick}>Gallery</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            <li className="nav-cta">
              <a href="#contact" className="btn btn-primary btn-nav" onClick={handleLinkClick}>Book Now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
