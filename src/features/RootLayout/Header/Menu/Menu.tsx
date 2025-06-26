import React from "react";
import { MenuProps } from "./Menu.interface";
import classNames from "classnames";
import styles from "./menu.module.css";
import { NAV_ITEMS } from "../shared/shared.constants";
import Anchor from "@/components/Anchor/Anchor";
import sharedStyles from "@/shared/styles.module.css";
import { NavItem } from "../shared/shared.types";

export default function Menu({ isOpen }: MenuProps): React.ReactElement {
  const wrapperClasses = classNames(
    styles.menuWrapper,
    sharedStyles.contentWrap,
    {
      [styles.menuWrapperOpen]: isOpen,
    },
  );

  return (
    <div className={wrapperClasses}>
      {NAV_ITEMS.map(
        (item: NavItem): React.ReactElement => (
          <Anchor
            key={item.title}
            href={item.href}
            className={styles.menuItemRoot}
          >
            {item.title}
          </Anchor>
        ),
      )}
    </div>
  );
}
