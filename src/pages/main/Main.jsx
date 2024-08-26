import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  NewsBanner,
  NewsList,
  Skeleton,
  Pagination,
  Categories,
  Search,
} from "../../components";
import { getNews, getCategories } from "../../service/news";
import { useDebounce } from "../../hooks/useDebounce";

function Main() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [keywords, setKeywords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([
    "All",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
    "Game",
    "Programing",
    "CS",
    "PC",
    "Pepsi",
  ]); // default value []
  const [selectCategory, setSelectCategory] = useState("All");
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords, 1500);

  console.log(keywords);

  const fetchNews = async (currentPage) => {
    try {
      setLoad(true);
      const response = await getNews({
        page__number: currentPage,
        page__size: pageSize,
        category: selectCategory === "All" ? null : selectCategory,
        keywords: debouncedKeywords,
        language: "english",
      });
      setNews(response.data.news);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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

  const setSelectedCategory = (select) => {
    setSelectCategory(select);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={"container"}>
          <Categories
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            selectCategory={selectCategory}
          />
          <Search keywords={keywords} setKeywords={setKeywords} />
          {news.length > 0 && !load ? (
            <NewsBanner item={news[0]} />
          ) : (
            <Skeleton count={1} type={"banner"} />
          )}
          <Pagination
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
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
