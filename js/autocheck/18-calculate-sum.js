/* напиши функцию calculateTotal(number), которая принимает 
целое число (параметр number) и возвращает сумму всех целых 
чисел от единицы и до этого числа */

"use strict";

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}
