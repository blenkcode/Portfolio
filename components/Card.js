import React, { useState } from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const rotateX = ((offsetY - clientHeight / 2) / clientHeight) * -30;
    const rotateY = ((offsetX - clientWidth / 2) / clientWidth) * +30;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `rotateX(0) rotateY(0)`,
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <div className={style.cardcontent}>
          {" "}
          <img className={styles.photo} src="./colors.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
