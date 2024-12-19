import React from "react";
import styles from "./AnchorButton.module.css";
import { AnchorButtonDataInterface } from "../../shared/models/AnchorButtonData.interface";

export default function AnchorButton({
  title,
  href,
}: AnchorButtonDataInterface): React.ReactElement {
  return (
    <a href={href} className={styles.itemNavRoot}>
      {title}
    </a>
  );
}
