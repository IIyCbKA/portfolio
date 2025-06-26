import React from "react";

/*
--------------WorkEntity type--------------
title        - work title
description  - work description
tools        - tools in this work
img          - demo icon
className    - styles for work container
*/
export type WorkEntity = {
  title: string;
  description: React.ReactElement;
  tools: string[];
  img: string;
  className?: string;
};
