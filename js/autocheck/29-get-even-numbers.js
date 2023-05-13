/* напиши функцию getEvenNumbers(start, end) которая возвращает 
массив всех чётных чисел от start до end. Чётным считается число, 
которое делится на 2 без остатка (10 % 2 === 0) */

"use strict";

function getEvenNumbers(start, end) {
  let evenNumbersArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbersArray.push(i);
    }
  }
  return evenNumbersArray;
}
