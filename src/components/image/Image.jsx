import React from "react";
import { formDate } from "../../helper/formatDate";
import styles from "./styles.module.scss";

function Image({ width, height, img, title }) {
  return (
    <>
      <div className={styles.wrapper}>
        {img ? (
          <img
            width={width}
            height={height}
            loading="lazy"
            src={img}
            className={styles.img}
            alt={`${title} - NO image`}
          />
        ) : null}
      </div>
    </>
  );
}

export default Image;
