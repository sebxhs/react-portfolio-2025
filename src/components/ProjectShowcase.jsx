import React from "react";
import styles from "./Home.module.css";
import Project1 from "../Project1/Desktop8";
import { Link } from 'react-router-dom';

function ProjectShowcase({
  title,
  type,
  types,
  description,
  imageSrc,
  imageFirst,
}) {
  const renderProjectImage = () => (
    <div
      className={
        imageFirst ? styles.projectImageLeft : styles.projectImageRight
      }
    >
      <img src={imageSrc} alt={title} className={styles.projectImage} />
    </div>
  );

  const renderProjectInfo = () => (
    <article className={styles.projectInfo}>
      {title && <h3 className={styles.projectInfoTitle}>{title}</h3>}

      {types ? (
        <div className={styles.projectTypesContainer}>
          {types.map((typeText, index) => (
            <span key={index} className={styles.projectType}>
              {typeText}
            </span>
          ))}
        </div>
      ) : type ? (
        <span className={styles.projectType}>{type}</span>
      ) : null}

      <p className={styles.projectDescription}>{description}</p>
      <Link to="/project1"> <button className={styles.viewButton}>View</button> </Link>
    </article>
  );

  return (
    <section className={styles.projectShowcase}>
      <div className={styles.projectContent}>
        {imageFirst ? (
          <>
            {renderProjectImage()}
            {renderProjectInfo()}
          </>
        ) : (
          <>
            {renderProjectInfo()}
            {renderProjectImage()}
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectShowcase;
