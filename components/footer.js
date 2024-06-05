import styles from "../styles/Footer.module.css";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import CarbyV2 from "./CarbyV2";

const images = [
  "/carby/carb5.png",
  "/carby/carb3.png",
  "/carby/carb6.png",
  "/carby/carb1.png",
  "/carby/carb2.png",
];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const myDivRef = useRef(null);

  const handleClick = () => {
    if (myDivRef.current) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.scrollcontainer}>
        <div className={styles.scroll}>Scroll down</div>
      </div>
      <div className={styles.container}>
        <h4 className={styles.titlework}>03. Works</h4>
        <div className={styles.mywork}>
          <div className={styles.cardcontainer}>
            <div className={styles.card1}>
              <div className={styles.navigationcontainer}>
                <div className={styles.imgupper}>
                  {" "}
                  <img
                    className={styles.imgretracted}
                    src="/carby/carb5.png"
                  ></img>
                  <img
                    className={styles.imgretracted}
                    src="/carby/carb3.png"
                  ></img>
                </div>
              </div>
              <div className={styles.contentleft}>
                <h2 className={styles.titlecontent}>Carby</h2>

                <p>
                  {" "}
                  Carby is a React-Native app that helps you beeing more aware
                  of your carbon-impact! <br></br>
                  <br></br>Who's says sustainability can't be fun ? The app
                  comes with a ton of features and functionalities such as daily
                  eco-tasks based on your profil and game-like mecanisms of
                  leveling, success and cosmetics rewards.
                </p>
                <p>
                  Technologies invloved : Javascript, React-Native, Expo,
                  Next.js Redux, MongoDB, CSS, Figma, Express, Node.js, external
                  API.
                </p>
              </div>
            </div>

            <div className={styles.card2}>
              <div className={styles.contentleft}>
                <h2 className={styles.titlecontent}>InstaCup</h2>

                <p>
                  {" "}
                  Carby is a React-Native app that helps you beeing more aware
                  of your carbon-impact! <br></br>
                  <br></br>Who's says sustainability can't be fun ? The app
                  comes with a ton of features and functionalities such as daily
                  eco-tasks based on your profil and game-like mecanisms of
                  leveling, success and cosmetics rewards.
                </p>
                <p>
                  Technologies invloved : Javascript, React-Native, Next.js
                  Redux, MongoDB, CSS, Figma, Express, Node.js, external API.
                </p>
              </div>
              <div className={styles.navigationcontainer}>
                <div className={styles.imgupper}>
                  {" "}
                  <img
                    className={styles.imgretracted}
                    src="/carby/carb5.png"
                  ></img>
                  <img
                    className={styles.imgretracted}
                    src="/carby/carb3.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
