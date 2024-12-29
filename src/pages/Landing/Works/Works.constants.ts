import { Work } from "./Works.interface";
import { CLASS_NAMES, DESCRIPTION, IMGS, TITLES, TOOLS } from "./Works.data";

export const TOOLS_TITLE = "Development tools";

export const WORKS: Work[] = [
  {
    title: TITLES.FIRST_WORK,
    description: DESCRIPTION.FIRST_WORK,
    tools: TOOLS.FIRST_WORK,
    img: IMGS.FIRST_WORK,
    className: CLASS_NAMES.FIRST_WORK,
  },
];
