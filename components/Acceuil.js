import styles from "../styles/Acceuil.module.css";
import React, { useState, useEffect } from "react";

function Acceuil() {
  // Déclaration de la fonction ColorCycleGradient à l'extérieur de Home pour éviter la redéfinition

  return (
    <div className={styles.main}>
      <div className={styles.doodlea}></div>
      <div className={styles.doodleb}></div>
      <div className={styles.doodlec}></div>
      <div className={styles.doodled}></div>
      <div className={styles.doodlee}></div>

      <div>
        <div className={styles.titleContainer}>
          <h2 className={styles.subtitle}>Hi, my name is</h2>
          <span className={styles.subtitleName}>
            Valentin Mor <span className={styles.subtitle}>I'm a Junior</span>
          </span>

          <h1 className={styles.h1Style}>
            FULL-STACK Developer<br></br>
          </h1>
        </div>
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.imgcontainer}>
          {" "}
          <img className={styles.photo} src="devmoor.png"></img>
          <div className={styles.poly}></div>
        </div>

        <p className={styles.p}>
          I create interactive interface for your web-application{" "}
        </p>
        <ul className={styles.list}>
          <li>Creative FRONT-END developement</li>
          <li>UX / UI Design</li>
          <li>BACK-END Architectures</li>
          <li>Data-Base management</li>
          <li>CRUD Operation</li>
        </ul>
      </div>

      <div className={styles.languageContainer}>
        <div className={styles.cardcontainer}>
          {" "}
          <div className={styles.card}>
            <img
              src="html.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="css.png"
              alt="Description de l'image"
              className={styles.logocss}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="js.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="react.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="next.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="redux.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="node.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>

        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="git.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
      <div className={styles.scrollcontainer}>
        <div className={styles.scroll}>Scroll down</div>
      </div>
    </div>
  );
}

// Fonction personnalisée pour utiliser l'effet de gradient coloré

export default Acceuil;
