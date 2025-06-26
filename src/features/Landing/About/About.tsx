import React from "react";
import styles from "./about.module.css";
import classNames from "classnames";
import sharedStyles from "@/shared/styles.module.css";
import { IDs, TITLES } from "@/shared/constants/sections";
import { ABOUT_PARAGRAPHS } from "./about.constants";

export default function About(): React.ReactElement {
  const contentStyles = classNames(
    styles.aboutContent,
    sharedStyles.contentWrap,
  );

  const titleStyles = classNames(styles.aboutTitle, sharedStyles.defaultTitle);

  return (
    <div id={IDs.ABOUT} className={styles.aboutWrapper}>
      <div className={contentStyles}>
        <div className={titleStyles}>{TITLES.ABOUT}</div>
        {ABOUT_PARAGRAPHS.map(
          (paragraph: string, index: number): React.ReactElement => (
            <p key={index}>{paragraph}</p>
          ),
        )}
      </div>
    </div>
  );
}
