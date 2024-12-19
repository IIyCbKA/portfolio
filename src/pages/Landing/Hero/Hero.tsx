import React from "react";
import styles from "./Hero.module.css";
import Hero1400x720 from "../../../assets/Hero-1400x720.svg";
import Hero500x500 from "../../../assets/Hero-500x500.svg";
import classNames from "classnames";
import {
  CONTENT_WRAP,
  LARGE_TEXT,
  LARGEST_TITLE,
} from "../../../shared/constants/classnames";
import { FIRST_OTHER_TEXT, NAME, SECOND_OTHER_TEXT } from "./Hero.constants";

export default function Hero(): React.ReactElement {
  const desktopImgClasses = classNames(styles.heroImg, styles.heroDesktopImg);

  const mobileImgClasses = classNames(styles.heroImg, styles.heroMobileImg);

  const contentContainerClasses = classNames(
    styles.heroContentContainer,
    CONTENT_WRAP,
  );

  const nameClasses = classNames(LARGEST_TITLE, styles.heroNameText);
  const otherTextClasses = classNames(LARGE_TEXT, styles.heroOtherText);

  return (
    <div className={styles.heroWrapper}>
      <div className={contentContainerClasses}>
        <div className={styles.heroContent}>
          <span className={otherTextClasses}>{FIRST_OTHER_TEXT}</span>
          <span className={nameClasses}>{NAME}</span>
          <span className={otherTextClasses}>{SECOND_OTHER_TEXT}</span>
        </div>
        <div className={styles.heroImgContainer}>
          <img className={mobileImgClasses} src={Hero500x500} alt={"HERO"} />
        </div>
        <img className={desktopImgClasses} src={Hero1400x720} alt={"HERO"} />
      </div>
    </div>
  );
}