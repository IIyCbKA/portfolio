import { useEffect } from "react";
import { ScrollStore } from "../stores/ScrollStore";
import throttle from "lodash.throttle";

export default function ListenerScrollY(): null {
  const setScrollY = ScrollStore((state): (y: number) => void => state.setScrollY);

  useEffect(() => {
    const handleScroll = throttle((): void => {
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [setScrollY]);

  return null;
}
