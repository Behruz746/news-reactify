import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NewsBanner, NewsList } from "../../components";
import { getNews } from "../../service/news";

function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data.news);
        console.log(response.data.news);
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
          {news.length > 0 ? <NewsBanner item={news[13]} /> : null}
          <NewsList news={news} />
        </div>
      </main>
    </>
  );
}

export default Main;
