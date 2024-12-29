import React from "react";
import styles from "./Footer.module.css";
import sharedStyles from "../../../shared/styles.module.css";
import { FOOTER_TEXT } from "./Footer.data";
import classNames from "classnames";

export default function Footer(): React.ReactElement {
  const contentClasses = classNames(
    styles.footerContent,
    sharedStyles.defaultText,
  );

  return (
    <div className={styles.footerWrapper}>
      <div className={contentClasses}>{FOOTER_TEXT}</div>
      <div className={styles.footerEndline} />
    </div>
  );
}
