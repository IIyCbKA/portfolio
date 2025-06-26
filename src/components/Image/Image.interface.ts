/*
--------------ImageProps Interface--------------
description   - image description
*/

import { HTMLAttributes } from "react";

export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
}
