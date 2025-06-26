/*
--------------ToggleMenuProps Interface--------------
isOpen  - flag, menu is open
*/

import { HTMLAttributes } from "react";

export interface ToggleMenuProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
