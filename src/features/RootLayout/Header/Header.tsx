import React from "react";
import styles from "./header.module.css";
import Logotype from "./Logotype/Logotype";
import Navs from "./Navs/Navs";
import ToggleMenu from "@/components/ToggleMenu/ToggleMenu";
import classNames from "classnames";
import Menu from "./Menu/Menu";
import { ScrollStore } from "@/stores/ScrollStore";
import sharedStyles from "@/shared/styles.module.css";

export default function Header(): React.ReactElement {
  const scrollY: number = ScrollStore((state): number => state.scrollY);
  const [isOpenMenu, setOpenMenu] = React.useState<boolean>(false);
  const isHighlightHeader: boolean = scrollY > 0 || isOpenMenu;

  const headerWrapperStyles = classNames(styles.headerWrapper, {
    [styles.open]: isOpenMenu || scrollY,
  });

  const headerMaskStyles = classNames(styles.headerMask, {
    [styles.headerMaskBoxShadow]: !isOpenMenu,
  });

  const headerContainerStyles = classNames(
    styles.headerContainer,
    sharedStyles.contentWrap,
  );

  const toggleStyles = classNames({
    [styles.toggleWithHighlighted]: isHighlightHeader,
  });

  const changeMenuOpen: () => void = (): void => {
    setOpenMenu((prevState: boolean): boolean => !prevState);
  };

  React.useEffect((): void => {
    if (isOpenMenu) setOpenMenu(false);
  }, [scrollY]);

  return (
    <div className={headerWrapperStyles}>
      <div className={headerMaskStyles} />
      <div className={headerContainerStyles}>
        <Logotype isHighlightedHeader={isHighlightHeader} />
        <Navs isHighlightedHeader={isHighlightHeader} />
        <Menu isOpen={isOpenMenu} />
        <ToggleMenu
          isOpen={isOpenMenu}
          onClick={changeMenuOpen}
          className={toggleStyles}
        />
      </div>
    </div>
  );
}
