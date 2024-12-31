import React from "react";
import { IDs } from "../../../shared/constants/sections";
import styles from "./Contacts.module.css";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import { CONTACTS_ITEMS, CONTACTS_TITLE } from "./Contacts.constants";
import { LinkAnchorButton } from "../../../shared/models/AnchorButtonInterface";
import AnchorButton from "../../../components/AnchorButton/AnchorButton";

export default function Contacts(): React.ReactElement {
  const contentClasses = classNames(
    styles.contactsContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  const titleClasses = classNames(
    sharedStyles.defaultTitle,
    styles.contactsTitle,
  );

  return (
    <div id={IDs.CONTACTS} className={styles.contactsWrapper}>
      <div className={contentClasses}>
        <div className={styles.contactsLeft}>
          <div className={titleClasses}>{CONTACTS_TITLE}</div>
        </div>
        <div className={styles.contactsRight}>
          <ul>
            {CONTACTS_ITEMS.map(
              (item: LinkAnchorButton): React.ReactElement => (
                <li key={item.title}>
                  <AnchorButton title={item.title} linkRef={item.linkRef} />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
