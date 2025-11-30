import { siteData } from '../data/siteData';

export default function Contact() {
  const { contact } = siteData;
  
  return (
    <main className="page">
      <h1>{contact.title}</h1>
      <img src={contact.image} alt="Contact" className="page-image" />
      
      <section className="contact-info">
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>Hours:</strong> {contact.hours}</p>
      </section>

      {/* Google Map Embed */}
      <section className="map-section">
        <h2>Visit Us</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0806968481627!2d77.8847!3d13.9857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14e7bbbfbfbf%3A0x0!2sSiddarabetta%20Matha!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siddarabetta Matha Location"
          ></iframe>
        </div>
        <p className="map-note">
          <a href={contact.googleMapLink} target="_blank" rel="noopener noreferrer">
            📍 View Full Map on Google Maps
          </a>
        </p>
      </section>
    </main>
  );
}