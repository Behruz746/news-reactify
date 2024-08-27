import React from "react";
import { NewsItem } from "../";
import styles from "./styles.module.scss";
import withSkeleton from "../../helper/hocs/WithSkeleton";

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

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);
export default NewsListWithSkeleton;
