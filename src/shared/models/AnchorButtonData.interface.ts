/*
--------------AnchorButtonData Interface--------------
title     - текст содержимого кнопки
id        - id элемента, к которому будет выполняться прокрутка
className - имена css стилей к кнопке (необязательный параметр)
*/

export interface AnchorButtonDataInterface {
  title: string;
  id: string;
  className?: string;
}
