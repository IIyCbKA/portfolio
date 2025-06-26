/*
--------------List Interface--------------
elements    - data list
renderItem  - func, that returned item in ReactNode
getKey      - func for get key
*/

import React, { HTMLAttributes } from "react";

export interface ListData<T = string> extends HTMLAttributes<HTMLUListElement> {
  elements: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey?: (item: T, index: number) => React.Key;
}
