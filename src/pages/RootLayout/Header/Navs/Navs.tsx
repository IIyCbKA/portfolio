import React from "react";
import AnchorButton from "../../../../components/AnchorButton/AnchorButton";
import styles from "./Navs.module.css";
import { NAV_ITEMS } from "../shared/Navs.constants";
import { ScrollAnchorButton } from "../../../../shared/models/AnchorButtonInterface";
import { NavsData } from "./Navs.interface";
import classNames from "classnames";

export default function Navs({
  isHighlightedHeader,
}: NavsData): React.ReactElement {
  const anchorButtonClasses = classNames(styles.navsItemRoot, {
    [styles.navsItemWithHighlightedHeader]: isHighlightedHeader,
    [styles.navsItemDefault]: !isHighlightedHeader,
  });

  return (
    <div className={styles.navsContainer}>
      {NAV_ITEMS.map(
        (item: ScrollAnchorButton): React.ReactElement => (
          <AnchorButton
            key={item.title}
            title={item.title}
            scrollRef={item.scrollRef}
            scrollID={item.scrollID}
            className={anchorButtonClasses}
          />
        ),
      )}
    </div>
  );
}
