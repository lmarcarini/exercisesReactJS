import React from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ dataArray }) => {
  return (
    <ul>
      {dataArray.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ul>
  );
};

export default List;
