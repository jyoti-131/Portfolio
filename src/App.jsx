import React from "react";
import styles from "./App.module.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBeams} />
      <div className={styles.content}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <section id="contact" className={styles.contactSection}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;