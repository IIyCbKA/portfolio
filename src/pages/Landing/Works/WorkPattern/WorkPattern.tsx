import React from "react";
import { Work } from "../Works.interface";
import classNames from "classnames";
import sharedStyles from "../../../../shared/styles.module.css";
import styles from "./WorkPattern.module.css";
import { TOOLS_TITLE } from "../Works.constants";
import List from "../../../../components/List/List";

export default function WorkPattern({
  title,
  description,
  tools,
  img,
  className,
}: Work): React.ReactElement {
  const containerClasses = classNames(styles.workContainer, className);

  const contentClasses = classNames(
    styles.workContent,
    sharedStyles.defaultText,
    sharedStyles.contentWrap,
  );

  const titleClasses = classNames(styles.workTitle, sharedStyles.largeTitle);

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        <div className={styles.workContentLeft}>
          <div className={titleClasses}>{title}</div>
          <div className={sharedStyles.defaultText}>{description}</div>
          <div className={styles.workToolsTitle}>{TOOLS_TITLE}</div>
          <List elements={tools} />
        </div>
        <div className={styles.workContentRight}>
          <img className={styles.workImage} src={img} alt={title} />
        </div>
      </div>
    </div>
  );
}