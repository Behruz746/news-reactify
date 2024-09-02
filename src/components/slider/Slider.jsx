import React, { useRef } from "react";
import styles from "./styles.module.scss";

function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={scrollLeft}>
          {"<"}
        </button>
        {/* sliderga keladigan elementlardan ref malumotlarni olish uchun React cloneElement ishlatilingan */}
        {React.cloneElement(children, { ref: sliderRef })}
        <button className={styles.arrow} onClick={scrollRight}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Slider;
