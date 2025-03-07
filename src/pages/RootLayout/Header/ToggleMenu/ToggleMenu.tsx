import React from "react";
import styles from "./ToggleMenu.module.css";
import classNames from "classnames";
import { ToggleMenuData } from "./ToggleMenu.interface";

export default function ToggleMenu({
  isOpen,
  setOpen,
  isHighlightedHeader,
}: ToggleMenuData): React.ReactElement {
  const onClick = () => {
    setOpen((prevState) => !prevState);
  };

  const buttonClasses = classNames(styles.toggleMenuWrapper, {
    [styles.open]: isOpen,
  });

  const defaultLineClasses = classNames(styles.rootLine, {
    [styles.lineWithHighlightedHeader]: isHighlightedHeader,
    [styles.defaultLine]: !isHighlightedHeader,
  });

  const firstLineClasses = classNames(defaultLineClasses, styles.firstLine);

  const secondLineClasses = classNames(defaultLineClasses, styles.secondLine);

  const thirdLineClasses = classNames(defaultLineClasses, styles.thirdLine);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <div className={firstLineClasses} />
      <div className={secondLineClasses} />
      <div className={thirdLineClasses} />
    </button>
  );
}
