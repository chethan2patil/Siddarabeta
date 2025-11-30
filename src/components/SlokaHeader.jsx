import { siteData } from '../data/siteData';

export default function SlokaHeader() {
  const { slokas, mathaLogo } = siteData.site;
  
  return (
    <div className="sloka-header">
      <p className="blessing-text">{slokas.blessing}</p>
      
      <div className="slokas-container">
        <div className="sloka-item">
          <p className="sloka-kannada">{slokas.sloka1}</p>
          <p className="sloka-english">{slokas.sloka1Eng}</p>
        </div>
        
        {/* Logo in Center - Only One */}
        <div className="sloka-center-logo">
          <img src={mathaLogo} alt="Center Logo" className="matha-logo-center" />
        </div>
        
        <div className="sloka-item">
          <p className="sloka-kannada">{slokas.sloka2}</p>
          <p className="sloka-english">{slokas.sloka2Eng}</p>
        </div>
      </div>
    </div>
  );
}