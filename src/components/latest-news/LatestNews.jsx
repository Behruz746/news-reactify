import React from "react";
import styles from "./styles.module.scss";
import { BannerList } from "..";
import { getLatestNews } from "../../service/news";
import { useFetch } from "../../helper/hooks/useFetch";

function LatestNews() {
  const { data, isLoad } = useFetch(getLatestNews);

  return (
    <>
      <section className={styles.section}>
        <BannerList banners={data?.news} isLoad={isLoad} />
      </section>
    </>
  );
}

export default LatestNews;
