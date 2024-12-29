import React from "react";
import styles from "./Works.module.css";
import { IDs, TITLES } from "../../../shared/constants/sections";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import { WORKS } from "./Works.constants";
import { Work } from "./Works.interface";
import WorkPattern from "./WorkPattern/WorkPattern";

export default function Works(): React.ReactElement {
  const contentClasses = classNames(
    styles.worksContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  const titleClasses = classNames(styles.worksTitle, sharedStyles.defaultTitle);

  return (
    <div id={IDs.WORKS} className={styles.worksWrapper}>
      <div className={contentClasses}>
        <div className={titleClasses}>{TITLES.WORKS}</div>
      </div>
      {WORKS.map(
        (item: Work): React.ReactElement => (
          <WorkPattern
            key={item.title}
            title={item.title}
            description={item.description}
            tools={item.tools}
            img={item.img}
            className={item.className}
          />
        ),
      )}
    </div>
  );
}
