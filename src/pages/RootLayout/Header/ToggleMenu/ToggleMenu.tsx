import React from "react";
import styles from "./ToggleMenu.module.css";
import classNames from "classnames";
import { ToggleMenuData } from "./ToggleMenu.interface";

export default function ToggleMenu({
  isOpen,
  setOpen,
}: ToggleMenuData): React.ReactElement {
  const onClick = () => {
    setOpen((prevState) => !prevState);
  };

  const buttonClasses = classNames(styles.toggleMenuWrapper, {
    [styles.open]: isOpen,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      <div className={`${styles.defaultLine} ${styles.firstLine}`} />
      <div className={`${styles.defaultLine} ${styles.secondLine}`} />
      <div className={`${styles.defaultLine} ${styles.thirdLine}`} />
    </button>
  );
}
