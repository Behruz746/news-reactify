import React from "react";
import styles from "./styles.module.scss";

function Categories({ categories, setSelectedCategory, selectCategory }) {
  return (
    <>
      <div className={styles.categories}>
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

export default Categories;
