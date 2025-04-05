import React from "react";
import styles from "./Desktop8.module.css";

function ProjectHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a29b3a2282fc084ceef35b6fc44861910c17aa3d?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
          alt="Exclusive Kicks project showcase"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default ProjectHero;
