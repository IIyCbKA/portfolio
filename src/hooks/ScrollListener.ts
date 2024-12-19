import { useEffect } from "react";
import { ScrollStore } from "../stores/ScrollStore";

export default function ListenerScrollY(): null {
  const setScrollY = ScrollStore((state) => state.setScrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return null;
}
