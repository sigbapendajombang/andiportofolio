import './Activities.css';
import { useGlobalContext } from "../context/GlobalContext";

const Activities = () => {
  const { activities } = useGlobalContext();

  return (
    <section className="portfolio-section activities-section" id="activities" aria-labelledby="activities-title">
      <div className="section-heading"><p className="eyebrow">Outside the editor</p><h2 id="activities-title">Beyond the code</h2><p>Field surveys, implementation, and sharing the work with the people who use it.</p></div>
      <div className="activities-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.id}>
            <img
              className="activity-image"
              src={activity.image}
              alt={activity.caption}
              loading="lazy"
            />
            <h3>{activity.caption}</h3>
            <p>{activity.date}</p>
            {activity.instagramUrl && (
              <a
                href={activity.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Instagram
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Activities;
