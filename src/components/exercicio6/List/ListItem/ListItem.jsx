import React from "react";
import styles from "./ListItem.module.css";
import { getEmojiFromName } from "@/utils/emoji.js";

const ListItem = ({ children }) => {
  return (
    <li className={styles.listItem}>
      {getEmojiFromName(children)} {children}
    </li>
  );
};

export default ListItem;
