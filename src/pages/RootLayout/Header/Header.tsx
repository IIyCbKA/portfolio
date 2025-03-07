import React from "react";
import styles from "./Header.module.css";
import Logotype from "./Logotype/Logotype";
import Navs from "./Navs/Navs";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import classNames from "classnames";
import Menu from "./Menu/Menu";
import { ScrollStore } from "../../../stores/ScrollStore";
import sharedStyles from "../../../shared/styles.module.css";

export default function Header(): React.ReactElement {
  const scrollY: number = ScrollStore((state) => state.scrollY);
  const [isOpenMenu, setOpenMenu] = React.useState<boolean>(false);
  const isHighlightHeader: boolean = scrollY > 0 || isOpenMenu;

  const headerWrapperClasses = classNames(styles.headerWrapper, {
    [styles.open]: isOpenMenu || scrollY,
  });

  const headerMaskClasses = classNames(styles.headerMask, {
    [styles.headerMaskBoxShadow]: !isOpenMenu,
  });

  const headerContainerClasses = classNames(
    styles.headerContainer,
    sharedStyles.contentWrap,
  );

  React.useEffect(() => {
    if (isOpenMenu) setOpenMenu(false);
  }, [scrollY]);

  return (
    <div className={headerWrapperClasses}>
      <div className={headerMaskClasses} />
      <div className={headerContainerClasses}>
        <Logotype isHighlightedHeader={isHighlightHeader} />
        <Navs isHighlightedHeader={isHighlightHeader} />
        <Menu isOpen={isOpenMenu} />
        <ToggleMenu
          isOpen={isOpenMenu}
          setOpen={setOpenMenu}
          isHighlightedHeader={isHighlightHeader}
        />
      </div>
    </div>
  );
}
