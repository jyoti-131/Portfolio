import React, { useRef } from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: "कृShe-Smart Crop Prediction ",
    image: "/Krishe.png",
    description: "Krishe empowers farmers with data-driven crop recommendations, optimizing yield and promoting sustainable farming through advanced environmental analysis.",
    technologies: ["Flask", "Html", "CSS", "DBMS"]
  },
  {
    id: 2,
    title: "Medgloss",
    image: "/Medgloss.png",
    description: "Medgloss is a one-stop guide tailored for medical students, offering essential resources like question banks, mock tests, case studies, educational blogs, virtual surgery simulations, and interactive 3D models.",
    technologies: ["React.js", "MongoDB", "Next.js", "CSS", "Html"]
  },
  {
    id: 3,
    title: "Articulation Meter",
    image: "/Articulation.png",
    description: "The Articulation Meter is a tool designed to assess and improve speech clarity by analyzing voice modulation, pronunciation, and articulation patterns. It helps users and language learners aiming for effective communication.",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Streamlit"]
  },
  {
    id: 4,
    title: "Feast from Home",
    image: "/feast from home.png",
    description: "Feast from Home is a comprehensive food delivery platform that connects home chefs with local customers. It enables passionate home cooks to showcase their culinary skills and earn income while providing customers with authentic, home-cooked meals.",
    technologies: ["Html", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={projectsRef} className={styles.projects} id="projects">
      <div className={styles.projectsHeader}>
        <h2 onClick={scrollToProjects} className={styles.projectsTitle}>
          PROJECTS
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;