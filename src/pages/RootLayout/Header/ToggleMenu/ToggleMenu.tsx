import React from "react";
import styles from "./ToggleMenu.module.css";
import classNames from "classnames";
import { ToggleMenuData } from "./ToggleMenu.interface";

export default function ToggleMenu({
  isOpen,
  setOpen,
  isHighlightedHeader,
}: ToggleMenuData): React.ReactElement {
  const onClick = (): void => {
    setOpen((prevState: boolean): boolean => !prevState);
  };

  const buttonClasses: string = classNames(styles.toggleMenuWrapper, {
    [styles.open]: isOpen,
  });

  const defaultLineClasses: string = classNames(styles.rootLine, {
    [styles.lineWithHighlightedHeader]: isHighlightedHeader,
    [styles.defaultLine]: !isHighlightedHeader,
  });

  const firstLineClasses: string = classNames(defaultLineClasses, styles.firstLine);

  const secondLineClasses: string = classNames(defaultLineClasses, styles.secondLine);

  const thirdLineClasses: string = classNames(defaultLineClasses, styles.thirdLine);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <div className={firstLineClasses} />
      <div className={secondLineClasses} />
      <div className={thirdLineClasses} />
    </button>
  );
}
