import React from "react";
import styles from "./hero.module.css";
import HeroDesktop from "@/assets/Hero-2560x1320.png";
import HeroMobile from "@/assets/Hero-1024x1024.png";
import classNames from "classnames";
import sharedStyles from "@/shared/styles.module.css";
import {
  FIRST_OTHER_TEXT,
  HERO_IMG_ALT,
  NAME,
  SECOND_OTHER_TEXT,
} from "./hero.constants";

export default function Hero(): React.ReactElement {
  const desktopImgStyles = classNames(styles.heroImg, styles.heroDesktopImg);
  const mobileImgStyles = classNames(styles.heroImg, styles.heroMobileImg);
  const nameStyles = classNames(sharedStyles.largestTitle, styles.heroNameText);

  const contentContainerStyles = classNames(
    styles.heroContentContainer,
    sharedStyles.contentWrap,
  );

  const otherTextStyles = classNames(
    sharedStyles.largeText,
    styles.heroOtherText,
  );

  return (
    <div className={styles.heroWrapper}>
      <div className={contentContainerStyles}>
        <div className={styles.heroContent}>
          <span className={otherTextStyles}>{FIRST_OTHER_TEXT}</span>
          <span className={nameStyles}>{NAME}</span>
          <span className={otherTextStyles}>{SECOND_OTHER_TEXT}</span>
        </div>
        <div className={styles.heroImgContainer}>
          <img
            className={mobileImgStyles}
            src={HeroMobile}
            alt={HERO_IMG_ALT}
          />
        </div>
        <img
          className={desktopImgStyles}
          src={HeroDesktop}
          alt={HERO_IMG_ALT}
        />
      </div>
    </div>
  );
}
