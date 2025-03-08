import React from "react";
import styles from "./Skills.module.css";
import classNames from "classnames";
import sharedStyles from "../../../shared/styles.module.css";
import { IDs, TITLES } from "../../../shared/constants/sections";
import { INTRO, SKILLS } from "./Skills.constants";
import { Skill } from "./Skills.interface";
import IconWithDescription from "../../../components/IconWithDescription/IconWithDescription";

export default function Skills(): React.ReactElement {
  const contentClasses: string = classNames(
    styles.skillsContent,
    sharedStyles.contentWrap,
    sharedStyles.defaultText,
  );

  const descriptionClasses: string = classNames(
    styles.skillsDescriptionWrapper,
    sharedStyles.defaultText,
  );

  const titleClasses: string = classNames(
    styles.skillsTitle,
    sharedStyles.defaultTitle,
  );

  return (
    <div id={IDs.SKILLS} className={styles.skillsWrapper}>
      <div className={contentClasses}>
        <div className={titleClasses}>{TITLES.SKILLS}</div>
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
