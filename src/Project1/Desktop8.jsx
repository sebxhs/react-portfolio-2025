"use client";
import React from "react";
import styles from "./Desktop8.module.css";
import Header from "./Header";
import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectDetails from "./ProjectDetails";
import ProblemStatement from "./ProblemStatement";
import UserPersona from "./UserPersona";
import Divider from "./Divider";
import Secondpart from "../projectpart2/SecondPart";

function Desktop8() {
  return (
    <main className={styles.desktop8}>
      <div className={styles.container}>
      <div>
        <Header />
        </div>
        <ProjectHero />
        <ProjectOverview />
        <Divider />
        <ProjectDetails />
        <Divider />
        <ProblemStatement />
        <Divider />
        <UserPersona />
        <Divider />
        <Secondpart />
      </div>
    </main>
  );
}

export default Desktop8;
