import React from "react";
import LogoIcon from "@/icons/logotype/LogoIcon";
import styles from "./logotype.module.css";
import classNames from "classnames";
import { LogotypeProps } from "./Logotype.interface";

export default function Logotype({
  isHighlightedHeader,
}: LogotypeProps): React.ReactElement {
  const logotypeStyles = classNames(styles.logotypeRootImg, {
    [styles.logotypeWithHighlightedHeader]: isHighlightedHeader,
    [styles.defaultLogotype]: !isHighlightedHeader,
  });

  const onClick: () => void = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.logotypeWrap} onClick={onClick}>
      <LogoIcon className={logotypeStyles} />
    </button>
  );
}
