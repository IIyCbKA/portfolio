import React from "react";
import { AnchorButtonType } from "../../shared/models/AnchorButtonInterface";
import styles from "./AnchorButton.module.css";
import classNames from "classnames";

export default function AnchorButton({
  title,
  id,
  href,
  className,
}: AnchorButtonType): React.ReactElement {
  const buttonClasses = classNames(
    styles.anchorButtonWrap,
    styles.anchorButtonRoot,
    className,
  );

  const handleClick = () => {
    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else window.open(href, "_blank");
  };

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {title}
    </button>
  );
}
