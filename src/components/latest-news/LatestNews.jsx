import React from "react";
import styles from "./styles.module.scss";
import { BannerList } from "..";

function LatestNews({ banners, isLoad }) {
  return (
    <>
      <section className={styles.section}>
        <BannerList banners={banners} isLoad={isLoad} />
      </section>
    </>
  );
}

export default LatestNews;
