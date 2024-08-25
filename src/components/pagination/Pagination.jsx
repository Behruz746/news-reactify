import React from "react";
import styles from "./styles.module.scss";

function Pagination({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}) {
  return (
    <>
      <div className={styles.pagination} onClick={handlePreviousPage}>
        <button
          type="button"
          className={styles.arrow}
          disabled={currentPage <= 1}
        >
          {"<"}
        </button>

        <div className={styles.list}>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              type="button"
              className={
                idx + 1 === currentPage
                  ? styles.pageNumberDisabel
                  : styles.pageNumber
              }
              onClick={() => handlePageClick(idx + 1)}
              disabled={idx + 1 === currentPage}
              key={idx}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Pagination;
