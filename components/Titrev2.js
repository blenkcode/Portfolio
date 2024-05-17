import styles from "../styles/Titre.module.css";
import React, { useState, useEffect } from "react";

function Titre() {
  // Déclaration de la fonction ColorCycleGradient à l'extérieur de Home pour éviter la redéfinition
  const h1Style = useColorCycleGradient();

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <h2 className={styles.subtitle}>Hello there!</h2>
          <span className={styles.subtitleName}>I'm Valentin Mor</span>
          <h1 style={h1Style}>
            FRONT-END <span className={styles.developer}>DEVELOPER</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

// Fonction personnalisée pour utiliser l'effet de gradient coloré
function useColorCycleGradient() {
  const [hue, setHue] = useState(110); // Initialiser à la teinte bleue
  const [increasing, setIncreasing] = useState(true); // Déterminer si la teinte doit augmenter ou diminuer

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHue((prevHue) => {
        // Déterminer si la teinte doit augmenter ou diminuer
        if (prevHue >= 240 && increasing) {
          setIncreasing(false); // Commencer à diminuer une fois le jaune atteint
        } else if (prevHue <= 110 && !increasing) {
          setIncreasing(true); // Commencer à augmenter une fois le bleu atteint
        }

        // Mise à jour de la teinte en fonction de la direction
        return increasing ? prevHue + 1 : prevHue - 1;
      });
    }, 100); // Mise à jour tous les 100 ms pour une transition fluide

    return () => clearInterval(intervalId); // Nettoyer l'intervalle à la désactivation
  }, [increasing]);

  return {
    backgroundImage: `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${
      (hue + 60) % 360
    }, 100%, 50%))`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "130px",
    fontWeight: "bold",
    textAlign: "left",
    padding: "0px",
    margin: "0px",
    letterSpacing: "5px",
    marginTop: "60px",
    fontFamily: "Comfortaa",
  };
}

export default Titre;
