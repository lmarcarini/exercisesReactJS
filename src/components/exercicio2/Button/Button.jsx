import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  const handleClick = (e) => {
    alert("Clicked!");
  };
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      Click Me
    </button>
  );
};

export default Button;
