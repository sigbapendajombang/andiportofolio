import './About.css';
import { useGlobalContext } from '../context/GlobalContext';

const About = () => {
  const { profile } = useGlobalContext();

  return (
    <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading"><p className="eyebrow">A little background</p><h2 id="about-title">From spatial data<br />to everyday tools.</h2></div>
      <div className="about-content">
      <p>I’m a full-stack GIS developer based in Kediri, working with Bapenda Jombang. My work connects property and tax records with maps that people can use in the office and out in the field.</p>
      <p>I work across the application: React interfaces, backend services, and spatial databases. I’m especially interested in making large datasets practical to explore and keeping map information useful for the people who depend on it.</p>
      <h3>Tools I work with</h3>
      <dl className="skills">
        {profile.skills.map((group) => (
          <div key={group.category}>
            <dt>{group.category}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
};

export default About;
