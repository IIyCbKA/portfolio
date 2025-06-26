import React, { useCallback } from "react";
import LogoIcon from "@/icons/logotype/LogoIcon";
import { Link, useLocation } from "react-router-dom";
import { LANDING_ROUTE } from "@/shared/constants/routes";
import styles from "./logotype.module.css";
import classNames from "classnames";
import { LogotypeProps } from "./Logotype.interface";

export default function Logotype({
  isHighlightedHeader,
}: LogotypeProps): React.ReactElement {
  const location = useLocation();

  const logotypeStyles = classNames(styles.logotypeRootImg, {
    [styles.logotypeWithHighlightedHeader]: isHighlightedHeader,
    [styles.defaultLogotype]: !isHighlightedHeader,
  });

  // problem of HashRouter
  const onClick = useCallback((): void => {
    if (location.pathname === LANDING_ROUTE) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <Link to={LANDING_ROUTE} className={styles.logotypeWrap} onClick={onClick}>
      <LogoIcon className={logotypeStyles} />
    </Link>
  );
}
