import React from "react";
import styles from "./image.module.css";
import { ImageProps } from "./Image.interface";
import sharedStyles from "@/shared/styles.module.css";
import classNames from "classnames";

function ImageInner(
  { description, children, className, ...other }: ImageProps,
  ref: React.ForwardedRef<HTMLDivElement>,
): React.ReactElement {
  const containerStyles = classNames(styles.imageContainer, className);

  return (
    <div ref={ref} className={containerStyles} {...other}>
      {children}
      <span className={sharedStyles.defaultText}>{description}</span>
    </div>
  );
}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(ImageInner);

export default Image;
