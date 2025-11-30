import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">{siteData.site.name}</Link>
        <nav className="nav">
          <ul>
            {siteData.navigation.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}