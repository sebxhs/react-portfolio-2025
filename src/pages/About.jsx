import React, { useState } from "react";
import styles from "./About.module.css";
import Header from "./aboutheader"
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import aboutimage from "../Images/Portaboutimage.png"
import logoblack from "../Images/blackportlogo.png"
import linkedin from "../Images/Linkedinblack.png"
import email from "../Images/EmailBlack.png"

// Profile section with image and introduction
const ProfileSection = () => {
  return (
    <section className={styles.div5}>
      <div className={styles.div6}>
        <div className={styles.column}>
          <img
            src={aboutimage}
            alt="Sebastian Quiroz profile"
            className={styles.img3}
          />
        </div>
        <article className={styles.column2}>
          <div className={styles.div7}>
            <h1 className={styles.iamSebastianQuirozMalcaAlva}>
              I am Sebastian Quiroz Malca Alva.
            </h1>
            <p
              className={
                styles.imagraphicdesignerbasedinVancouvereagertoexpandmyskillsinUXandexplorefuturejobopportunitiesinthefieldPassionateaboutwebdesignIfocusoncreatingintuitiveenjoyableandimpactfulsolutionsthatprioritizeempathyandcreativitytoenhanceuserexperiences
              }
            >
              I'm a graphic designer based in Vancouver, eager to expand my
              skills in UX and explore future job opportunities in the field.
              Passionate about web design, I focus on creating intuitive,
              enjoyable, and impactful solutions that prioritize empathy and
              creativity to enhance user experiences.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

// Skills section with three columns
const SkillsSection = () => {
  return (
    <section className={styles.div8}>
      <div className={styles.div9}>
        <div className={styles.column3}>
          <div className={styles.div10}>
            <h2 className={styles.developmentTools}>Development Tools</h2>
            <ul className={styles.htmlcssJavascriptWordpressReact}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Wordpress</li>
              <li>React</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
        <div className={styles.column4}>
          <div className={styles.div11}>
            <h2 className={styles.designTools}>Design Tools</h2>
            <ul className={styles.figmaPhotoshopIllustratorInDesign}>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
            </ul>
          </div>
        </div>
        <div className={styles.column5}>
          <div className={styles.div12}>
            <h2 className={styles.skills}>Skills</h2>
            <ul
              className={
                styles.visualDesignBrandingWireframingPrototypingResponsiveDesignUserResearch
              }
            >
              <li>Visual Design & Branding</li>
              <li>Wireframing/Prototyping</li>
              <li>Responsive Design</li>
              <li>Information Architecture</li>
              <li>User Research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education section
const EducationSection = () => {
  return (
    <section className={styles.diveducation}>
      <h2 className={styles.education}>Education</h2>
      <div className={styles.div13}>
        <h3
          className={
            styles.britishColumbiaInstituteofTechnologyVancouverBcNewMediaDesignandWebDevelopmentDiploma
          }
        >
          British Columbia Institute of Technology, Vancouver BC <br />
          New Media Design and Web Development Diploma
        </h3>
        <time className={styles.january2024August2025}>
          January 2024 - August 2025
        </time>
      </div>
      <hr className={styles.div14} />
      <div className={styles.div15}>
        <h3>
          NPower Canada, Toronto, Ontario
          <br />
          Google UX Design Program
        </h3>
        <time className={styles.september2022}>September 2022</time>
      </div>
      <hr className={styles.div16} />
      <div className={styles.div17}>
        <h3
          className={
            styles.britishColumbiaInstituteofTechnologyVancouverBcAssociateCertificateGraphicDesign
          }
        >
          British Columbia Institute of Technology, Vancouver BC
          <br />
          Associate Certificate Graphic Design
        </h3>
        <time className={styles.march2022}>March 2022</time>
      </div>

      <button className={styles.viewButton}>Resume</button>

    </section>
  );
};

// Footer component
const Footer1= () => {
  return (
    <Footer />
  );
};

// Main About component that combines all sections
function About() {
  return (
    <main className={styles.about}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <Header />
          <ProfileSection />
          <SkillsSection />
          <EducationSection />
        </div>
        <Footer1/>
      </div>
    </main>
  );
}

export default About;
