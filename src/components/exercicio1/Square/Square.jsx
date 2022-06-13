import React from "react";
import styles from "./Square.module.css";

const Square = ({ children }) => {
  return (
    <div className={styles.square}>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Square;
