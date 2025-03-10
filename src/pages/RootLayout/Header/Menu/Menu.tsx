import React from "react";
import { MenuData } from "./Menu.interface";
import classNames from "classnames";
import styles from "./Menu.module.css";
import { NAV_ITEMS } from "../shared/Navs.constants";
import { ScrollAnchorButton } from "../../../../shared/models/AnchorButtonInterface";
import AnchorButton from "../../../../components/AnchorButton/AnchorButton";
import sharedStyles from "../../../../shared/styles.module.css";

export default function Menu({ isOpen }: MenuData): React.ReactElement {
  const wrapperClasses: string = classNames(
    styles.menuWrapper,
    sharedStyles.contentWrap,
    {
      [styles.menuWrapperOpen]: isOpen,
    },
  );

  return (
    <div className={wrapperClasses}>
      {NAV_ITEMS.map((item: ScrollAnchorButton): React.ReactElement => (
        <AnchorButton
          key={item.title}
          title={item.title}
          scrollRef={item.scrollRef}
          scrollID={item.scrollID}
          className={styles.menuItemRoot}
        />
      ))}
    </div>
  );
}
