import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Carousel.module.css";

function Slider2() {
  const data = [
    { url: "/h1.png", id: 1 },
    { url: "/h2.png", id: 2 },
    { url: "/h3.png", id: 3 },
    { url: "/h4.png", id: 4 },
  ];

  const customRenderIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          className={`${styles.indicator} ${styles.selected}`}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        className={styles.indicator2}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };
  return (
    <div className={styles.carouselContainer}>
      {" "}
      <Carousel
        className={styles.carousel}
        renderIndicator={customRenderIndicator}
        showThumbs={false}
      >
        {data.map((slide) => (
          <div className={styles.image} key={slide.id}>
            <img src={slide.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider2;
