import './About.css';
import { useGlobalContext } from '../context/GlobalContext';

const About = () => {
  const { profile } = useGlobalContext();

  return (
    <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <p>{profile.summary}</p>
      <h3>Technical Skills</h3>
      <dl className="skills">
        {profile.skills.map((group) => (
          <div key={group.category}>
            <dt>{group.category}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default About;
