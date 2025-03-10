import React from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import { IDs, TITLES } from "../../../shared/constants/sections";
import { ABOUT_PARAGRAPHS } from "./About.constants";

export default function About(): React.ReactElement {
  const contentClasses: string = classNames(
    styles.aboutContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  const titleClasses: string = classNames(
    styles.aboutTitle,
    sharedStyles.defaultTitle
  );

  return (
    <div id={IDs.ABOUT} className={styles.aboutWrapper}>
      <div className={contentClasses}>
        <div className={titleClasses}>{TITLES.ABOUT}</div>
        {ABOUT_PARAGRAPHS.map((
          paragraph: string, index: number
        ): React.ReactElement => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
