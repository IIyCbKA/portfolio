import React from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import {
  CONTENT_WRAP,
  DEFAULT_TEXT,
} from "../../../shared/constants/classnames";
import DefaultTitle from "../../../components/DefaultTitle/DefaultTitle";
import { IDs, TITLES } from "../../../shared/constants/sections";
import { ABOUT_PARAGRAPHS } from "./About.constants";
import { CONTENT_ROOT_COLOR } from "../../../shared/constants/stylenames";

export default function About(): React.ReactElement {
  const contentClasses = classNames(
    styles.aboutContent,
    CONTENT_WRAP,
    DEFAULT_TEXT,
  );

  return (
    <div id={IDs.ABOUT} className={styles.aboutWrapper}>
      <div className={contentClasses}>
        <DefaultTitle title={TITLES.ABOUT} color={CONTENT_ROOT_COLOR} />
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
