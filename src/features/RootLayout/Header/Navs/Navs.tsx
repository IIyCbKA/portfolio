import React from "react";
import Anchor from "@/components/Anchor/Anchor";
import styles from "./navs.module.css";
import { NAV_ITEMS } from "../shared/shared.constants";
import { NavsProps } from "./Navs.interface";
import classNames from "classnames";
import { NavItem } from "../shared/shared.types";

export default function Navs({
  isHighlightedHeader,
}: NavsProps): React.ReactElement {
  const anchorButtonClasses = classNames(styles.navsItemRoot, {
    [styles.navsItemWithHighlightedHeader]: isHighlightedHeader,
    [styles.navsItemDefault]: !isHighlightedHeader,
  });

  return (
    <div className={styles.navsContainer}>
      {NAV_ITEMS.map(
        (item: NavItem): React.ReactElement => (
          <Anchor
            key={item.title}
            href={item.href}
            className={anchorButtonClasses}
          >
            {item.title}
          </Anchor>
        ),
      )}
    </div>
  );
}
