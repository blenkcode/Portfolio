import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import Language from "./Language";
import Titre from "./Titre";
import Bio from "./Bio";
import Header from "./Header";
import Works from "./Works";
import About from "./About";
import Acceuil from "./Acceuil";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const [head, setHead] = useState(false);
  const lastScroll = useRef(0);

  const acceuilRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll.current) {
        setHead(true);
      } else {
        setHead(false);
      }
      lastScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={head ? styles.headershow : styles.header}>
        <Header
          scrollToAcceuil={() => scrollToSection(acceuilRef)}
          scrollToWorks={() => scrollToSection(worksRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
      </div>

      <div ref={acceuilRef} className={styles.acceuil}>
        <Acceuil />
      </div>
      <div ref={worksRef} className={styles.footer}>
        <Works />
      </div>
      <div ref={aboutRef} className={styles.about}>
        <About />
      </div>
      <div ref={contactRef} className={styles.contact}>
        <Contact />
      </div>
      {/* <div  className={styles.foot}>
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export default Home;
