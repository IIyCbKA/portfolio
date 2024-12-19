/*
--------------ScrollSate Interface--------------
scrollY    - текующая позиция скролла по оси Y
setScrollY - функция для обновления значения scrollY
*/

export interface ScrollState {
  scrollY: number;
  setScrollY: (y: number) => void;
}
