import React from "react";
import { Image } from "../";
import { formatTimeAgo } from "../../helper/formatTimeAgo";
import styles from "./styles.module.scss";

function NewsBanner({ item, width, height }) {
  return (
    <>
      <div className={styles.banner}>
        <Image
          width={width}
          height={height}
          img={item?.image}
          title={"new image not found"}
        />
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item?.published)} by {item?.author}
        </p>
      </div>
    </>
  );
}

export default NewsBanner;
