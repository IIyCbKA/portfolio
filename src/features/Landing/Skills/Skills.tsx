import React from "react";
import styles from "./skills.module.css";
import classNames from "classnames";
import sharedStyles from "@/shared/styles.module.css";
import { IDs, TITLES } from "@/shared/constants/sections";
import { INTRO, SKILLS } from "./skills.constants";
import { SkillEntity } from "./skills.types";
import Image from "@/components/Image/Image";

export default function Skills(): React.ReactElement {
  const contentStyles = classNames(
    styles.skillsContent,
    sharedStyles.contentWrap,
  );

  const titleStyles = classNames(styles.skillsTitle, sharedStyles.defaultTitle);

  return (
    <div id={IDs.SKILLS} className={styles.skillsWrapper}>
      <div className={contentStyles}>
        <div className={titleStyles}>{TITLES.SKILLS}</div>
        <div className={styles.skillsDescriptionWrapper}>{INTRO}</div>
        <div className={styles.skillsIconsContainer}>
          {SKILLS.map(
            (item: SkillEntity): React.ReactElement => (
              <Image
                key={item.description}
                description={item.description}
                className={styles.skillsIconWithTextEntity}
              >
                <img
                  src={item.url}
                  alt={item.description}
                  className={styles.skillsIcon}
                />
              </Image>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
