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

function Works() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         videoRef.current.play();
  //       } else {
  //         videoRef.current.pause();
  //       }
  //     },
  //     {
  //       threshold: 0.5, // Vidéo commence à jouer lorsque 50% de l'élément est visible
  //     }
  //   );

  //   if (videoRef.current) {
  //     observer.observe(videoRef.current);
  //   }

  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef.current);
  //     }
  //   };
  // }, []);
  // const myDivRef = useRef(null);

  const handleClick = () => {
    if (myDivRef.current) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h4 className={styles.titlework}>03. Works</h4>
        <div className={styles.mywork}>
          <div className={styles.cardcontainer}>
            <div className={styles.card1}>
              <div className={styles.navigationcontainer}>
                <div className={styles.imgupper}>
                  {" "}
                  <div className={styles.iphoneContainer}>
                    <img className={styles.iphone} src="/apple.png"></img>
                    <div className={styles.videoContainer}></div>
                  </div>
                  <img
                    className={styles.imgretracted}
                    src="/framecarby.png"
                  ></img>
                </div>
              </div>
              <div className={styles.contentleft}>
                <h2 className={styles.titlecontent}>Carby</h2>

                <p>
                  {" "}
                  Carby is a React-Native app that helps you beeing more aware
                  of your carbon-impact! <br></br>
                  <br></br>Who's says <b>sustainability </b>can't be fun ? The
                  app comes with a ton of features and functionalities such as{" "}
                  <b></b> daily eco-tasks based on your profil and{" "}
                  <b>game-like mecanisms</b> of leveling, success and cosmetics
                  rewards.
                </p>
                <p>
                  <u>Technologies invloved :</u> Javascript, React-Native, Expo,
                  Next.js Redux, MongoDB, CSS, Figma, Express, Node.js, external
                  API.
                </p>
              </div>
            </div>

            <div className={styles.card2}>
              <div className={styles.contentleft1}>
                <h2 className={styles.titlecontent}>Heaf</h2>

                <p>
                  {" "}
                  Ready to take care of your <b>nutrition</b> ? <br></br>
                  <br></br>Heaf is here to bring you knwoledge and guided
                  nutrition plans with differents programs, based on{" "}
                  <b>your goals</b>: losing weight, building muscles, getting
                  ready for a race.
                  <br></br>
                  <br></br>
                  Track your needed <b>macros</b> and <b>calories</b> with our
                  health algorythms.
                </p>
                <p>
                  <u>Technologies invloved :</u> Javascript, React, Chart.js
                  Next.js Redux, MongoDB, CSS, Figma, Express, Node.js.
                </p>
              </div>
              <div className={styles.navigationcontainer1}>
                {" "}
                <img
                  className={styles.imgretracted1}
                  src="/mockupheaf.png"
                ></img>
              </div>
            </div>

            <div className={styles.card3}>
              <div className={styles.navigationcontainer3}>
                {" "}
                <img
                  className={styles.imgretracted3}
                  src="/mockups Mindscapepng.png"
                ></img>
              </div>
              <div className={styles.contentleft1}>
                <h2 className={styles.titlecontent}>MindScape</h2>

                <p>
                  {" "}
                  Designed to maximize <b>collaboration</b> and efficiency,
                  <b>Mindscape</b> allows you to effortlessly create{" "}
                  <b>group projects</b>. Manage your <b>tasks</b> and plan your{" "}
                  <b>events</b> with shared calendars, ensuring your entire team
                  stays aligned and informed.
                  <br></br>
                  <br></br>
                  Enhance <b>communication</b> with our <b>group chat </b>and{" "}
                  <b>private chat </b>features, enabling instant and seamless
                  exchanges.
                </p>
                <p>
                  <u>Technologies invloved :</u> Javascript, React, Next.js
                  Redux, MongoDB, CSS, Figma, Express, Socket.IO, Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
