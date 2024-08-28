import React from "react";
import styles from "./styles.module.scss";
import withSkeleton from "../../helper/hocs/WithSkeleton";
import NewsBanner from "../news-banner/NewsBanner";

function BannerList({ banners }) {
  return (
    <>
      <ul className={styles.banner}>
        {banners?.map((banner, idx) => (
          <NewsBanner key={idx} item={banner} />
        ))}
      </ul>
    </>
  );
}

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 20, "row");
export default BannerListWithSkeleton;
