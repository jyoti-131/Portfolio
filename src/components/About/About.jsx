import React from "react";
import styles from "./About.module.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className={styles.container} ref={ref}>
      <h2 className={`${styles.title} ${inView ? styles.titleAnimate : ''}`}>ABOUT</h2>
      <div className={styles.content}>
        <div className={styles.cards}>
          {[
            {
              video: "/ffrontend.mp4",
              alt: "Frontend Icon",
              title: "Frontend Developer",
              description: "I'm a front-end developer with experience in building responsive and optimized sites",
              delay: "0s"
            },
            {
              video: "/backend.mp4",
              alt: "Backend Icon",
              title: "Backend Developer",
              description: "I have experience developing fast and optimised back-end systems and APIs",
              delay: "0.2s"
            },
            {
              video: "/ui designer.mp4",
              alt: "UI Design Icon",
              title: "UI Designer",
              description: "I have designed multiple landing pages and have created design systems as well",
              delay: "0.4s"
            },
            {
              video: "/research.mp4",
              alt: "Researcher Icon",
              title: "Researcher",
              description: "I conduct in-depth research on emerging technologies and implement innovative solutions in both frontend and backend development",
              delay: "0.6s"
            }
          ].map((card, index) => (
            <div 
              key={index}
              className={`${styles.card} ${inView ? styles.cardAnimate : ''}`} 
              style={{ animationDelay: card.delay }}
            >
              <div className={styles.iconContainer}>
                <video 
                  src={card.video} 
                  alt={card.alt}
                  className={styles.icon} 
                  autoPlay 
                  loop 
                  muted 
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
