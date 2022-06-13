import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  const handleClick = (e) => {
    alert(`You clicked the ${children}!`);
  };
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
