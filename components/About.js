import styles from "../styles/About.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";

function About() {
  return (
    <div className={styles.main}>
      <h4 className={styles.titlework}></h4>

      <div className={styles.contentContainer}>
        <div className={styles.photoContainer}>
          <div className={styles.contentimg}>
            {" "}
            <img className={styles.photo} src="./colors.png"></img>
          </div>
        </div>

        <div className={styles.pContainer}>
          <div className={styles.titre}>A PROPOS DE MOI </div>
          <div className={styles.p}>
            👋 Je suis un développeur FullStack Junior de 28 ans, basé à{" "}
            <b>Montpellier</b>, à la recherche de mon premier poste dans le Web!
            <br></br>
            <br></br>
            Fort d'une carrière de six ans dans <b>l'industrie musicale</b>, où
            j'ai acquis des compétences <b>techniques</b> et développé un esprit{" "}
            <b>d'innovation</b>, je me suis passionné pour le développement web,
            retrouvant des similitudes dans <b>l'imagination</b>,{" "}
            <b>la conception</b> et la <b>réalisation</b> de projets.
            <br></br>
            <br></br> 🎓 Après plusieurs mois d'apprentissage en autodidacte,
            j'ai décidé de me <b>former</b> professionnellement à{" "}
            <b>La Capsule</b>, où j'ai obtenu le titre RNCP Concepteur
            Développeur d'Applications Web & Mobile
          </div>
          <div className={styles.links}>
            <a href="https://github.com/blenkcode" className={styles.git}>
              Github{" "}
              <FontAwesomeIcon className={styles.icons} icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-mor-a03174114/"
              className={styles.git}
            >
              LinkedIn{" "}
              <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
            </a>
            <a href="https://www.lacapsule.academy/" className={styles.git}>
              La Capsule <img className={styles.capsule} src="./capsule.png" />
            </a>
            <a href="/ValentinMorCV.pdf" download className={styles.git}>
              CV <FontAwesomeIcon className={styles.icons} icon={faFile} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
