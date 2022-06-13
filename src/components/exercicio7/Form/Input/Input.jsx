import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, placeholder, required }) => {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      required={required}
    ></input>
  );
};

export default Input;
