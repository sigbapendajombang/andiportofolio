import './Header.css';
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../context/GlobalContext';

const HeroIcon = ({ icon }) => (
  <svg className="hero-icon" viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`} fill="currentColor" aria-hidden="true" focusable="false">
    <path d={icon.icon[4]} />
  </svg>
);

const Header = () => {
  const { profile } = useGlobalContext();

  return (
    <header className="portfolio-section header-section">
      <a className="skip-link" href="#projects">Skip to selected work</a>
      <div className="header-top">
      <a className="wordmark" href="#">{profile.name}</a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      </div>
      <div className="hero">
        <p className="eyebrow">Full-stack GIS developer · Kediri, Indonesia</p>
        <h1>Maps that help people<br />get things done.</h1>
        <p className="hero-intro">I’m Andi. I build web and mobile applications for tax administration, property data, and the people working in the field.</p>
        <div className="hero-links">
          <a className="primary-link" href="#projects"><HeroIcon icon={faBriefcase} />Explore my work</a>
          <a href={`mailto:${profile.contact.email}`}><HeroIcon icon={faEnvelope} />Email me</a>
        </div>
      </div>
      <div className="header-note"><span>Based in East Java</span><span>Web GIS / Spatial data / Field applications</span></div>
    </header>
  );
};

export default Header;
