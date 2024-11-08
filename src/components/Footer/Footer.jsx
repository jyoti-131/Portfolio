import React from "react";
import { Github, Linkedin, Instagram } from 'lucide-react';
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glowBackground}></div>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/_.jyoti._1311/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconGlow}></div>
            <Instagram className={styles.icon} size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-948186260"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconGlow}></div>
            <Linkedin className={styles.icon} size={24} />
          </a>
          <a
            href="https://github.com/jyoti-131"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconGlow}></div>
            <Github className={styles.icon} size={24} />
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Jyoti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;