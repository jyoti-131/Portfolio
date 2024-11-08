import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Jyoti";
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>{text}</span>
          <span className={`${styles.cursor} ${!isTyping ? styles.blinking : ''}`}></span>
        </h1>
        <p className={styles.description}>
          A passionate developer focused on creating engaging, user-friendly experiences. 
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/Group 2.png"
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.gradientOverlay} />
    </section>
  );
};

export default Hero;