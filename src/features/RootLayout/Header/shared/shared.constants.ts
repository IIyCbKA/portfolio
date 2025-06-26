import { HREFS, TITLES } from "@/shared/constants/sections";
import { NavItem } from "./shared.types";

export const NAV_ITEMS: NavItem[] = [
  { title: TITLES.ABOUT, href: HREFS.ABOUT },
  { title: TITLES.SKILLS, href: HREFS.SKILLS },
  { title: TITLES.WORKS, href: HREFS.WORKS },
  { title: TITLES.CONTACTS, href: HREFS.CONTACTS },
];
