import { useEffect } from "react";
import { ScrollStore } from "../stores/ScrollStore";
import throttle from "lodash.throttle";

export default function ListenerScrollY(): null {
  const setScrollY = ScrollStore((state) => state.setScrollY);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [setScrollY]);

  return null;
}
