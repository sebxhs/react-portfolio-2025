import React from "react";
import styles from "./Desktop8.module.css";

function ProblemStatement() {
  return (
    <section className={styles.problemSection}>
      <h2 className={styles.problemTitle}>Problem</h2>
      <p className={styles.problemText}>
        Many sneaker store users face challenges when trying to purchase new
        releases, particularly on drop dates. Common issues include automated
        bots quickly buying up large quantities of sneakers for resale, slow app
        performance due to high traffic, and inventory being sold out before
        users can complete their purchase.
        <br />
        <br />
        To address these problems, my proposed solution is to develop a mobile
        app for a sneaker store that streamlines the process, allowing users to
        easily search for, save, and purchase sneakers with efficiency and ease,
        ensuring a smoother experience on drop date.
      </p>
    </section>
  );
}

export default ProblemStatement;
