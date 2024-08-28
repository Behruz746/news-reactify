import React from "react";
import styles from "./styles.module.scss";
import Pagination from "../pagination/Pagination";
import { NewsList } from "..";
import { TOTALPAGES } from "../../constants/constants";
import NewsFilters from "../news-filters/NewsFilters";

function NewsByFilters({ filter, changeFilter, isLoad, news }) {
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

        <Pagination
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          totalPages={TOTALPAGES}
          currentPage={filter.page_number}
        />
        <NewsList isLoad={isLoad} news={news} />
        <Pagination
          totalPages={TOTALPAGES}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          currentPage={filter.page_number}
        />
      </section>
    </>
  );
}

export default NewsByFilters;
