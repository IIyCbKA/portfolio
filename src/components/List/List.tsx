import React from "react";
import { ListInterface } from "../../shared/models/List.interface";
import styles from "./List.module.css";

export default function List({ elements }: ListInterface): React.ReactElement {
  return (
    <ul className={styles.listWrapper}>
      {elements.map(
        (item: string): React.ReactElement => (
          <li key={item}>{item}</li>
        ),
      )}
    </ul>
  );
}
