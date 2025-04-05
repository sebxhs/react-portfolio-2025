import React from "react";
import styles from "./Desktop8.module.css";

function UserPersona() {
  return (
    <section className={styles.personaSection}>
      <h2 className={styles.personaTitle}>User Persona</h2>
      <div className={styles.personaGrid}>
        <div className={styles.personaColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8452f8d3942b4448ba8bf5786f1ed1769c1a775c?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
            alt="User persona profile"
            className={styles.personaImage}
          />
        </div>
        <div className={styles.personaColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cddb9c957a45da78b8dc22439c358287f7ce4a2?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
            alt="User persona details"
            className={styles.personaImage}
          />
        </div>
      </div>
    </section>
  );
}

export default UserPersona;
