import React from "react";
import styles from "./styles.module.scss";
import {
  NewsBanner,
  NewsList,
  Pagination,
  Categories,
  Search,
} from "../../components";
import { getNews, getCategories } from "../../service/news";
import { useDebounce } from "../../helper/hooks/useDebounce";
import { PAGESIZE, TOTALPAGES } from "../../constants/constants";
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
  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filter.page_number < TOTALPAGES) {
      changeFilter("page_number", filter.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filter.page_number > 1) {
      changeFilter("page_number", filter.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={"container"}>
          {dataCategories ? (
            <Categories
              categories={dataCategories.categories}
              setSelectedCategory={(category) =>
                changeFilter("category", category)
              }
              selectCategory={filter.category}
            />
          ) : null}

          <Search
            keywords={filter.keywords}
            setKeywords={(keywords) => changeFilter("keywords", keywords)}
          />

          <NewsBanner
            isLoad={isLoad}
            item={data && data.news && data.news[0]}
          />
          <Pagination
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
            totalPages={TOTALPAGES}
            currentPage={filter.page_number}
          />
          <NewsList isLoad={isLoad} news={data?.news} />
          <Pagination
            totalPages={TOTALPAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={filter.page_number}
          />
        </div>
      </main>
    </>
  );
}

export default Main;
