import styles from "../styles/Carby.module.css";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

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

function Carby() {
  const [isExpanded, setIsExpanded] = useState(false);

  const myDivRef = useRef(null);

  const handleClick = () => {
    if (myDivRef.current) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div>
      <div className={styles.navigationcontainer}>
        <div
          ref={myDivRef}
          className={styles.navigation}
          style={{
            width: isExpanded ? "1000px" : "100px",
            height: isExpanded ? "1200px" : "100px",
            transition: "all 0.3s ease",
          }}
        >
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 0, "--x": -1, "--y": 0 }}
          >
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb1.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 1, "--x": 1, "--y": 0 }}
          >
            {" "}
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb2.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 2, "--x": 0, "--y": -1 }}
          >
            {" "}
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb3.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 3, "--x": 0, "--y": 1 }}
          >
            {" "}
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb4.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 4, "--x": 1, "--y": 1 }}
          >
            {" "}
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb5.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 5, "--x": -1, "--y": -1 }}
          >
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb6.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 6, "--x": -1, "--y": 1 }}
          >
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb5.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 7, "--x": 1, "--y": -1 }}
          >
            <img
              onClick={handleClick}
              className={
                isExpanded ? styles.imgtransformed : styles.imgretracted
              }
              src="/carby/carb5.png"
            ></img>
          </span>
          <span
            onClick={handleClick}
            className={isExpanded ? styles.spanstransformed : styles.spans}
            style={{ "--i": 8, "--x": 0, "--y": 0 }}
          >
            <img
              onClick={handleClick}
              className={styles.imgtransformed}
              src="/carby/carb5.png"
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carby;
