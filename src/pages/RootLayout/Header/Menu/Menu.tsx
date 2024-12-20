import React from "react";
import { MenuProps } from "./Menu.interface";
import classNames from "classnames";
import styles from "./Menu.module.css";
import { NAV_ITEMS } from "../shared/Navs.constants";
import { AnchorButtonDataInterface } from "../../../../shared/models/AnchorButtonData.interface";
import { CONTENT_WRAP } from "../../../../shared/constants/classnames";
import AnchorButton from "../../../../components/AnchorButton/AnchorButton";

export default function Menu({ isOpen }: MenuProps): React.ReactElement {
  const wrapperClasses = classNames(styles.menuWrapper, CONTENT_WRAP, {
    [styles.menuWrapperOpen]: isOpen,
  });

  return (
    <div className={wrapperClasses}>
      {NAV_ITEMS.map((item: AnchorButtonDataInterface) => (
        <AnchorButton
          key={item.title}
          title={item.title}
          id={item.id}
          className={styles.menuItemRoot}
        />
      ))}
    </div>
  );
}
