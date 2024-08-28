import React from "react";
import styles from "./styles.module.scss";
import { useFetch } from "../../helper/hooks/useFetch";
import { getCategories } from "../../service/news";
import Categories from "../categories/Categories";
import Search from "../search/Search";

function NewsFilters({ filter, changeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <>
      <div className={styles.filter}>
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
      </div>
    </>
  );
}

export default NewsFilters;
