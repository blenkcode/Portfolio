import styles from "../styles/About.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className={styles.main}>
      <h4 className={styles.titlework}>01. About</h4>

      <div className={styles.contentContainer}>
        <div className={styles.photoContainer}>
          <img className={styles.photo} src="./abouttouched.png"></img>
        </div>

        <div className={styles.pContainer}>
          <div className={styles.p}>
            👋 Je suis un Montpellierain de 28 ans à la recherche de mon premier
            poste en tant que développeur FullStack Junior! <br></br> <br></br>
            Fort d'une carrière de 6 ans dans l'industrie musicale où
            l'apprentissage des connaissances techniques et l'innonovation ont
            su me captiver et me donner soif d'imaginer , concevoir puis faire
            prendre vie à des projets, ce sont ces liens là que j'ai pu
            retrouver dans le développement web. <br></br> <br></br>
            🎓 Après plusieurs mois en autoditacte j'ai décidé de me former avec
            des professionels à La Capsule et ainsi obtenir le Titre RNCP
            "Concepteur / Developpeur d'application Web".<br></br> <br></br>{" "}
            Plus que jamais passioné par ce secteur, j'ai hâte de commencer ce
            nouveau chapitre professionel.
          </div>
          <div className={styles.links}>
            <a href="https://github.com/blenkcode" className={styles.git}>
              Github <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-mor-a03174114/"
              className={styles.git}
            >
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <div className={styles.git}>
              Resume <FontAwesomeIcon icon={faFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
