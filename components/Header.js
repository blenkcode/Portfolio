import styles from "../styles/Header.module.css";
import React from "react";

function Header({
  scrollToAcceuil,
  scrollToWorks,
  scrollToAbout,
  scrollToContact,
}) {
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="logo2.png"
          alt="Description de l'image"
        />
        <ul className={styles.list}>
          <li onClick={scrollToAcceuil} style={{ cursor: "pointer" }}>
            01. Accueil
          </li>
          <li onClick={scrollToAbout} style={{ cursor: "pointer" }}>
            02. À propos
          </li>
          <li onClick={scrollToWorks} style={{ cursor: "pointer" }}>
            03. Portfolio
          </li>
          <li onClick={scrollToContact} style={{ cursor: "pointer" }}>
            04. Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
