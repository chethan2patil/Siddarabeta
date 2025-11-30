import { siteData } from '../data/siteData';

export default function Services() {
  return (
    <main className="page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {siteData.services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="service-details">{service.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}