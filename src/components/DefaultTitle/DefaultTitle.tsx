import React from "react";
import styles from "./DefaultTitle.module.css";
import { TextComponentsInterface } from "../../shared/models/TextComponents.interface";
import classNames from "classnames";
import sharedStyles from "../../shared/styles.module.css";

export default function DefaultTitle({
  title,
  className,
}: TextComponentsInterface): React.ReactElement {
  const defaultTitleClasses = classNames(
    styles.defaultTitleComp,
    sharedStyles.defaultTitle,
    className,
  );

  return <div className={defaultTitleClasses}>{title}</div>;
}
