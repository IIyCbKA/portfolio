/*
--------------Anchor Interface--------------
href  - required field
*/

import { AnchorHTMLAttributes } from "react";

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
