import { ScrollAnchorButton } from "../../../../shared/models/AnchorButtonInterface";
import { HREFS, IDs, TITLES } from "../../../../shared/constants/sections";

export const NAV_ITEMS: ScrollAnchorButton[] = [
  { title: TITLES.ABOUT, scrollRef: HREFS.ABOUT, scrollID: IDs.ABOUT },
  { title: TITLES.SKILLS, scrollRef: HREFS.SKILLS, scrollID: IDs.SKILLS },
  { title: TITLES.WORKS, scrollRef: HREFS.WORKS, scrollID: IDs.WORKS },
  { title: TITLES.CONTACTS, scrollRef: HREFS.CONTACTS, scrollID: IDs.CONTACTS },
];
