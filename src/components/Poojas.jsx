import { siteData } from '../data/siteData';

export default function Poojas() {
  return (
    <main className="page">
      <h1>Upcoming Poojas</h1>
      <div className="poojas-grid">
        {siteData.poojas.map(pooja => (
          <div key={pooja.id} className="pooja-card">
            <img src={pooja.image} alt={pooja.name} />
            <h3>{pooja.name}</h3>
            <p><strong>Date:</strong> {pooja.date}</p>
            <p><strong>Time:</strong> {pooja.time}</p>
            <p><strong>Location:</strong> {pooja.location}</p>
            <p>{pooja.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}