import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";

function Header() {
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="logo2.png"
          alt="Description de l'image"
        />
        <div className={styles.horizontalline}></div>
        <ul className={styles.list}>
          <li>01.About</li>
          <li>02.Experience</li>
          <li>03.Work</li>
          <li>04.Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
