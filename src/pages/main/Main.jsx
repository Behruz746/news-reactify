import React from "react";
import styles from "./styles.module.scss";
import { LatestNews, NewsByFilters } from "../../components";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <LatestNews />
        <NewsByFilters />
      </main>
    </>
  );
}

export default Main;
