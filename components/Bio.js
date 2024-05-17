import styles from "../styles/Bio.module.css";
import React, { useState, useEffect } from "react";

function Bio() {
  return (
    <div>
      <main>
        <div className={styles.container}>
          <img className={styles.photo} src="vall.png" />
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
      </main>
    </div>
  );
}

export default Bio;
