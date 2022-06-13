import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./List.module.css";

const List = ({ dataArray }) => {
  return (
    <ul className={styles.list}>
      {dataArray.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ul>
  );
};

export default List;
