import React from "react";
import styles from "./DefaultTitle.module.css";
import { TextComponentsInterface } from "../../shared/models/TextComponents.interface";
import classNames from "classnames";
import { DEFAULT_TITLE } from "../../shared/constants/classnames";

export default function DefaultTitle({
  title,
  color,
}: TextComponentsInterface): React.ReactElement {
  const defaultTitleClasses = classNames(
    styles.defaultTitleComp,
    DEFAULT_TITLE,
  );

  return (
    <div className={defaultTitleClasses} style={{ color: color }}>
      {title}
    </div>
  );
}
