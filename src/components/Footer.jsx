import React from "react";
import styles from "./Home.module.css";
import logo from "../Images/portlogo.png"
import Email  from "../Images/Email.png"
import linkedin from "../Images/Linkedin.png"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import facebook from "../Images/Facebook.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img
            src={logo}
            alt="Footer Logo"
            className={styles.footerLogo}
          />
          <div className={styles.footerInfo}>
            <p className={styles.copyright}>©2025 Sebastian Quiroz</p>
            <div className={styles.dividerVertical} />
            <p className={styles.email}>sebastianqma@gmail.com</p>
          </div>
        </div>
        <div className="medialinks">
        <Link to="https://www.facebook.com/seby.skittles">
        <img
          src={facebook}
          alt="Social Media"
          className={styles.footerSocial}
        /> </Link>
         <Link to="https://www.linkedin.com/in/sebastian-quiroz-malca-alva-843275205/">
                <img
          src={linkedin}
          alt="Social Media"
          className={styles.footerSocial2}
        />
        </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
