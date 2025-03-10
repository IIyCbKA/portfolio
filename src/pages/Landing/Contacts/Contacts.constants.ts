import { LinkAnchorButton } from "../../../shared/models/AnchorButtonInterface";
import { CONTACTS_HREFS, CONTACTS_TITLES } from "./Contacts.data";

export const CONTACTS_TITLE = "Need a Web Developer? Let's build something!";

export const CONTACTS_ITEMS: LinkAnchorButton[] = [
  { title: CONTACTS_TITLES.GITHUB, linkRef: CONTACTS_HREFS.GITHUB },
  { title: CONTACTS_TITLES.TELEGRAM, linkRef: CONTACTS_HREFS.TELEGRAM },
];
