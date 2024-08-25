import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NewsBanner, NewsList, Skeleton, Pagination } from "../../components";
import { getNews } from "../../service/news";

function Main() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setLoad(true);
      const response = await getNews(currentPage, pageSize, "english");
      setNews(response.data.news);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      console.log(currentPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={"container"}>
          {news.length > 0 && !load ? (
            <NewsBanner item={news[0]} />
          ) : (
            <Skeleton count={1} type={"banner"} />
          )}
          <Pagination
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />

          {!load ? (
            <NewsList news={news} />
          ) : (
            <Skeleton count={10} type={"item"} />
          )}

          <Pagination
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />
        </div>
      </main>
    </>
  );
}

export default Main;
