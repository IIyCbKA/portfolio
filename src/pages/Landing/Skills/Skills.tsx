import React from "react";
import styles from "./Skills.module.css";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import DefaultTitle from "../../../components/DefaultTitle/DefaultTitle";
import { IDs, TITLES } from "../../../shared/constants/sections";
import { INTRO, SKILLS } from "./Skills.constants";
import { Skill } from "./Skills.interface";
import IconWithDescription from "../../../components/IconWithDescription/IconWithDescription";

export default function Skills(): React.ReactElement {
  const contentClasses = classNames(
    styles.skillsContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  const descriptionClasses = classNames(
    styles.skillsDescriptionWrapper,
    sharedStyles.defaultText,
  );

  return (
    <div id={IDs.SKILLS} className={styles.skillsWrapper}>
      <div className={contentClasses}>
        <DefaultTitle title={TITLES.SKILLS} className={styles.skillsTitle} />
        <div className={descriptionClasses}>{INTRO}</div>
        <div className={styles.skillsIconsContainer}>
          {SKILLS.map(
            (item: Skill): React.ReactElement => (
              <IconWithDescription
                key={item.description}
                icon={item.url}
                description={item.description}
                iconClassName={styles.skillsIcon}
                className={styles.skillsIconWithTextEntity}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
