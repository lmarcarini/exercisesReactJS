import React from "react";
import styles from "./JokeCard.module.css";

const JokeCard = ({ setup, punchline }) => {
  return (
    <div className={styles.jokeCard}>
      <h2>{setup}</h2>
      <p>{punchline}</p>
    </div>
  );
};

export default JokeCard;
