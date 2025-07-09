import './NavBar.css'
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Eaton Golf Company</h2>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
