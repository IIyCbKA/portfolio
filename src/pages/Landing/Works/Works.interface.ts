/*
--------------Work Interface--------------
title       - Название проекта
description - коротко инфа о проекте
tools       - используемые технологии
img         - изображение работы
className   - стили к основному контейнеру (необязательный параметр)
*/

import { TITLES } from "./Works.data";
import React from "react";

export interface Work {
  title: TITLES;
  description: React.ReactElement;
  tools: string[];
  img: string;
  className?: string;
}
