import React from "react";
import styles from "./Header.module.css";
import Logotype from "./Logotype/Logotype";
import Navs from "./Navs/Navs";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import classNames from "classnames";
import { CONTENT_WRAP } from "../../../shared/constants/classnames";
import Menu from "./Menu/Menu";
import { ScrollStore } from "../../../stores/ScrollStore";

export default function Header(): React.ReactElement {
  const scrollY = ScrollStore((state) => state.scrollY);
  const [isOpenMenu, setOpenMenu] = React.useState<boolean>(false);

  const headerWrapperClasses = classNames(styles.headerWrapper, {
    [styles.open]: isOpenMenu || scrollY,
  });

  const headerMaskClasses = classNames(styles.headerMask, {
    [styles.headerMaskBoxShadow]: !isOpenMenu,
  });

  const headerContainerClasses = classNames(
    styles.headerContainer,
    CONTENT_WRAP,
  );

  React.useEffect(() => {
    if (isOpenMenu) setOpenMenu(false);
  }, [scrollY]);

  return (
    <div className={headerWrapperClasses}>
      <div className={headerMaskClasses} />
      <div className={headerContainerClasses}>
        <Logotype />
        <Navs />
        <Menu isOpen={isOpenMenu} />
        <ToggleMenu isOpen={isOpenMenu} setOpen={setOpenMenu} />
      </div>
    </div>
  );
}
