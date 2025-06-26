import React from "react";
import styles from "./footer.module.css";
import Anchor from "@/components/Anchor/Anchor";
import {
  BUTTON_HREF,
  BUTTON_TITLE,
  COPYRIGHT_DIVIDER,
  COPYRIGHT_TEXT,
} from "./footer.constants";

export default function Footer(): React.ReactElement {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <span>{COPYRIGHT_TEXT}</span>
        <span>{COPYRIGHT_DIVIDER}</span>
        <Anchor href={BUTTON_HREF} className={styles.footerButton}>
          {BUTTON_TITLE}
        </Anchor>
      </div>
      <div className={styles.footerEndline} />
    </div>
  );
}
