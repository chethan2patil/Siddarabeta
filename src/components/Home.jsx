import { siteData } from '../data/siteData';
import ResponsiveImage from './ResponsiveImage';
import FacebookFeed from './FacebookFeed';

export default function Home() {
  const { home } = siteData;
  return (
    <main className="page">
      <section className="hero">
        <ResponsiveImage src={home.hero.image} alt="Hero" className="hero-img" />
        <div className="hero-text">
          <h1>{home.hero.title}</h1>
          <p>{home.hero.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-text">
            <h2>{home.mission.title}</h2>
            <p>{home.mission.description}</p>
          </div>
          <ResponsiveImage src={home.mission.image} alt="Mission" />
        </div>
      </section>

      <section className="section">
        <div className="section-content reverse">
          <ResponsiveImage src={home.latestUpdates.image} alt="Updates" />
          <div className="section-text">
            <h2>{home.latestUpdates.title}</h2>
            <p>{home.latestUpdates.description}</p>
          </div>
        </div>
      </section>

      {/* Add Facebook Feed before footer */}
      <FacebookFeed />
    </main>
  );
}