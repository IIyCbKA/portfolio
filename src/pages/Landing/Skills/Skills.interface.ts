/*
--------------Skill Interface--------------
url         - ссылка на изображение
description - подпись к изображению
*/

import { DESCRIPTIONS, URLS } from "./Skills.data";

export interface Skill {
  url: URLS;
  description: DESCRIPTIONS;
}
