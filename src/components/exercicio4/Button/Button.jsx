import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
