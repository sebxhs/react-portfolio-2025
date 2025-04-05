import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import logo from "../Images/portlogo.png";
import facebook from "../Images/Facebook.png";
import linkedin from "../Images/Linkedin.png";
import mainimg from "../Images/mainimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [scrollToProjects, setScrollToProjects] = useState(false);

  useEffect(() => {
    if (scrollToProjects) {
      const projectsSection = document.getElementById("projectsSection");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
      setScrollToProjects(false); // Reset state after scrolling
    }
  }, [scrollToProjects]);

  return (
    <header className={styles.heroSection}>
      <img src={mainimg} alt="Background" className={styles.heroBackground} />
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <nav className={styles.navigation}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <ul className={styles.divnavlinks}>
              <Link to="/" className={styles.navLinks}>Projects</Link>
              <Link to="/about" className={styles.navLinks}>About</Link>
              <Link to="/contact" className={styles.navLinks}>Contact</Link>
            </ul>
            <Link to="https://www.facebook.com/seby.skittles">
              <img src={facebook} alt="Social Media" className={styles.socialIcons} />
            </Link>
            <Link to="https://www.linkedin.com/in/sebastian-quiroz-malca-alva-843275205/">
              <img src={linkedin} alt="Social Media" className={styles.socialIcons2} />
            </Link>
          </nav>
          <section className={styles.heroText}>
            <h1 className={styles.heroHeading}>
              Hi, I'm Sebastian, a UX and Graphic Designer crafting intuitive
              and visually compelling experiences.
            </h1>
            <p className={styles.heroSubheading}>
              Let's collaborate! Feel free to reach out and connect.
            </p>

            <button
              className={styles.viewProjectsButton}
              onClick={() => setScrollToProjects(true)}
            >
              View Projects
            </button>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;