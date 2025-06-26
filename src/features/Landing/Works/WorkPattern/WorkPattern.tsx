import React from "react";
import { WorkEntity } from "../works.types";
import classNames from "classnames";
import sharedStyles from "@/shared/styles.module.css";
import styles from "./workPattern.module.css";
import { TOOLS_TITLE } from "../works.constants";
import List from "@/components/List/List";

export default function WorkPattern({
  title,
  description,
  tools,
  img,
  className,
}: WorkEntity): React.ReactElement {
  const containerStyles = classNames(styles.workContainer, className);
  const titleStyles = classNames(styles.workTitle, sharedStyles.largeTitle);

  const contentStyles = classNames(
    styles.workContent,
    sharedStyles.contentWrap,
  );

  const listItemRender: (text: string) => string = (text: string): string => {
    return text;
  };

  return (
    <div className={containerStyles}>
      <div className={contentStyles}>
        <div className={styles.workContentLeft}>
          <div className={titleStyles}>{title}</div>
          <div className={styles.workText}>{description}</div>
          <div className={styles.workToolsTitle}>{TOOLS_TITLE}</div>
          <List elements={tools} renderItem={listItemRender} />
        </div>
        <div className={styles.workContentRight}>
          <img className={styles.workImage} src={img} alt={title} />
        </div>
      </div>
    </div>
  );
}
