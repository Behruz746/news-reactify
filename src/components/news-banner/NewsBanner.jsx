import React from "react";
import { Image } from "../";
import { formatTimeAgo } from "../../helper/formatTimeAgo";
import styles from "./styles.module.scss";
import withSkeleton from "../../helper/hocs/WithSkeleton";

function NewsBanner({ item, width, height }) {
  return (
    <>
      <div className={styles.banner}>
        <Image
          width={width}
          height={height}
          img={item?.image}
          title={item?.title}
        />
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item?.published)} by {item?.author}
        </p>
      </div>
    </>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);
export default NewsBannerWithSkeleton;
