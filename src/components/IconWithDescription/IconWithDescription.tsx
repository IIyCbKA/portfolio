import React from "react";
import styles from "./IconWithDescription.module.css";
import { IconWithDescriptionData } from "../../shared/models/IconWithDescriptionInterface";
import sharedStyles from "../../shared/styles.module.css";
import classNames from "classnames";

export default function IconWithDescription({
  icon,
  description,
  iconClassName,
  className,
}: IconWithDescriptionData): React.ReactElement {
  const containerClasses: string = classNames(styles.iconWithTitleContainer, className);

  const iconClasses: string = classNames(iconClassName, {
    [styles.iconWithTitle_icon]: !iconClassName,
  });

  return (
    <div className={containerClasses}>
      <img src={icon} alt={description} className={iconClasses} />
      <span className={sharedStyles.defaultText}>{description}</span>
    </div>
  );
}
