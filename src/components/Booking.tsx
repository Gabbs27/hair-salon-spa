import { useState } from 'react'
import '../styles/Booking.css'

interface BookingFormData {
  name: string
  email: string
  service: string
  date: string
  time: string
}

export const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    service: '',
    date: '',
    time: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with actual booking API
    console.log('Booking submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      time: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="booking-form">
      <h3>Book an Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="haircut">Haircut & Styling</option>
            <option value="color">Hair Color</option>
            <option value="massage">Massage</option>
            <option value="facial">Facial</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Book Now</button>
      </form>
    </div>
  )
} 