import React from "react";
import { AnchorProps } from "./Anchor.interface";
import styles from "./anchor.module.css";
import classNames from "classnames";

function AnchorInner(
  { href, className, ...other }: AnchorProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
): React.ReactElement {
  const isHashLink = href.startsWith("#");

  const anchorStyles = classNames(styles.anchorRoot, className);

  const onClick = (event: React.MouseEvent): void => {
    if (!isHashLink) return;

    event.preventDefault();
    const id = href.slice(1);
    const elem: HTMLElement | null = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      target={!isHashLink ? "_blank" : undefined}
      rel={!isHashLink ? "noopener noreferrer" : undefined}
      className={anchorStyles}
      {...other}
    />
  );
}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(AnchorInner);

export default Anchor;
