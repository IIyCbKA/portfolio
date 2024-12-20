import React from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import DefaultTitle from "../../../components/DefaultTitle/DefaultTitle";
import { IDs, TITLES } from "../../../shared/constants/sections";
import { ABOUT_PARAGRAPHS } from "./About.constants";

export default function About(): React.ReactElement {
  const contentClasses = classNames(
    styles.aboutContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  return (
    <div id={IDs.ABOUT} className={styles.aboutWrapper}>
      <div className={contentClasses}>
        <DefaultTitle title={TITLES.ABOUT} className={styles.aboutTitle} />
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
