import React from "react";
import JokeCard from "../JokeCard/JokeCard";
import styles from "./JokeContainer.module.css";

const JokeContainer = ({ jokes }) => {
  return (
    <div className={styles.jokeContainer}>
      {jokes.map((joke) => (
        <JokeCard {...joke} />
      ))}
    </div>
  );
};

export default JokeContainer;
