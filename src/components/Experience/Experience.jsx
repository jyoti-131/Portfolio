import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>EXPERIENCE</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img 
                  src={skill.imageSrc} 
                  alt={skill.title} 
                  className={styles.skillImage}
                />
              </div>
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyImageContainer}>
                <img 
                  src={historyItem.imageSrc} 
                  alt={historyItem.organization} 
                  className={styles.historyImage}
                />
              </div>
              <div className={styles.historyDetails}>
                <div className={styles.historyHeader}>
                  <h3 className={styles.historyRole}>
                    {`${historyItem.role}, ${historyItem.organization}`}
                  </h3>
                  <p className={styles.historyDate}>
                    {`${historyItem.startDate} - ${historyItem.endDate}`}
                  </p>
                </div>
                <ul className={styles.historyList}>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className={styles.historyListItem}>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;