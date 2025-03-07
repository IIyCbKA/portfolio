/*
--------------ToggleMenuData Interface--------------
isOpen  - флаг, открыто ли меню
setOpen - setState для управления меню Header-а
isHighlightedHeader - флаг, в подсвеченном ли состоянии header
*/

import { Dispatch, SetStateAction } from "react";

export interface ToggleMenuData {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isHighlightedHeader: boolean;
}
