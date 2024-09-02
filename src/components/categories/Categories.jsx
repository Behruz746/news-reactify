import React, { forwardRef } from "react";
import styles from "./styles.module.scss";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectCategory }, ref) => {
    return (
      <>
        <div ref={ref} className={styles.categories}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={!selectCategory ? styles.active : styles.item}
            type="button"
          >
            All
          </button>
          {categories.map((category, idx) => (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectCategory === category ? styles.active : styles.item
              }
              type="button"
              key={idx}
            >
              {category}
            </button>
          ))}
        </div>
      </>
    );
  }
);

Categories.displayName = "Categories";
export default Categories;
