import React from "react";
import { formDate } from "../../helper/formatDate";
import styles from "./styles.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img width={150} src={"/logo.png"} alt="logo" />
        <p className={styles.date}>{formDate(new Date())}</p>
      </header>
    </>
  );
}

export default Header;
