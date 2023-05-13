/* функция checkFruit(fruit) принимает строку с названием фрукта 
(параметр fruit) и проверяет есть ли такой фрукт в массиве fruits */

"use strict";

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);
}
