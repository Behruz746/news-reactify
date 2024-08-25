import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NewsBanner, NewsList, Skeleton } from "../../components";
import { getNews } from "../../service/news";

function Main() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoad(true);
        const response = await getNews();
        setNews(response.data.news);
        setLoad(false); 
      } catch (error) {
        console.log(error);
      }   
    };

    fetchNews();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={"container"}>
          {news.length > 0 && !load ? (
            <NewsBanner item={news[0]} />
          ) : (
            <Skeleton count={1} type={"banner"} />
          )}

          {!load ? (
            <NewsList news={news} />
          ) : (
            <Skeleton count={10} type={"item"} />
          )}
        </div>
      </main>
    </>
  );
}

export default Main;
