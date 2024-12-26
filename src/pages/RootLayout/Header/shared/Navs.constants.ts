import { AnchorButtonDataInterface } from "../../../../shared/models/AnchorButtonData.interface";
import { IDs, TITLES } from "../../../../shared/constants/sections";

export const NAV_ITEMS: AnchorButtonDataInterface[] = [
  { title: TITLES.ABOUT, id: IDs.ABOUT },
  { title: TITLES.SKILLS, id: IDs.SKILLS },
  { title: TITLES.WORKS, id: IDs.WORKS },
  { title: TITLES.CONTACTS, id: IDs.CONTACTS },
];
