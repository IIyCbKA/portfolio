import React from "react";
import AnchorButton from "../../../../components/AnchorButton/AnchorButton";
import styles from "./Navs.module.css";
import { NAV_ITEMS } from "../shared/Navs.constants";
import { AnchorButtonDataInterface } from "../../../../shared/models/AnchorButtonData.interface";

export default function Navs(): React.ReactElement {
  return (
    <div className={styles.navsContainer}>
      {NAV_ITEMS.map(
        (item: AnchorButtonDataInterface): React.ReactElement => (
          <AnchorButton
            key={item.title}
            title={item.title}
            id={item.id}
            className={styles.itemNavRoot}
          />
        ),
      )}
    </div>
  );
}
