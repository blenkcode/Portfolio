import styles from "../styles/Acceuil.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faServer,
  faDatabase,
  faScrewdriverWrench,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

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
          <img className={styles.photo} src="photopr.png"></img>
          <div className={styles.poly}></div>
        </div>

        <p className={styles.p}>
          I create interactive interface for your web-application{" "}
        </p>
        <ul className={styles.list}>
          <li className={styles.li}>
            <FontAwesomeIcon icon={faLaptop} className={styles.iconBio} />{" "}
            Développement Front-End & Architectures Back-End
          </li>

          <li className={styles.li}>
            <FontAwesomeIcon icon={faDatabase} className={styles.iconBio} />{" "}
            Gestion de base de données{" "}
          </li>
          <li className={styles.li}>
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className={styles.iconBio}
            />{" "}
            Maintenance
          </li>
          <li className={styles.li}>
            <FontAwesomeIcon icon={faUserGroup} className={styles.iconBio} />{" "}
            Méthode Agile
          </li>
        </ul>
      </div>

      <div className={styles.languageContainer}>
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
              src="expr.png"
              alt="Description de l'image"
              className={styles.logoex}
            />
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="m.png"
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
