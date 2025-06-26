import React from "react";
import styles from "./toggleMenu.module.css";
import classNames from "classnames";
import { ToggleMenuProps } from "./ToggleMenu.interface";

export default function ToggleMenu({
  className,
  isOpen,
  ...other
}: ToggleMenuProps): React.ReactElement {
  const buttonStyles = classNames(styles.toggleMenuWrapper, className, {
    [styles.open]: isOpen,
  });

  const firstLineStyles = classNames(styles.rootLine, styles.firstLine);
  const secondLineStyles = classNames(styles.rootLine, styles.secondLine);
  const thirdLineStyles = classNames(styles.rootLine, styles.thirdLine);

  return (
    <button className={buttonStyles} {...other}>
      <div className={firstLineStyles} />
      <div className={secondLineStyles} />
      <div className={thirdLineStyles} />
    </button>
  );
}
