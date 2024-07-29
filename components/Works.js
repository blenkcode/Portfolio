import styles from "../styles/works.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import CarbyV2 from "./CarbyV2";
import Slider from "./Slider";
import Slider2 from "./Slider2";

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

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.titlework}></h4>

      <h2 className={styles.portfolio}>
        {" "}
        <div className={styles.triangle}></div>PORTFOLIO{" "}
        <div className={styles.triangle2}></div>
      </h2>

      <div className={styles.mywork}>
        <div className={styles.content}>
          <div className={styles.title}>Projet 01</div>
          <div className={styles.text}>
            <h5 className={styles.titleproject}>MindScape</h5>
            <p>
              Conçu pour maximiser la <b>collaboration</b> et l'efficacité,
              Mindscape vous permet de créer des <b>projets de groupe</b> en
              toute simplicité. Gérez vos <b>tâches</b> et planifiez vos{" "}
              <b>événements</b> avec des <b>calendriers partagés</b>.
            </p>
            <p>
              Améliorez la communication avec les fonctionnalités de{" "}
              <b>chat de groupe </b>et de <b>chat privé</b>, permettant des
              échanges instantanés et fluides.
            </p>
            <p>
              <u>Technologies utilisées :</u> Javascript, React, Next.js, Redux,
              MongoDB, CSS, Figma, Express, Socket.IO, Node.js.
            </p>
            <a href="https://mind-scape-front-end.vercel.app/">Visitez</a>
          </div>
          <Slider className={styles.carousel}></Slider>
        </div>
        <div className={styles.contentHeaf}>
          <div className={styles.titleheaf}>Projet 02</div>
          <Slider2></Slider2>
          <div className={styles.textheaf}>
            <h5 className={styles.titleproject}>Heaf</h5>
            <p>
              {" "}
              Prêt à prendre soin de votre <b>nutrition</b> ? <br></br>
              <br></br>Heaf est là pour vous apporter des connaissances et des
              plans nutritionnels guidés avec différents programmes, basés sur{" "}
              <b>vos objectifs</b> : perdre du poids, gagner du muscle, se
              préparer pour une course.
              <br></br>
              <br></br>
              Suivez vos <b>macros</b> et <b>calories</b> nécessaires avec nos
              algorithmes de santé.
            </p>
            <p>
              <u>Technologies utilisées :</u> Javascript, React, Chart.js
              Next.js Redux, MongoDB, CSS, Figma, Express, Node.js.
            </p>
            <a href="https://heaf-front-end-qzfj.vercel.app/">Visitez</a>
          </div>
        </div>
        <div className={styles.contentcarby}>
          <div className={styles.text}>
            <h5 className={styles.titleproject}>Carby</h5>
            <p>
              {" "}
              Carby est une application React-Native qui vous aide à prendre
              conscience de votre impact carbone ! <br></br>
              <br></br>Qui a dit que l'<b>éco-responsabilité</b> ne pouvait pas
              être amusante ? L'application propose de nombreuses
              fonctionnalités telles que des{" "}
              <b>tâches écologiques quotidiennes</b> basées sur votre profil et
              des <b>mécanismes de jeu</b> comme le leveling, le déblocage de
              succès et des récompenses cosmétiques.
            </p>
            <p>
              <u>Technologies utilisées :</u> Javascript, React-Native, Expo,
              Next.js Redux, MongoDB, CSS, Figma, Express, Node.js, external
              API.
            </p>
          </div>
          <div className={styles.imgupper}>
            {" "}
            {/* <div className={styles.iphoneContainer}>
              <img className={styles.iphone} src="/apple.png"></img>
            </div> */}
            <img className={styles.imgretracted} src="/carb1.png"></img>
            <img className={styles.imgretracted} src="/carb2.png"></img>
            <img className={styles.imgretracted} src="/carby3.png"></img>
          </div>
          <div className={styles.title}>Projet 03</div>
        </div>
      </div>
    </div>
  );
}

export default Works;
