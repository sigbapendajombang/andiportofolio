import './Header.css';
import { useGlobalContext } from '../context/GlobalContext';

const Header = () => {
  const { profile } = useGlobalContext();

  return (
    <header className="portfolio-section header-section">
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.location}</p>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
