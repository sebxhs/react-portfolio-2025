import React from "react";
import styles from "./Home.module.css";
import logo from "../Images/portlogo.png"
import facebook from "../Images/Facebook.png"
import linkedin from "../Images/Linkedin.png"

function Nav() {

  return (

    <nav className={styles.navigation}>
    <img
      src={logo}
      alt="Logo"
      className={styles.logo}
    />
    <ul className={styles.navLinks}>
      <li className="Links">Projects</li>
      <li className="Links">About</li>
      <li className="Links">Contact</li>
    </ul>
    <img
      src={facebook}
      alt="Social Media"
      className={styles.socialIcons}
    />
            <img
      src={linkedin}
      alt="Social Media"
      className={styles.socialIcons2}
    />
  </nav>

  )

        }


export default Nav;