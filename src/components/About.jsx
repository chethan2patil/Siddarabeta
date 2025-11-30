import { siteData } from '../data/siteData';

export default function About() {
  const { about } = siteData;
  return (
    <main className="page">
      <h1>{about.title}</h1>
      
      {/* Full Width Matha Image */}
      <section className="about-hero">
        <img src={about.image} alt="Siddarabetta Matha" className="matha-image-full" />
      </section>

      {/* About Content */}
      <section className="about-content">
        <h2>Our Story</h2>
        <p>{about.history}</p>
        
        <h2>Our Mission</h2>
        <p>{about.mission}</p>
        
        <h2>Parent Institution</h2>
        <p><strong>{about.parentMatha}</strong></p>
        
        <p><strong>Founded:</strong> {about.founded}</p>
      </section>
    </main>
  );
}