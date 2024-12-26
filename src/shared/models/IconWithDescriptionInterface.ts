/*
--------------IconWithDescription Interface--------------
icon          - содержимое для src тега <img>
description   - подпись к иконке
iconClassName - имена css стилей к картинке (необязательный параметр)
className     - имена css стилей к контейнеру (необязательный параметр)
*/

export interface IconWithDescriptionInterface {
  icon: string;
  description: string;
  iconClassName?: string;
  className?: string;
}
