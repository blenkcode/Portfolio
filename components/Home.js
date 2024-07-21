import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import Language from "./Language";
import Titre from "./Titre";
import Bio from "./Bio";
import Header from "./Header";
import Works from "./Works";
import About from "./About";
import Acceuil from "./Acceuil";

function Home() {
  const [head, setHead] = useState(false);
  const footerRef = useRef(null);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setHead(true);
      } else {
        setHead(false);
      }
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={head ? styles.headershow : styles.header}>
        <Header onClick={scrollToFooter} />
      </div>

      <div className={styles.acceuil}>
        <Acceuil></Acceuil>
      </div>

      <div ref={footerRef} className={styles.footer}>
        {" "}
        <Works />
      </div>
      <div ref={footerRef} className={styles.about}>
        {" "}
        <About></About>
      </div>
    </div>
  );
}

export default Home;
