import React from "react";
import styles from "./Desktop8.module.css";

function ProjectDetails() {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.taskColumn}>
        <h3 className={styles.detailsTitle1}>Tasks</h3>
        <ul className={styles.taskList}>
          <li className={styles.taskItem}>UI Design</li>
          <li className={styles.taskItem}>UX Research</li>
          <li className={styles.taskItem}>Wireframing</li>
          <li className={styles.taskItem}>Prototyping</li>
        </ul>
      </div>

      <div className={styles.timelineColumn}>
        <h3 className={styles.detailsTitle}>Timeline</h3>
        <p className={styles.timelineText}>September 2024 - October 2024</p>
      </div>

      <div className={styles.toolsColumn}>
        <h3 className={styles.detailsTitle}>Tools</h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8bed5f9a9db4aaa2a7fe3f5b381a23b6175a9e1?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
          alt="Design tools"
          className={styles.toolsIcon}
        />
      </div>
    </section>
  );
}

export default ProjectDetails;
