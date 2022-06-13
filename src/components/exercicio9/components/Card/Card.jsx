import React from "react";
import styles from "./Card.module.css";
import Image from "./Image/Image";

const Card = ({ first_name, last_name, employment, avatar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardFront}>
        <Image src={avatar} alt={`Avatar of ${first_name}`} />
        <h2>
          {first_name} {last_name}
        </h2>
        <p>{employment.title}</p>
      </div>
      <div className={styles.cardBack}>
        <p>More information here</p>
      </div>
    </div>
  );
};

export default Card;
