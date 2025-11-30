import { siteData } from '../data/siteData';

export default function Donate() {
  const { donate } = siteData;
  return (
    <main className="page">
      <h1>{donate.title}</h1>
      <p className="subtitle">{donate.subtitle}</p>
      <img src={donate.image} alt="Donate" className="page-image" />

      <section className="donate-methods">
        <h2>Donation Methods</h2>
        <div className="methods-grid">
          {donate.methods.map(method => (
            <div key={method.id} className="method-card">
              <div className="icon">{method.icon}</div>
              <h3>{method.name}</h3>
              <p>{method.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impact">
        <h2>Your Impact</h2>
        <div className="impact-grid">
          {donate.impactAreas.map((item, idx) => (
            <div key={idx} className="impact-card">
              <h4>{item.area}</h4>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}