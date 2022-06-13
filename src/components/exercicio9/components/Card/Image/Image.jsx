import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default Image;
