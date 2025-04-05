import React from "react";
import styles from "./Desktop8.module.css";

function ProjectOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewGrid}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
        </div>
        <div className={styles.column2}>
          <p className={styles.overviewText}>
            Exclusive Kicks is a sneaker store located in North Vancouver,
            specializing in limited-edition and exclusive sneaker releases. The
            store caters to sneaker enthusiasts who are passionate about
            securing rare and hard-to-find sneakers on their release dates.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
