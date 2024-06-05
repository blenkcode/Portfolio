import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Language from "./Language";
import Titre from "./Titre";
import Bio from "./Bio";
import Header from "./Header";
import Footer from "./footer";

function Home() {
  const [head, setHead] = useState(false);
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

  return (
    <div className={styles.mainContainer}>
      <div className={head ? styles.headershow : styles.header}>
        <Header />
      </div>
      <div className={styles.titre}>
        <Titre />
      </div>
      <div className={styles.content}>
        <Bio />
      </div>
      <div className={styles.language}>
        {" "}
        <Language />
      </div>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
