/* напиши функцию includes(array, value), которая делает 
тоже самое, что и метод массива массив.includes(значение) - 
проверяет, есть ли в массиве array значение value, возвращая 
true если есть и false в противном случае */

"use strict";

function includes(array, value) {
  for (let arrValue of array) {
    if (arrValue === value) {
      return true;
    }
  }
  return false;
}
