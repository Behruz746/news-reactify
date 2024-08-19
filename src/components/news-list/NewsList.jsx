import React from "react";
import { NewsItem } from "../";
import styles from "./styles.module.scss";

function NewsList({ news }) {
  return (
    <>
      <ul className={styles.list}>
        {news?.map((item) => (
          <NewsItem item={item} key={item?.id} />
        ))}
      </ul>
    </>
  );
}

export default NewsList;
