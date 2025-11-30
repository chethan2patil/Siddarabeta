import { siteData } from '../data/siteData';

export default function SlokaHeader() {
  const { slokas } = siteData.site;
  
  return (
    <div className="sloka-header">
      <div className="sloka-blessing">
        <p className="blessing-text">{slokas.blessing}</p>
      </div>
      
      <div className="slokas-container">
        <div className="sloka-item">
          <p className="sloka-kannada">{slokas.sloka1}</p>
          <p className="sloka-english">{slokas.sloka1Eng}</p>
        </div>
        
        <div className="sloka-divider"></div>
        
        <div className="sloka-item">
          <p className="sloka-kannada">{slokas.sloka2}</p>
          <p className="sloka-english">{slokas.sloka2Eng}</p>
        </div>
      </div>
    </div>
  );
}