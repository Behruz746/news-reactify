import React from "react";
import styles from "./styles.module.scss";
import { LatestNews, NewsByFilters } from "../../components";
import { getNews } from "../../service/news";
import { useDebounce } from "../../helper/hooks/useDebounce";
import { PAGESIZE } from "../../constants/constants";
import { useFetch } from "../../helper/hooks/useFetch";
import { useFilter } from "../../helper/hooks/useFilter";

function Main() {
  const { filter, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGESIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filter.keywords, 1500);

  const { data, isLoad, error } = useFetch(getNews, {
    ...filter,
    keywords: debouncedKeywords,
  });

  const { data: dataBanners, isLoad: bannerLoad } = useFetch(getNews, {
    category: "art",
    page_size: 50,
    keywords: debouncedKeywords,
  });

  return (
    <>
      {!error ? (
        <main className={styles.main}>
          <LatestNews
            isLoad={bannerLoad}
            banners={dataBanners && dataBanners.news}
          />

          <NewsByFilters
            news={data?.news}
            isLoad={isLoad}
            filter={filter}
            changeFilter={changeFilter}
          />
        </main>
      ) : (
        <h1 className={styles.error}>Not Found 404 :(</h1>
      )}
    </>
  );
}

export default Main;
