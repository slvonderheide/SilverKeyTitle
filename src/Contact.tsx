import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mzzglwkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Ready to improve your golf game? Contact us today to schedule your lesson or learn more about our services.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>info@eatongolf.com</p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>123 Golf Course Lane<br />Golf City, GC 12345</p>
              </div>
              <div className="contact-item">
                <h4>Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                   Saturday - Sunday: 7:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="private-lessons">Private Lessons</option>
                  <option value="group-lessons">Group Lessons</option>
                  <option value="club-fitting">Club Fitting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
