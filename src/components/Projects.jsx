import "./Projects.css";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const CaseStudyImage = ({ project, index }) => {
  const title = project.imageTitles?.[index] || `Screenshot ${index + 1}`;

  return (
    <figure
      className={index === 0 ? "case-study-overview" : "case-study-feature"}
    >
      <a
        href={project.images[index]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}: ${title} full size`}
      >
        <img
          src={project.images[index]}
          alt={`${project.title}: ${title}`}
          loading="lazy"
        />
      </a>
      <figcaption>
        <h4>{title}</h4>
        <p>{project.imageDescriptions?.[index]}</p>
      </figcaption>
    </figure>
  );
};

const ProjectGallery = ({ project }) => (
  <div className="project-gallery">
    {project.images.map((image, index) => (
      <figure key={image}>
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} screenshot ${index + 1} full size`}
        >
          <img
            className="project-image mobile-image"
            src={image}
            alt={
              project.imageTitles?.[index] ||
              `${project.title} screenshot ${index + 1}`
            }
            loading="lazy"
          />
        </a>
        {project.imageTitles?.[index] && (
          <figcaption>{project.imageTitles[index]}</figcaption>
        )}
      </figure>
    ))}
  </div>
);

const Project = ({ project }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresId = useId();
  const toggleRef = useRef(null);
  const previewButtonTop = useRef(null);

  useLayoutEffect(() => {
    if (
      !featuresOpen &&
      previewButtonTop.current !== null &&
      toggleRef.current
    ) {
      // Restore the preview's position after the expanded content is removed.
      const targetTop = Math.max(
        0,
        Math.min(
          previewButtonTop.current,
          window.innerHeight - toggleRef.current.offsetHeight - 16,
        ),
      );
      window.scrollBy({
        top: toggleRef.current.getBoundingClientRect().top - targetTop,
        behavior: "instant",
      });
      previewButtonTop.current = null;
    }
  }, [featuresOpen]);

  const toggleFeatures = () => {
    if (!featuresOpen) {
      previewButtonTop.current = toggleRef.current.getBoundingClientRect().top;
    }
    setFeaturesOpen((open) => !open);
  };

  return (
    <article className="project">
      <h3>{project.title}</h3>
      {project.imageLayout !== "document-and-phones" && (
        <p>{project.description}</p>
      )}
      {project.technologies?.length > 0 && (
        <p>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      )}
      {project.storeUrl && (
        <p>
          <a href={project.storeUrl} target="_blank" rel="noopener noreferrer">
            View on Google Play
          </a>
        </p>
      )}
      {project.imageLayout === "document-and-phones" ? (
        <div className="barcode-project-layout">
          <div className="barcode-project-context">
            <figure>
              <a
                href={project.overviewImage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} notice full size`}
              >
                <img
                  className="project-overview"
                  src={project.overviewImage}
                  alt={project.overviewAlt}
                  loading="lazy"
                />
              </a>
              <figcaption>{project.overviewCaption}</figcaption>
            </figure>
            <p>{project.description}</p>
          </div>
          <div className="barcode-project-phones">
            <ProjectGallery project={project} />
          </div>
        </div>
      ) : project.overviewImage ? (
        <>
          <figure>
            <a
              href={project.overviewImage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} overview full size`}
            >
              <img
                className="project-overview"
                src={project.overviewImage}
                alt={
                  project.overviewAlt ||
                  `${project.title} app overview showing multiple phone screens`
                }
                loading="lazy"
              />
            </a>
            {project.overviewCaption && (
              <figcaption>{project.overviewCaption}</figcaption>
            )}
          </figure>
          {project.imageLayout === "gallery" && (
            <ProjectGallery project={project} />
          )}
        </>
      ) : project.imageLayout === "gallery" ? (
        <ProjectGallery project={project} />
      ) : (
        project.images.length > 0 && (
          <div className="project-case-study">
            <CaseStudyImage project={project} index={0} />
            {project.images.length > 1 && (
              <div
                className={`case-study-disclosure ${featuresOpen ? "is-open" : "is-collapsed"}`}
              >
                <div
                  id={featuresId}
                  className="case-study-features"
                  inert={!featuresOpen}
                  aria-hidden={!featuresOpen}
                >
                  {project.images.slice(1).map((image, index) => (
                    <CaseStudyImage
                      key={image}
                      project={project}
                      index={index + 1}
                    />
                  ))}
                </div>
                <div className="case-study-toggle-row">
                  <button
                    ref={toggleRef}
                    className="case-study-toggle"
                    type="button"
                    aria-expanded={featuresOpen}
                    aria-controls={featuresId}
                    onClick={toggleFeatures}
                  >
                    {featuresOpen ? "Show less" : "More details"}
                    <span aria-hidden="true"> {featuresOpen ? "-" : "+"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </article>
  );
};

const Projects = () => {
  const { projects } = useGlobalContext();

  return (
    <section
      className="portfolio-section projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">Featured Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
