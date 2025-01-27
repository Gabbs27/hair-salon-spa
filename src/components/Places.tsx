import '../styles/Places.css'

export const Places = () => {
  const locations = [
    {
      name: "Reflections Santo Domingo",
      address: "Calle Manuel de Jesús Troncoso, Plaza Dorada, 2do Nivel",
      hours: {
        monFri: "7:00 AM - 8:00 PM",
        sat: "7:00 AM - 7:00 PM",
        sun: "8:00 AM - 5:00 PM"
      },
      phone: "829-762-5471"
    },
    {
      name: "Reflections Punta Cana",
      address: "Boulevard Turístico del Este Plaza Cormont II, 1er nivel",
      hours: {
        monFri: "7:00 AM - 8:00 PM",
        sat: "7:00 AM - 8:00 PM",
        sun: "8:00 AM - 5:00 PM"
      },
      phone: "829-344-8128"
    }
  ]

  return (
    <section id="places" className="section places">
      <div className="container">
        <h2>Happy Places</h2>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h3>{location.name}</h3>
              <p className="address">{location.address}</p>
              <div className="hours">
                <p><strong>Monday to Friday:</strong> {location.hours.monFri}</p>
                <p><strong>Saturday:</strong> {location.hours.sat}</p>
                <p><strong>Sunday:</strong> {location.hours.sun}</p>
              </div>
              <a 
                href={`https://wa.me/${location.phone}`} 
                className="btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 