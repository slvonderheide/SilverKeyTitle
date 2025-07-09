import './NavBar.css'
import { useState } from 'react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

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
            <button 
              className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`} 
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
