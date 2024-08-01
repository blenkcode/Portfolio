import styles from "../styles/About.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className={styles.main}>
      <h4 className={styles.titlework}></h4>

      <div className={styles.contentContainer}>
        <div className={styles.photoContainer}>
          {" "}
          <div className={styles.contentLeft}>
            {" "}
            <div className={styles.t}>MON STACK</div>
            <p className={styles.pleft}>
              J'utilise <b>JavaScript</b> pour vous offrir des sites modernes et
              performants avec les technologies les plus avancées. <br></br>{" "}
              <br></br>Pour le développement front-end, j'emploie les frameworks
              <b> React et Next.js</b>, avec <b>Redux</b> pour la gestion des
              états et du <b>CSS</b> pour un design soigné et des animations
              captivantes.
              <br /> <br></br>
              Pour le back-end, je m'appuie sur <b>Node.js et Express</b>, ce
              qui me permet de gérer les serveurs, les requêtes et les
              opérations CRUD sur les bases de données de manière efficace.
            </p>
          </div>
        </div>

        <div className={styles.pContainer}>
          <div className={styles.p}>
            <div className={styles.titre}>A PROPOS DE MOI </div>
            <div className={styles.hello}>👋</div> Je suis un développeur
            FullStack React et Node.js basé à <b>Montpellier</b>,<br></br>
            <br></br>
            Passionné par la <b>création</b> d'interfaces utilisateurs et
            d'architecture back-end, je réalise vos futures applications web!
            <br></br> <br></br>
            Fort d'une carrière de six ans dans l'industrie musicale, où j'ai
            développé <b>un esprit d'innovation</b> j'aime retrouver ces
            similitudes dans l'imagination, la conception et la réalisation de
            projets.
          </div>
          <div className={styles.links}>
            <a href="https://github.com/blenkcode" className={styles.git}>
              {" "}
              <FontAwesomeIcon className={styles.icons} icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-mor-a03174114/"
              className={styles.git}
            >
              {" "}
              <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
            </a>

            <a href="/VALENTIN-MOR-CV-2024.pdf" download className={styles.cv}>
              <FontAwesomeIcon className={styles.icons2} icon={faDownload} />
              Télécharger un CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
