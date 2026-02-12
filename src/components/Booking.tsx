import { useState } from 'react'
import '../styles/Booking.css'

interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  location: string
  date: string
  time: string
}

export const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    time: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with actual booking API
    console.log('Booking submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', location: '', date: '', time: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="booking-form">
        <div className="booking-success">
          <div className="success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Appointment Requested!</h3>
          <p>We'll confirm your booking via email shortly.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" name="phone" placeholder="(829) 000-0000" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select id="location" name="location" value={formData.location} onChange={handleChange} required>
              <option value="">Select location</option>
              <option value="santo-domingo">Santo Domingo</option>
              <option value="punta-cana">Punta Cana</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="haircut">Haircut & Styling</option>
            <option value="color">Hair Color & Highlights</option>
            <option value="treatment">Hair Treatment</option>
            <option value="massage">Massage Therapy</option>
            <option value="facial">Facial Treatment</option>
            <option value="nails">Nail Services</option>
            <option value="package">Beauty Package</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input id="time" type="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-submit">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Request Appointment
        </button>
      </form>
    </div>
  )
}
