import React from "react";
import { AnchorButtonDataInterface } from "../../shared/models/AnchorButtonData.interface";
import styles from "./AnchorButton.module.css";
import classNames from "classnames";

export default function AnchorButton({
  title,
  id,
  className,
}: AnchorButtonDataInterface): React.ReactElement {
  const buttonClasses = classNames(styles.anchorButtonRoot, className);

  const scrollTo = () => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scrollTo} className={buttonClasses}>
      {title}
    </button>
  );
}
