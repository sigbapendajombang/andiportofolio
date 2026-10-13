import './Activities.css';
import { useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Activities = () => {
  const { activities } = useGlobalContext();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const dialogRef = useRef(null);

  const openActivity = (activity) => {
    setSelectedActivity(activity);
    dialogRef.current.showModal();
  };

  return (
    <section className="portfolio-section activities-section" id="activities" aria-labelledby="activities-title">
      <h2 id="activities-title">Work Activities</h2>
      <p>Project Implementation</p>
      <div className="activities-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.id}>
            <button
              className="activity-image-button"
              type="button"
              onClick={() => openActivity(activity)}
              aria-label={`View ${activity.caption}`}
            >
              <img src={activity.image} alt={activity.caption} loading="lazy" />
            </button>
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
      <dialog
        className="activity-dialog"
        ref={dialogRef}
        aria-labelledby="activity-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="activity-details">
          <form method="dialog">
            <button type="submit" autoFocus>
              Close
            </button>
          </form>
          {selectedActivity && (
            <>
              <h3 id="activity-title">{selectedActivity.caption}</h3>
              <img
                src={selectedActivity.image}
                alt={selectedActivity.caption}
              />
              <p>{selectedActivity.date}</p>
              <p>{selectedActivity.tags.map((tag) => `#${tag}`).join(" ")}</p>
              {selectedActivity.instagramUrl && (
                <a
                  href={selectedActivity.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Instagram
                </a>
              )}
            </>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Activities;
