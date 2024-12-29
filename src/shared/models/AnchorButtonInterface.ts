/*
--------------AnchorButtonData Interface--------------
title     - текст содержимого кнопки
id        - id элемента, к которому будет выполняться прокрутка
href      - ссылка, которая будет открываться при нажатии на кнопку
className - имена css стилей к кнопке (необязательный параметр)
*/

export interface BaseAnchorButton {
  title: string;
  className?: string;
}

// интерфейс для кнопки скролла
export interface ScrollAnchorButton extends BaseAnchorButton {
  id: string;
  href?: never;
}

// интерфейс для кнопки-линки
export interface LinkAnchorButton extends BaseAnchorButton {
  href: string;
  id?: never;
}

export type AnchorButtonType = ScrollAnchorButton | LinkAnchorButton;
