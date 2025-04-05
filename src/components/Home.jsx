import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectShowcase from "../components/ProjectShowcase";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";
import project4 from "../Images/project4.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray(".project-item");

    if (projects.length === 0) return; // Prevent errors if no projects are found

    gsap.fromTo(
      projects,
      { opacity: 0, y: 50 }, // Start state
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projectsSection",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // Ensures animation only happens once
        },
      }
    );

    ScrollTrigger.refresh(); // Ensures GSAP properly detects the elements
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.projectsWrapper}>
          <section id="projectsSection" className={styles.projects} ref={projectsRef}>
            {/* Project 1 */}
            <div className="project-item">
              <ProjectShowcase
                title="Exclusive Kicks"
                type="UI/UX Case Study"
                description="Exclusive Kicks is a UX design project focused on enhancing the online sneaker-buying experience."
                imageSrc={project1}
                imageFirst={false}
                Link ="/project1"
              />
            </div>

            <hr className={styles.divider} />

            {/* Project 2 */}
            <div className="project-item">
              <ProjectShowcase
                title="MusicRate"
                type="UI/UX Case Study"
                description="MusicRate is a UX case study focused on redesigning RateYourMusic (RYM) to create a more user-friendly experience."
                imageSrc={project2}
                imageFirst={true}
              />
            </div>

            <hr className={styles.divider} />

            {/* Project 3 */}
            <div className="project-item">
              <ProjectShowcase
                title="Boost Energy Drink"
                type="Graphic Design"
                description="Boost Energy is a branding and packaging design project focused on creating a bold, high-energy visual identity."
                imageSrc={project3}
                imageFirst={false}
              />
            </div>

            <hr className={styles.divider} />

            {/* Project 4 */}
            <div className="project-item">
              <ProjectShowcase
                title="VIVID"
                types={["Graphic Design", "Branding"]}
                description="VIVID is a bold and dynamic branding project exploring the fusion of high-end luxury with urban culture."
                imageSrc={project4}
                imageFirst={true}
              />
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Home;