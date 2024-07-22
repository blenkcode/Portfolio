import styles from "../styles/Language.module.css";
import React, { useState, useEffect, useRef } from "react";

function Language() {
  return (
    <div className={styles.mainE}>
      <div className={styles.main}>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <img
              src="html.png"
              alt="Description de l'image"
              className={styles.logo}
            />
          </div>
          <p>Contenu de la cardcontainer</p>
        </div>
        <div className={styles.card}>
          <img
            src="css.png"
            alt="Description de l'image"
            className={styles.logocss}
          />
        </div>
        <div className={styles.card}>
          <img
            src="js.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
        <div className={styles.card}>
          <img
            src="react.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
        <div className={styles.card}>
          <img
            src="redux.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
        <div className={styles.card}>
          <img
            src="node.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
        <div className={styles.card}>
          <img
            src="next.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
        <div className={styles.card}>
          <img
            src="git.png"
            alt="Description de l'image"
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.scrollcontainer}>
        <div className={styles.scroll}>Scroll down</div>
      </div>
    </div>
  );
}

export default Language;
