import { siteData } from '../data/siteData';
import ResponsiveImage from './ResponsiveImage';
import FacebookFeed from './FacebookFeed';

export default function Home() {
  const { home, site } = siteData;
  
  return (
    <main className="page">
      {/* Hero Banner Image */}
   

      {/* Hero Section - Guru Image and Text */}
      <section className="hero-section">
      
        
        <div className="hero-text-wrapper">
          <h1>{home.hero.title}</h1>
          <p>{home.hero.subtitle}</p>
        </div>
      </section>

      {/* Jagadguru Section */}
      <section className="jagadguru-section">
        <div className="jagadguru-container">
          <div className="jagadguru-image">
            <img src={home.jagadguru.image} alt={home.jagadguru.title} className="jagadguru-img" />
          </div>
          <div className="jagadguru-content">
            <h2>{home.jagadguru.title}</h2>
            <p className="jagadguru-fullname">{home.jagadguru.fullName}</p>
            <p className="jagadguru-former">
              <strong>Former Name:</strong> {home.jagadguru.formerName}
            </p>
            <p className="jagadguru-institution">
              <strong>{home.jagadguru.institution}</strong> {home.jagadguru.description}
            </p>
            
            <div className="coronation-info">
              <h3>Coronation Details</h3>
              <p><strong>Date:</strong> {home.jagadguru.coronationDate}</p>
              <p><strong>Samvatsara:</strong> {home.jagadguru.coronationDetails}</p>
              <p>{home.jagadguru.coronationInfo}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Leader Section */}
      <section className="spiritual-leader-section">
        <div className="spiritual-leader-container">
          <div className="spiritual-leader-image">
            <img src={home.spiritualLeader.image} alt={home.spiritualLeader.title} className="spiritual-leader-img" />
          </div>
          <div className="spiritual-leader-content">
            <h2>{home.spiritualLeader.title}</h2>
            <p>{home.spiritualLeader.description}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="section-content">
          <div className="section-text">
            <h2>{home.mission.title}</h2>
            <p>{home.mission.description}</p>
          </div>
          <ResponsiveImage src={home.mission.image} alt="Mission" />
        </div>
      </section>

      {/* Facebook Feed */}
      <FacebookFeed />

      {/* Latest Updates Section */}
      <section className="section">
        <div className="section-content reverse">
          <ResponsiveImage src={home.latestUpdates.image} alt="Updates" />
          <div className="section-text">
            <h2>{home.latestUpdates.title}</h2>
            <p>{home.latestUpdates.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}