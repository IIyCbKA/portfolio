import { AnchorButtonDataInterface } from "../../../../shared/models/AnchorButtonData.interface";
import { HREFS, TITLES } from "../../../../shared/constants/sections";

export const NAV_ITEMS: AnchorButtonDataInterface[] = [
  { title: TITLES.ABOUT, href: HREFS.ABOUT },
  { title: TITLES.EXPERIENCE, href: HREFS.EXPERIENCE },
  { title: TITLES.WORKS, href: HREFS.WORKS },
  { title: TITLES.CONTACTS, href: HREFS.CONTACTS },
];
