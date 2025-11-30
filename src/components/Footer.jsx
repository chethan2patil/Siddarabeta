import { siteData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {siteData.site.year} {siteData.site.name}. All rights reserved.</p>
        <p>Contact: {siteData.contact.email} | {siteData.contact.phone}</p>
      </div>
    </footer>
  );
}