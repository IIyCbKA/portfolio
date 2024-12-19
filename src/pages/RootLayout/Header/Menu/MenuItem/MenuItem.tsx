import React from "react";
import { AnchorButtonDataInterface } from "../../../../../shared/models/AnchorButtonData.interface";
import styles from "./MenuItem.module.css";

export default function MenuItem({
  title,
  href,
}: AnchorButtonDataInterface): React.ReactElement {
  return (
    <a href={href} className={styles.menuItemRoot}>
      {title}
    </a>
  );
}
