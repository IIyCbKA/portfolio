import React from "react";
import { IDs } from "@/shared/constants/sections";
import styles from "./contacts.module.css";
import classNames from "classnames";
import sharedStyles from "@/shared/styles.module.css";
import { CONTACTS_ITEMS, CONTACTS_TITLE } from "./contacts.constants";
import Anchor from "@/components/Anchor/Anchor";
import { ContactItem } from "./contacts.types";

export default function Contacts(): React.ReactElement {
  const contentStyles = classNames(
    styles.contactsContent,
    sharedStyles.contentWrap,
  );

  const titleStyles = classNames(
    sharedStyles.defaultTitle,
    styles.contactsTitle,
  );

  return (
    <div id={IDs.CONTACTS} className={styles.contactsWrapper}>
      <div className={contentStyles}>
        <div className={styles.contactsLeft}>
          <div className={titleStyles}>{CONTACTS_TITLE}</div>
        </div>
        <div className={styles.contactsRight}>
          <ul>
            {CONTACTS_ITEMS.map(
              (item: ContactItem): React.ReactElement => (
                <li key={item.title}>
                  <Anchor href={item.href}>{item.title}</Anchor>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
