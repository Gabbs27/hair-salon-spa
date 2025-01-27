import { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
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

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-content">
        <h1 className="logo">Reflections</h1>
        <nav className="nav">
          <ul>
            <li className="dropdown" ref={dropdownRef}>
              <a href="#menu" onClick={handleMenuClick}>
                The Menu
              </a>
              {isMenuOpen && (
                <div className="dropdown-content">
                  <a 
                    href="/menus/hair-services.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Hair Services
                  </a>
                  <a 
                    href="/menus/spa-services.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Spa Services
                  </a>
                  <a 
                    href="/menus/nail-services.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Nail Services
                  </a>
                  <a 
                    href="/menus/beauty-packages.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Beauty Packages
                  </a>
                </div>
              )}
            </li>
            <li><a href="#locations" onClick={handleLinkClick}>Places</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 