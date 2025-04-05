import React from "react";
import styles from "./Desktop8.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logoblack from "../Images/blackportlogo.png"
import linkedin from "../Images/Linkedinblack.png"
import email from "../Images/EmailBlack.png"
import facebook from "../Images/FacebookBlack.png"

function Header() {
  return (
    <header className={styles.div3}>
      <img src={logoblack} alt="Logo" className={styles.img} />
      <nav className={styles.div4}>
         <Link to="/" className={styles.navLinks1}>Projects</Link>
         <Link to="/about" className={styles.navLinks1}>About</Link>
         <Link to="/contact" className={styles.navLinks1}>Contact</Link>
      </nav>
      <Link to="https://www.facebook.com/seby.skittles">
        <img src={facebook} alt="Email" className={styles.img2} />
      </Link>
      <Link to="https://www.linkedin.com/in/sebastian-quiroz-malca-alva-843275205/">
        <img src={linkedin} alt="LinkedIn" className={styles.linkedinimg2} />
      </Link>
    </header>
  );
}

export default Header;
