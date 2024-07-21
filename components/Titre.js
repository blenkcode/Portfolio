import styles from "../styles/Titre.module.css";
import React, { useState, useEffect } from "react";
import Language from "./Language";

function Titre() {
  // Déclaration de la fonction ColorCycleGradient à l'extérieur de Home pour éviter la redéfinition

  return (
    <div>
      <div className={styles.main}>
        {/* <img className={styles.doodlec} src="doodlee.png" />
        <img className={styles.doodled} src="doodlee.png" />
        <img className={styles.doodlee} src="doodlee.png" /> */}
        <div className={styles.titleContainer}>
          <h2 className={styles.subtitle}>Hi, my name is</h2>
          <span className={styles.subtitleName}>
            Valentin Mor <span className={styles.subtitle}>I'm a Junior</span>
          </span>

          <h1 className={styles.h1Style}>
            FULL-STACK Developer<br></br>
          </h1>
          <div className={styles.lang}></div>
        </div>
      </div>
    </div>
  );
}

// Fonction personnalisée pour utiliser l'effet de gradient coloré

export default Titre;
