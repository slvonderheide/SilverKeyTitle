
import './App.css'
import { useState } from 'react'
import NavBar from './NavBar'
import Contact from './Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Home Section Component
  const HomeSection = () => (
    <section id="home" className="section">
      <div className="hero">
        <h1>Welcome to Eaton Golf Company</h1>
        <p>Your premier destination for professional golf services</p>
        <div className="hero-buttons">
          <button onClick={() => setActiveSection('services')}>Our Services</button>
          <button onClick={() => setActiveSection('contact')}>Get Started</button>
        </div>
      </div>
    </section>
  )

  // About Section Component
  const AboutSection = () => (
    <section id="about" className="section">
      <div className="container">
        <h2>About Eaton Golf Company</h2>
        <p>
          Founded with a passion for golf excellence, Eaton Golf Company has been serving 
          golfers of all skill levels for years. Our team of experienced professionals 
          is dedicated to helping you improve your game and enjoy the sport to its fullest.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Expert Instruction</h3>
            <p>Learn from certified PGA professionals with years of teaching experience.</p>
          </div>
          <div className="about-card">
            <h3>Modern Facilities</h3>
            <p>State-of-the-art practice facilities and equipment for optimal learning.</p>
          </div>
          <div className="about-card">
            <h3>Personalized Approach</h3>
            <p>Tailored lessons and programs to match your individual needs and goals.</p>
          </div>
        </div>
      </div>
    </section>
  )

  // Services Section Component
  const ServicesSection = () => (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Private Lessons</h3>
            <p>One-on-one instruction tailored to your specific needs and skill level.</p>
            <ul>
              <li>Swing analysis and correction</li>
              <li>Short game improvement</li>
              <li>Course management</li>
              <li>Mental game coaching</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Group Lessons</h3>
            <p>Learn with friends and meet other golfers in our group sessions.</p>
            <ul>
              <li>Beginner group classes</li>
              <li>Advanced technique workshops</li>
              <li>Junior golf programs</li>
              <li>Corporate golf events</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Club Fitting</h3>
            <p>Professional club fitting to optimize your equipment for better performance.</p>
            <ul>
              <li>Launch monitor analysis</li>
              <li>Custom club recommendations</li>
              <li>Grip and lie angle adjustments</li>
              <li>Equipment consultation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  // Function to render the active section
  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'services':
        return <ServicesSection />
      case 'contact':
        return <Contact />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App;

