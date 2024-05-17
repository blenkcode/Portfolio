import styles from "../styles/Footer.module.css";
import React, { useState, useEffect } from "react";

function Footer() {
  return (
    <div>
      <main>
        <img className={styles.doodlea} src="doodlee.png" />
        <img className={styles.doodleb} src="doodlee.png" />
        <img className={styles.doodlec} src="doodlee.png" />
        <div className={styles.scrollcontainer}>
          <div className={styles.scroll}>Scroll down</div>
        </div>
        <div className={styles.container}>
          <div className={styles.mywork}>
            <div className={styles.cardcontainer}>
              <div className={styles.card1}>
                <img className={styles.site} src="site.jpeg"></img>
              </div>
              <div className={styles.card2}>
                <div className={styles.content}>
                  <h2>My Work1</h2>
                  <p> This is my front-end development for this website</p>
                </div>
              </div>
              <div className={styles.card3}>
                <img className={styles.site} src="site.jpeg"></img>
              </div>
              <div className={styles.card4}>
                <div className={styles.contentleft}>
                  <h2>My Work1</h2>
                  <p> This is my front-end development for this website</p>
                </div>
              </div>{" "}
              <div className={styles.card5}>
                <img className={styles.site} src="site.jpeg"></img>
              </div>{" "}
              <div className={styles.card6}>
                {" "}
                <div className={styles.content}>
                  <h2>My Work1</h2>
                  <p> This is my front-end development for this website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Footer;
