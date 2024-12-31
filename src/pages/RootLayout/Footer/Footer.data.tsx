import AnchorButton from "../../../components/AnchorButton/AnchorButton";
import { BUTTON_HREF, BUTTON_TITLE } from "./Footer.constants";
import styles from "./Footer.module.css";

export const FOOTER_TEXT = (
  <>
    © Copyright 2024 -
    <AnchorButton
      title={BUTTON_TITLE}
      linkRef={BUTTON_HREF}
      className={styles.footerButton}
    />
  </>
);
