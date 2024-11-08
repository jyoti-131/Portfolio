import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(`.${styles.menu}`);
      const menuIcon = document.querySelector(`.${styles.menuIcon}`);
      
      if (menuOpen && menu && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 830 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Prevent scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 830) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e) => {
    setMenuOpen(false);
    
    // Smooth scroll to section
    const targetId = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      
      <button 
        className={styles.menuIcon} 
        onClick={handleMenuClick}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X size={24} className={styles.icon} />
        ) : (
          <Menu size={24} className={styles.icon} />
        )}
      </button>

      <div className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.menuItems}>
          <li>
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className={styles.menuLink}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={handleLinkClick}
              className={styles.menuLink}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className={styles.menuLink}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className={styles.menuLink}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;