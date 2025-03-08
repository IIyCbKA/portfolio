import React from "react";
import { AnchorButtonType } from "../../shared/models/AnchorButtonInterface";
import styles from "./AnchorButton.module.css";
import classNames from "classnames";

export default function AnchorButton({
  title,
  scrollRef,
  scrollID,
  linkRef,
  className,
}: AnchorButtonType): React.ReactElement {
  const buttonClasses: string = classNames(styles.anchorButtonRoot, className);

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (scrollID) {
      const element: HTMLElement | null = document.getElementById(scrollID);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else window.open(linkRef, "_blank");
  };

  return (
    <a
      href={scrollRef ? scrollRef : linkRef}
      onClick={handleClick}
      className={buttonClasses}
    >
      {title}
    </a>
  );
}
