import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Language from "./Language";
import Titre from "./Titre";
import Bio from "./Bio";
import Header from "./Header";
import Footer from "./footer";

function Home() {
  return (
    <div>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.header}>
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
      </main>
    </div>
  );
}

export default Home;
