import React from "react";
import styles from "./styles.module.scss";

function Skeleton({ count = 1, type = "banner", diraction = "column" }) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            diraction === "column" ? styles.diractionList : styles.list
          }
        >
          {[...Array(count)].map((_, idx) => (
            <li
              key={idx}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <>
          <li className={type === "banner" ? styles.banner : styles.item}></li>
        </>
      )}
    </>
  );
}

export default Skeleton;
