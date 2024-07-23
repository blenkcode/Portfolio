import React, { useRef } from "react";
import styles from "../styles/Button.module.css";

const Button = ({ onClick }) => {
  const btnRef = useRef(null);

  return (
    <div className={styles.body}>
      <div ref={btnRef} className={styles.btn} onClick={onClick}>
        <span className={styles.txt}>Send</span>
      </div>
    </div>
  );
};

export default Button;
