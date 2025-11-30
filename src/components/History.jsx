import { siteData } from '../data/siteData';

export default function History() {
  const { history } = siteData;
  
  return (
    <main className="page">
      <h1>{history.title}</h1>
      <p className="subtitle">{history.subtitle}</p>

      {/* Parent Matha Section with Full Image */}
      <section className="history-section">
        <h2>{history.parentMathaInfo.title}</h2>
        <img src={history.parentMathaInfo.image} alt="Parent Matha" className="matha-image-full" />
        <p>{history.parentMathaInfo.description}</p>
      </section>

      {/* Vision & Mission */}
      <section className="history-section">
        <h2>Vision & Mission</h2>
        <div className="vision-mission">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>{history.visionStatement}</p>
          </div>
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>{history.missionStatement}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="history-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          {history.coreValues.map((value, idx) => (
            <div key={idx} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Background */}
      <section className="history-section">
        <h2>Historical Timeline</h2>
        <div className="timeline">
          {history.historicalBackground.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{item.period}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="history-section philosophy">
        <h2>Our Philosophy</h2>
        <p>{history.philosophyContent}</p>
      </section>
    </main>
  );
}