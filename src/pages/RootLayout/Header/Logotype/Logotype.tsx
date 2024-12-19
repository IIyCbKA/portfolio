import React from "react";
import logotype from "../../../../assets/logotype.svg";
import { Link } from "react-router-dom";
import { LANDING_ROUTE } from "../../../../shared/constants/routes";
import styles from "./Logotype.module.css";
import { IMG_ALT } from "./Logotype.constants";

export default function Logotype(): React.ReactElement {
  return (
    <Link to={LANDING_ROUTE} className={styles.logotypeWrap}>
      <img className={styles.logotypeRootImg} src={logotype} alt={IMG_ALT} />
    </Link>
  );
}
