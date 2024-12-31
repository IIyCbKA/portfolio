/*
--------------AnchorButtonData Interface--------------
title     - текст содержимого кнопки
scrollRef - хранит #id элемента, к которому необходимо прокрутить страницу
scrollID  - хранит id элемента, к которому необходимо прокрутить страницу
linkRef   - ссылка на страницу, которая будет открываться в новой вкладке
className - имена css стилей к кнопке (необязательный параметр)
*/

export interface BaseAnchorButton {
  title: string;
  className?: string;
}

// интерфейс для кнопки скролла
export interface ScrollAnchorButton extends BaseAnchorButton {
  scrollRef: string;
  scrollID: string;
  linkRef?: never;
}

// интерфейс для кнопки-линки
export interface LinkAnchorButton extends BaseAnchorButton {
  linkRef: string;
  scrollRef?: never;
  scrollID?: never;
}

export type AnchorButtonType = ScrollAnchorButton | LinkAnchorButton;
