import React from "react";
import styles from "./Hero.module.css";
import Hero1400x720 from "../../../assets/Hero-1400x720.svg";
import Hero500x500 from "../../../assets/Hero-500x500.svg";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import {
  FIRST_OTHER_TEXT,
  HERO_IMG_ALT,
  NAME,
  SECOND_OTHER_TEXT,
} from "./Hero.constants";

export default function Hero(): React.ReactElement {
  const desktopImgClasses: string = classNames(styles.heroImg, styles.heroDesktopImg);

  const mobileImgClasses: string = classNames(styles.heroImg, styles.heroMobileImg);

  const contentContainerClasses: string = classNames(
    styles.heroContentContainer,
    sharedStyles.contentWrap,
  );

  const nameClasses: string = classNames(
    sharedStyles.largestTitle,
    styles.heroNameText,
  );
  const otherTextClasses: string = classNames(
    sharedStyles.largeText,
    styles.heroOtherText,
  );

  return (
    <div className={styles.heroWrapper}>
      <div className={contentContainerClasses}>
        <div className={styles.heroContent}>
          <span className={otherTextClasses}>{FIRST_OTHER_TEXT}</span>
          <span className={nameClasses}>{NAME}</span>
          <span className={otherTextClasses}>{SECOND_OTHER_TEXT}</span>
        </div>
        <div className={styles.heroImgContainer}>
          <img
            className={mobileImgClasses}
            src={Hero500x500}
            alt={HERO_IMG_ALT}
          />
        </div>
        <img
          className={desktopImgClasses}
          src={Hero1400x720}
          alt={HERO_IMG_ALT}
        />
      </div>
    </div>
  );
}
