import React from "react";
import styles from "../styles/Preloader.module.css"; // Créez ce fichier CSS pour styliser le preloader

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
      <p>Chargement...</p>
    </div>
  );
};

export default Preloader;
