import React from "react";
import AnchorButton from "../../../../components/AnchorButton/AnchorButton";
import styles from "./Navs.module.css";
import { NAV_ITEMS } from "../shared/Navs.constants";
import { ScrollAnchorButton } from "../../../../shared/models/AnchorButtonInterface";

export default function Navs(): React.ReactElement {
  return (
    <div className={styles.navsContainer}>
      {NAV_ITEMS.map(
        (item: ScrollAnchorButton): React.ReactElement => (
          <AnchorButton
            key={item.title}
            title={item.title}
            scrollRef={item.scrollRef}
            scrollID={item.scrollID}
            className={styles.navsItem}
          />
        ),
      )}
    </div>
  );
}
