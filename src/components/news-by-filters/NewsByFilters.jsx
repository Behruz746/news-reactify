import React from "react";
import styles from "./styles.module.scss";
import { NewsList } from "..";
import { TOTALPAGES } from "../../constants/constants";
import NewsFilters from "../news-filters/NewsFilters";
import { getNews } from "../../service/news";
import { useDebounce } from "../../helper/hooks/useDebounce";
import { PAGESIZE } from "../../constants/constants";
import { useFetch } from "../../helper/hooks/useFetch";
import { useFilter } from "../../helper/hooks/useFilter";
import PaginationWrapper from "../pagination-wrapper/PaginationWrapper";

function NewsByFilters() {
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
      <section className={styles.section}>
        <NewsFilters filter={filter} changeFilter={changeFilter} />
        <PaginationWrapper
          top
          bottom
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          totalPages={TOTALPAGES}
          currentPage={filter.page_number}
        >
          {error ? (
            <h1 className={styles.error}>Not Found 404 :(</h1>
          ) : (
            <NewsList isLoad={isLoad} news={data?.news} />
          )}
        </PaginationWrapper>
      </section>
    </>
  );
}

export default NewsByFilters;
