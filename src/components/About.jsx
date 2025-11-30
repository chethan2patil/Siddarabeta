import { siteData } from '../data/siteData';

export default function About() {
  const { about } = siteData;
  return (
    <main className="page">
      <h1>{about.title}</h1>
      <img src={about.image} alt="About" className="page-image" />
      <section className="about-content">
        <h2>Our Story</h2>
        <p>{about.history}</p>
        <h2>Our Mission</h2>
        <p>{about.mission}</p>
        <p><strong>Founded:</strong> {about.founded}</p>
      </section>
    </main>
  );
}